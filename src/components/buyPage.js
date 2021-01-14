import React, { useState, useEffect } from "react";
import Axios from "axios";
import ItemCard from "./Card";
import { random } from "faker";
import { Container, Col, Row } from "reactstrap";

const url = "https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);
  const name = [
    "Acer Swift-3",
    "Dell Pentium-4",
    "HP Flipbook",
    "MacBook Air",
    "Sony Vaio",
    "Lenovo Yoga-2",
  ];

  const price = ["45999", "55999", "40999", "69000", "49999", "48999"];

  const fetchPics = async () => {
    const response = await Axios.get(url);
    const photos = response.data.photos;
    console.log(photos);

    const allProducts = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      name: name[Math.floor(Math.random() * name.length)],
      productPrice: price[Math.floor(Math.random() * price.length)],
      id: random.uuid(),
    }));
    setProduct(allProducts);
  };

  useEffect(() => {
    fetchPics();
  });

  return (
    <Container fluid>
      <h1 className="test-success text-center" style={{ color: "#FFF" }}>
        Buy Page
      </h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <ItemCard product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
