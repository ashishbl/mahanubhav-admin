import React, { useState, useContext, useEffect } from "react";
import Scrollbars from "react-custom-scrollbars";
import { notifyError, notifySuccess, ToastContainer } from "../../utils/toast";
import { useDispatch, useSelector } from "react-redux";
import Title from "../form/Title";
import InputArea from "../form/InputArea";
import LabelArea from "../form/LabelArea";
import DrawerButton from "../form/DrawerButton";
import Uploader from "../pdf-uploader/Uploader";
import { Input } from "@windmill/react-ui";
import CalenderServices from "../../services/CalenderServices";
import { SidebarContext } from "../../context/SidebarContext";

const NotificationDrawer = ({ id }) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);
  const myState = useSelector((state) => state.setDate);
  const { month, year } = myState;
  const [book, setBook] = useState({ name: "", body: "", title: "" });
  console.log(book);
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (id) {
      CalenderServices.getBookById(id)
        .then((res) => {
          if (res) setBook(res.data);
        })
        .catch((err) => {
          notifyError("There is a server error!");
        });
    }
  }, [id, isDrawerOpen]);

  const onSubmit = (event) => {
    event.preventDefault();
    const { name, body, title } = book;
    // console.log(formData);
    if (id) {
      console.log(title);
      //   formData.append("_id", id);
      //   CalenderServices.updateBook(formData)
      //     .then((res) => {
      //       setIsUpdate(true);
      //       closeDrawer();
      //     })
      //     .catch((err) => notifyError(err.message));
    } else {
      CalenderServices.sendNotification(name, body, title)
        .then((res) => {
          notifySuccess("Notification added successfully");
          setIsUpdate(true);
          closeDrawer();
        })
        .catch((err) => notifyError(err.message));
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <>
            <Title title="सूचना अपडेट करा" />
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
            <Title title="Add Notification" />
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
            {/* <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Books" />
              <div className="col-span-8 sm:col-span-4">
                <Uploader setFile={setFile} />
              </div>
            </div> */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="शीर्षक" />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  onChange={(e) => {
                    setBook({ ...book, title: e.target.value });
                  }}
                  defaultValue={book?.title}
                  type={"text"}
                  placeholder={"सूचनेचे शीर्षक"}
                  name={"title"}
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="बॉडी" />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  onChange={(e) => {
                    setBook({ ...book, body: e.target.value });
                  }}
                  defaultValue={book?.description}
                  type={"text"}
                  placeholder={"बॉडी भरा"}
                  name={"description"}
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="नाव" />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  onChange={(e) => {
                    setBook({ ...book, name: e.target.value });
                  }}
                  defaultValue={book?.description}
                  type={"text"}
                  placeholder={"नाव भरा"}
                  name={"description"}
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                />
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="notification" />
        </form>
      </Scrollbars>
    </>
  );
};

export default NotificationDrawer;
