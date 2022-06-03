import React,{useState,setData} from 'react'
import { Form,Button } from 'react-bootstrap'

function Contact() {
     const [data,setData]=useState({
         fullname:"",
         phone:"",
         email:"",
         msg:""
     })

     const InputEvent =(event) =>{
         const {name,value}=event.target;
          setData((preval)=>{
             return{
                 ...preval,
                 [name]:value,
             }
         })
     }
    const fromSubmit=(e)=>{
        e.preventDefault();
alert(`My name is ${data.fullname}.${<br/>} My mobile number is ${data.phone} .My Email ${data.email}. Message ${data.msg}`
);
    };
    return (
        <>
            <div className="my5">
                <h1 className="text-center">Contact Page</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <Form onSubmit={fromSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>FullName</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your fullName"
                                name="fullname"
                                value={data.fullname}
                                onChange={InputEvent}
                                required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Mobile Number"
                                name="phone"
                                value={data.phone}
                                onChange={InputEvent}
                                required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com"
                                name="email"
                                value={data.email}
                                onChange={InputEvent}
                                required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} 
                                name="msg"
                                value={data.msg}
                                onChange={InputEvent}
                                required />
                            </Form.Group>
                            <Button class="btn btn-outline-primary" type="submit">Submit form</Button>
                        </Form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact