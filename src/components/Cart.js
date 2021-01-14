import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row,
} from "reactstrap";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;

  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });

  return (
    <Container fluid>
      <h1 className="text-success mb-3">Your Cart</h1>
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img alt="img-lap" height={80} src={item.tinyImage} />
              </Col>
              <div className="text-primary mr-5">
                <h5>{item.name}</h5>
                <h6>price :- {item.productPrice}</h6>
                <Button color="danger mt-2" onClick={() => removeItem(item)}>
                  Remove
                </Button>
              </div>

              <Col className="text-center">Added</Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/* If everything is empty */}
      {cartItem.length >= 1 ? (
        <Card className="text-center mt-3">
          <CardHeader>
            <h4>Grand Total</h4>
          </CardHeader>
          <CardBody>
            <h5>
              Your amount for {cartItem.length} products is {amount}
            </h5>
          </CardBody>
          <CardFooter>
            <Button color="success" onClick={buyNow}>
              pay here
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div style={{ marginTop: "20vh" }}>
          <h1 className="text-warning">Cart is empty</h1>
        </div>
      )}
    </Container>
  );
};

export default Cart;
