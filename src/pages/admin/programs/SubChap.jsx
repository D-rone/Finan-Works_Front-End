import React from "react";

function SubChapterItem({ subChapter, checkHandle, handleSubChapterClick }) {
  return (
    <>
      <tr id={subChapter.isHidden ? "hiddenSubChp" : ""}>
        <td></td>
        <td>
          <input
            className="checkbox"
            type="checkbox"
            name={subChapter.id}
            checked={subChapter.isHidden}
            onChange={checkHandle}
          />
        </td>
        <td className="nameCnt">
          <div
            className="nameContainer subChapterName"
            data-subchaptername={subChapter.name}
            onClick={handleSubChapterClick}
          >
            {subChapter.name.length > 23
              ? subChapter.name.substring(0, 22) + "..."
              : subChapter.name}
          </div>
        </td>

        <td>
          <div>
            {subChapter.description.length > 30
              ? subChapter.description.substring(0, 29) + "..."
              : subChapter.description}
          </div>
        </td>

        <td>
          <div>{subChapter.createdAt.toDateString()}</div>
        </td>
        <td></td>
      </tr>
    </>
  );
}

export default function SubChapter({
  checkHandle,
  subChapters,
  handleSubChapterClick,
}) {
  return (
    <>
      <tbody>
        {subChapters.map((subChapter) => (
          <SubChapterItem
            key={subChapter.id}
            subChapter={subChapter}
            checkHandle={checkHandle}
            handleSubChapterClick={handleSubChapterClick}
          />
        ))}
      </tbody>
    </>
  );
}
