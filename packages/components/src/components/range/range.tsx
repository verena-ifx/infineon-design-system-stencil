import { Component, h, Prop, Event, EventEmitter, State, Watch } from '@stencil/core';

@Component({
  tag: 'ifx-range',
  styleUrl: 'range.scss',
  shadow: true,
})
export class IfxRange {
  @Prop() min: number = 0;
  @Prop() max: number = 100;
  @Prop() value: number = 0;
  @Prop() disabled: boolean = false;
  @Prop() showPercentage: boolean = false;
  @Prop() leftIcon: string;
  @Prop() rightIcon: string;
  @Prop() leftText: string;
  @Prop() rightText: string;
  @State() internalValue: number = 0;
  @Event() ifxChanged: EventEmitter<number>;

  private inputRef: HTMLInputElement;

  @Watch('value')
  valueChanged(newValue: number) {
    this.internalValue = newValue;
    this.updateValuePercent();
  }

  handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.internalValue = parseInt(target.value);
    this.ifxChanged.emit(this.internalValue);
    this.updateValuePercent();
  }

  updateValuePercent() {
    if (this.inputRef) {
      const percent = ((this.internalValue - this.min) / (this.max - this.min)) * 100;
      this.inputRef.style.setProperty('--value-percent', `${percent}%`);
    }
  }

  componentWillLoad() {
    this.internalValue = this.value;
  }

  componentDidLoad() {
    this.updateValuePercent();
  }


  render() {
    return (
      <div class="ifx-range">
        {this.leftText && (
          <span class={`left-text`}>
            {this.leftText}
          </span>
        )}
        {this.leftIcon && (
          <ifx-icon icon={this.leftIcon} class={`left-icon${this.disabled ? ' disabled' : ''}`} />
        )}

        <input
          type="range"
          min={this.min}
          max={this.max}
          disabled={this.disabled}
          value={this.internalValue}
          ref={(el) => (this.inputRef = el as HTMLInputElement)}
          onInput={(event) => this.handleInputChange(event)}
        />
        {this.rightIcon && (
          <ifx-icon icon={this.rightIcon} class={`right-icon${this.disabled ? ' disabled' : ''}`} />
        )}
        {this.rightText && (
          <span class={`right-text${this.disabled ? ' disabled' : ''}`}>
            {this.rightText}
          </span>
        )}

        {this.showPercentage && (
          <span
            class={`percentage-display${this.disabled ? ' disabled' : ''}`}
          >
            {this.value}%
          </span>
        )}
      </div>
    );
  }
}
