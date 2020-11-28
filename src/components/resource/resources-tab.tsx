import React, { Component } from 'react';
import ResourceItem from './resource-item';

export interface ResourceItemData {
  name: string,
  icon: string,
  amount: number,
  production: number,
}

export interface ResourcesTabState {
  resources: { [key: string]: ResourceItemData },
  generation: number,
}

export default class ResourcesTab extends Component<{}, ResourcesTabState> {
  private itemsRenderer?: JSX.Element[];

  constructor(props: {}) {
    super(props);

    this.state = {
      generation: 1,
      resources: {
        "TR": { name: "TR", amount: 20, production: 0, icon: this.getImageUrl("tr") },
        "M€": { name: "M€", amount: 0, production: 0, icon: this.getImageUrl("megacredit") },
        "Steel": { name: "Steel", amount: 0, production: 0, icon: this.getImageUrl("steel") },
        "Titanium": { name: "Titanium", amount: 0, production: 0, icon: this.getImageUrl("titanium") },
        "Plant": { name: "Plant", amount: 0, production: 0, icon: this.getImageUrl("plant") },
        "Energy": { name: "Energy", amount: 0, production: 0, icon: this.getImageUrl("power") },
        "Heat": { name: "Heat", amount: 0, production: 0, icon: this.getImageUrl("heat") },
      }
    }
  }

  private getImageUrl(resource: string) : string {
    return `${process.env.PUBLIC_URL}/img/resources/${resource}.png`;
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

    // MegaCredits are also increased by the TR (Terraforming Rating)
    resources["M€"].amount += resources["TR"].amount;

    this.setState({
      generation: this.state.generation + 1,
      resources
    });
  }

  render() {
    const itemStyle = "col-6 col-sm-6 col-md-4";

    return <div className="resource-tab container">
      <div className="row no-gutters">
      <ResourceItem
          className={itemStyle}
          {...this.state.resources["TR"]}
          hideProduction={true}
          onAmountModified={(name, quantity) => this.onAmountModified(name, quantity)}
          onProductionModified={() => {}} />
      </div>
      <div className="row no-gutters">
        <ResourceItem
          className={itemStyle}
          {...this.state.resources["M€"]}
          onAmountModified={(name, quantity) => this.onAmountModified(name, quantity)}
          onProductionModified={(name, quantity) => this.onProductionModified(name, quantity)} />

        <ResourceItem
          className={itemStyle}
          {...this.state.resources["Steel"]}
          onAmountModified={(name, quantity) => this.onAmountModified(name, quantity)}
          onProductionModified={(name, quantity) => this.onProductionModified(name, quantity)} />

        <ResourceItem
          className={itemStyle}
          {...this.state.resources["Titanium"]}
          onAmountModified={(name, quantity) => this.onAmountModified(name, quantity)}
          onProductionModified={(name, quantity) => this.onProductionModified(name, quantity)} />

      {/* </div>
      <div className="row"> */}
        <ResourceItem
          className={itemStyle}
          {...this.state.resources["Plant"]}
          onAmountModified={(name, quantity) => this.onAmountModified(name, quantity)}
          onProductionModified={(name, quantity) => this.onProductionModified(name, quantity)} />

        <ResourceItem
          className={itemStyle}
          {...this.state.resources["Energy"]}
          onAmountModified={(name, quantity) => this.onAmountModified(name, quantity)}
          onProductionModified={(name, quantity) => this.onProductionModified(name, quantity)} />

        <ResourceItem
          className={itemStyle}
          {...this.state.resources["Heat"]}
          onAmountModified={(name, quantity) => this.onAmountModified(name, quantity)}
          onProductionModified={(name, quantity) => this.onProductionModified(name, quantity)} />
      </div>

      <p className="generation">Generation: {this.state.generation}</p>
      <input type="button" className="btn btn-primary production-btn" onClick={e => this.onTriggerProductionPhase()} value="Production phase" />
    </div>;
  }
}
