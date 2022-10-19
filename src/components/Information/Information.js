import React, { useEffect, useState } from "react";
import {
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  Button,
} from "@windmill/react-ui";
import { API_BASE_URL_DOC } from "../../config";
//internal import
import MainModal from "../modal/MainModal";
import MainDrawer from "../drawer/MainDrawer";
import BookDrawer from "../drawer/BookDrawer";
import useToggleDrawer from "../../hooks/useToggleDrawer";
import EditDeleteButton from "../table/EditDeleteButton";
import moment from "moment";
import PDFIcon from "../../assets/img/pdf.png";
import { useSelector } from "react-redux";
import CalenderServices from "../../services/CalenderServices";
import { ToastContainer, notifySuccess, notifyError } from "../../utils/toast";

const Information = ({ panchangImg, getPanchangImage, prevData }) => {
  const [ref, setRef] = useState(false);
  const [fieldVal, setFieldVal] = useState({
    marathi_title: "",
    hindi_title: "",
  });
  const [panchangFile, setPanchangFile] = useState();
  console.log(fieldVal);
  const myState = useSelector((state) => state.setDate);
  const { month, year } = myState;
  const { serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  const uploadPanchang = async (e) => {
    const { marathi_title, hindi_title } = fieldVal;
    if (!panchangFile || !month || !year) {
      window.alert("somthing is missing");
    } else {
      let formData = new FormData();
      formData.append("type", "panchang-image");
      formData.append("image", panchangFile);
      formData.append("month", month);
      formData.append("year", year);
      formData.append("marathi_title", marathi_title);
      formData.append("hindi_title", hindi_title);
      const res = await CalenderServices.monthUpload(formData);
      if (res.success) {
        getPanchangImage();
        notifySuccess("Panchang update successfully");
        setPanchangFile(null);
        setRef(true);
      }
    }
  };
  let name;
  let value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setFieldVal({ ...fieldVal, [name]: value });
  };

  const uploadPanchangFile = (e) => {
    const file = e.target.files[0];
    setPanchangFile(file);
  };

  useEffect(() => {
    if (!ref) {
      setRef(true);
    }
    getPanchangImage();
    if (prevData) {
      setFieldVal({
        ...fieldVal,
        marathi_title: prevData.marathi_title,
        hindi_title: prevData.hindi_title,
      });
    }
    setRef(false);
  }, [ref]);

  return (
    <>
      <ToastContainer />
      <div className="info-div">
        <div className="info-child">
          <div className="info-group-main">
            <div className="info-group">
              <label>शीर्षक</label>
              <input
                name="marathi_title"
                onChange={handleChange}
                value={fieldVal.marathi_title}
                type="text"
                placeholder="शीर्षक प्रविष्ट करा"
              />
            </div>

            <div className="info-group">
              <label style={{ visibility: "hidden" }}>शीर्षक</label>
              <input
                name="hindi_title"
                onChange={handleChange}
                value={fieldVal.hindi_title}
                type="text"
                placeholder="शीर्षक प्रविष्ट करा"
              />
            </div>
          </div>

          <div style={{ marginTop: "20px" }} className="info-group">
            <label>पंचांग प्रतिमा</label>
            <input onChange={uploadPanchangFile} type="file"></input>
            {panchangImg ? (
              <>
                <img
                  style={{
                    width: "20%",
                    marginTop: "20px",
                    borderRadius: "10px",
                  }}
                  src={API_BASE_URL_DOC + panchangImg}
                  alt="panchang"
                />
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <Button onClick={uploadPanchang} style={{ marginTop: "40px" }}>
          सबमिट
        </Button>
      </div>
    </>
  );
};

export default Information;
