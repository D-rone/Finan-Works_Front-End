import React, { useState } from "react";
import "../global/popUpStyle.css";
import quit from "../../../assets/quitX.svg";

import axios from "axios";
import { toast } from "react-toastify";

export default function AddSubChapForm({ toggle, update, chapterId }) {
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let [loading, setLoading] = useState(false);

  let addNewSubChapter = async () => {
    setLoading(true);
    if (name.length > 0 && description.length > 0) {
      try {
        let body = {
          nom: name,
          text: description,
          chapitreId: chapterId,
        };
        const response = await axios.post(
          "http://localhost:5000/api/v1/sousChapitre/admin",
          body,
          { withCredentials: true }
        );
        let data = response?.data?.sousChapitre;
        let newItem = {
          id: data?._id,
          name: data?.nom,
          articles: data?.article,
          isHidden: data?.status != "active",
          status: data?.status,
          description: data?.text,
          createdAt: new Date(data?.createdAt),
          realData: data,
        };
        update(newItem);
        toast.success("Sub-Chapter created successfully", {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } catch (error) {
        toast.error("" + error, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("It seems there's a missing data", {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  let updateName = (e) => {
    setName(e.target.value);
  };
  let updateDesc = (e) => {
    setDescription(e.target.value);
  };
  return (
    <div id="shade">
      <div id="popUpContainer" className="newSubChapter">
        <button onClick={toggle} id="quitBtn">
          <img src={quit} alt=""></img>
        </button>
        <h2>Add New Sub-Chapter</h2>
        <div className="new_chapitre_information">
          <div className="new_chapitre_information_titles">
            <div>Name :</div>
            <div>Description :</div>
          </div>

          <form action=" " className="new_chapitre_information_formaulaire">
            <input
              type="text"
              placeholder=""
              value={name}
              onChange={updateName}
            />
            <input
              type="text"
              placeholder=""
              value={description}
              onChange={updateDesc}
            />
          </form>
        </div>

        <button className="createSubChapter" onClick={addNewSubChapter}>
          Create
        </button>
        {loading ? (
          <div className="loader" id="secLoading">
            <div className="one">
              <svg
                width="162"
                height="148"
                viewBox="0 0 162 148"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M161.196 66.9707C161.196 75.4766 159.736 83.3477 156.816 90.584C153.96 97.8203 150.088 104.422 145.2 110.389C140.312 116.292 134.663 121.529 128.252 126.099C121.841 130.669 115.112 134.51 108.066 137.62C101.021 140.73 93.8477 143.079 86.5479 144.666C79.3115 146.253 72.4243 147.046 65.8862 147.046C56.2378 147.046 47.4146 145.428 39.4165 142.19C31.4819 139.017 24.6582 134.573 18.9453 128.86C13.2324 123.147 8.78906 116.355 5.61523 108.484C2.50488 100.613 0.949707 92.0122 0.949707 82.6812C0.949707 74.4927 2.37793 66.7803 5.23438 59.5439C8.1543 52.2441 12.0581 45.5791 16.9458 39.5488C21.897 33.4551 27.6099 27.9961 34.0845 23.1719C40.6226 18.3477 47.5098 14.2852 54.7461 10.9844C62.0459 7.62012 69.4727 5.04932 77.0264 3.27197C84.6436 1.49463 91.9751 0.605957 99.021 0.605957C105.369 0.605957 111.304 1.43115 116.826 3.08154C122.349 4.66846 127.395 6.95361 131.965 9.93701C136.599 12.8569 140.725 16.3799 144.343 20.5059C147.961 24.5684 151.008 29.0752 153.484 34.0264C156.023 38.9141 157.927 44.1509 159.197 49.7368C160.53 55.3228 161.196 61.0674 161.196 66.9707ZM75.4077 13.2695C67.1558 13.2695 59.9512 14.793 53.7939 17.8398C47.7002 20.8232 42.6221 24.8857 38.5596 30.0273C34.4971 35.1689 31.4502 41.1675 29.4189 48.0229C27.4512 54.8149 26.4673 62.0195 26.4673 69.6367C26.4673 79.2217 28.1494 88.0132 31.5137 96.0112C34.8779 104.009 39.48 110.896 45.3198 116.673C51.2231 122.449 58.1738 126.956 66.1719 130.193C74.1699 133.367 82.8345 134.954 92.1655 134.954C97.2437 134.954 101.846 134.129 105.972 132.479C110.098 130.828 113.779 128.606 117.017 125.813C120.254 122.957 123.047 119.656 125.396 115.911C127.808 112.103 129.775 108.072 131.299 103.819C132.822 99.5659 133.965 95.2178 134.727 90.7744C135.488 86.2676 135.869 81.8877 135.869 77.6348C135.869 68.6846 134.409 60.3057 131.489 52.498C128.569 44.6904 124.443 37.8984 119.111 32.1221C113.779 26.2822 107.4 21.6802 99.9731 18.3159C92.5464 14.9517 84.3579 13.2695 75.4077 13.2695Z"
                  fill="#2B6777"
                />
              </svg>
            </div>
            <div className="leftRight">
              <div className="two">
                <svg
                  width="157"
                  height="497"
                  viewBox="0 0 157 497"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M138.383 2.45323C143.918 1.02133 149.745 0.534799 155.863 0.996562C156.344 118.746 155.863 236.251 154.406 353.51C154.406 236.492 154.406 119.472 154.406 2.45323C149.06 2.45323 143.729 2.45323 138.383 2.45323Z"
                    fill="#2B6777"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M138.383 2.45679C143.729 2.45679 149.06 2.45679 154.406 2.45679C154.406 119.475 154.406 236.495 154.406 353.514C154.129 361.7 152.673 369.469 150.036 376.82C149.555 369.393 150.284 362.109 152.221 354.97C153.197 240.379 153.197 125.788 152.221 11.1968C150.488 9.64835 149.759 7.70516 150.036 5.37012C142.214 4.89234 134.435 5.37741 126.729 6.82679C119.941 9.94843 113.139 10.92 106.336 9.74012C116.445 5.57551 127.137 3.1487 138.383 2.45679Z"
                    fill="#2B6777"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M150.037 376.823C138.922 425.01 111.246 460.213 67.0068 482.431C60.9616 485.46 54.6397 487.645 48.0701 488.986C40.2915 488.745 32.5129 488.988 24.7634 489.715C17.7714 492.676 10.4881 493.89 2.9134 493.356C2.66577 376.822 2.9134 260.288 3.64174 143.756C4.2681 128.651 7.18144 114.084 12.3817 100.056C14.8872 101.589 16.3439 100.619 16.7517 97.1429C17.349 97.8086 18.0773 98.2951 18.9367 98.5996C19.7088 94.8137 19.9564 90.9302 19.6651 86.9462C24.9091 82.1859 29.046 76.6024 32.0468 70.1946C31.3767 69.5915 30.896 68.8632 30.5901 68.0096C32.7751 66.0547 33.7511 63.6279 33.5034 60.7262C52.1633 35.8434 76.446 18.8485 106.337 9.74286C113.139 10.9228 119.942 9.95117 126.73 6.82953C134.436 5.38014 142.215 4.89507 150.037 5.37286C149.76 7.7079 150.488 9.65109 152.222 11.1995C153.198 125.791 153.198 240.381 152.222 354.973C150.284 362.112 149.556 369.396 150.037 376.823Z"
                    fill="#2B6777"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.5034 60.7185C33.751 63.6202 32.775 66.047 30.59 68.0018C30.8959 68.8555 31.3766 69.5838 32.0467 70.1868C29.0459 76.5947 24.909 82.1781 19.665 86.9385C19.9563 90.9225 19.7087 94.806 18.9367 98.5919C18.0772 98.2874 17.3489 97.8009 16.7517 97.1352C16.3438 100.611 14.8871 101.581 12.3817 100.049C7.18137 114.076 4.26804 128.643 3.64167 143.749C2.91333 260.28 2.6657 376.814 2.91333 493.349C10.488 493.882 17.7713 492.668 24.7633 489.707C32.5128 488.98 40.2914 488.737 48.07 488.979C37.1013 493.764 25.448 496.192 13.11 496.262C8.74 496.262 4.37 496.262 0 496.262C0 381.185 0 266.109 0 151.032C0.859434 116.876 12.0321 86.771 33.5034 60.7185Z"
                    fill="#2B6777"
                  />
                </svg>
              </div>
              <div className="three">
                <svg
                  width="157"
                  height="497"
                  viewBox="0 0 157 497"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M138.535 2.53941C144.07 1.10751 149.897 0.62098 156.015 1.08274C156.496 118.832 156.015 236.337 154.559 353.596C154.559 236.578 154.559 119.558 154.559 2.53941C149.213 2.53941 143.881 2.53941 138.535 2.53941Z"
                    fill="#2B6777"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M138.535 2.53906C143.881 2.53906 149.212 2.53906 154.558 2.53906C154.558 119.558 154.558 236.577 154.558 353.596C154.282 361.782 152.825 369.551 150.188 376.903C149.708 369.475 150.436 362.192 152.373 355.053C153.349 240.461 153.349 125.871 152.373 11.2791C150.64 9.73063 149.912 7.78744 150.188 5.4524C142.366 4.97461 134.587 5.45968 126.882 6.90907C120.094 10.0307 113.291 11.0023 106.488 9.8224C116.598 5.65779 127.289 3.23098 138.535 2.53906Z"
                    fill="#2B6777"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M150.189 376.909C139.075 425.096 111.398 460.299 67.1591 482.518C61.1139 485.546 54.792 487.731 48.2224 489.073C40.4438 488.831 32.6652 489.074 24.9158 489.801C17.9238 492.762 10.6404 493.976 3.06575 493.443C2.81811 376.908 3.06575 260.374 3.79408 143.842C4.42045 128.737 7.33378 114.17 12.5341 100.142C15.0396 101.675 16.4962 100.705 16.9041 97.2291C17.5013 97.8948 18.2297 98.3813 19.0891 98.6858C19.8611 94.8999 20.1088 91.0164 19.8174 87.0324C25.0614 82.272 29.1984 76.6886 32.1991 70.2807C31.529 69.6777 31.0483 68.9494 30.7424 68.0957C32.9274 66.1409 33.9034 63.7141 33.6558 60.8124C52.3157 35.9296 76.5983 18.9347 106.489 9.82905C113.292 11.0089 120.094 10.0373 126.882 6.91571C134.588 5.46633 142.367 4.98126 150.189 5.45904C149.912 7.79408 150.641 9.73727 152.374 11.2857C153.35 125.877 153.35 240.468 152.374 355.059C150.437 362.198 149.708 369.482 150.189 376.909Z"
                    fill="#2B6777"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.6557 60.8086C33.9033 63.7103 32.9274 66.1371 30.7424 68.0919C31.0483 68.9455 31.529 69.6739 32.199 70.2769C29.1983 76.6848 25.0614 82.2682 19.8174 87.0286C20.1087 91.0126 19.8611 94.8961 19.089 98.6819C18.2296 98.3775 17.5013 97.891 16.904 97.2253C16.4962 100.701 15.0395 101.671 12.534 100.139C7.33371 114.166 4.42038 128.733 3.79401 143.839C3.06568 260.371 2.81805 376.904 3.06568 493.439C10.6403 493.972 17.9237 492.759 24.9157 489.797C32.6652 489.07 40.4438 488.827 48.2224 489.069C37.2537 493.854 25.6003 496.282 13.2624 496.352C8.89235 496.352 4.52235 496.352 0.152344 496.352C0.152344 381.275 0.152344 266.199 0.152344 151.122C1.01178 116.966 12.1844 86.8611 33.6557 60.8086Z"
                    fill="#2B6777"
                  />
                </svg>
              </div>
              <div className="four">
                <svg
                  width="157"
                  height="496"
                  viewBox="0 0 157 496"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M138.691 1.62535C144.227 0.193445 150.053 -0.293082 156.171 0.168682C156.652 117.918 156.171 235.423 154.715 352.682C154.715 235.664 154.715 118.644 154.715 1.62535C149.369 1.62535 144.037 1.62535 138.691 1.62535Z"
                    fill="#2B6777"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M138.691 1.625C144.037 1.625 149.369 1.625 154.715 1.625C154.715 118.643 154.715 235.663 154.715 352.682C154.438 360.868 152.981 368.637 150.345 375.989C149.864 368.561 150.592 361.278 152.53 354.139C153.506 239.547 153.506 124.957 152.53 10.365C150.796 8.81657 150.068 6.87337 150.345 4.53834C142.522 4.06055 134.744 4.54562 127.038 5.995C120.25 9.11664 113.447 10.0882 106.645 8.90834C116.754 4.74373 127.446 2.31692 138.691 1.625Z"
                    fill="#2B6777"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M150.345 375.987C139.231 424.174 111.554 459.377 67.3154 481.596C61.2702 484.624 54.9483 486.809 48.3787 488.151C40.6001 487.909 32.8215 488.152 25.072 488.879C18.08 491.841 10.7967 493.054 3.222 492.521C2.97436 375.986 3.222 259.453 3.95033 142.921C4.5767 127.815 7.49003 113.248 12.6903 99.2206C15.1958 100.753 16.6525 99.7828 17.0603 96.3072C17.6576 96.9729 18.3859 97.4594 19.2453 97.7639C20.0174 93.978 20.265 90.0945 19.9737 86.1106C25.2177 81.3502 29.3546 75.7668 32.3553 69.3589C31.6853 68.7558 31.2046 68.0275 30.8987 67.1739C33.0837 65.219 34.0597 62.7922 33.812 59.8905C52.4719 35.0077 76.7546 18.0128 106.645 8.90717C113.448 10.0871 120.251 9.11547 127.039 5.99384C134.745 4.54445 142.523 4.05938 150.345 4.53717C150.069 6.87221 150.797 8.8154 152.53 10.3638C153.506 124.956 153.506 239.546 152.53 354.137C150.593 361.277 149.865 368.56 150.345 375.987Z"
                    fill="#2B6777"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.8119 59.8906C34.0596 62.7923 33.0836 65.2191 30.8986 67.174C31.2045 68.0276 31.6852 68.7559 32.3553 69.359C29.3545 75.7668 25.2176 81.3502 19.9736 86.1106C20.2649 90.0946 20.0173 93.9781 19.2453 97.764C18.3858 97.4595 17.6575 96.973 17.0603 96.3073C16.6524 99.7829 15.1957 100.753 12.6903 99.2206C7.48996 113.248 4.57663 127.815 3.95026 142.921C3.22193 259.453 2.9743 375.986 3.22193 492.521C10.7966 493.054 18.0799 491.841 25.0719 488.879C32.8214 488.152 40.6 487.909 48.3786 488.151C37.4099 492.936 25.7566 495.364 13.4186 495.434C9.0486 495.434 4.6786 495.434 0.308594 495.434C0.308594 380.357 0.308594 265.281 0.308594 150.204C1.16803 116.048 12.3407 85.9431 33.8119 59.8906Z"
                    fill="#2B6777"
                  />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
