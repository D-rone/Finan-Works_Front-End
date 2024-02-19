import React from "react";

function EmployeeItem({ employee, checkHandle, handleProfileClick }) {
  return (
    <>
      <tr>
        <td></td>
        <td>
          <input
            className="checkbox"
            type="checkbox"
            name={employee.id}
            checked={employee.isChecked}
            onChange={checkHandle}
          />
        </td>
        <td
          className="nameCnt"
          onClick={handleProfileClick}
          data-uid={employee.id}
        >
          <div className="nameContainer">
            {employee.name.length > 30
              ? employee.name.substring(0, 29) + "..."
              : employee.name}
          </div>
        </td>
        <td className="emailContainer">
          {employee.email.length > 30
            ? employee.email.substring(0, 29) + "..."
            : employee.email}
        </td>
        <td className="employeeType">
          <div>{employee.type}</div>
        </td>
        <td></td>
      </tr>
    </>
  );
}

export default function Employee({ checkHandle, users, handleProfileClick }) {
  return (
    <>
      {users.length == 0 ? (
        <div id="emptyList">This list seems to be empty!</div>
      ) : (
        <table id="listTable">
          <thead>
            <tr>
              <th style={{ height: "0px" }} width="4%"></th>
              <th style={{ height: "0px" }} width="9%"></th>
              <th style={{ height: "0px" }} width="32%"></th>
              <th style={{ height: "0px" }} width="30%"></th>
              <th style={{ height: "0px" }} width="23%"></th>
              <th style={{ height: "0px" }} width="2%"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((employee) => (
              <EmployeeItem
                key={employee.id}
                employee={employee}
                checkHandle={checkHandle}
                handleProfileClick={handleProfileClick}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
