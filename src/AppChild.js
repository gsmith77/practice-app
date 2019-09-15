import React from 'react'

export default class AppChild extends React.Component{

    constructor(){
        super()
        this.state = {
            itemsArray: [],
            showTable: 7
        }
    }

    handleClick = (number, items) => {
        this.setState({
            showTable: number,
            itemsArray : items
        })
    }

    render(){
        const data = this.props.data
        return(
            <div>
                {data.map(table => {                  
                    let quantityTotal = 0
                    
                    return (
                        table.tableNumber === this.state.showTable ?
                        <div key={table.tableNumber} onClick={() => this.handleClick(table.tableNumber, table.items)}>
                            {table.tableNumber} - 
                            {table.items.map(item => {
                                return quantityTotal += item.quantity
                            })} items 
                            {this.state.itemsArray.map(item => {
                                return(
                                    <div key={item.itemName}>
                                    Item Name:<h4>{item.itemName}</h4> - Quantity: <p>{item.quantity}</p>
                                    </div>
                                )
                            })} 
                        </div> : null
                        )
                    })
                }
            </div>
        )
    }
}