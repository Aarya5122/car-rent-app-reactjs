import React from "react";

import{
    ListGroup,
    ListGroupItem,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Button,
    Container,
    Row,
    Col
} from "reactstrap"

const Cart = ({CartItems, BuyNow, RemoveItem}) => {

    let amount = 0;

    CartItems.forEach(item => (
        amount = parseFloat(amount) + parseFloat(item.carPrice)
    ));

    return(
        <Container fluid>
            <h1 className="text-center">Your Cart</h1>
            <ListGroup>
                { CartItems.map(
                    (item)=>(
                        <ListGroupItem key={item.id}>
                            <Row>
                                <Col>
                                    <img height={80} src={item.tinyImg} alt={item.carName}/>
                                </Col>
                                <Col>
                                    <div>
                                        <span>{item.carName}</span><br/>
                                        <span >$ {item.carPrice} </span>
                                     </div>
                                    <Button color="danger"
                                        className="float-right"
                                        onClick={
                                            () => RemoveItem(item.id)
                                        }
                                    >Remove</Button>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    )
                ) }
            </ListGroup>
            {CartItems.length>=1 ? (
                <Card className="mt-3">
                    <CardHeader>Grand Total</CardHeader>
                    <CardBody>
                        Amount to be paid of {CartItems.length} cars is: {amount}
                    </CardBody>
                    <CardFooter>
                        <Button onClick={
                            () => BuyNow()
                        } color="success">Buy Now</Button>
                    </CardFooter>
                </Card>
            ) : (
                <h2 className="text-center text-danger">Cart is Empty</h2>
            )}
        </Container>
    )
}

export default Cart;