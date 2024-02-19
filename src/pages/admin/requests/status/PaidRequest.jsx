import React from "react";
import paidLogo from "../../../../assets/acceptedPaid.svg";

export default function PaidRequest({ data }) {
  return (
    <>
      <div className="user_description_box">
        <div className="information_user_box">
          <div className="zero">
            <div> Employee&nbsp;Name&nbsp;:</div>
            <div className="second_one requestEmployeeName">
              {data?.employeeName}
            </div>
          </div>
          <div className="one">
            <div>Employee&nbsp;Type&nbsp;: </div>
            <div className="second_one">
              <div>{data?.employeeType}</div>
            </div>
          </div>
          <div className="two">
            <div>Demanded Amount&nbsp;: </div>
            <div className="second_one">{data?.amount}&nbsp;DA</div>
          </div>

          <div className="three">
            <div> Provided Files&nbsp;:</div>
            <div className="second_one">
              {data?.files?.length > 0
                ? data?.files.reduce((prev, curr, idx) => {
                     if (idx == 1) return `${curr.substring(curr.indexOf("/"))}`;
                    else
                      return `${prev} , ${curr.substring(curr.indexOf("/"))}`;
                  })
                : "No files"}
            </div>
          </div>
          <div className="three">
            <div> Request&nbsp;Date&nbsp;:</div>
            <div className="second_one">{data?.createdAt?.toGMTString()}</div>
          </div>

          <div className="two">
            <div>Given Amount&nbsp;: </div>
            <div className="second_one">{data?.amount}&nbsp;DA</div>
          </div>

          <div className="four">
            <div> Status&nbsp;:</div>
            <div className="second_one">
              <img src={paidLogo} alt={data?.status} />
            </div>
          </div>
          <div className="five">
            <div> Status&nbsp;Update&nbsp;Date&nbsp;:</div>
            <div className="second_one">{data?.updatedAt?.toGMTString()}</div>
          </div>

          <div className="reject_six">
            <div>Description&nbsp;: </div>
          </div>
        </div>
      </div>
      <div className="description_box">{data.description || "None"} </div>
    </>
  );
}
