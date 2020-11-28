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

    if (this.props.isProduction === true) {
      return <div className={className}>
        <div className="row no-gutters">
        <p className="col-1 col-sm-1"></p>
        <input type="button" className="btn btn-danger col-2 col-sm-2" onClick={e => this.onClick(InputAction.SUB)} value="-" />
        <p className="col-1 col-sm-1"></p>
        <p className="value col-4 col-sm-4 align-self-center">{this.props.amount}</p>
        <p className="col-1 col-sm-1"></p>
        <input type="button" className="btn btn-success col-2 col-sm-2" onClick={e => this.onClick(InputAction.ADD)} value="+" />
        <p className="col-1 col-sm-1"></p>
      </div>
      </div>
    }

    return <div className={className}>
      <p className="value">{this.props.amount}</p>
      <div className="row no-gutters">
        <p className="col-1 col-sm-1"></p>
        <input type="button" className="btn btn-danger col-2 col-sm-2" onClick={e => this.onClick(InputAction.SUB)} value="-" />
        <p className="col-1 col-sm-1"></p>
        <input type="number" className="col-4 col-sm-4 align-self-center" ref={i => this.numberInputRef = i} />
        <p className="col-1 col-sm-1"></p>
        <input type="button" className="btn btn-success col-2 col-sm-2" onClick={e => this.onClick(InputAction.ADD)} value="+" />
        <p className="col-1 col-sm-1"></p>
      </div>
    </div>
  }
}
