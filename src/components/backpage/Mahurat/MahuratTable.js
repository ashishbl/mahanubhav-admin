import React, { useState, useEffect } from 'react';
import { TableCell, TableBody, TableRow, Input, Button } from '@windmill/react-ui';
import { Select } from '@windmill/react-ui';
import CalenderServices from "../../../services/CalenderServices";
import { notifyError, notifySuccess } from "../../../utils/toast";
import { useSelector } from "react-redux";
import moment from 'moment';
import DatePicker from "react-datepicker";

const VivahMahuratTable = ({ category }) => {
  let initial = { date: null, start: '', end: '', category: category };
  const [newEvent, setnewEvent] = useState(initial);
  const [events, setevents] = useState(null);
  const [isAdding, setIsadding] = useState(false);

  const myState = useSelector((state) => state.setDate);
  const { month, year } = myState;

  useEffect(() => {
    CalenderServices.getMahurat({ month, year, category: category }).then((res) => {
      setevents(res.data);
    })
  }, [month, year])

  const CreateEvent = () => {
    CalenderServices.createUpdateMahurat(newEvent)
      .then((res) => {
        notifySuccess("New Event Created");
        CalenderServices.getMahurat({ month, year, category: category }).then((res) => {
          setevents(res.data);
          setIsadding(false)
        })
      })
  }

  const DeleteEvent = (_id) => {
    CalenderServices.deleteMahurat({ _id })
      .then((res) => {
        CalenderServices.getMahurat({ month, year, category: category }).then((res) => {
          setevents(res.data);
        })
        notifySuccess("Mahurat deleted");
      })
  }

  const getDaysInMonth = (month, year, index = 1, result = []) => {
    const date = new Date(Date.UTC(year, month, index, 0, 0, 0))
    return month == date.getMonth()
      ? getDaysInMonth(month, year, index + 1, [...result, date.toString()])
      : result
  }

  return (
    <>
      <TableBody>
        {events?.map((mahurat) => (
          <TableRow key={mahurat._id}>
            <TableCell >
              <Select
                disabled
                value={mahurat.date}
                onChange={(e) => { setnewEvent({ ...newEvent, date: e.target.value }) }}
                className="border border-gray-50 bg-gray-50 dark:border-gray-700 h-8 rounded-md text-xs focus:border-gray-400 focus:outline-none"
              >
                <option value="null" defaultValue hidden>तारीख</option>
                {events?.map(o => (<option value={o.date}>{moment(o.date).format('DD-MM-YYYY')}</option>))}
              </Select>
            </TableCell>
            <TableCell>
              <Input
                disabled
                value={mahurat.start}
                onChange={(e) => { setnewEvent({ ...newEvent, start: e.target.value }) }}
                type={"text"}
                placeholder={"सुरवातीची वेळ"}
                name={"start"}
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
              />
            </TableCell>
            <TableCell>
              <Input
                disabled
                value={mahurat.end}
                onChange={(e) => { setnewEvent({ ...newEvent, end: e.target.value }) }}
                type={"text"}
                placeholder={"समाप्तीचा कालावधी"}
                name={"end"}
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
              />
            </TableCell>
            <TableCell className="text-right">
              <Button onClick={() => { DeleteEvent(mahurat._id) }}>
                हटवा
              </Button>
            </TableCell>
          </TableRow>
        ))}
        {!isAdding
          ? <Button className="m-5" onClick={() => { setIsadding(true) }}>
            नवीन जोडा
          </Button>
          : <TableRow >
            <TableCell >
              <Select
                onChange={(e) => { setnewEvent({ ...newEvent, date: e.target.value }) }}
                className="border border-gray-50 bg-gray-50 dark:border-gray-700 h-8 rounded-md text-xs focus:border-gray-400 focus:outline-none"
              >
                <option value="null" defaultValue hidden>तारीख</option>
                {getDaysInMonth(month - 1, year).map(o => (<option value={o}>{moment(o).format('DD-MM-YYYY')}</option>))}
              </Select>
            </TableCell>
            <TableCell>
              <Input
                onChange={(e) => { setnewEvent({ ...newEvent, start: e.target.value }) }}
                type={"text"}
                placeholder={"सुरवातीची वेळ"}
                name={"start"}
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
              />
            </TableCell>
            <TableCell>
              <Input
                onChange={(e) => { setnewEvent({ ...newEvent, end: e.target.value }) }}
                type={"text"}
                placeholder={"समाप्तीचा कालावधी"}
                name={"end"}
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
              />
            </TableCell>
            <TableCell className="text-right">
              <Button onClick={() => { CreateEvent() }}>
                जतन करा
              </Button>
            </TableCell>
          </TableRow>
        }
      </TableBody>
    </>
  );
};

export default VivahMahuratTable;
