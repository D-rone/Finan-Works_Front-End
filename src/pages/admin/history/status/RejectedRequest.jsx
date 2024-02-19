import React from "react";
import rejectedLogo from "../../../../assets/rejected.svg";

export default function RejectedRequest({ data }) {
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
            <div>Amount&nbsp;: </div>
            <div className="second_one">{data?.amount}&nbsp;DA</div>
          </div>
          <div className="three">
            <div> Provided Files&nbsp;:</div>
            <div className="second_one">
              {data?.files?.length > 0
                ? data?.files.reduce((prev, curr, idx) => {
                    if (idx == 1) return `${curr}`;
                    else return `${prev} , ${curr}`;
                  })
                : "No files"}
            </div>
          </div>
          <div className="three">
            <div> Request&nbsp;Date&nbsp;:</div>
            <div className="second_one">{data?.createdAt?.toGMTString()}</div>
          </div>
          <div className="four">
            <div> Status&nbsp;:</div>
            <div className="second_one">
              <img src={rejectedLogo} alt={data?.status} />
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

      <div className="user_description_box">
        <div className="information_user_box">
          <div className="reject_six">
            <div> Reason&nbsp;Of&nbsp;Reject&nbsp;: </div>
          </div>
        </div>
      </div>
      <div className="description_box">{data.realData?.motif || "None"} </div>
    </>
  );
}
