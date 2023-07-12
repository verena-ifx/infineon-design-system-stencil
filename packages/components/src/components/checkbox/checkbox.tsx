import { Component, h, Prop, Element, State, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'ifx-checkbox',
  styleUrl: './checkbox.scss',
  shadow: true
})

export class Checkbox {
  private inputElement: HTMLInputElement;
  @Element() el;
  @Prop() disabled: boolean = false;
  @Prop() value: boolean = false;
  @Prop() error: boolean = false;
  @Prop() name: string = '';
  @State() internalValue: boolean;
  @State() hasSlot: boolean;
  @Event({ bubbles: true, composed: true }) ifxChange: EventEmitter;
  @Event() internallyUncheckAll: EventEmitter;

  @Prop() checked: boolean = false;
  
  handleCheckbox(el) {
    //console.log('here', el.target)
    this.internallyUncheckAll.emit(el.target)
    if (!this.disabled) {
      this.internalValue = !this.internalValue;
      this.inputElement.checked = this.internalValue;
      this.ifxChange.emit(this.internalValue);
    }
  }

  @Watch('value')
  valueChanged(newValue: boolean, oldValue: boolean) {
    console.log('value changed')
    if (newValue !== oldValue) {
      this.internalValue = newValue;
      this.inputElement.checked = this.internalValue; // update the checkbox's checked property
      //console.log(' this.inputElement.checked',  this.inputElement.checked)
    }
  }

  // handleKeydown(event) {
  //   // Keycode 32 corresponds to the Space key, 13 corresponds to the Enter key
  //   if (event.keyCode === 32 || event.keyCode === 13) {
  //     this.handleCheckbox();
  //     event.preventDefault();  // prevent the default action when space or enter is pressed
  //   }
  // }

  componentWillLoad() { 
    const slot = this.el.innerHTML;
    if(slot) { 
      this.hasSlot = true;
    } else this.hasSlot = false;
  }


  render() {
    return (
      <div class="checkbox__container">
        <input type="checkbox" ref={(el) => (this.inputElement = el)} hidden />
        <div 
        tabindex="0"
        onClick={this.handleCheckbox.bind(this)}
        class={`checkbox__wrapper 
        ${this.internalValue ? 'checked' : ""} 
        ${this.disabled ? 'disabled' : ""}
        ${this.error ? 'error' : ""}`}>
          {this.internalValue && <ifx-icon icon="check-12"></ifx-icon>}
        </div>
      {this.hasSlot &&
        <div class={`label ${this.error ? 'error' : ""} ${this.disabled ? 'disabled' : ""} `} onClick={this.handleCheckbox.bind(this)}>
        <slot />
      </div>}
      </div>
    );
  }
}