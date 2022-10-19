import React from "react";
import { TableBody, TableRow, TableCell, Avatar } from "@windmill/react-ui";
import { API_BASE_URL_DOC } from "../../config";

//internal import
import MainModal from "../modal/MainModal";
import MainDrawer from "../drawer/MainDrawer";
import QandaDrawer from "../drawer/QandaDrawer";
import useToggleDrawer from "../../hooks/useToggleDrawer";
import EditDeleteButton from "../table/EditDeleteButton";
import moment from "moment";
import PDFIcon from "../../assets/img/pdf.png";

const Qandatable = ({ qanda }) => {
  const { serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  return (
    <>
      <MainModal id={serviceId} />
      <MainDrawer>
        {serviceId ? <QandaDrawer id={serviceId} /> : <QandaDrawer />}
      </MainDrawer>

      <TableBody>
        {qanda?.map((parent) => (
          <TableRow key={parent._id}>
            <TableCell
              className="font-medium text-sm"
              style={{
                width: 20,
                overflow: "hidden",
              }}
            >
              {parent?.question}
            </TableCell>
            <TableCell
              className="text-sm"
              style={{
                color: "green",
                overflow: "hidden",
                maxWidth: "10px",
              }}
            >
              {parent?.answer}
            </TableCell>
            <TableCell className="text-sm">
              {moment(parent?.createdAt).format("DD-MM-YYYY")}
            </TableCell>
            <TableCell>
              <EditDeleteButton
                id={parent._id}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default Qandatable;
