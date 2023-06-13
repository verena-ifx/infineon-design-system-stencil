//dropdown.tsx
import { Component, Prop, h, Element, Listen, Method, Watch, State, EventEmitter, Event } from "@stencil/core";
import { createPopper } from '@popperjs/core';

import { IOpenable } from './IOpenable';

@Component({
  tag: 'ifx-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true
})

export class Dropdown {
  // isOpen prop
  @Prop() defaultOpen: boolean = false;
  // internal state for isOpen prop
  @State() internalIsOpen: boolean = this.defaultOpen;

  // Custom events for opening and closing dropdown
  @Event() open: EventEmitter;
  @Event() close: EventEmitter;

  // determine if dropdown is disabled
  @Prop() disabled: boolean;

  @Prop() closeOnOutsideClick: boolean = true;
  @Prop() closeOnMenuClick: boolean = true;

  // Reference to host element
  @Element() el;
  // Dropdown trigger and menu
  @State() trigger: HTMLElement;
  @State() menu: HTMLElement
  // Popper instance for positioning
  popperInstance: any;

  componentDidLoad() {
    this.updateSlotContent();
  }

  @Watch('defaultOpen')
  watchHandlerIsOpen(newValue: boolean) {
    this.internalIsOpen = newValue;
  }

  @Watch('disabled')
  watchHandlerDisabled(newValue: boolean) {
    if (this.trigger) {
      (this.trigger as undefined as HTMLIfxDropdownTriggerButtonElement).disabled = newValue;
    }
  }


  @Listen('slotchange')
  watchHandlerSlot() {
    this.updateSlotContent();
  }

  // handling assignment of trigger and menu
  updateSlotContent() {
    // Get dropdown trigger
    this.trigger = this.el.querySelector('ifx-dropdown-trigger-button');
    if (this.trigger) {
      (this.trigger as undefined as HTMLIfxDropdownTriggerButtonElement).disabled = this.disabled;
    }
    // Remove menu if exists from body
    if (this.menu) {
      this.menu.remove();
    }
    // Get new menu and add to body
    this.menu = this.el.querySelector('ifx-dropdown-menu');
    // event handler for closing dropdown on menu click
    this.menu.removeEventListener('click', this.menuClickHandler.bind(this));
    this.menu.addEventListener('click', this.menuClickHandler.bind(this));
    document.body.append(this.menu);
  }

  menuClickHandler() {
    console.log('menu click', this.closeOnMenuClick)
    if (this.closeOnMenuClick) {
      this.closeDropdown();
    }
  }

  disconnectedCallback() {
    // Destroy popper instance if exists
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
    // Remove menu if exists
    if (this.menu) {
      this.menu.remove();
    }
  }

  @Method()
  async isOpen() {
    return this.internalIsOpen;
  }

  @Method()
  async closeDropdown() {
    if (this.internalIsOpen) {
      this.internalIsOpen = false;
      // sets isOpen prop on trigger and menu
      (this.trigger as unknown as IOpenable).isOpen = false;
      (this.menu as unknown as IOpenable).isOpen = false;
      // Emit close event
      this.close.emit();
    }
    // Destroy popper instance if exists
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  }

  @Method()
  async openDropdown() {
    if (!this.internalIsOpen && !this.disabled) {
      this.internalIsOpen = true;
      // sets isOpen prop on trigger and menu
      (this.trigger as unknown as IOpenable).isOpen = true;
      (this.menu as unknown as IOpenable).isOpen = true;
      // Create popper instance for positioning
      this.popperInstance = createPopper(
        this.trigger,
        this.menu,
        { placement: 'bottom-start' });

      this.open.emit();
    }
  }

  @Listen('click', { capture: true })
  handleClick(ev: Event) {
    // Open dropdown if trigger is clicked
    console.log(ev.target, this.menu)
    if (ev.target === this.trigger) {
      if (!this.internalIsOpen) {
        this.openDropdown();
      } else {
        this.closeDropdown();
      }
    }
  }

  @Listen('mousedown', { target: 'document' })
  handleOutsideClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // Close dropdown if outside click
    if (this.closeOnOutsideClick && !this.el.contains(target) && !this.menu.contains(target)) {
      this.closeDropdown();
    }
  }

  render() {
    return (
      <div class='dropdown'>
        <slot />
      </div>
    )
  }
}