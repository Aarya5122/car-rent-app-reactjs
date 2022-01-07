import React from "react";

import {
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
    Button
} from "reactstrap"

const Car = ( {car, AddItem} ) => {
    return(
        <Card>
            <CardBody>
                <CardImg top height={225} width="100%" src={car.mediumImg}/>
                <CardTitle>{car.carName}</CardTitle>
                <CardText>Rental Price: $ {car.carPrice}</CardText>
                <Button color="warning" onClick={
                    () => AddItem(car)
                } >Add To Cart</Button>
            </CardBody>
        </Card>
    )
}

export default Car