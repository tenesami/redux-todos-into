import React, { Component } from 'react'
import Item from './Item'

 class Grandchild extends Component {
    render() {

           const itemList = this.props.todos.map(item => {
            //  makes an item for each one 
                return <Item key={item.id} id={item.id} title={item.title} />
            })

        return (
            <div>
                {itemList}
            </div>
        )
    }
}
export default Grandchild;