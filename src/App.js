import React, { useState, useEffect } from "react";
import BuyPage from "./components/buyPage";
import Cart from "./components/Cart";

import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import Axios from "axios";
import "./App.css";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    const isAdded = cartItems.findIndex(function (array) {
      return array.id === item.id;
    });

    if (isAdded !== -1) {
      toast("Item is Alreatdy in the cart", { type: "error" });
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const buyNow = () => {
    setCartItems([]);
    toast("Purchased", { type: "success" });
  };

  const removeItem = (item) => {
    setCartItems(cartItems.filter((singleItem) => singleItem.id !== item.id));
  };

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <BuyPage addInCart={addItem} />
        </Col>
        <Col md="4">
          <Cart removeItem={removeItem} cartItem={cartItems} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

// const fetchDetails = async () => {
//   const response = await Axios.get(
//     "https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json"
//   );
//   // console.log(response.data.results);

//   // setDetails(details);
//   console.log(response.data.photos);
// };

// useEffect(() => {
//   fetchDetails();
// }, []);
