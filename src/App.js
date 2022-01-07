import React, { useState } from "react";

import { Container, Row, Col } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import CarList from "./Components/CarList";
import Cart from "./Components/Cart";

const App = () => {

  const [cartItems, setCartItems] = useState([])


  const AddItem = (car) => {
    let isAlreadyAdded = cartItems.findIndex(
      (item) => item.id === car.id
    )
    if(isAlreadyAdded !== -1){
      toast("Already Added", { type:"error" })
      return setCartItems([...cartItems])
    }
    setCartItems([...cartItems, car])
  }

  const RemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => (
      item.id !== id
    )))
  }

  const BuyNow = () => {
    toast("Rented", { type: "success" })
    setCartItems([])
  }

  return(
    <Container fluid>
      <Row>
        <ToastContainer/>
        <Col md={9}>
          <CarList AddItem={AddItem}/>
        </Col>
        <Col md={3}>
          <Cart RemoveItem={RemoveItem} BuyNow={BuyNow} CartItems={cartItems}/>
        </Col>
      </Row>
    </Container>
  )

}

export default App;