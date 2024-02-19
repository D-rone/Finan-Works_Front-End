import React from "react";

import rejectedLogo from "../../../assets/rejected.svg";
import pendingLogo from "../../../assets/pending.svg";
import acceptedUnpaid from "../../../assets/acceptedUnpaid.svg";
import acceptedPaid from "../../../assets/acceptedPaid.svg";

let setStatusLogo = (status) => {
  let logo;
  switch (status) {
    case "rejected":
      logo = rejectedLogo;
      break;
    case "pending":
      logo = pendingLogo;
      break;
    case "paid":
      logo = acceptedPaid;
      break;
    case "accepted":
      logo = acceptedUnpaid;
      break;
  }
  return <img src={logo} alt="" />;
};

function RequestItem({ request, handleRequestClick }) {
  return (
    <>
      <tr
        className="requestItem"
        onClick={handleRequestClick}
        data-id={request.id}
      >
        <td></td>
        <td className="nameCnt">
          <div className="nameContainer">
            {request?.employeeName?.length > 23
              ? request.employeeName.substring(0, 22) + "..."
              : request.employeeName}
          </div>
        </td>
        <td className="employeeType">
          <div>{request?.employeeType}</div>
        </td>
        <td id="alignCenterTd">
          <div>{request?.createdAt.toDateString()}</div>
        </td>
        <td id="alignCenterTd">
          <div>{request?.amount}&nbsp;DA</div>
        </td>
        <td id="alignCenterTd">
          <div>{setStatusLogo(request?.status)}</div>
        </td>
      </tr>
    </>
  );
}

export default function Request({ requests, handleRequestClick }) {
  return (
    <>
      {requests.length == 0 ? (
        <div id="emptyList">This list seems to be empty!</div>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th style={{ height: "0px" }} width="4%"></th>
                <th style={{ height: "0px" }} width="23.7%"></th>
                <th style={{ height: "0px" }} width="13.8%"></th>
                <th style={{ height: "0px" }} width="21%"></th>
                <th style={{ height: "0px" }} width="13.8%"></th>
                <th style={{ height: "0px" }} width="24.7%"></th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <RequestItem
                  key={request.id}
                  request={request}
                  handleRequestClick={handleRequestClick}
                />
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
