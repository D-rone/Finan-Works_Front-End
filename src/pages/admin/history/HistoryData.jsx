import React from "react";
import "../global/popUpStyle.css";
import quit from "../../../assets/quitX.svg";
import { useState } from "react";
import PendingRequest, {
  AcceptedRequestForm,
  RejectRequestForm,
} from "./status/PendingRequest";
import AcceptedRequest, { PayRequestForm } from "./status/AcceptedRequest";
import RejectedRequest from "./status/RejectedRequest";
import PaidRequest from "./status/PaidRequest";

export default function HistoryData({ data, handleRequestClick, budgets }) {
  let SelectPopUp = ({
    status,
    data,
    toggleAccept,
    togglePay,
    toggleReject,
  }) => {
    switch (status) {
      case "pending":
        return (
          <PendingRequest
            data={data}
            toggleReject={toggleReject}
            toggleAccept={toggleAccept}
          />
        );
        break;
      case "rejected":
        return <RejectedRequest data={data} />;
        break;
      case "accepted":
        return <AcceptedRequest data={data} togglePay={togglePay} />;
        break;
      case "paid":
        return <PaidRequest data={data} />;
    }
  };
  let [rejectPopUp, setRejetPopUp] = useState(false);
  let [acceptedPopUp, setAcceptedPopUp] = useState(false);
  let [payPopUp, setPayPopUp] = useState(false);
  let toggleReject = () => {
    setRejetPopUp((prev) => !prev);
  };
  let toggleAccept = () => {
    setAcceptedPopUp((prev) => !prev);
  };
  let togglePay = () => {
    setPayPopUp((prev) => !prev);
  };
  return (
    <div id="shade">
      <div id="popUpContainer">
        <button onClick={handleRequestClick} id="quitBtn">
          <img src={quit} alt="" />
        </button>
        {rejectPopUp ? (
          <>
            <RejectRequestForm
              id={data.id}
              toggleReject={toggleReject}
              quitPopUp={handleRequestClick}
            />
          </>
        ) : acceptedPopUp ? (
          <>
            <AcceptedRequestForm
              id={data.id}
              toggleAccept={toggleAccept}
              quitPopUp={handleRequestClick}
            />
          </>
        ) : payPopUp ? (
          <PayRequestForm
            amount={data.amount}
            id={data.id}
            togglePay={togglePay}
            quitPopUp={handleRequestClick}
          />
        ) : (
          ""
        )}
        <h2>Request Information</h2>
        <SelectPopUp
          status={data?.status}
          data={data}
          toggleReject={toggleReject}
          toggleAccept={toggleAccept}
          togglePay={togglePay}
        />
      </div>
    </div>
  );
}
