// <<<<<<< HEAD:dashtar-admin/src/components/setdate/Setdate.js
// =======
import React, { useEffect, useState, useContext } from "react";
// >>>>>>> 85625c02aa5e075786337a6be5303675cb8080bb:mahanubhav-admin/src/components/setdate/Setdate.js
import { useDispatch, useSelector } from "react-redux";
import { getMnthYr } from "../../redux/actions/actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../assets/css/custom.css";
import { newStateData } from "../../redux/actions/actions";
// <<<<<<< HEAD:dashtar-admin/src/components/setdate/Setdate.js
import { useHistory } from "react-router-dom";

// =======
// >>>>>>> 85625c02aa5e075786337a6be5303675cb8080bb:mahanubhav-admin/src/components/setdate/Setdate.js
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Button,
  Input,
  Card,
  CardBody,
  Pagination,
} from "@windmill/react-ui";
import { FiPlus } from "react-icons/fi";

const Setdate = () => {
  const history = useHistory();
  const myState = useSelector((state) => state.setDate);
  const month = myState?.month;
  const year = myState?.year;
  const [startDate, setStartDate] = useState(
    month && year ? new Date(`${month}/01/${year}`) : new Date()
  );
  // `${month}/01/${year}`
  const dispatch = useDispatch();

  const setMainDate = (d) => {
    setStartDate(d);
    dispatch(getMnthYr({ month: d.getMonth() + 1, year: d.getFullYear() }));
    dispatch(newStateData(200));
    // window.location.reload();
  };

  return (
    <>
      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <CardBody>
          <form className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              {/* <Input
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                type="search"
                name="search"
                placeholder="Search by category type"
              /> */}
              <DatePicker
                className="datepicker-react"
                selected={startDate}
                onChange={(date) => setMainDate(date)}
                dateFormat="MM/yyyy"
                showMonthYearPicker
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-1"
              ></button>
            </div>
            {/* <div className="w-full md:w-56 lg:w-56 xl:w-56">
              <Button onClick={() => setMainDate(startDate)} className="w-full rounded-md h-12">
                <span className="mr-3">
                  <FiPlus />
                </span>
                set Date
              </Button>
            </div> */}
          </form>
          <span style={{ fontSize: 12 }}>
            {myState ? (
              <>
                निवडलेला महिना {myState.month} आणि वर्ष {myState.year} आहे.
              </>
            ) : (
              <>please wait...</>
            )}
          </span>
        </CardBody>
      </Card>
    </>
  );
};

export default Setdate;
