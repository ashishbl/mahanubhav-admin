import React from "react";
import { TableBody, TableRow, TableCell, Avatar } from "@windmill/react-ui";
import { API_BASE_URL_DOC } from "../../config";
//internal import
import MainModal from "../modal/MainModal";
import MainDrawer from "../drawer/MainDrawer";
// import BookDrawer from "../drawer/BookDrawer";
import DateDrawer from "../drawer/DateDrawer";
import useToggleDrawer from "../../hooks/useToggleDrawer";
import DateDivBtns from "../table/DateDivBtns";
import moment from "moment";
import PDFIcon from "../../assets/img/pdf.png";

const DateTable = ({ dateByMonth }) => {
  const { serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  return (
    <>
      <MainModal id={serviceId} />
      <MainDrawer>
        <DateDrawer id={serviceId} />
      </MainDrawer>

      <div className="datedivbtn-cnt">
        {dateByMonth?.map((parent, ind) => (
          <DateDivBtns
            id={parent._id}
            handleUpdate={handleUpdate}
            handleModalOpen={handleModalOpen}
            day={ind}
            sunrise={parent.sunrise}
            sunset={parent.sunset}
          />
        ))}
      </div>
    </>
  );
};

export default DateTable;
