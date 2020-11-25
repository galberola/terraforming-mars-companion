import React, {Component, useRef} from 'react';

export interface ResourceInputProps {
  amount: number,
  isProduction?: boolean,
  onAddQuantity: (amount: number) => void,
}

enum InputAction {
  ADD,
  SUB,
}

export default class ResourceInput extends Component<ResourceInputProps> {
  private numberInputRef: HTMLInputElement | null = null;

  onClick(action: InputAction) {
    let num: number = 1;

    if (this.numberInputRef) {
      let tmpNum = parseInt(this.numberInputRef.value);
      this.numberInputRef.value = "";

      if (isNaN(tmpNum) == false) {
        num = tmpNum;
      }
    }

    if (action == InputAction.SUB) {
      num = -num;
    }

    console.log(`Attribute Qty [${num}]`)

    this.props.onAddQuantity(num);
  }

  render() {
    let className = "resource-input";
    if (this.props.isProduction) {
      className += " resource-input-production";
    }

    return <div className={className}>
      <p className="value">{this.props.amount}</p>
      <input type="button" className="btn btn-danger" onClick={e => this.onClick(InputAction.SUB)} value="-" />
      <input type="number" ref={i => this.numberInputRef = i} />
      <input type="button" className="btn btn-success" onClick={e => this.onClick(InputAction.ADD)} value="+" />
    </div>
  }
}
