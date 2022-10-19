import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { dayInd } from "../../redux/actions/actions";

import Tooltip from "../tooltip/Tooltip";

const DateDivBtns = ({
  id,
  handleUpdate,
  handleModalOpen,
  day,
  sunrise,
  sunset,
}) => {
  const dispatch = useDispatch();

  const setDayIndex = () => {
    handleUpdate(day + 1);
    dispatch(dayInd(day + 1));
  };
  return (
    <>
      <div className="">
        <div
          onClick={() => setDayIndex()}
          className="databtndivs p-2 cursor-pointer text-gray-400 hover:text-green-600"
        >
          <Tooltip id="edit" Icon={FiEdit} title="Edit" bgColor="#10B981" />
          <span className="daysdate">{day + 1}</span>
          <br />
          <span>सूर्योदय : {sunrise}</span>
          <br />
          <span>सूर्यास्त : {sunset}</span>
        </div>
      </div>
    </>
  );
};

export default DateDivBtns;
