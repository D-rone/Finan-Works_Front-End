import React from "react";

function AnnounceItem({ announce, handleAnnounceClick }) {
  return (
    <>
      <tr
        className="announceItem"
        onClick={handleAnnounceClick}
        data-id={announce.id}
      >
        <td></td>
        <td className="nameCnt">
          <div className="nameContainer">
            {announce?.description.length > 40
              ? announce?.description.substring(0, 39) + "..."
              : announce?.description}
          </div>
        </td>
        <td className="date">
          <div>{announce.createdAt.toDateString()}</div>
        </td>
        <td className="date">
          <div>{announce.deadline.toDateString()}</div>
        </td>
        <td></td>
      </tr>
    </>
  );
}

export default function Announce({ announces, handleAnnounceClick }) {
  return (
    <>
      {announces.length == 0 ? (
        <div id="emptyList">This list seems to be empty!</div>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th style={{ height: "0px" }} width="4%"></th>
                <th style={{ height: "0px" }} width="40%"></th>
                <th style={{ height: "0px" }} width="29%"></th>
                <th style={{ height: "0px" }} width="29%"></th>
              </tr>
            </thead>
            <tbody>
              {announces.map((announce) => (
                <AnnounceItem
                  key={announce.id}
                  announce={announce}
                  handleAnnounceClick={handleAnnounceClick}
                />
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
