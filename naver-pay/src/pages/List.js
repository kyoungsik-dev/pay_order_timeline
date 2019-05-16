import React, {Component} from 'react';
import API from '../API';

import ItemCard from '../components/ItemCard';
import './List.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    };
  }
  
  async componentDidMount() {
    const res = await API.request('order_list', 'test');
    this.setState({listData: res.body[0].orders}) ;
  }

  render() {
    let body = [];
    this.state.listData.forEach(order => {
      order.items.forEach(item => {
        body.push((
          <ItemCard
            id={item.id}
            order={order}
            key={`card_${order.id}_${item.id}`}
            name={item.name}
            price={item.price}
          />
        ));
      });
    });
    return (
      <div className="List">
        <h1>My Order List</h1>
        <div className="ListBox">
          {body}
        </div>
      </div>
    );
  }
}

export default List;