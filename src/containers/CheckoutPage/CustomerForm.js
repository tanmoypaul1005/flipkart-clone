
import { MaterialButton, MaterialInput } from '../../components/MaterialUI/MaterialUI';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, Row } from 'react-bootstrap';
import React, { useEffect, useState } from "react";


const CustomerForm = () => {
    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [pinCode, setPinCode] = useState();
    const [locality, setLocality] = useState();
    const [cityDistrictTown, setCityDistrictTown] = useState("");
    const [state, setState] = useState("");
    const [landmark, setLandmark] = useState("");
    const [alternatePhone, setAlternatePhone] = useState("");
    const [addressType, setAddressType] = useState("");
    const user = useSelector((state) => state.user);
    const [submitFlag, setSubmitFlag] = useState(false);
    const [id, setId] = useState("");
    const [address, setAddress] = useState("");
    const dispatch = useDispatch();

    const inputContainer = {
        // width: "100%",
        // marginRight: 10,
    };


    return (


                <div>

                   
             

               <Form>
                <Form.Group>
                <div className="row m-3">

                    <div className="col-md-6">
                    <Form.Control 
                    placeholder="Your Name" 
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="m-3" 
                    />

                    <Form.Control 
                    placeholder="10-digit mobile number" 
                    className="m-3"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    />

                    <Form.Control 
                    placeholder="Pin code" 
                    className="m-3"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    />

                    <Form.Control 
                    placeholder="Locality" 
                    className="m-3"
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    />

                    <Form.Control 
                    placeholder="Your Address" 
                    className="m-3" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    />

                    <Form.Control 
                     placeholder="City/District/Town"
                     className="m-3"
                     value={cityDistrictTown}
                     onChange={(e) => setCityDistrictTown(e.target.value)}/>


                     
                    <MaterialButton
                    title="SAVE AND DELIVER HERE"
                    // onClick={onAddressSubmit}
                    style={{
                    width: "250px",
                    margin: "20px 0",
                    }} />
                    </div>

                   <div className="col-md-6">

                   <Form.Control 
                   placeholder="State" 
                   className="m-3"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                   />

                   <Form.Control 
                   placeholder="Landmark (Optional)" 
                   className="m-3"
                   value={landmark}
                   onChange={(e) => setLandmark(e.target.value)}
                   />

                   <Form.Control 
                   placeholder="Alternate Phone (Optional)"
                    className="m-3" 
                    label=""
                    value={alternatePhone}
                    onChange={(e) => setAlternatePhone(e.target.value)}
                    />

                    <Form.Control 
                    className="m-3"
                    onClick={() => setAddressType("home")}
                    name="addressType"
                    value="home"
                    />

                 </div>
                </div>
                    
                    </Form.Group>
                    </Form>

        </div>
    );
};

export default CustomerForm;