import React, { Component } from 'react';
import ResourceItem from './resource-item';

export interface ResourceItemData {
  name: string,
  // icon: string,
  amount: number,
  production: number,
}

export interface ResourcesTabState {
  resources: { [key: string]: ResourceItemData }
}

export default class ResourcesTab extends Component<{}, ResourcesTabState> {
  private itemsRenderer?: JSX.Element[];

  constructor(props: {}) {
    super(props);

    this.state = {
      resources: {
        "M€": { name: "M€", amount: 0, production: 0 },
        "Energy": { name: "Energy", amount: 0, production: 0 },
        "Heat": { name: "Heat", amount: 0, production: 0 },
      }
    }
  }

  onAmountModified(name: string, quantity: number) {
    let resources = { ... this.state.resources };
    resources[name].amount += quantity;
    this.setState({ resources });
  }

  onProductionModified(name: string, quantity: number) {
    let resources = { ... this.state.resources };
    resources[name].production += quantity;
    this.setState({ resources });
  }

  onTriggerProductionPhase() {
    console.log(`Production phase triggered`);

    
    let resources = { ... this.state.resources };
    
    // Energy becomes heat
    resources["Heat"].amount += resources["Energy"].amount;
    resources["Energy"].amount = 0;

    // All resources are increased by their production amount
    Object.keys(resources).forEach(key => {
      resources[key].amount += resources[key].production;
    })

    this.setState({ resources });
    
  }

  render() {
    // if (!this.itemsRenderer) {
      let items = Object.keys(this.state.resources)
        .map(k => this.state.resources[k])
        .map(item => <ResourceItem 
          {...item} 
          key={"res_" + item.name}
          onAmountModified={(name, quantity) => this.onAmountModified(name, quantity)}
          onProductionModified={(name, quantity) => this.onProductionModified(name, quantity)}/>)
    // }   

    return <div>
      { items }

      <input type="button" onClick={e => this.onTriggerProductionPhase()} value="Start production phase" />
    </div>;
  }
}
