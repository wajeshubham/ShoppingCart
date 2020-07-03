import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardImg,
  CardTitle,
  Button,
} from "reactstrap";

const ItemCard = ({ product, addInCart }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg top height="250" width="100%" src={product.smallImage} />
      <CardBody className="text-center">
        <CardTitle>
          <h2>{product.name}</h2>
        </CardTitle>
        <h4>
          <CardText className="secondary">
            Price: Rs. {product.productPrice}
          </CardText>
        </h4>

        <Button color="success btn mt-4" onClick={() => addInCart(product)}>
          Buy Now
        </Button>
      </CardBody>
    </Card>
  );
};
export default ItemCard;
