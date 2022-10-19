import React from "react";
import { TableBody, TableRow, TableCell, Avatar } from "@windmill/react-ui";
import { API_BASE_URL_DOC } from "../../config";
//internal import
import MainModal from "../modal/MainModal";
import MainDrawer from "../drawer/MainDrawer";
import BookDrawer from "../drawer/BookDrawer";
import NotificationDrawer from "../drawer/NotificationDrawer";
import useToggleDrawer from "../../hooks/useToggleDrawer";
import EditDeleteButton from "../table/EditDeleteButton";
import moment from "moment";
import PDFIcon from "../../assets/img/pdf.png";

const NotificationTable = ({ books }) => {
  const { serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  return (
    <>
      <MainModal id={serviceId} />
      <MainDrawer>
        {serviceId ? (
          <NotificationDrawer id={serviceId} />
        ) : (
          <NotificationDrawer />
        )}
      </MainDrawer>

      <TableBody>
        {books?.map((parent) => (
          <TableRow key={parent._id}>
            <TableCell
              className="font-medium text-sm"
              style={{ color: "green" }}
            >
              <a
                style={{ display: "flex", flexDirection: "row" }}
                href={"#"}
                target="_blank"
                rel="noreferrer noopener"
              >
                {parent?.name}
              </a>
            </TableCell>
            <TableCell
              className="text-sm"
              style={{ overflow: "hidden", maxWidth: 30 }}
            >
              {parent?.title}
            </TableCell>
            <TableCell className="text-sm">{parent?.body}</TableCell>
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

export default NotificationTable;
