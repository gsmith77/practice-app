import React from 'react';
import './App.css';
import AppChild from './AppChild';

function App() {
  return(
    <div>
      <AppChild data={[{'tableNumber': 10, 'items': [{'itemName': 'coffee','quantity': 2}, {'itemName': 'donuts','quantity': 6}]}, {'tableNumber': 7,'items': [{'itemName': 'bagel','quantity': 1}]}]} />
    </div>
  )
}

export default App;

/* 
Part I: Write a component that takes in a prop that is an array of objects, output a table that would show a "table number" in one column and the "number of orders" in a second column

Part II: Make it so that when I click on a row in the table, rows are added underneath the clicked table row that shows each item and the item quantity

Part III: Update this to grab this table information from a fetchOrders() function that returns a Promise with the orders

fetchOrders().then(orders => this.setState({orders: orders}));

// Part IV: Update this component to dynamically receive updates via a web socket connection, you can subscribe to orderSocket(callback), the callback will be called with a table and any additional orders (not the total orders, only additions) */
