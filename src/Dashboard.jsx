import { useEffect, useState } from "react";

const Dashboard = (props) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch(
          "https://api-car-rental.binaracademy.org/customer/order",
          {
            headers: {
              access_token: props.user.access_token,
            },
          },
        );

        const dataOrders = await response.json();
        setOrders(dataOrders);
      } catch (e) {
        console.error(e);
      }
    }

    fetchOrders();
  }, [props.user.access_token]);

  return (
    <ul>
      {orders.map((order, index) => {
        return <li key={index}>{order.total_price}</li>;
      })}
    </ul>
  );
};

export default Dashboard;
