import React, { useState, useContext, useEffect } from "react";
import Scrollbars from "react-custom-scrollbars";
import { notifyError, notifySuccess, ToastContainer } from "../../utils/toast";
import { useDispatch, useSelector } from "react-redux";
import Title from "../form/Title";
import LabelArea from "../form/LabelArea";
import LabelAreaEvents from "../form/LabelAreaEvents";
import { Button, Input, Select } from "@windmill/react-ui";
import CalenderServices from "../../services/CalenderServices";
import { SidebarContext } from "../../context/SidebarContext";
import { newStateData } from "../../redux/actions/actions";

const DateDrawer = ({ id }) => {
  const dispatch = useDispatch();
  const [eventList, setEventList] = useState(false);
  const myState = useSelector((state) => state.setDate);
  const __day = useSelector((state) => state.dayIndex);
  console.log(__day);
  const { month, year } = myState;
  let wrdMonth = "";
  if (month === 1) {
    wrdMonth = "Jan";
  } else if (month === 2) {
    wrdMonth = "Feb";
  } else if (month === 3) {
    wrdMonth = "Mar";
  } else if (month === 4) {
    wrdMonth = "Apr";
  } else if (month === 5) {
    wrdMonth = "May";
  } else if (month === 6) {
    wrdMonth = "Jun";
  } else if (month === 7) {
    wrdMonth = "Jul";
  } else if (month === 8) {
    wrdMonth = "Aug";
  } else if (month === 9) {
    wrdMonth = "Sep";
  } else if (month === 10) {
    wrdMonth = "Oct";
  } else if (month === 11) {
    wrdMonth = "Nov";
  } else if (month === 12) {
    wrdMonth = "Dec";
  } else {
    wrdMonth = false;
  }

  const initialValue = {
    hindi_vivaran: "",
    hindi_utsav: "",
    hindi_information: "",
    hindi_panthiutsav: "",
    hindi_amavaspoornima: "",
    hindi_lilakramank: "",
    hindi_isholiday: "",
    hindi_sunrise: "",
    hindi_sunset: "",
    hindi_chandrarashi: "",
    hindi_nakshatra: "",
    hindi_tithi: "",
    hindi_yog: "",
    hindi_karan: "",
    hindi_rahukal: "",
    hindi_paksha: "",
    hindi_shakh: "",
    hindi_samwatsar: "",
    hindi_ayan: "",
    hindi_katha: "",
    hindi_suvicahr: "",
    hindi_shlokwithmeaning: "",
    hindi_geetashlokwithmeaning: "",
    vivaran: "",
    utsav: "",
    information: "",
    panthiutsav: "",
    amavaspoornima: "",
    lilakramank: "",
    isholiday: "",
    sunrise: "",
    sunset: "",
    chandrarashi: "",
    nakshatra: "",
    tithi: "",
    yog: "",
    karan: "",
    rahukal: "",
    paksha: "",
    shakh: "",
    samwatsar: "",
    ayan: "",
    katha: "",
    suvicahr: "",
    shlokwithmeaning: "",
    geetashlokwithmeaning: "",
  };
  const dt = `Day ${wrdMonth} ${id} ${year} 16:44:57 GMT+0530 (India Standard Time)`;
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);
  const [view, setView] = useState(false);
  const { toggleDrawer } = useContext(SidebarContext);
  const [dayData, setDayData] = useState(initialValue);
  const [dayEvent, setDayEvent] = useState({
    evetitle: "",
    evedescription: "",
    evestart: "",
    eveend: "",
    _id: null,
    eventCategory: "",
  });
  const [eventData, setEventData] = useState();
  let name;
  let value;

  const handleChanges = (e) => {
    name = e.target.name;
    value = e.target.value;
    setDayData({ ...dayData, [name]: value });
    setDayEvent({ ...dayEvent, [name]: value });
  };
  console.log(dayData.amavaspoornima);

  useEffect(() => {
    if (dt) {
      CalenderServices.getDateDataByMonth(dt)
        .then((res) => {
          if (res.data.events) {
            setEventData(res.data.events);
            setDayData({
              ...dayData,
              hindi_vivaran: res.data.hindi_vivaran,
              hindi_utsav: res.data.hindi_utsav,
              hindi_information: res.data.hindi_information,
              hindi_panthiutsav: res.data.hindi_panthiutsav,
              hindi_amavaspoornima: res.data.hindi_amavaspoornima,
              hindi_lilakramank: res.data.hindi_lilakramank,
              hindi_isholiday: res.data.hindi_isholiday,
              hindi_sunrise: res.data.hindi_sunrise,
              hindi_sunset: res.data.hindi_sunset,
              hindi_chandrarashi: res.data.hindi_chandrarashi,
              hindi_nakshatra: res.data.hindi_nakshatra,
              hindi_tithi: res.data.hindi_tithi,
              hindi_yog: res.data.hindi_yog,
              hindi_karan: res.data.hindi_karan,
              hindi_rahukal: res.data.hindi_rahukal,
              hindi_paksha: res.data.hindi_paksha,
              hindi_shakh: res.data.hindi_shakh,
              hindi_samwatsar: res.data.hindi_samwatsar,
              hindi_ayan: res.data.hindi_ayan,
              hindi_katha: res.data.hindi_katha,
              hindi_suvicahr: res.data.hindi_suvicahr,
              hindi_shlokwithmeaning: res.data.hindi_shlokwithmeaning,
              hindi_geetashlokwithmeaning: res.data.hindi_geetashlokwithmeaning,
              vivaran: res.data.vivaran,
              utsav: res.data.utsav,
              information: res.data.information,
              panthiutsav: res.data.panthiutsav,
              amavaspoornima: res.data.amavaspoornima,
              lilakramank: res.data.lilakramank,
              isholiday: res.data.isholiday,
              sunrise: res.data.sunrise,
              sunset: res.data.sunset,
              chandrarashi: res.data.chandrarashi,
              nakshatra: res.data.nakshatra,
              tithi: res.data.tithi,
              yog: res.data.yog,
              karan: res.data.karan,
              rahukal: res.data.rahukal,
              paksha: res.data.paksha,
              shakh: res.data.shakh,
              samwatsar: res.data.samwatsar,
              ayan: res.data.ayan,
              katha: res.data.katha,
              suvicahr: res.data.suvicahr,
              shlokwithmeaning: res.data.shlokwithmeaning,
              geetashlokwithmeaning: res.data.geetashlokwithmeaning,
            });
          } else {
            setDayData(initialValue);
          }
        })
        .catch((err) => {
          notifyError("There is a server error!");
        });
    }
  }, [id, isDrawerOpen]);

  const updateDayInfo = (e) => {
    const val = e.target.value;
    const obj = { dt, dayData };
    dayData.date = dt;
    if (val === "dayData" && id && dt) {
      CalenderServices.createUpdateDate(dayData)
        .then((res) => {
          notifySuccess("Day update successfully");
          setIsUpdate(true);
          closeDrawer();
          dispatch(newStateData(200));
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (val === "eventData" && id && dt) {
      const { eventCategory, evetitle, evedescription, evestart, eveend, _id } =
        dayEvent;
      CalenderServices.createUpdateDayEvent(
        _id,
        dt,
        evetitle,
        evedescription,
        evestart,
        eveend,
        eventCategory
      )
        .then((res) => {
          setIsUpdate(true);
          dispatch(newStateData(200));
          closeDrawer();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const getEventIndex = (e) => {
    const val = e.target.value;
    if (eventData) {
      setDayEvent({
        ...dayEvent,
        evetitle: eventData[val].title,
        evedescription: eventData[val].description,
        evestart: eventData[val].start,
        eveend: eventData[val].end,
        eventCategory: eventData[val].eventCategory,
        _id: eventData[val]._id,
      });
    }
  };

  const eventListHandler = () => {
    if (eventList) {
      setEventList(false);
    } else {
      setEventList(true);
    }
  };

  let plchld;

  // work on
  if (dayData.amavaspoornima === "amavsya") {
    plchld = "????????????????????????";
  } else if (dayData.amavaspoornima === "akadashi") {
    plchld = "??????????????????";
  } else if (dayData.amavaspoornima === "pornima") {
    plchld = "????????????????????????";
  } else if (dayData.amavaspoornima === "sankatchatuthri") {
    plchld = "???????????? ?????????????????????";
  }
  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        {id ? (
          <>
            <Title
              title={`?????????????????? ??????????????? : ${__day}/${month}/${year}`}
            // description={`Selected month is ${month} and selected year is ${year}`}
            />
          </>
        ) : (
          <Title
            title="Add Books"
            description=" Add your Books and necessary information from here"
          />
        )}
      </div>
      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <div className="add-events-div">
          <Button
            onClick={() => {
              if (view) {
                setView(false);
              } else {
                setView(true);
              }
            }}
          >
            {view ? "???????????? ??????????????????" : "???????????????????????????"}
          </Button>
          {view ? (
            <div className="event-handle-div">
              <button onClick={eventListHandler} className="event-handle">
                {eventList ? "??????????????????????????? ????????????" : "????????????????????? ?????????"}
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
        {view ? (
          <>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40 event-form">
              {eventList ? (
                <>
                  <div className="selectEvenTag grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                    <LabelAreaEvents label="Select Event" />
                    <div className="slt-event col-span-8 sm:col-span-4">
                      <Select onChange={getEventIndex}>
                        <option value={0}>??????????????????????????? ??????????????? </option>
                        {eventData ? (
                          eventData.map((dt, ind) => (
                            <>
                              <option value={ind}>{dt.title}</option>
                            </>
                          ))
                        ) : (
                          <>plese wait...</>
                        )}
                      </Select>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}

              {/* <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <LabelAreaEvents label="Type" />
                <div className="col-span-8 sm:col-span-4">
                  <Select
                    name={"eventCategory"}
                    onChange={handleChanges}
                    value={dayEvent.eventCategory}
                  >
                    <option value="" defaultValue hidden>
                      Select event
                    </option>
                    <option value="Indian Festivals">Indian Festivals</option>
                    <option value="Indian Holidays">Indian Holidays</option>
                    <option value="Vivah Mahurat">Vivah Mahurat</option>
                  </Select>
                </div>
              </div> */}

              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelAreaEvents label="??????????????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.information}
                    name="sunrise"
                    type={"text"}
                    placeholder={"???????????? ?????????????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_information}
                    name="sunrise"
                    type={"text"}
                    placeholder={"???????????? ?????????????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelAreaEvents label="??????????????? / ???????????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.information}
                    name="sunrise"
                    type={"text"}
                    placeholder={"???????????? ??????????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_information}
                    name="sunrise"
                    type={"text"}
                    placeholder={"???????????? ??????????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelAreaEvents label="????????????????????? / ????????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.information}
                    name="sunrise"
                    type={"text"}
                    placeholder={"????????????????????? ??????????????? "}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_information}
                    name="sunrise"
                    type={"text"}
                    placeholder={"???????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelAreaEvents label="??????????????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.information}
                    name="sunrise"
                    type={"text"}
                    placeholder={"?????????????????? ??????????????? "}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_information}
                    name="sunrise"
                    type={"text"}
                    placeholder={"?????????????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>
            </div>

            <div className="fixed bottom-0 w-full right-0 py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex bg-gray-50 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <Button
                  onClick={toggleDrawer}
                  className="h-12 bg-white w-full text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-700"
                  layout="outline"
                >
                  ???????????? ?????????
                </Button>
              </div>
              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <Button
                  onClick={updateDayInfo}
                  value="eventData"
                  type="submit"
                  className="w-full h-12"
                >
                  ??????????????????????????? ???????????????????????? ?????????
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="???????????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Select
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.vivran}
                    name="vivaran"
                    type={"text"}
                    placeholder={"???????????? ??????????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  >
                    <option>??????????????? ???????????? ???????????????</option>
                    <option>????????? ????????????</option>
                    <option>???????????? ????????????</option>
                    <option>?????????????????? ????????????</option>
                    <option>??????????????? ????????????</option>
                    <option>????????? ????????????</option>
                    <option>??????????????? ????????????</option>
                    <option>????????????????????? ????????????</option>
                    <option>?????????????????? ????????????</option>
                  </Select>
                  <Select
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_vivran}
                    name="hindi_vivran"
                    type={"text"}
                    placeholder={"???????????? ??????????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  >
                    <option>??????????????? ????????? ????????? ???????????????</option>
                    <option>????????? ?????????</option>
                    <option>???????????? ?????????</option>
                    <option>??????????????? ?????????</option>
                    <option>???????????????????????? ?????????</option>
                    <option>????????? ?????????</option>
                    <option>????????????????????? ?????????</option>
                    <option>?????????????????? ?????????</option>
                    <option>?????????????????? ?????????</option>
                  </Select>
                </div>
              </div>

              {/* utsav: { type: String }, //??????????????? ?????????????????? (????????? ?????????) */}
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="??????????????? ?????????????????? / ????????????????????? ????????????????????? " />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.utsav}
                    name="utsav"
                    type={"text"}
                    placeholder={"???????????? ??????????????? ?????????????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_utsav}
                    name="hindi_utsav"
                    type={"text"}
                    placeholder={"???????????? ????????????????????? ?????? ????????????????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* information: { type: String }, //?????????????????? */}
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="?????????????????? / ?????????????????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.information}
                    name="information"
                    type={"text"}
                    placeholder={"???????????? ?????????????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_information}
                    name="hindi_information"
                    type={"text"}
                    placeholder={"???????????? ????????????????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* panthiutsav: { type: String }, //???????????? ??????????????? (?????????????????? ?????????) */}
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="??????????????? ???????????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.panthiutsav}
                    name="panthiutsav"
                    type={"text"}
                    placeholder={"???????????? ??????????????? ??????????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_panthiutsav}
                    name="hindi_panthiutsav"
                    type={"text"}
                    placeholder={"???????????? ????????????????????????????????? ??????????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* amavaspoornima: { type: String }, //??????????????????????????????????????? */}
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="???????????????????????????????????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Select
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.amavaspoornima}
                    name="amavaspoornima"
                    type={"text"}
                    placeholder={"???????????? ???????????????????????? ???????????????????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  >
                    {/* work on */}
                    <option value="amavsya">????????????????????????</option>
                    <option value="akadashi">??????????????????</option>
                    <option value="pornima">????????????????????????</option>
                    <option value="sankatchatuthri">???????????? ?????????????????????</option>
                  </Select>

                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_lilakramank}
                    name="hindi_lilakramank"
                    type={"text"}
                    placeholder={`${plchld} ???????????? ?????????????????? ????????? `}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* lilakramank: { type: String }, //???????????? */}
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="????????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.lilakramank}
                    name="lilakramank"
                    type={"text"}
                    placeholder={"???????????? ???????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_lilakramank}
                    name="hindi_lilakramank"
                    type={"text"}
                    placeholder={"???????????? ???????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* isholiday: { type: Boolean }, //?????????????????? */}
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="??????????????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    checked={dayData.isholiday === 'on' ? true : false}
                    name="isholiday"
                    type="checkbox"
                    placeholder={"???????????? ?????????????????? ?????????"}
                  />
                </div>
              </div>

              {/* sunrise: { type: String }, //???????????????????????? */}
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="????????????????????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.sunrise}
                    name="sunrise"
                    type={"text"}
                    placeholder={"???????????? ???????????????????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_sunrise}
                    name="hindi_sunrise"
                    type={"text"}
                    placeholder={"???????????? ???????????????????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* sunset: { type: String }, //??????????????????????????? */}
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="???????????????????????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.sunset}
                    name="sunset"
                    type={"text"}
                    placeholder={"???????????? ??????????????????????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_sunset}
                    name="hindi_sunset"
                    type={"text"}
                    placeholder={"???????????? ??????????????????????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* chandrarashi: { type: String },//??????????????? ???????????? */}
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="??????????????? ????????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.chandrarashi}
                    name="chandrarashi"
                    type={"text"}
                    placeholder={"???????????? ??????????????? ???????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_chandrarashi}
                    name="hindi_chandrarashi"
                    type={"text"}
                    placeholder={"???????????? ??????????????? ???????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* nakshatra: { type: String }, //????????????????????? */}
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="?????????????????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.nakshatra}
                    name="nakshatra"
                    type={"text"}
                    placeholder={"???????????? ????????????????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_nakshatra}
                    name="hindi_nakshatra"
                    type={"text"}
                    placeholder={"???????????? ????????????????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* tithi: { type: String },  //???????????? */}
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="????????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.tithi}
                    name="tithi"
                    type={"text"}
                    placeholder={"???????????? ???????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_tithi}
                    name="hindi_tithi"
                    type={"text"}
                    placeholder={"???????????? ???????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* yog: { type: String }, //????????? */}
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="?????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.yog}
                    name="yog"
                    type={"text"}
                    placeholder={"???????????? ????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_yog}
                    name="hindi_yog"
                    type={"text"}
                    placeholder={"???????????? ????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* karan: { type: String }, //????????? */}
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="?????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.karan}
                    name="karan"
                    type={"text"}
                    placeholder={"???????????? ????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_karan}
                    name="hindi_karan"
                    type={"text"}
                    placeholder={"???????????? ????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* rahukal: { type: String }, //????????????????????? */}
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="?????????????????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.rahukal}
                    name="rahukal"
                    type={"text"}
                    placeholder={"???????????? ????????????????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_rahukal}
                    name="hindi_rahukal"
                    type={"text"}
                    placeholder={"???????????? ????????????????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* paksha: { type: String }, //???????????? */}
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="????????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.paksha}
                    name="paksha"
                    type={"text"}
                    placeholder={"???????????? ???????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_paksha}
                    name="hindi_paksha"
                    type={"text"}
                    placeholder={"???????????? ???????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* shakh: { type: String }, //????????? */}
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="?????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.shakh}
                    name="shakh"
                    type={"text"}
                    placeholder={"???????????? ????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_shakh}
                    name="hindi_shakh"
                    type={"text"}
                    placeholder={"???????????? ????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* samwatsar: { type: String }, //????????????????????? */}
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="?????????????????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.samwatsar}
                    name="samwatsar"
                    type={"text"}
                    placeholder={"???????????? ????????????????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_samwatsar}
                    name="hindi_samwatsar"
                    type={"text"}
                    placeholder={"???????????? ????????????????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* ayan: { type: String }, //???????????? */}
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="????????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.ayan}
                    name="ayan"
                    type={"text"}
                    placeholder={"???????????? ???????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_ayan}
                    name="hindi_ayan"
                    type={"text"}
                    placeholder={"???????????? ???????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* katha: { type: String }, //????????? */}
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="?????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.katha}
                    name="katha"
                    type={"text"}
                    placeholder={"???????????? ????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_katha}
                    name="hindi_katha"
                    type={"text"}
                    placeholder={"???????????? ????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* suvicahr: { type: String }, //????????????????????? */}
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="?????????????????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.suvicahr}
                    name="suvicahr"
                    type={"text"}
                    placeholder={"???????????? ????????????????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_suvicahr}
                    name="hindi_suvicahr"
                    type={"text"}
                    placeholder={"???????????? ????????????????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* shlokwithmeaning: { type: String }, //??????????????? */}
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="???????????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.shlokwithmeaning}
                    name="shlokwithmeaning"
                    type={"text"}
                    placeholder={"???????????? ??????????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_shlokwithmeaning}
                    name="hindi_shlokwithmeaning"
                    type={"text"}
                    placeholder={"???????????? ??????????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* geetashlokwithmeaning: { type: String }, //???????????? ??????????????? */}
              <div className="grid grid-cols-5 gap-0 md:gap-6 xl:gap-10 lg:gap-6 mb-6">
                <LabelArea label="???????????? ???????????????" />
                <div
                  style={{
                    display: "flex",
                  }}
                  className="col-span-8 sm:col-span-4"
                >
                  <Input
                    style={{ marginLeft: "-20px" }}
                    onChange={handleChanges}
                    value={dayData.geetashlokwithmeaning}
                    name="geetashlokwithmeaning"
                    type={"text"}
                    placeholder={"???????????? ???????????? ??????????????? ?????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                  <Input
                    style={{ marginLeft: "20px" }}
                    onChange={handleChanges}
                    value={dayData.hindi_geetashlokwithmeaning}
                    name="hindi_geetashlokwithmeaning"
                    type={"text"}
                    placeholder={"???????????? ???????????? ??????????????? ????????????"}
                    className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                  />
                </div>
              </div>

              {/* {main div end} */}
            </div>

            <div className="fixed bottom-0 w-full right-0 py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex bg-gray-50 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <Button
                  onClick={toggleDrawer}
                  className="h-12 bg-white w-full text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-700"
                  layout="outline"
                >
                  ???????????? ?????????
                </Button>
              </div>
              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <Button
                  onClick={updateDayInfo}
                  value="dayData"
                  type="submit"
                  className="w-full h-12"
                >
                  ?????????????????? ????????????
                </Button>
              </div>
            </div>
            <ToastContainer />
          </>
        )}
      </Scrollbars>
    </>
  );
};

export default DateDrawer;
