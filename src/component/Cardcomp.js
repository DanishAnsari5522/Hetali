import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './style/Cardcomp.css'
function Cardcomp(props) {
    return (
        <>
            <div className="col-md-6 col-12 mx-auto">
                <Card style={{ width: '100%' }}>
                    {/* <Card.Img variant="top" src={props.imagesrc} /> */}
                    <Card.Body class="cards">

                        <div class="text-left para" >
                            {/* <props.icon /> */}
                             <div class="text-center icon_size">{props.icon}</div>
                            {props.text} 
                        </div>
                    </Card.Body>

                </Card>
            </div>
        </>
    )
}

export default Cardcomp