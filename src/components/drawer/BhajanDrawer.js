import React, { useState, useContext, useEffect } from "react";
import Scrollbars from "react-custom-scrollbars";
import { notifyError, notifySuccess, ToastContainer } from "../../utils/toast";
import { useDispatch, useSelector } from "react-redux";
import Title from "../form/Title";
import InputArea from "../form/InputArea";
import LabelArea from "../form/LabelArea";
import DrawerButton from "../form/DrawerButton";
import Uploader from "../bhajan-uploader/Uploader";
import { Input } from "@windmill/react-ui";
import CalenderServices from "../../services/CalenderServices";
import { SidebarContext } from "../../context/SidebarContext";
import MusicLogo from "../../assets/img/musicLogo.png";
import Bhajan from "../../pages/Bhajan";

const BookDrawer = ({ id }) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);
  const myState = useSelector((state) => state.setDate);
  const { month, year } = myState;
  const [book, setBhajan] = useState({ title: "", description: "" });
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState();

  useEffect(() => {
    if (id) {
      CalenderServices.getBhajanById(id)
        .then((res) => {
          if (res) setBhajan(res.data);
        })
        .catch((err) => {
          notifyError("There is a server error!");
        });
    }
  }, [id, setIsUpdate]);

  useEffect(() => {
    setBhajan({ ...book, title: "", description: "" });
  }, [closeDrawer]);

  const onSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("bhajan", file);
    formData.append("title", book?.title);
    formData.append("description", book?.description);
    formData.append("type", "bhajan");
    if (id) {
      formData.append("_id", id);
      CalenderServices.updateBhajan(formData)
        .then((res) => {
          notifySuccess("Bhajan update successfully");
          setIsUpdate(true);
          closeDrawer();
        })
        .catch((err) => notifyError(err.message));
    } else {
      CalenderServices.createBhajan(formData)
        .then((res) => {
          notifySuccess("Bhajan added successfully");
          setIsUpdate(true);
          closeDrawer();
        })
        .catch((err) => notifyError(err.message));
    }
  };

  // const handleChanges = (e) => {
  //   let val = e.target.files[0];
  //   setFileName(val);
  // };

  return (
    <>
      <ToastContainer />
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <>
            <Title
              title="भजन अपडेट करा"
            // description="Updated your Bhanjan and necessary information from here"
            />
            <>
              <span style={{ fontSize: "12px", marginTop: "10px" }}>
                निवडलेला महिना
                <span style={{ fontWeight: "bold" }}>&nbsp;{month}</span>
                आणि वर्ष
                <span style={{ fontWeight: "bold" }}>&nbsp;{year}</span>
                आहे.
              </span>
            </>
          </>
        ) : (
          <>
            <Title title="भजन जोडा" />
            <>
              <span style={{ fontSize: "12px", marginTop: "10px" }}>
                निवडलेला महिना
                <span style={{ fontWeight: "bold" }}>&nbsp;{month}</span>
                आणि वर्ष
                <span style={{ fontWeight: "bold" }}>&nbsp;{year}</span>
                आहे.
              </span>
            </>
          </>
        )}
      </div>
      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={onSubmit}>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="भजन" />
              <div className="col-span-8 sm:col-span-4">
                {/* <Uploader setFile={setFile} /> */}
                <input onChange={(e) => {
                  setFile(e.target.files[0]);
                }} type="file" />
                {fileName ? (
                  <>
                    <div
                      style={{
                        width: "100%",
                        height: "60px",
                        display: "flex",
                        alignItems: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <img style={{ width: "60px" }} src={MusicLogo}></img>
                      <span style={{ marginLeft: "10px" }}>{fileName}</span>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="शीर्षक" />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  onChange={(e) => {
                    setBhajan({ ...book, title: e.target.value });
                  }}
                  value={book.title ? book?.title : ""}
                  type={"text"}
                  placeholder={"भजनाचे शीर्षक"}
                  name={"title"}
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="वर्णन" />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  onChange={(e) => {
                    setBhajan({ ...book, description: e.target.value });
                  }}
                  value={book.description ? book?.description : ""}
                  type={"text"}
                  placeholder={"भजनाचे वर्णन"}
                  name={"description"}
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                />
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="भजन" />
        </form>
      </Scrollbars>
    </>
  );
};

export default BookDrawer;
