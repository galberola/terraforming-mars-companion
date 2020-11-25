import React, {Component, useRef} from 'react';

export interface AttributeProps {
  amount: number,
  onAddQuantity: (amount: number) => void,
}

enum InputAction {
  ADD,
  SUB,
}

export default class Attribute extends Component<AttributeProps> {
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
    return <div>
      # {this.props.amount}<br />
      <input type="button" onClick={e => this.onClick(InputAction.SUB)} value="-" />
      <input type="number" ref={i => this.numberInputRef = i} />
      <input type="button" onClick={e => this.onClick(InputAction.ADD)} value="+" />
    </div>
  }
}
