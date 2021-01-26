import React, { Component } from 'react';
import Child from './Child'
// import Item from './Item';

 class List extends Component {
    render() {
        // list takes todo as the props and maps over it 
       
        // const itemList = this.props.todos.map(item => {
        //     //  makes an item for each one 
        //         return <Item key={item.id} id={item.id} title={item.title} />
        //     })

        return (            
            <div>
                {/* render all of the items */}
               {/* {itemList}  */}
               <Child todos={this.props.todos}/>
            </div>
        )
    
    }
}
export default List;
