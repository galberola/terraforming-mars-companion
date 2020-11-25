import React, { Component } from 'react';
import Attribute from './attribute';

export interface ResourceItemProps {
  name: string,
  amount: number,
  production: number,
  onAmountModified: (name: string, quantity: number) => void,
  onProductionModified: (name: string, quantity: number) => void,
}

export default function RenderItem(props: ResourceItemProps) {
  return <div>
      {props.name}
      <Attribute amount={props.amount} onAddQuantity={quantity => props.onAmountModified(props.name, quantity)} />
      <Attribute amount={props.production} onAddQuantity={quantity => props.onProductionModified(props.name, quantity)} />
    </div>;
}
