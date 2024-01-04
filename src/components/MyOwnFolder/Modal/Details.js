import React, { useState } from 'react'
import AuctionFormikControl from '../../../shared/AuctionFormikControl';
import { Form, Formik } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from "yup";
import AuctionLoadAnimation from '../../../shared/AuctionLoadAnimation';
import { Button } from 'react-bootstrap';

const Details = () => {
    // const [loading, setLoading] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);


    const initialValues = {
        auctionName: "",
        auctionInventory: "",
        viewingDate: "",
        viewTime: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
        defaultBid: "",
        auctionResult: "",
        extendDeadlineType: "",
        extendDeadlineValue: "",
        noofBid: "",
        auctionMode: "",
        recordStatus: "",
        description: "",
        checkboxOption:[],
        checkbox1:""
     
      };
    
      const validationSchema = Yup.object({
        // userId: Yup.string().required("Required"),
        // firstName: Yup.string().required("Required"),
        
        // phoneNumber: Yup.string()
        //   .matches("^[0-9]{10}$", "Only 10 digits allow")
        //   .required("Required"),
        fromRange : Yup.string().required("Required"),
       
        toRange: Yup.string().required("Required"),
        incrementAmount: Yup.string().required("Required"),
        incrementTag1: Yup.string().required("Required"),
        incrementTag2: Yup.string().required("Required"),
        incrementTag3: Yup.string().required("Required"),
        incrementTag4: Yup.string().required("Required"),
       
        // checkbox1:Yup.array().required("Required")
    
    
      });
    

    // const onSubmit = (values, submitProps) => {
    //     setLoading(true);
    
    //     axios
    //       .post("http://localhost:4000/users", { values })
    //       .then((response) => {
    //         console.log(response);
    //         if (response.status === 204) {
    //           console.log("success");
    //           toast.success("Successfully Saved", {
    //             position: toast.POSITION.TOP_CENTER,
    //           });
    //         }
    //       })
    
    //       .catch((e) => {
    //         console.log("e:", e);
    //         toast.error("Something went wrong", {
    //           position: toast.POSITION.TOP_CENTER,
    //           autoClose: true,
    //         });
    //       })
    //       .finally(() => {
    //         setLoading(false);
    //         submitProps.setSubmitting(false);
    //       });
    //   };
    
    //   if (loading) {
    //     return <AuctionLoadAnimation />;
    //   }

  return (
    <>
     <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // onSubmit={onSubmit}          
      >
        {(formik) => {
          return (
            <div className="container-fluid">
              <Form autocomplete="off">
              
                {/* 1st row  */}
                <div className="row mt-3">

                <div className="col-md-4 col-sm-6">
                    <div className="form-group">

                  <AuctionFormikControl
                    className={`auction-name nameInp form-control mt-3 form-control auctionResult ${isFocused ? 'focused' : ''}`}

                    control="input"
                    type="text"
                    label="From Range"
                    name="fromRange"
                    
                  />
                   {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                  </div>
                  </div>
                  

                  <div className="col-md-4 col-sm-6">
                  <div className="form-group">

<AuctionFormikControl
  className={`auction-name nameInp form-control mt-3 form-control auctionResult ${isFocused ? 'focused' : ''}`}

  control="input"
  type="text"
  label="To Range"
  name="toRange"
  
/>
 {/* {isFocused && (
  <small style={{ color: "red",fontSize:"px" }}>Required</small>
)} */}
</div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                  <div className="form-group">

                  <AuctionFormikControl
                  className={`form-control view-dateInp mt-3 ${isFocused ? 'focused' : ''}`}
                    control="input"
                    type="text"
                    label="Increment Amount"
                    name="incrementAmount"
                  />
                    {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                  </div>
                  </div>
                </div>
                {/* 2nd row  */}
                <div className="row mt-4">
                <div className="col-md-3 col-sm-6">
                <div className="form-group">

                  <AuctionFormikControl
                  className={`form-control mt-3  details   ${isFocused ? 'focused' : ''}`}
                    control="input"
                    type="text"
                    label="Increment Tag 1"
                    name="incrementTag1"
                  />
                  {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                  </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                  <div className="form-group">

                  <AuctionFormikControl
                  className={`form-control mt-3  details   ${isFocused ? 'focused' : ''}`}
                    control="input"
                    type="text"
                    label="Increment Tag 2"
                    name="incrementTag2"
                  />
                  {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                  
                  </div>
</div>
<div className="col-md-3 col-sm-6">
<div className="form-group">

                  <AuctionFormikControl
                  className={`form-control mt-3  details ${isFocused ? 'focused' : ''}`}
                    control="input"
                    type="text"
                    label="Increment Tag 3"
                    name="incrementTag3"
                  />
                  {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                  </div>
                  </div>

                  <div className="col-md-3 col-sm-6">
<div className="form-group">

                  <AuctionFormikControl
                  className={`form-control mt-3  details   ${isFocused ? 'focused' : ''}`}
                    control="input"
                    type="text"
                    label="Increment Tag 4"
                    name="incrementTag4"
                  />
                  {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                  </div>
                  </div>
                </div>
                <div className='mt-4 d-flex justify-content-end '>
                    <Button>Add/Update</Button>
                </div>
<hr  className='mt-3'/>
              </Form>
            </div>
          );
        }}
      </Formik>

      <div>
        <ToastContainer />
      </div>
        
      
    
    </>
 
  )
}

export default Details
