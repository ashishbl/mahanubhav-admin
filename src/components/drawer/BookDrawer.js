import React, { useState, useContext, useEffect } from "react";
import Scrollbars from "react-custom-scrollbars";
import { notifyError, notifySuccess, ToastContainer } from "../../utils/toast";
import { useDispatch, useSelector } from "react-redux";
import Pdf from "../../assets/img/pdf.png";
import Title from "../form/Title";
import InputArea from "../form/InputArea";
import LabelArea from "../form/LabelArea";
import DrawerButton from "../form/DrawerButton";
import Uploader from "../pdf-uploader/Uploader";
import { Input } from "@windmill/react-ui";
import CalenderServices from "../../services/CalenderServices";
import { SidebarContext } from "../../context/SidebarContext";

const BookDrawer = ({ id }) => {
  const myState = useSelector((state) => state.setDate);
  const { month, year } = myState;
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);
  const [book, setBook] = useState({ title: "", description: "" });
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState();
  const [formt, setFormt] = useState();
  const [permission, setPermission] = useState(false);

  if (file) {
  }

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, setIsUpdate]);

  useEffect(() => {
    setBook({ ...book, title: "", description: "" });
  }, [closeDrawer]);

  const onSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("pdf", file);
    formData.append("title", book?.title);
    formData.append("description", book?.description);
    formData.append("type", "pdf");
    if (id) {
      formData.append("_id", id);
      CalenderServices.updateBook(formData)
        .then((res) => {
          notifySuccess("Book update successfully");
          setIsUpdate(true);
          closeDrawer();
          setBook({ ...book, title: "", description: "" });
          setFileName("");
        })
        .catch((err) => notifyError(err.message));
    } else {
      if (formt === "pdf") {
        CalenderServices.addBook(formData)
          .then((res) => {
            notifySuccess("Book added successfully");
            setIsUpdate(true);
            closeDrawer();
            setBook({ ...book, title: "", description: "" });
            setFileName("");
            setFile(null);
          })
          .catch((err) => notifyError(err.message));
      } else {
        notifyError("निवडलेली फाईल  PDF नाही. कृपया PDF निवडा ");
      }
    }
  };

  const getObjURL = (file) => {
    // window.alert("am called");
    if (file) {
      console.log(file);
      const fl = file.path;
      const flext = fl.split(".")[1];
      console.log(flext);
      if (flext === "pdf") {
        setPermission(true);
        setFormt(fl.split(".")[1]);
        setFileName(file.path);
      } else {
      }
    }
  };

  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <>
            <Title title="पुस्तक अपडेट करा" />
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
            <Title title="पुस्तके जोडा" />
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
              <LabelArea label="पुस्तक" />
              <div className="col-span-8 sm:col-span-4">
                <Uploader setFile={setFile} getObjURL={getObjURL} />
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
                      <img style={{ width: "60px" }} src={Pdf}></img>
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
                    setBook({ ...book, title: e.target.value });
                  }}
                  value={book?.title}
                  type={"text"}
                  placeholder={"पुस्तकाचे शीर्षक"}
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
                    setBook({ ...book, description: e.target.value });
                  }}
                  value={book?.description}
                  type={"text"}
                  placeholder={"पुस्तकाचे वर्णन"}
                  name={"description"}
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                />
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="पुस्तक" />
        </form>
      </Scrollbars>
    </>
  );
};

export default BookDrawer;
