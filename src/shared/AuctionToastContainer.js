import React from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AuctionToastContainer() {
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
      style: {
        background: "green",
        color: "red",
        fontSize: "16px",
        width: "600px",
        height: "50px",
      },
    });
  };
  return <div>showToastMessage</div>;
}

export default AuctionToastContainer;
