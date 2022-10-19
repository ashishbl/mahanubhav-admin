import React, { useEffect, useState, useContext } from "react";
import "../../assets/css/custom.css";
import { useDispatch, useSelector } from "react-redux";
import { imgType } from "../../utils/monthFrontpage";
import CalenderServices from "../../services/CalenderServices";
import { Card, CardBody, Label } from "@windmill/react-ui";
import notupl from "../../assets/img/notupl.png";
import { API_BASE_URL_DOC } from "../../config";
import { ToastContainer, notifyError, notifySuccess } from "../../utils/toast";
import Notupl from "../../assets/img/notupl.png";
import { RiDeleteBinLine } from "react-icons/ri";

const Frontpage = ({ data, getMonthData }) => {
  const myState = useSelector((state) => state.setDate);
  const { month, year } = myState;
  const monthImgs = data[month - 1];

  const handleChanges = async (e) => {
    let file = e.target.files[0];
    console.log(file);
    let name = e.target.name;
    let flsize = file.size;
    const fl = file.type;
    let convLow = fl.split("/")[1];
    let flext = convLow.toLowerCase();

    if (flext === "jpg" || flext === "png" || flext === "jpeg") {
      if (flsize < 102400) {
        if (!name || !file || !month || !year) {
          window.alert("somthing is missing");
        } else {
          let formData = new FormData();
          formData.append("type", name);
          formData.append("image", file);
          formData.append("month", month);
          formData.append("year", year);
          const res = await CalenderServices.monthUpload(formData);
          if (res.success) {
            getMonthData();
          }
        }
      } else {
        notifyError("PDF फाईलचा आकार 100kb पेक्षा मोठा आहे");
      }
    } else {
      notifyError("कृपया फक्त jpg, png, jpeg फॉरमॅट निवडा");
    }
  };

  const removeMonthAdvImg = async (e) => {
    const val = e.target.value;
    let formData = new FormData();
    formData.append("type", val);
    formData.append("image", null);
    formData.append("month", month);
    formData.append("year", year);
    const res = await CalenderServices.monthUpload(formData);
    console.log(res);
    if (res.message === "Error in processing") {
      getMonthData();
    }
  };

  return (
    <>
      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <CardBody className="cardBody">
          <div
            style={{
              width: "150%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="img-upload-main-div">
              <div className="file-and-rembtn">
                <div className="image-file">
                  <label style={{ marginTop: "10px", fontWeight: "bold" }}>
                    शीर्ष प्रतिमा
                  </label>
                  <input
                    // style={{ display: "none" }}
                    id="file-upload"
                    type="file"
                    name="top-image"
                    onChange={handleChanges}
                  />
                  <span style={{ marginTop: "10px" }}>
                    (फाइल आकार कमाल 100KB)
                  </span>
                </div>
                <div className="rem-btn">
                  <button value="top-image" onClick={removeMonthAdvImg}>
                    <RiDeleteBinLine />
                  </button>
                </div>
              </div>
              <div className="img-prev-div">
                {monthImgs.topImage ? (
                  <img
                    style={{ width: "100px" }}
                    src={API_BASE_URL_DOC + monthImgs.topImage}
                    alr="demoimg"
                  />
                ) : (
                  <>
                    <img
                      style={{ width: "100px" }}
                      src={notupl}
                      alr="demoimg"
                    />
                  </>
                )}
              </div>
            </div>

            <div className="img-upload-main-div">
              <div className="file-and-rembtn">
                <div className="image-file">
                  <label style={{ marginTop: "10px", fontWeight: "bold" }}>
                    तळाची प्रतिमा
                  </label>
                  <input
                    // style={{ display: "none" }}
                    id="file-upload"
                    type="file"
                    name="bottom-image"
                    onChange={handleChanges}
                  />
                  <span style={{ marginTop: "10px" }}>
                    (फाइल आकार कमाल 100KB)
                  </span>
                </div>
                <div className="rem-btn">
                  <button value="bottom-image" onClick={removeMonthAdvImg}>
                    <RiDeleteBinLine />
                  </button>
                </div>
              </div>
              <div className="img-prev-div">
                {monthImgs.bottomImage ? (
                  <img
                    style={{ width: "100px" }}
                    src={API_BASE_URL_DOC + monthImgs.bottomImage}
                    alr="demoimg"
                  />
                ) : (
                  <>
                    <img
                      style={{ width: "100px" }}
                      src={notupl}
                      alr="demoimg"
                    />{" "}
                  </>
                )}
              </div>
            </div>

            <div className="img-upload-main-div">
              <div className="file-and-rembtn">
                <div className="image-file">
                  <label style={{ marginTop: "10px", fontWeight: "bold" }}>
                    मागील पृष्ठ प्रतिमा
                  </label>
                  <input
                    // style={{ display: "none" }}
                    id="file-upload"
                    type="file"
                    name="backpage-image"
                    onChange={handleChanges}
                  />
                  <span style={{ marginTop: "10px" }}>
                    (फाइल आकार कमाल 100KB)
                  </span>
                </div>
                <div className="rem-btn">
                  <button value="backpage-image" onClick={removeMonthAdvImg}>
                    <RiDeleteBinLine />
                  </button>
                </div>
              </div>
              <div className="img-prev-div">
                {monthImgs.backPageImage ? (
                  <img
                    style={{ width: "100px" }}
                    src={API_BASE_URL_DOC + monthImgs.backPageImage}
                    alr="demoimg"
                  />
                ) : (
                  <>
                    <img
                      style={{ width: "100px" }}
                      src={notupl}
                      alr="demoimg"
                    />{" "}
                  </>
                )}
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <div className="img-upload-main-div">
              <div className="file-and-rembtn">
                <div className="image-file">
                  <label style={{ marginTop: "10px", fontWeight: "bold" }}>
                    जाहिरात बॉक्स 1
                  </label>
                  <input
                    // style={{ display: "none" }}
                    id="file-upload"
                    type="file"
                    name="blankbox-image-1"
                    onChange={handleChanges}
                  />
                  <span style={{ marginTop: "10px" }}>
                    (फाइल आकार कमाल 100KB)
                  </span>
                </div>
                <div className="rem-btn">
                  <button value="blankbox-image-1" onClick={removeMonthAdvImg}>
                    <RiDeleteBinLine />
                  </button>
                </div>
              </div>
              <div className="img-prev-div">
                {monthImgs.blankBoxImage1 ? (
                  <img
                    style={{ width: "100px" }}
                    src={API_BASE_URL_DOC + monthImgs.blankBoxImage1}
                    alr="demoimg"
                  />
                ) : (
                  <>
                    <img
                      style={{ width: "100px" }}
                      src={notupl}
                      alr="demoimg"
                    />{" "}
                  </>
                )}
              </div>
            </div>

            <div className="img-upload-main-div">
              <div className="file-and-rembtn">
                <div className="image-file">
                  <label style={{ marginTop: "10px", fontWeight: "bold" }}>
                    जाहिरात बॉक्स 2
                  </label>
                  <input
                    // style={{ display: "none" }}
                    id="file-upload"
                    type="file"
                    name="blankbox-image-2"
                    onChange={handleChanges}
                  />
                  <span style={{ marginTop: "10px" }}>
                    (फाइल आकार कमाल 100KB)
                  </span>
                </div>
                <div className="rem-btn">
                  <button value="blankbox-image-2" onClick={removeMonthAdvImg}>
                    <RiDeleteBinLine />
                  </button>
                </div>
              </div>
              <div className="img-prev-div">
                {monthImgs.blankBoxImage2 ? (
                  <img
                    style={{ width: "100px" }}
                    src={API_BASE_URL_DOC + monthImgs.blankBoxImage2}
                    alr="demoimg"
                  />
                ) : (
                  <>
                    <img
                      style={{ width: "100px" }}
                      src={notupl}
                      alr="demoimg"
                    />{" "}
                  </>
                )}
              </div>
            </div>

            <div className="img-upload-main-div">
              <div className="file-and-rembtn">
                <div className="image-file">
                  <label style={{ marginTop: "10px", fontWeight: "bold" }}>
                    जाहिरात बॉक्स 3
                  </label>
                  <input
                    // style={{ display: "none" }}
                    id="file-upload"
                    type="file"
                    name="blankbox-image-3"
                    onChange={handleChanges}
                  />
                  <span style={{ marginTop: "10px" }}>
                    (फाइल आकार कमाल 100KB)
                  </span>
                </div>
                <div className="rem-btn">
                  <button value="blankbox-image-3" onClick={removeMonthAdvImg}>
                    <RiDeleteBinLine />
                  </button>
                </div>
              </div>
              <div className="img-prev-div">
                {monthImgs.blankBoxImage3 ? (
                  <img
                    style={{ width: "100px" }}
                    src={API_BASE_URL_DOC + monthImgs.blankBoxImage3}
                    alr="demoimg"
                  />
                ) : (
                  <>
                    <img
                      style={{ width: "100px" }}
                      src={notupl}
                      alr="demoimg"
                    />{" "}
                  </>
                )}
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "",
              marginTop: "20px",
            }}
          ></div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <div className="img-upload-main-div">
              <div className="file-and-rembtn">
                <div className="image-file">
                  <label style={{ marginTop: "10px", fontWeight: "bold" }}>
                    जाहिरात बॉक्स 4
                  </label>
                  <input
                    // style={{ display: "none" }}
                    id="file-upload"
                    type="file"
                    name="blankbox-image-4"
                    onChange={handleChanges}
                  />
                  <span style={{ marginTop: "10px" }}>
                    (फाइल आकार कमाल 100KB)
                  </span>
                </div>
                <div className="rem-btn">
                  <button value="blankbox-image-4" onClick={removeMonthAdvImg}>
                    <RiDeleteBinLine />
                  </button>
                </div>
              </div>
              <div className="img-prev-div">
                {monthImgs.blankBoxImage4 ? (
                  <img
                    style={{ width: "100px" }}
                    src={API_BASE_URL_DOC + monthImgs.blankBoxImage4}
                    alr="demoimg"
                  />
                ) : (
                  <>
                    <img
                      style={{ width: "100px" }}
                      src={notupl}
                      alr="demoimg"
                    />{" "}
                  </>
                )}
              </div>
            </div>

            <div className="img-upload-main-div">
              <div className="file-and-rembtn">
                <div className="image-file">
                  <label style={{ marginTop: "10px", fontWeight: "bold" }}>
                    जाहिरात बॉक्स 5
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    name="blankbox-image-5"
                    onChange={handleChanges}
                  />
                  <span style={{ marginTop: "10px" }}>
                    (फाइल आकार कमाल 100KB)
                  </span>
                </div>
                <div className="rem-btn">
                  <button value="blankbox-image-5" onClick={removeMonthAdvImg}>
                    <RiDeleteBinLine />
                  </button>
                </div>
              </div>
              <div className="img-prev-div">
                {monthImgs.blankBoxImage5 ? (
                  <img
                    style={{ width: "100px" }}
                    src={API_BASE_URL_DOC + monthImgs.blankBoxImage5}
                    alr="demoimg"
                  />
                ) : (
                  <>
                    <img
                      style={{ width: "100px" }}
                      src={notupl}
                      alr="demoimg"
                    />{" "}
                  </>
                )}
              </div>
            </div>

            <div
              style={{ visibility: "hidden" }}
              className="img-upload-main-div"
            >
              <div className="file-and-rembtn">
                <div className="image-file">
                  <label style={{ marginTop: "10px", fontWeight: "bold" }}>
                    जाहिरात बॉक्स 4
                  </label>
                  <input
                    // style={{ display: "none" }}
                    id="file-upload"
                    type="file"
                    name="blankbox-image-4"
                    onChange={handleChanges}
                  />
                  <span style={{ marginTop: "10px" }}>
                    (फाइल आकार कमाल 100KB)
                  </span>
                </div>
                <div className="rem-btn">
                  <button value="blankbox-image-4" onClick={removeMonthAdvImg}>
                    <RiDeleteBinLine />
                  </button>
                </div>
              </div>
              <div className="img-prev-div">
                {monthImgs.blankBoxImage4 ? (
                  <img
                    style={{ width: "100px" }}
                    src={API_BASE_URL_DOC + monthImgs.blankBoxImage4}
                    alr="demoimg"
                  />
                ) : (
                  <>
                    <img
                      style={{ width: "100px" }}
                      src={notupl}
                      alr="demoimg"
                    />{" "}
                  </>
                )}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default Frontpage;
