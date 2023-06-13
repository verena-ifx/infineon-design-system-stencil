// dropdown-item.tsx
import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: 'ifx-dropdown-item',
  styleUrl: 'dropdown-item.scss',
  shadow: true
})

export class DropdownItem {
  @Prop() icon: string;
  @Prop() href: string = ""
  @Prop() target: string = "_self"

  render() {
    return (
      <a href={this.href || "#"} target={this.target} class="dropdown-item">
        {this.icon && <ifx-icon class="icon" icon={this.icon}></ifx-icon>}
        {this.href}
        <slot />
      </a>
    )
  }
}