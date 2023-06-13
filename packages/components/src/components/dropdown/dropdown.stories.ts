
export default {
  title: 'Components/Dropdown',
  args: {
    label: "Dropdown",
    size: "m",
    disabled: false,
    variant: "solid",
    color: "primary",
    icon: "c-check-16"
  },
  argTypes: {
    variant: {
      options: ['solid', 'outline', 'outline-text'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning'],
      control: { type: 'radio' },
    },
    size: {
      options: ['s', 'm'],
      control: { type: 'radio' },
    }
  },
}

const DefaultTemplate = (args) =>
  `<ifx-dropdown>
    <ifx-dropdown-trigger-button>${args.label}</ifx-dropdown-button>
    <ifx-dropdown-menu>
      <ifx-dropdown-item target="_blank" href="https://www.google.de">Link Item</ifx-dropdown-item>
      <ifx-dropdown-item onClick="console.log('clicked Item#2')">Console log item</ifx-dropdown-item>
      <ifx-dropdown-item icon="c-check-16">Item with Icon</ifx-dropdown-item>
      <ifx-dropdown-item>Boring Item</ifx-dropdown-item>
    </ifx-dropdown-menu>
  </ifx-dropdown>`;

export const Default = DefaultTemplate.bind({});
Default.argTypes = {
  icon: {
    table: {
      disable: true
    }
  }
}
