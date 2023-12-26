import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Row, Col } from "react-bootstrap";
import "./User.css";
import * as Yup from "yup";
import TextError from "./TextError";
import axios from "axios";

const initialValues = {
  userId: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  faxNo: "",
  companyName: "",
  address: "",
  city: "",
  zipCode: "",
  country: "",
  email: "",
  email2: "",
  permission: "",
  status: "",
  referenceName: "",
};

const onSubmit = (values, submitProps) => {
  axios
    .post("http://localhost:4000/users", { values })
    .then((response) => console.log(response.status))
    .catch((err) => console.log(err));
  console.log("submitProps", submitProps);
  submitProps.setSubmitting(true);
  //submitProps.resetForm()
};

const validationSchema = Yup.object({
  userId: Yup.string().required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phoneNumber: Yup.string().required("Required"),
  faxNo: Yup.number().required("Required"),
  companyName: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  zipCode: Yup.number().required("Required"),
  country: Yup.string().required("Required"),
  email: Yup.string().email("enter valid email").required("Required"),
  email2: Yup.string().email("enter valid email").required("Required"),
  // permission: Yup.string().required("Required"),
  //status: Yup.string().test("is-status", "${path} is not valid status", value => value === "Select a Status").required("Required"),
  referenceName: Yup.string().required("Required"),
});

function AddUser() {
  const [formValues, setFormValues] = useState(null);
  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // enableReinitialize
    >
      {(formik) => {
        console.log("Formik props", formik);
        return (
          <div className="maindiv">
            <Form>
              <div className="border border-3 border-primary h-90"></div>
              <h2 className="ml-10 fw-bold mb-2">User Registration</h2>
              <br></br>
              <p className="fw-bold mb-5 text-danger text-decoration-underline">
                GENERAL INFO.
              </p>
              <Row>
                <Col>
                  <div className="fields mb-3">
                    <label htmlFor="userId">User Id </label>
                    <label htmlFor="userId"> * </label>
                    <br></br>
                    <Field type="text" id="userId" name="userId" />
                    <ErrorMessage name="userId" component={TextError} />
                  </div>
                </Col>

                <Col>
                  <div className="fields mb-3">
                    <label htmlFor="firstName">First Name</label>
                    <label htmlFor="userId"> * </label>
                    <br></br>
                    <Field type="text" id="firstName" name="firstName" />
                    <ErrorMessage name="firstName" component={TextError} />
                  </div>
                </Col>

                <Col>
                  <div className="fields mb-3">
                    <label htmlFor="lastName">Last Name</label>
                    <label htmlFor="userId"> * </label>
                    <br></br>
                    <Field type="text" id="lastName" name="lastName" />
                    <ErrorMessage name="lastName" >
                    {(error) => <div className="error">{error}</div>}
                    </ErrorMessage>
                  </div>
                </Col>
              </Row>
              <br></br>

              <Row>
                <Col>
                  <div className="fields mb-3">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <label htmlFor="userId"> * </label>
                    <br></br>
                    <Field type="text" id="phoneNumber" name="phoneNumber" />
                    <ErrorMessage name="phoneNumber" component={TextError} />
                  </div>
                </Col>

                <Col>
                  <div className="fields mb-3">
                    <label htmlFor="faxNo">Fax No.</label>
                    <label htmlFor="userId"> * </label>
                    <br></br>
                    <Field type="text" id="faxNo" name="faxNo" />
                    <ErrorMessage name="faxNo">
                      {(error) => <div className="error">{error}</div>}
                    </ErrorMessage>
                  </div>
                </Col>

                <Col>
                  <div className="fields mb-3">
                    <label htmlFor="companyName">Company Name</label>
                    <label htmlFor="userId"> * </label>
                    <br></br>
                    <Field type="text" id="companyName" name="companyName" />
                    <ErrorMessage name="companyName" >
                    {(error) => <div className="error">{error}</div>}
                    </ErrorMessage>
                  </div>
                </Col>
              </Row>
              <br></br>

              <Row>
                <Col>
                  <div className="fields mb-3">
                    <label htmlFor="address">Address</label>
                    <label htmlFor="userId"> * </label>
                    <br></br>
                    <Field type="text" id="address" name="address" />
                    <ErrorMessage name="address" component={TextError} />
                  </div>
                </Col>

                <Col>
                  <div className="fields mb-3">
                    <label htmlFor="city">City</label>
                    <label htmlFor="userId"> * </label>
                    <br></br>
                    <Field type="text" id="city" name="city" />
                    <ErrorMessage name="city">
                      {(error) => <div className="error">{error}</div>}
                    </ErrorMessage>
                  </div>
                </Col>

                <Col>
                  <div className="fields mb-3">
                    <label htmlFor="zipCode">Zip Code</label>
                    <label htmlFor="userId"> * </label>
                    <br></br>
                    <Field type="text" id="zipCode" name="zipCode" />
                    <ErrorMessage name="zipCode" >
                    {(error) => <div className="error">{error}</div>}
                    </ErrorMessage>
                  </div>
                </Col>
              </Row>
              <br></br>

              <Row>
                <Col>
                  <div className="fields mb-3">
                    <label htmlFor="country">Country</label>
                    <label htmlFor="userId"> * </label>
                    <br></br>
                    <Field type="text" id="country" name="country" />
                    <ErrorMessage name="country" component={TextError} />
                  </div>
                </Col>

                <Col>
                  <div className="fields mb-3">
                    <label htmlFor="email">E-mail</label>
                    <label htmlFor="userId"> * </label>
                    <br></br>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name="email">
                      {(error) => <div className="error">{error}</div>}
                    </ErrorMessage>
                  </div>
                </Col>

                <Col>
                  <div className="fields mb-3">
                    <label htmlFor="channel">Email-2</label>
                    <label htmlFor="userId"> * </label>
                    <br></br>
                    <Field type="text" id="email2" name="email2" />
                    <ErrorMessage name="email2">
                    {(error) => <div className="error">{error}</div>}
                      </ErrorMessage>
                  </div>
                </Col>
              </Row>
              <br></br>

              <Row>
                <Col>
                  <div className="fields mb-3">
                    <label htmlFor="permission">Permission</label>
                    <label htmlFor="userId"> * </label>
                    <br></br>
                    <input type="radio" id="permission" name="permission" />
                    <></> <label for="html">Auctioneer</label> <></>
                    <input type="radio" id="permission" name="permission" />
                    <></> <label for="html">Bidder</label>
                    <br></br>
                    <input type="radio" id="permission" name="permission" />
                    <></> <label for="html">Both</label>
                  </div>
                </Col>

                <Col>
                  <div className="fields mb-3">
                    <label htmlFor="status" style={{ display: "block" }}>
                      Status
                    </label>
                    <select
                      name="status"
                      id="status"
                      type="text"
                      style={{ display: "block" }}
                    >
                      <option value="" label="Select a Status">
                        Select an Option{" "}
                      </option>
                      <option value="option1" label="option1">
                        {" "}
                        option1
                      </option>
                      <option value="option2" label="option2">
                      option2
                      </option>

                      <option value="option3" label="option3">
                      option3
                      </option>
                    </select>
                  </div>
                </Col>

                <Col>
                  <div className="fields mb-3">
                    <label htmlFor="referenceName">Reference Name</label>
                    <label htmlFor="userId"> * </label>
                    <br></br>
                    <Field
                      type="text"
                      id="referenceName"
                      name="referenceName"
                    />
                    <ErrorMessage name="referenceName">
                    {(error) => <div className="error">{error}</div>}
                    </ErrorMessage>
                  </div>
                </Col>
              </Row>
              <br></br>

              <div className="mb-2">
                <button size="lg" type="submit" disabled={formik.isSubmitting}>
                  Submit
                </button>{" "}
                <button type="reset" size="lg">
                  Reset
                </button>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default AddUser;
