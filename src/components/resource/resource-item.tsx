import React, { Component } from 'react';
import ResourceInput from './resource-input';

export interface ResourceItemProps {
  name: string,
  icon: string,
  amount: number,
  production: number,
  onAmountModified: (name: string, quantity: number) => void,
  onProductionModified: (name: string, quantity: number) => void,
  className?: string,
  hideProduction?: boolean,
}

export default function RenderItem(props: ResourceItemProps) {
  let productionInput = props.hideProduction
    ? undefined
    : <ResourceInput
    amount={props.production}
    isProduction={true}
    onAddQuantity={quantity => props.onProductionModified(props.name, quantity)} />;

  return <div className={"resource-item " + props.className}>
      <img alt={props.name} src={props.icon} width="32" height="32" />
      <ResourceInput amount={props.amount} onAddQuantity={quantity => props.onAmountModified(props.name, quantity)} />
      { productionInput }
    </div>;
}
