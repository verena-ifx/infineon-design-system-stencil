import { action } from "@storybook/addon-actions";

//use string instead of json format here to avoid ugly formatting in the storybook code snippet
let options = "[{'value': 'a','label': 'option a','selected': 'false'},{'value': 'b','label': 'option b','selected': 'false'},{'value': 'c','label': 'option c','selected': 'false'}]"
// let jsonOptions = JSON.stringify(options);

export default {
  title: 'Components/Single Select',
  tags: ['autodocs'],
  args: {
    size: "medium (40px)",
    searchEnabled: true,
    searchPlaceholderValue: 'Search...',
    placeholder: true,
    placeholderValue: 'Placeholder',
    error: false,
    errorMessage: 'Some error',
    label: '',
    disabled: false,
    // type: 'single', //for later implementation
    options: "",
  },

  argTypes: {
    type: { //for later implementation
      // control: { type: 'radio' },
      // options: ['single', 'text']
      control: false,
    },
    size: {
      options: ['small (36px)', 'medium (40px)'],
      control: { type: 'radio' },
    },
    error: {
      options: [true, false],
      control: { type: 'radio' },
    },
    errorMessage: { control: 'text' },
    label: { control: 'text' },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    searchEnabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    searchPlaceholderValue: { control: { type: 'text' } },
    onChange: { action: 'change' },
    options: {
      description: 'Options should be passed as JSON array, but are passed as string here for a beautified display in the code snippet',

    }
  },
};

const DefaultTemplate = ({ size, type, value, disabled, error, errorMessage, label, placeholder, placeholderValue, searchEnabled, searchPlaceholderValue, options }) => {
  const element = document.createElement('ifx-select');
  element.setAttribute('type', type);
  element.setAttribute('value', value);
  element.setAttribute('ifx-size', size);
  element.setAttribute('placeholder', placeholder);
  element.setAttribute('search-enabled', searchEnabled)
  element.setAttribute('search-placeholder-value', searchPlaceholderValue)
  element.setAttribute('ifx-disabled', disabled);
  element.setAttribute('ifx-error', error);
  element.setAttribute('ifx-error-message', errorMessage);
  element.setAttribute('ifx-label', label);
  element.setAttribute('ifx-placeholder-value', placeholderValue);
  element.setAttribute('ifx-options', options);
  element.addEventListener('ifxSelect', action('ifxSelect'));

  return element;
}


export const Single = DefaultTemplate.bind({});
Single.args = {
  type: 'single',
  options: options,


};

// export const Text = DefaultTemplate.bind({});
// Text.args = {
//   type: 'text',
//   name: 'text',
//   value: 'Placeholder',
//   allowHTML: true,
//   delimiter: ',',
//   editItems: true,
//   maxItemCount: 5,
// };

// export const Text = DefaultTemplate.bind({});
// Text.args = {
//   type: 'multiple',
//   name: 'multiple',
//   choices: 'Choice 1, Choice 2, Choice 3',
// };



// export const SingleWithIcon = DefaultTemplate.bind({});
// SingleWithIcon.args = {
//   type: 'single',
//   choices: "Choice 1, Choice 2 <ifx-icon icon='check16'></ifx-icon>, Choice 3 <ifx-icon icon='check16'></ifx-icon>",
// };


// export const MultiselectCombobox = DefaultTemplate.bind({});
// MultiselectCombobox.args = {
//   type: 'multiple',
//   // removeItemButton: true,
// };






