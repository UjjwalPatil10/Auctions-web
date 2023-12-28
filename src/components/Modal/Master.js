// import React from 'react'
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// // import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import "../css1/header.css"
// const MasterAuction = () => {
//     return (
//         <div className="tab-content pl-3 pt-2 mt-3" id="nav-tabContent" style={{ overflowY: "hidden" }}>
//             <div className="tab-pane fade active show in" id="custom-nav-home" role="tabpanel" aria-labelledby="custom-nav-home-tab">
//                 <div className="card">
//                     <div className="card-body card-block">
//                         {/* 1st row  */}
//                         <div className="row mt-2 ">
//                             <div className="col-md-4 col-sm-6">
//                                 <div className="form-group">
//                                     <label htmlFor="auctionname" className="form-control-label auction">Auction Name</label>
//                                     <input className="auction-name nameInp form-control mt-2" type="text" />
//                                 </div>
//                             </div>

//                             <div className="col-md-4 col-sm-6 ">
//                                 <div className="form-group">
//                                     <label for="auctioninventory" className="form-control-label auction">Auction Inventory</label>

//                                     <select className="select-inp input-group mt-2" >
//                                         <option value="0">Please select</option>
//                                         <option value="1">Certificate</option>
//                                         <option value="2">Option #2</option>
//                                         <option value="3">Option #3</option>
//                                     </select>
//                                 </div>
//                             </div>

//                             <div className="col-md-4 col-sm-6 ">
//                                 <div className="form-group">
//                                     <label for="datepicker" className="form-control-label auction">Viewing Date</label>

//                                     <input type="text" id="datepicker" className="form-control view-dateInp mt-2" />

//                                 </div>
//                             </div>

//                         </div>

//                         {/* 2nd row */}
//                         <div className="row mt-4">
//                             <div className="col-md-4 col-sm-6">
//                                 <div className="form-group">
//                                     <label for="viewingtime" className="form-control-label">Viewing Time</label>

//                                     <input type="text" id="viewingtime" className="form-control mt-2" style={{ border: "1px solid #ccc", height: "35px", borderRadius: "4px" }} />

//                                 </div>
//                             </div>

//                             <div className="col-md-4 col-sm-6">
//                                 <div className="form-group">
//                                     <label for="startdate" className="form-control-label">Start Date</label>

//                                     <input type="text" id="startdate" className="form-control mt-2" style={{ border: "1px solid #ccc", height: "35px", borderRadius: "4px" }} />

//                                 </div>
//                             </div>

//                             <div className="col-md-4 col-sm-6">
//                                 <div className="form-group">
//                                     <label for="starttime" className="form-control-label">Start Time</label>

//                                     <input type="text" id="starttime" className="form-control mt-2" style={{ border: "1px solid #ccc", height: "35px", borderRadius: "4px" }} />

//                                 </div>
//                             </div>

//                         </div>

//                         {/* 3rd row  */}
//                         <div className="row mt-4 ">
//                             <div className="col-md-4 col-sm-6">
//                                 <div className="form-group">
//                                     <label for="enddate" className="form-control-label">End Date</label>

//                                     <input type="text" id="viewingtime" className="form-control mt-2" style={{ border: "1px solid #ccc", height: "35px", borderRadius: "4px" }} />

//                                 </div>
//                             </div>

//                             <div className="col-md-4 col-sm-6">
//                                 <div className="form-group">
//                                     <label for="endtime" className="form-control-label">End Time</label>

//                                     <input type="text" id="startdate" className="form-control mt-2" style={{ border: "1px solid #ccc", height: "35px", borderRadius: "4px" }} />

//                                 </div>
//                             </div>

//                             <div className="col-md-4 col-sm-6">
//                                 <div className="form-group">
//                                     <label for="defaultincrement" className="form-control-label">Default Bid Increment By</label>

//                                     <input type="text" id="starttime" className="form-control mt-2" style={{ border: "1px solid #ccc", height: "35px", borderRadius: "4px" }} />

//                                 </div>
//                             </div>

//                         </div>

//                         {/* 4th row  */}

//                         <div className="row mt-4">
//                             <div className="col-md-4">
//                                 <div className="form-group auction-result">
//                                     <label for="aucresdate" className="form-control-label">Auction Result Date</label>
//                                 </div>
//                             </div>
//                             <div className="col-md-4">
//                                 <div className="form-group ">

//                                 </div>
//                             </div>
//                             <div className="col-md-4">
//                                 <div className="form-group">

//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row mt-2">
//                             <div className="col-md-4">
//                                 <div className="form-group">
//                                     <input type="text" id="aucresdate" className="form-control" style={{ border: "1px solid #ccc" }} />
//                                 </div>
//                             </div>
//                             <div className="col-md-8">
//                                 <div className="form-group">
//                                     <div className="row">
//                                         <div className="col">
//                                             <div className="checkbox">
//                                                 <label for="checkbox1" className="form-check-label">
//                                                     <input type="checkbox" id="checkbox1" name="checkbox1" value="option1" className="form-check-input" style={{ border: "1px solid gray" }} /> <span>Hide Bulk Bid</span>
//                                                 </label>
//                                             </div>
//                                         </div>
//                                         <div className="col">
//                                             <div className="checkbox">
//                                                 <label for="checkbox2" className="form-check-label">
//                                                     <input type="checkbox" id="checkbox2" name="checkbox2" value="option2" className="form-check-input" style={{ border: "1px solid gray" }} /> <span>Allow Proxy Bid</span>
//                                                 </label>
//                                             </div>
//                                         </div>
//                                         <div className="col">
//                                             <div className="checkbox">
//                                                 <label for="checkbox3" className="form-check-label">
//                                                     <input type="checkbox" id="checkbox3" name="checkbox3" value="option3" className="form-check-input" style={{ border: "1px solid gray" }} /> <span>Allow PopCorn Bid</span>
//                                                 </label>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* 5th row  */}
//                         <div className="row mt-4 ">
//                             <div className="col-md-4 col-sm-6">
//                                 <div className="form-group">
//                                     <label for="seldeadlinetype" className="form-control-label">Extend Deadline within Type</label>

//                                     <select className="select-inp input-group mt-2" >
//                                         <option value="0">Please select</option>
//                                         <option value="1">Minutes</option>
//                                         <option value="2">Option #2</option>
//                                         <option value="3">Option #3</option>
//                                     </select>

//                                 </div>
//                             </div>

//                             <div className="col-md-4 col-sm-6">
//                                 <div className="form-group">
//                                     <label for="exdeadlinevalue" className="form-control-label">Extend Deadline within Value</label>

//                                     <input type="text" id="exdeadlinevalue" className="form-control mt-2" />

//                                 </div>
//                             </div>

//                             <div className="col-md-4 col-sm-6">
//                                 <div className="form-group">
//                                     <label for="numberbidextend" className="form-control-label">No. of Times Bid Extend</label>

//                                     <input type="text" id="numberbidextend" className="form-control
//                                 " />

//                                 </div>
//                             </div>

//                         </div>

//                         {/* 6th row  */}

//                         <div className="row mt-4 ">
//                             <div className="col-md-2">
//                                 <div className="form-group">
//                                     <label for="auctionmode" className="form-control-label">Auction Mode</label>
//                                     <select className="mt-3 auction-mode" style={{ width: "88px", height: "30px", border: "1px solid #ccc", borderRadius: "4px" }} >
//                                         <option value="0">View</option>
//                                         <option value="2">Option #2</option>
//                                         <option value="3">Option #3</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             <div className="col-md-2">
//                                 <div className="form-group">
//                                     <label for="recordstatus" className="form-control-label">Record Status</label>
//                                     <select className="mt-3 auction-mode" style={{ width: "88px", height: "30px", border: "1px solid #ccc", borderRadius: "4px" }} >
//                                         <option value="0">Active</option>
//                                         <option value="2">Option #2</option>
//                                         <option value="3">Option #3</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             <div className="col-md-8 ">
//                                 <div className="form-group">
//                                     <label for="recordstatus" className="form-control-label">Description</label>
//                                     <textarea id="numberbidextend" className="form-control mt-3 "></textarea>
//                                 </div>
//                             </div>
//                             <div className="row mt-4">
//                                 <div className="col-md-12">
//                                     <div className="modal-footer d-flex justify-content-start">
//                                         <button type="button" className="btn btn-primary" data-dismiss="modal">Submit</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//             </div>
//         </div >
//     )
// }
// export default MasterAuction
// ===========================================================================
// react-modal

import React from "react";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
import AuctionFormikControl from "../../shared/AuctionFormikControl";
import axios from "axios";
import Modal from "react-modal";
import "../css1/header.css";
import { useState } from "react";
import AuctionLoadAnimation from "../../shared/AuctionLoadAnimation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Checkbox } from "../../shared/FormCheckBox";
function MasterUser() {
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

  const auctionInventory = [
    { key: "Please select", value: "auctioneer" },
    { key: "Certificate", value: "certificate" },
    { key: "Option #2", value: "#2" },
    { key: "Option #3", value: "#3" },
  ];

  const dropdownOptions = [
    { key: "Active", value: "active" },
    { key: "Option #2", value: "#2" },

    { key: "Option #3", value: "#3" },
  ];
 
  const selectOptions = [
    { key: "Please Select", value: "" },
    { key: "Certificate", value: "#2" },
    { key: "Option #2", value: "#3" },
    { key: "Option #3", value: "#3" },
  ];

  const extendOptions = [
    { key: "Please Select", value: "select" },
    { key: "Minutes", value: "minutes" },
    { key: "Option #2", value: "" },
    { key: "Option #3", value: "#3" },
  ];


  const dropdownOptionsForCountry = [
    { key: "Select a country", value: "" },
    { key: "Australia", value: "Australia" },
    { key: "Afghanistan", value: "Afghanistan" },
    { key: "Albania", value: "Albania" },
    { key: "Algeria", value: "Algeria" },
    { key: "Andorra", value: "Andorra" },
    { key: "Angola", value: "Angola" },
    { key: "Antigua and Barbuda", value: "Antigua and Barbuda" },
    { key: "Argentina", value: "Argentina" },
    { key: "Armenia", value: "Armenia" },
    { key: "Austria", value: "Austria" },
    { key: "Azerbaijan", value: "Azerbaijan" },
    { key: "Bahamas", value: "Bahamas" },
    { key: "Bahrain", value: "Bahrain" },
    { key: "Bangladesh", value: "Bangladesh" },
    { key: "Barbados", value: "Barbados" },
    { key: "Belarus", value: "Belarus" },
    { key: "Belgium", value: "Belgium" },
    { key: "Belize", value: "Belize" },
    { key: "Benin", value: "Benin" },
    { key: "Bhutan", value: "Bhutan" },
    { key: "Bolivia", value: "Bolivia" },
    { key: "Bosnia and Herzegovina", value: "Bosnia and Herzegovina" },
    { key: "Botswana", value: "Botswana" },
    { key: "Brazil", value: "Brazil" },
    { key: "Brunei", value: "Brunei" },
    { key: "Bulgaria", value: "Bulgaria" },
    { key: "Burkina Faso", value: "Burkina Faso" },
    { key: "Burundi", value: "Burundi" },
    { key: "Cabo Verde", value: "Cabo Verde" },
    { key: "Cambodia", value: "Cambodia" },
    { key: "Cameroon", value: "Cameroon" },
    { key: "Canada", value: "Canada" },
    { key: "Central African Republic", value: "Central African Republic" },
    { key: "Chad", value: "Chad" },
    { key: "Chile", value: "Chile" },
    { key: "China", value: "China" },
    { key: "Colombia", value: "Colombia" },
    { key: "Comoros", value: "Comoros" },
    {
      key: "Congo, Democratic Republic of the",
      value: "Congo, Democratic Republic of the",
    },
    { key: "Congo, Republic of the", value: "Congo, Republic of the" },
    { key: "Costa Rica", value: "Costa Rica" },
    { key: "Côte d’Ivoire", value: "Côte d’Ivoire" },
    { key: "Côte d’Ivoire", value: "Côte d’Ivoire" },
    { key: "Cuba", value: "Cuba" },
    { key: "Cyprus", value: "Cyprus" },
    { key: "Czech Republic", value: "Czech Republic" },
    { key: "Denmark", value: "Denmark" },
    { key: "Djibouti", value: "Djibouti" },
    { key: "Dominica", value: "Dominica" },
    { key: "Dominican Republic", value: "Dominican Republic" },
    { key: "East Timor (Timor-Leste)", value: "East Timor (Timor-Leste)" },
    { key: "Ecuador", value: "Ecuador" },
    { key: "Australia", value: "australia" },
    { key: "India", value: "india" },
    { key: "Japan", value: "japan" },
    { key: "Australia", value: "australia" },
    { key: "Egypt", value: "Egypt" },
    { key: "El Salvador", value: "El Salvador" },
    { key: "Equatorial Guinea", value: "Equatorial Guinea" },
    { key: "Eritrea", value: "Eritrea" },
    { key: "Estonia", value: "Estonia" },
    { key: "Eswatini", value: "Eswatini" },
    { key: "Ethiopia", value: "Ethiopia" },
    { key: "Fiji", value: "Fiji" },
    { key: "Finland", value: "Finland" },
    { key: "France", value: "France" },
    { key: "Gabon", value: "Gabon" },
    { key: "The Gambia", value: "The Gambia" },
    { key: "Georgia", value: "Georgia" },
    { key: "Germany", value: "Germany" },
    { key: "Ghana", value: "Ghana" },
    { key: "Greece", value: "Greece" },
    { key: "Grenada", value: "Grenada" },
    { key: "Guatemala", value: "Guatemala" },
    { key: "Guinea", value: "Guinea" },
    { key: "Guinea-Bissau", value: "Guinea-Bissau" },
    { key: "Guyana", value: "Guyana" },
    { key: "Haiti", value: "Haiti" },
    { key: "Honduras", value: "Honduras" },
    { key: "Hungary", value: "Hungary" },
    { key: "Iceland", value: "Iceland" },
    { key: "India", value: "India" },
    { key: "Indonesia", value: "Indonesia" },
    { key: "Iran", value: "Iran" },
    { key: "Iraq", value: "Iraq" },
    { key: "Ireland", value: "Ireland" },
    { key: "Israel", value: "Israel" },
    { key: "Italy", value: "Italy" },
    { key: "Jamaica", value: "Jamaica" },
    { key: "Japan", value: "Japan" },
    { key: "Jordan", value: "Jordan" },
    { key: "Kazakhstan", value: "Kazakhstan" },
    { key: "Kenya", value: "Kenya" },
    { key: "Kiribati", value: "Kiribati" },
    { key: "Korea, North", value: "Korea, North" },
    { key: "Korea, South", value: "Korea, South" },
    { key: "Kosovo", value: "Kosovo" },
    { key: "Kuwait", value: "Kuwait" },
    { key: "Kyrgyzstan", value: "Kyrgyzstan" },
    { key: "Laos", value: "Laos" },
    { key: "Latvia", value: "Latvia" },
    { key: "Lebanon", value: "Lebanon" },
    { key: "Lesotho", value: "Lesotho" },
    { key: "Liberia", value: "Liberia" },
    { key: "Libya", value: "Libya" },
    { key: "Liechtenstein", value: "Liechtenstein" },
    { key: "Lithuania", value: "Lithuania" },
    { key: "Luxembourg", value: "Luxembourg" },
    { key: "Madagascar", value: "Madagascar" },
    { key: "Malawi", value: "Malawi" },
    { key: "Malaysia", value: "Malaysia" },
    { key: "Maldives", value: "Maldives" },
    { key: "Mali", value: "Mali" },
    { key: "Malta", value: "Malta" },
    { key: "Marshall Islands", value: "Marshall Islands" },
    { key: "Mauritania", value: "Mauritania" },
    { key: "Mauritius", value: "Mauritius" },
    { key: "Mexico", value: "Mexico" },
    {
      key: "Micronesia, Federated States of",
      value: "Micronesia, Federated States of",
    },
    { key: "Moldova", value: "Moldova" },
    { key: "Monaco", value: "Monaco" },
    { key: "Mongolia", value: "Mongolia" },
    { key: "Montenegro", value: "Montenegro" },
    { key: "Morocco", value: "Morocco" },
    { key: "Mozambique", value: "Mozambique" },
    { key: "Myanmar (Burma)", value: "Myanmar (Burma)" },
    { key: "Namibia", value: "Namibia" },
    { key: "Nauru", value: "Nauru" },
    { key: "Nepal", value: "Nepal" },
    { key: "Netherlands", value: "Netherlands" },
    { key: "New Zealand", value: "New Zealand" },
    { key: "Nicaragua", value: "Nicaragua" },
    { key: "Niger", value: "Niger" },
    { key: "Nigeria", value: "Nigeria" },
    { key: "North Macedonia", value: "North Macedonia" },
    { key: "Norway", value: "Norway" },
    { key: "Oman", value: "Oman" },
    { key: "Pakistan", value: "Pakistan" },
    { key: "Palau", value: "Palau" },
    { key: "Panama", value: "Panama" },
    { key: "Papua New Guinea", value: "Papua New Guinea" },
    { key: "Paraguay", value: "Paraguay" },
    { key: "Peru", value: "Peru" },
    { key: "Philippines", value: "Philippines" },
    { key: "Poland", value: "Poland" },
    { key: "Portugal", value: "Portugal" },
    { key: "Qatar", value: "Qatar" },
    { key: "Romania", value: "Romania" },
    { key: "Russia", value: "Russia" },
    { key: "Rwanda", value: "Rwanda" },
    { key: "Saint Kitts and Nevis", value: "Saint Kitts and Nevis" },
    { key: "Saint Lucia", value: "Saint Lucia" },
    {
      key: "Saint Vincent and the Grenadines",
      value: "Saint Vincent and the Grenadines",
    },
    { key: "Samoa", value: "Samoa" },
    { key: "San Marino", value: "San Marino" },
    { key: "Sao Tome and Principe", value: "Sao Tome and Principe" },
    { key: "Saudi Arabia", value: "Saudi Arabia" },
    { key: "Senegal", value: "Senegal" },
    { key: "Serbia", value: "Serbia" },
    { key: "Seychelles", value: "Seychelles" },
    { key: "Sierra Leone", value: "Sierra Leone" },
    { key: "Singapore", value: "Singapore" },
    { key: "Slovakia", value: "Slovakia" },
    { key: "Slovenia", value: "Slovenia" },
    { key: "Solomon Islands", value: "Solomon Islands" },
    { key: "Somalia", value: "Somalia" },
    { key: "South Africa", value: "South Africa" },
    { key: "Spain", value: "Spain" },
    { key: "Sri Lanka", value: "Sri Lanka" },
    { key: "Sudan", value: "Sudan" },
    { key: "Sudan, South", value: "Sudan, South" },
    { key: "Suriname", value: "Suriname" },
    { key: "Sweden", value: "Sweden" },
    { key: "Switzerland", value: "Switzerland" },
    { key: "Syria", value: "Syria" },
    { key: "Taiwan", value: "Taiwan" },
    { key: "Tajikistan", value: "Tajikistan" },
    { key: "Tanzania", value: "Tanzania" },
    { key: "Thailand", value: "Thailand" },
    { key: "Togo", value: "Togo" },
    { key: "Tonga", value: "Tonga" },
    { key: "Trinidad and Tobago", value: "Trinidad and Tobago" },
    { key: "Tunisia", value: "Tunisia" },
    { key: "Turkey", value: "Turkey" },
    { key: "Turkmenistan", value: "Turkmenistan" },
    { key: "Tuvalu", value: "Tuvalu" },
    { key: "Uganda", value: "Uganda" },
    { key: "Ukraine", value: "Ukraine" },
    { key: "United Arab Emirates", value: "United Arab Emirates" },
    { key: "United Kingdom", value: "United Kingdom" },
    { key: "United States", value: "United States" },
    { key: "Uruguay", value: "Uruguay" },
    { key: "Uzbekistan", value: "Uzbekistan" },
    { key: "Vanuatu", value: "Vanuatu" },
    { key: "Vatican City", value: "Vatican City" },
    { key: "Venezuela", value: "Venezuela" },
    { key: "Vietnam", value: "Vietnam" },
    { key: "Yemen", value: "Yemen" },
    { key: "Zambia", value: "Zambia" },
    { key: "Zimbabwe", value: "Zimbabwe" },
  ];

  const checkboxOptions = [
    { key: "Hide Bulk Bid", value: "hide" },
    { key: " Allow Proxy Bid", value: "allow" },
    { key: "Allow PopCorn Bid", value: "popcorn" },
  ];

  const viewsOptions = [
    { key: "View", value: "view" },
    { key: "Option #2", value: "#2" },
    { key: "Option #3", value: "#3" },
  ];

  const activeOptions = [
    { key: "active", value: "active" },
    { key: "Option #2", value: "#2" },
    { key: "Option #3", value: "#3" },
  ];

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
    auctionName : Yup.string().required("Required"),
    auctionInventory: Yup.string()
      .matches(/^[0-9]+$/, "Only numbers allowed")
      .required("Required"),
    viewingDate: Yup.string().required("Required"),
    viewTime: Yup.string().required("Required"),
    startDate: Yup.string().required("Required"),
    startTime: Yup.string().required("Required"),
    endDate: Yup.string().required("Required"),
    endTime: Yup.string().required("Required"),
    defaultBid: Yup.string().required("Required"),
    auctionResult: Yup.string().required("Required"),
    extendDeadlineType: Yup.string().required("Required"),
    extendDeadlineValue: Yup.string().required("Required"),
    noofBid: Yup.string().required("Required"),
    auctionMode: Yup.string().required("Required"),
    recordStatus: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    checkboxOption:Yup.array().required("Required"),
    // checkbox1:Yup.array().required("Required")


  });

  
    // phoneNumber1: Yup.string().required("Required"),
    // start: Yup.string().required("Required"),
    // companyName1: Yup.string().required("Required"),
    // address: Yup.string().required("Required"),
    // address2: Yup.string().required("Required"),
    // address1: Yup.string().required("Required"),
    // city: Yup.string().required("Required"),
    // city1: Yup.string().required("Required"),
    // faxNos: Yup.string().required("Required"),
    // zipCode1: Yup.string().required("Required"),
    // fax1: Yup.string().required("Required"),
    // fax: Yup.string().required("Required"),
    // zipCode: Yup.string().required("Required")
    //   .matches(/^[0-9]+$/, "Only numbers allowed")
    //   .required("Required"),
    // country: Yup.string().required("Required"),
    // email: Yup.string().email("Please, enter valid Email!").matches(EMAIL_REGX).required("Required"),
    // email2: Yup.string()
    //   .email("please enter valid email")
    //   .matches(
    //     /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    //     "please enter valid email"
    //   )
    //   .required("Required"),
    // email: Yup.string()
    //   .email("please enter valid email")
    //   .matches(

    //     /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    //     "please enter valid email"
    //   )
    //   .required("Required"),
    // permission: Yup.string().required("Required"),
    // status: Yup.string().required("Required"),
    // referenceName: Yup.string().required("Required"),
    // checkboxOption: Yup.array().required("Required"),
    // description: Yup.string().required("Required"),
  // });

  // const toast = useToast(false);

  const onSubmit = (values, submitProps) => {
    setLoading(true);

    axios
      .post("http://localhost:4000/users", { values })
      .then((response) => {
        console.log(response);
        if (response.status === 204) {
          console.log("success");
          toast.success("Successfully Saved", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })

      .catch((e) => {
        console.log("e:", e);
        toast.error("Something went wrong", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: true,
        });
      })
      .finally(() => {
        setLoading(false);
        submitProps.setSubmitting(false);
      });
  };

  if (loading) {
    return <AuctionLoadAnimation />;
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <div className="container-fluid">
              <Form autocomplete="off">
                {/* <div className="border border-3 border-primary h-90"></div>
                <h2 className="ml-10 fw-bold mb-2">User Registration</h2>
                <br></br>
                <p className="fw-bold mb-5 text-danger text-decoration-underline">
                  GENERAL INFO.
                </p> */}
                {/* 1st row  */}
                <div className="row mt-2">

                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">

                  <AuctionFormikControl
                    className={`auction-name nameInp form-control mt-2 form-control auctionResult ${isFocused ? 'focused' : ''}`}

                    control="input"
                    type="text"
                    label="Auction Name"
                    name="auctionName"
                    
                  />
                   {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                  </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                  <div className="form-group">

                  <AuctionFormikControl
                  className={`select-inp input-group mt-2 ${isFocused ? 'focused' : ''}`}
                    control="select"
                    
                    type="text"
                    label="Auction Inventory"
                    name="auctionInventory"
                    options={selectOptions}
                  />
                    {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                  </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                  <div className="form-group">

                  <AuctionFormikControl
                  className={`form-control view-dateInp mt-2 ${isFocused ? 'focused' : ''}`}
                    control="input"
                    type="text"
                    label="viewing date"
                    name="viewingDate"
                  />
                    {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                  </div>
                  </div>
                </div>
                <br />
                {/* 2nd row  */}
                <div className="row">
                <div className="col-md-4 col-sm-6">
                <div className="form-group">

                  <AuctionFormikControl
                  className={`form-control mt-2 viewTimeInp ${isFocused ? 'focused' : ''}`}
                    control="input"
                    type="text"
                    label="Viewing Time"
                    name="viewTime"
                  />
                  {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                  </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                  <div className="form-group">

                  <AuctionFormikControl
                  className={`form-control mt-2 startDateInp ${isFocused ? 'focused' : ''}`}
                    control="input"
                    type="text"
                    label="Start Date"
                    name="startDate"
                  />
                  {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                  
                  </div>
</div>
<div className="col-md-4 col-sm-6">
<div className="form-group">

                  <AuctionFormikControl
                  className={`form-control mt-2 startTimeInp ${isFocused ? 'focused' : ''}`}
                    control="input"
                    type="text"
                    label="Start Time"
                    name="startTime"
                  />
                  {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                  </div>
                  </div>
                </div>
                <br />
                {/* 3rd row  */}
                <div className="row">
                <div className="col-md-4 col-sm-6">
                <div className="form-group">

                  <AuctionFormikControl
                  className={`form-control mt-2 endDateInp ${isFocused ? 'focused' : ''}`}
                    control="input"
                    type="text"
                    label="End Date"
                    name="endDate"
                  />
                  {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                  </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                  <div className="form-group">
                  <AuctionFormikControl
                  className={`form-control mt-2 endDateInp ${isFocused ? 'focused' : ''}`}
                    control="input"
                    type="text"
                    label="End Time"
                    name="endTime"
                  />

                  {/* <AuctionFormikControl
                  className={`form-control mt-2 endTimeInp ${isFocused ? 'focused' : ''}`}
                    control="input"
                    type="text"
                    label="End Time"
                    name="city1"
                  /> */}
                  {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                  </div>
</div>

<div className="col-md-4 col-sm-6">
<div className="form-group">

                  <AuctionFormikControl
                  className={`form-control mt-2 defaultIncrementInp ${isFocused ? 'focused' : ''}`}
                    control="input"
                    type="text"
                    label="Default Bid Increment By"
                    name="defaultBid"
                  />
                  {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                  </div>
                  </div>
                </div>
                <br />

                {/* 4th row  */}
                <div className="row mt-4">
                            {/* <div className="col-md-4">
                                <div className="form-group auction-result">
                                    <label for="aucresdate" className="form-control-label">Auction Result Date</label>
                                </div>
                            </div> */}

                            <div className="col-md-4">
                                <div className="form-group ">

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">

                                </div>
                            </div>
                        </div>
                        {/* input field  */}
                        <div className="row mt-2">
                        <div className="col-md-4">
            <div className="form-group">
            <AuctionFormikControl
                  className={`form-control mt-2 endDateInp ${isFocused ? 'focused' : ''}`}
                    control="input"
                    type="text"
                    label="Auction Result Date"
                    name="auctionResult"
                  />
                {/* <input
                    type="text"
                    id="aucresdate"
                    className={`form-control auctionResult ${isFocused ? 'focused' : ''}`}
                    onFocus={handleFocus}
                    // onBlur={handleBlur}
                    required
                    style={{ border: "1px solid #ccc" }}
                /> */}
                {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
            </div>
        </div>

                            <div className="col-md-8">
                                <div className="form-group">
                                    <div className="row">
                                      {/* <AuctionFormikControl
                                      control="checkbox"
                                      name="checkboxOption"
                                      
                                      options={checkboxOptions}
                                      /> */}
                                        <div className="col">
                                            <div className="checkbox">
                                                <label for="checkbox1" className="form-check-label">
                                                <input type="checkbox" id="checkbox1" name="checkbox1" value="option3" className="form-check-input" style={{ border: "1px solid gray" }} 
                                                
                                                /> 
                                                <span> Hide Bulk Bid</span>

                                                </label>
                                                {formik.touched.checkbox1 && formik.errors.checkbox1 && (
                    <small style={{ color: "red", fontSize: "12px" }}>{formik.errors.checkbox1}</small>
                  )}
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="checkbox">
                                                <label for="checkbox2" className="form-check-label">
                                                <input  type="checkbox" id="checkbox2" name="checkbox2" value="option3" className="form-check-input" style={{ border: "1px solid gray" }} /> <span>Allow Proxy Bid</span>

                                                </label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="checkbox">
                                                <label for="checkbox3" className="form-check-label">
                                                    <input  type="checkbox" id="checkbox3" name="checkbox3" value="option3" className="form-check-input" style={{ border: "1px solid gray" }} /> <span>Allow PopCorn Bid</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                {/* <div class="row mt-4">
                  <div class="col-md-4">
                  <div class="form-group auction-result">
                    <label for="aucresdate" class="form-control-label">Auction Result Date</label>
                    </div>
                    </div>
                    <div class="col-md-4"><div class="form-group ">
                      </div>
                    </div>
                    <div class="col-md-4"><div class="form-group">
                      </div>
                    </div>
                    </div> */}


{/* checkbox  */}
                  {/* <div className="row mt-2"
                
                  >
                    <div className="col-md-4">
                      <div className="form-group">
                    <AuctionFormikControl
                    className="form-control  auctionResult"
                    control="input"
                    name="checkboxOption1"
                  />
                  </div>


                  </div>

                  <div className="col-md-8">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-12">
<AuctionFormikControl
                    control="checkbox"
                    name="checkboxOption"
                    options={checkboxOptions}
                  />
                   </div>
                    </div>

</div>
                    </div>

                  
                  </div> */}
                <br />


                {/* 5th row  */}
                <div className="row">
                <div className="col-md-4 col-sm-6">
                <div className="form-group">

                  <AuctionFormikControl
                  className={`select-inp input-group mt-2 ${isFocused ? 'focused' : ''}`}
                    control="select"
                    
                    type="text"
                    label="Extend Deadline within Type"
                    name="extendDeadlineType"
                    options={extendOptions}
                  />
                   {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                  </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                  <div className="form-group">

                  <AuctionFormikControl
                  className={`form-control mt-2 DeadlineInp ${isFocused ? 'focused' : ''}`}
                    control="input"
                    type="text"
                    label="Extend Deadline within Value"
                    name="extendDeadlineValue"
                  />
                   {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                  </div>
</div>

<div className="col-md-4 col-sm-6">
<div className="form-group">

                  <AuctionFormikControl
                  className={`form-control mt-2 BidInp ${isFocused ? 'focused' : ''}`}
                    control="input"
                    type="text"
                    label="No of Times Bid Extend"
                    name="noofBid"
                  />
                   {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                  </div>
                  </div>
                </div>
                <br />
                {/* 6th row  */}
         
<div className="row mt-4">
<div className="col-md-2">
<div className="form-group">
                  <AuctionFormikControl
                  className={`mt-3 auction-mode ${isFocused ? 'focused' : ''}`}
                    control="select"
                    
                    type="text"
                    label="Auction Mode"
                    name="auctionMode"
                    options={viewsOptions}
                  />
                   {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                  </div>
</div>
<div className="col-md-2">
<div className="form-group">
<AuctionFormikControl
className={`mt-3 auction-mode ${isFocused ? 'focused' : ''}`}
                    control="select"
                  
                    type="text"
                    label="Record Status"
                    name="recordStatus"
                    options={activeOptions}
                  />
                   {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                  </div>
</div>
<div className="col-md-8 ">
  <div className="form-group">
                  <AuctionFormikControl
                  className={`form-control mt-3 description ${isFocused ? 'focused' : ''}`}
                    control="textarea"
                    type="text"
                    label="Description"
                    name="description"
                  />
                   {/* {isFocused && (
                    <small style={{ color: "red",fontSize:"px" }}>Required</small>
                )} */}
                  </div>
                  </div>
                </div>
                <br />
                <hr />



                <div className="d-flex justify-content-start">
                  <button
                    type="submit"
                    className="btn btn-outline-primary"
                    disabled={formik.isSubmitting}
                  >
                    {/*loading ? <>Loading..</> : <></>*/}
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>

      <div>
        <ToastContainer />
      </div>
    </>
  );
}

export default MasterUser;
