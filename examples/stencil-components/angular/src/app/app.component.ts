import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  progressValue = 10;
  checkboxChecked = false;
  checkboxError = false;
  checkboxDisabled = false;
  switchChecked = false;
  switchDisabled = false;
  radioError = false;
  radioDisabled = false;
  radioChecked = false;
  textFieldValue = '';
  searchFieldValue = '';
  searchBarValue = '';
  radioButtonValue = false;
  numberIndicator = 1;

  updateProgressOnClick() {
    this.progressValue < 100 ? this.progressValue += 10 : this.progressValue = 10;
  }

  handleRadioButtonChange(event: CustomEvent) {
    console.log('Radio button value: ', event.detail);
    this.radioButtonValue = event.detail;

  }

  handleCheckboxChange(event: CustomEvent) {
    console.log('Checkbox value: ', event.detail);
  }

  handleSubmit() {
    console.log('Form submitted. Checkbox value:', this.checkboxChecked);
  }
  toggleCheckboxDisabled() {
    this.checkboxDisabled = !this.checkboxDisabled;
  }
  toggleCheckboxError() {
    this.checkboxError = !this.checkboxError;
  }
  toggleCheckboxValue() {
    console.log("checkbox value change")
    this.checkboxChecked = !this.checkboxChecked;
  }

  toggleSwitchValue() {
    console.log("switch value change")
    this.switchChecked = !this.switchChecked;
  }
  toggleSwitchDisabled() {
    this.switchDisabled = !this.switchDisabled;
  }
  toggleRadioBtnDisabled() {
    this.radioDisabled = !this.radioDisabled;
  }
  toggleRadioBtnError() {
    this.radioError = !this.radioError;
  }
  toggleRadioBtnValue() {
    console.log("checkbox value change")
    this.radioChecked = !this.radioChecked;
  }


  handleTextInput(event: CustomEvent) {
    console.log("textInput value change")
    this.textFieldValue = event.detail;

  }


  handleSearchField(event: CustomEvent) {
    console.log("searchField value change: ", event.detail)
    this.searchFieldValue = event.detail;

  }

  handleSearchBar(event: CustomEvent) {
    console.log("searchBar value change: ", event.detail)
    this.searchBarValue = event.detail;

  }

  increaseNumber() {
    this.numberIndicator = this.numberIndicator + 1;

  }

  decreaseNumber() {
    this.numberIndicator = this.numberIndicator - 1;
  }

}
