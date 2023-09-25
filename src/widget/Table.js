import React from "react";
import {
  AiOutlineSearch,
  AiOutlineReload,
  AiFillCaretDown,
} from "react-icons/ai";
import Order from "./Order";
//import User from "./User"; // Import the User component

function Table() {
  // Generate random order data
  function generateRandomOrder(id) {
    const statuses = ['disponible', 'on route', 'no work'];
    const fakeNames = [
      "John Doe",
      "Alice Johnson",
      "Bob Smith",
      "Ella Davis",
      "Michael Johnson",
      "Sarah Williams",
      "David Brown",
      "Emma Wilson",
      "James Lee",
      "Olivia Martinez",
    ];
  
    const Users = [
      'ziko wharani',
      'Alice hamoudi',
      'Bob Brown',
      'Ella Davis',
      'yasser ben',
      'zoid kmoun',
    ];
  
    // Combine both arrays
    const allNames = [...fakeNames, ...Users];
  
    const randomName = allNames[Math.floor(Math.random() * allNames.length )];
    const picture1 = `https://picsum.photos/150/150?random=${id}`;
    const picture2 = `https://picsum.photos/150/150?random=${id + 4}`;
    const rating = Math.floor(Math.random() * 5) + 1;
    const duration = Math.floor(Math.random() * 45) + 1;
    const hour = `${Math.floor(Math.random() * 12)}:${Math.floor(Math.random() * 60)}`;
    const price = Math.floor(Math.random() * 100) + 1;
  
    return {
      deliverer: randomName,
      client: randomName,
      rating,
      duration,
      hour,
      price,
      picture1,
      picture2,
    };
  }
  // Generate random order data for eight orders
  const orders = Array.from({ length: 8 }, (_, index) => generateRandomOrder(index + 1));

  return (
    <div className="table">
      <div className="orders_search">
        <button>
          All livreur <span id="down"><AiFillCaretDown /></span> 
        </button>
        <div className="search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search here"
          />
          <a className="search_icon">
            <AiOutlineSearch />
          </a>
        </div>

        <button>
          <span id="refrech"><AiOutlineReload /></span>
          Refresh
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Order No</th>
            <th>Delivered by</th>
            <th>Ordered by</th>
            <th>Duration</th>
            <th>Amount</th>
            <th>Rating</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
              <Order 
              key={index}
              orderNumber={`Order ${index + 1}`}
              duration={order.duration}
              client={order.client}
              deliverer={order.deliverer}
              hour={order.hour}
              price={`$${order.price}`}
              rating={order.rating}
              image1={order.picture1}
              image2={order.picture2}
              />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
