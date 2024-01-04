import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link, NavLink, Outlet, Route, Routes, useNavigate } from "react-router-dom";

// import Master from "./Modal/MasterModalForm";
// import Details from './modal/Details';
// import StockFile from './modal/StockFile';
import "../components/css1/header.css";
import Details from "./MyOwnFolder/Modal/Details";
import StockFile from "./MyOwnFolder/Modal/StockFile";
import MasterModalForm from "./MyOwnFolder/Modal/MasterModalForm";
// import "../components/got.css"
const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleNavigation = (path) => {
    navigate(path);
    handleClose();
  };
  const activeState = ({ isActive, isPending }) => {
    return {
    color: isPending ? "rgb(253 230 138)" : "",
    backgroundColor: isActive ? "rgb(69 26 3)" : "",
    fontWeight: isActive ? "bold" : ""
    };
  };

  return (
    <div>
      <div className="row header-background">
        <div className="row  mobile">
          <div className="col-sm-4 dashboard">
            <div className="page-header float-left">
              <div className="page-title">
                <p className="dash-para">Dashboard</p>
              </div>
            </div>
          </div>
          <div className="col-sm-8 d-flex justify-content-end align-content-center auction-btn">
            <Button className="add-auction" onClick={handleShow}>
              Add Auction
            </Button>
          </div>
        </div>

        {/* modal section  */}
        <div style={{ overflowY: "hidden" }}>
          <Modal
            show={show}
            onHide={handleClose}
            className="modal-dialog modal-lg modal-sm modal-md  modal-xl"
            style={{ position: "fixed", top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Auction details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="yup">
              <NavLink to="/masterModalForm" 
          
              className="border-0 bg-white text-black  text-decoration-none m-3 hover-effect" style={activeState} >


    Master
</NavLink>
<NavLink to="/details" className="border-0 bg-white text-black text-decoration-none m-3 hover-effect" style={activeState}  >
    Details
</NavLink>
<NavLink to="/stockfile" className="border-0 bg-white text-black text-decoration-none m-3 hover-effect" style={activeState} >
    Stock File Upload
</NavLink>
 
              </div>
              <hr />
              <div>

                <Routes>
                  <Route path="/masterModalForm" element={<MasterModalForm />} />
                  <Route path="/details" element={<Details />} />
                  <Route path="/stockfile" element={<StockFile />} />
                </Routes>
                <div className="d-flex justify-content-end mt-3">
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                </div>
              </div>
            </Modal.Body>

            <Modal.Footer></Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Header;
