import React from 'react'
import {Card} from 'react-bootstrap'

function Main(props) {

        return(
            <div>
                <Card border="primary" className="m-4">
                    <Card.Header as="h4" className=" font-weight-normal">{props.id} . {props.title}</Card.Header>
                    <Card.Body>
                        <Card.Title  className=" font-weight-bold">{props.subtitle}</Card.Title>
                        <Card.Img variant="top" className="img-thumbnail my-4 w-50 h-50" src={props.img} />
                        <Card.Title className="  font-weight-bolder">Benefits : </Card.Title>
                        <Card.Text className="h5 font-weight-normal text-justify">
                        {props.benefit}
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>

        )
    }






export default Main