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
import { Input, Select, Textarea } from "@windmill/react-ui";
import CalenderServices from "../../services/CalenderServices";
import { SidebarContext } from "../../context/SidebarContext";

const MakeadminDrawer = ({ id }) => {
  const myState = useSelector((state) => state.setDate);
  const { month, year } = myState;
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  console.log(userInfo);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState();
  const [formt, setFormt] = useState();
  const [permission, setPermission] = useState(false);

  if (file) {
  }

  useEffect(() => {
    if (id) {
      CalenderServices.getuserInfoById(id)
        .then((res) => {
          if (res) setUserInfo(res.data);
        })
        .catch((err) => {
          notifyError("There is a server error!");
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, setIsUpdate]);

  useEffect(() => {
    setUserInfo({ ...userInfo, title: "", description: "" });
  }, [closeDrawer]);

  let name;
  let value;
  const handleChanges = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onSubmit = (event) => {
    const { name, email, phone, password, role } = userInfo;
    event.preventDefault();
    if (id) {
      CalenderServices.updateuserInfo(id, name, email, phone, password, role)
        .then((res) => {
          notifySuccess("userInfo update successfully");
          setIsUpdate(true);
          closeDrawer();
          setUserInfo({ ...userInfo, title: "", description: "" });
          setFileName("");
        })
        .catch((err) => notifyError(err.message));
    } else {
      CalenderServices.createSubAdmin(name, email, phone, password, role)
        .then((res) => {
          notifySuccess("??????????????? ???????????? ???????????? ????????? ");
          setIsUpdate(true);
          closeDrawer();
          setUserInfo({
            ...userInfo,
            name: "",
            email: "",
            phone: "",
            password: "",
            role: "",
          });
        })
        .catch((err) => notifyError(err.message));
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
            <Title title="?????????????????? ??????????????????" />
            <>
              <span style={{ fontSize: "12px", marginTop: "10px" }}>
                ???????????????????????? ???????????????
                <span style={{ fontWeight: "bold" }}>&nbsp;{month}</span>
                ????????? ????????????
                <span style={{ fontWeight: "bold" }}>&nbsp;{year}</span>
                ?????????.
              </span>
            </>
          </>
        ) : (
          <>
            <Title title="?????????????????? ??????????????????" />
            <>
              <span style={{ fontSize: "12px", marginTop: "10px" }}>
                ???????????????????????? ???????????????
                <span style={{ fontWeight: "bold" }}>&nbsp;{month}</span>
                ????????? ????????????
                <span style={{ fontWeight: "bold" }}>&nbsp;{year}</span>
                ?????????.
              </span>
            </>
          </>
        )}
      </div>
      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={onSubmit}>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <div className="col-span-8 sm:col-span-4"></div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="??????????????????" />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  onChange={handleChanges}
                  //   value={userInfo?.title}
                  type={"text"}
                  placeholder={"?????????????????? ???????????????????????? ?????????"}
                  name="name"
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="???????????????" />
              <div className="col-span-8 sm:col-span-4">
                <Input
                  onChange={handleChanges}
                  //   value={userInfo?.description}
                  type={"text"}
                  placeholder={"??????????????? ???????????????????????? ?????????"}
                  name="email"
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="??????????????????" />
              <div className="col-span-8 sm:col-span-4">
                <Select
                  onChange={handleChanges}
                  //   value={userInfo?.description}
                  type={"text"}
                  placeholder={"?????????????????? ???????????????????????? ?????????"}
                  name="role"
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                >
                  <option selected>?????????????????? ?????????????????? ??????????????? </option>
                  <option value="mahanubhav-admin">????????????????????? ????????????</option>
                  <option value="ecommerce-admin">i ??????????????? </option>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="????????????" />
              <div className="col-span-8 sm:col-span-4">
                <Textarea
                  style={{ maxHeight: "200px", minHeight: "50px" }}
                  onChange={handleChanges}
                  type={"text"}
                  placeholder={"????????????????????? ???????????????????????? ?????????"}
                  name="password"
                  className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                />
              </div>
            </div>
          </div>

          <DrawerButton id={id} title="???????????????" />
        </form>
      </Scrollbars>
    </>
  );
};

export default MakeadminDrawer;
