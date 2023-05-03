import { Component, h, Element } from "@stencil/core";
import { icons } from '@infineon/infineon-icons';

@Component({
  tag: 'ifx-icons-preview',
  styleUrl: '../../index.scss',
  shadow: true
})

export class IconsPreview {

  @Element() el;


  componentWillLoad() { 
    for(let icon in icons) { 
      console.log('icon', icon)
    }
  }


  render() {
    return (
    <div class="preview__container">

    </div>
    )
  }
}