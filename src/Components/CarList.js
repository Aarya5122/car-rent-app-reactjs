import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "reactstrap"

import Axios from "axios";

import { commerce, datatype, vehicle } from "faker"

import Car from "./Car";

const url = "https://api.pexels.com/v1/search?query=car&per_page=15&page=1"

const key = "ADD YOUR KEY HERE"

const CarList = ( { AddItem } ) => {

  const [carList, setCarList] = useState([])
    
  const fetchPhotos = async() => {
    let response = await Axios.get(url, {
      headers: {
        Authorization: key
      }
    })
    let { photos } = response.data
    let cars = photos.map(
      (photo) => (
        {
          id: datatype.uuid(),
          mediumImg: photo.src.medium,
          tinyImg: photo.src.tiny,
          carPrice: commerce.price(),
          carName: vehicle.vehicle()
        }
      )
    )
    setCarList(cars)
  }

  useEffect(
    ()=>{
      fetchPhotos()
    }, []
  )

  return(
      <Container fluid>
          <Row>
              <h1 className="text-center">Rent a Car</h1>
              {carList.map(
                  (item)=>(
                      <Col md={4} key={item.id} className="mt-2 mb-1">
                          <Car car={item} AddItem={AddItem}/>
                      </Col>
                  )
              )}
          </Row>
      </Container>
  )

}

export default CarList
