import React, { useEffect, useState } from "react";

import { Container, Row, Col } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import CarList from "./Components/CarList";
import Cart from "./Components/Cart";

const App = () => {

  const [cartItems, setCartItems] = useState([])

  useEffect(
    ()=>{
      const localCart = localStorage.getItem("cartItems")
      if(localCart){
        setCartItems(JSON.parse(localCart))
      }
    }, []
  )

  const AddItem = (car) => {

    let isAlreadyAdded = cartItems.findIndex(
      (item) => item.id === car.id
    )
    if(isAlreadyAdded !== -1){
      toast("Already Added", { type:"error" })

      return setCartItems([...cartItems])
    }
    toast("Added", { type: "success" })
    setCartItems([...cartItems, car])

  }

  const RemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => (
      item.id !== id
    )))
    toast("Removed", { type: "warning" })
  }

  const BuyNow = () => {
    toast("Rented", { type: "success" })
    setCartItems([])
  }

  useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  },[cartItems])

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