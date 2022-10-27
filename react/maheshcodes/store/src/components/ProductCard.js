import React from 'react';
import {Card,Button,Row,Col,Form} from "react-bootstrap";
import { useContext } from "react";
import {CartContext} from "../CartContext";

function ProductCard(props) {

    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);

  return (
    <>
        <Card>
            <Card.Body>
                <Card.Title>
                    {product.title}
                </Card.Title>
                <Card.Text>${product.price}</Card.Text>

                {productQuantity > 0 ?
                <div>
                    <Form as={Row}>
                        <Form.Label column="true" sm="6">In Cart:  {productQuantity}</Form.Label>
                        <Col sm="6">
                            <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="my-2" >+</Button>
                            <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="my-2" >-</Button>
                        </Col>
                    </Form>     
                    <Button variant="danger" onClick={() => cart.deleteFromCart(product.id) }>removeFromCart</Button>           
                </div> :
                <Button variant="primary"  onClick={() => cart.addOneToCart(product.id)} >Add to Cart</Button>

            }        


            </Card.Body>
        </Card>
    </>
  )
}

export default ProductCard