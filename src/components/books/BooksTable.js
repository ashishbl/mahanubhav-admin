import React from "react";
import { TableBody, TableRow, TableCell, Avatar } from "@windmill/react-ui";
import { API_BASE_URL_DOC } from "../../config";
//internal import
import MainModal from "../modal/MainModal";
import MainDrawer from "../drawer/MainDrawer";
import BookDrawer from "../drawer/BookDrawer";
import useToggleDrawer from "../../hooks/useToggleDrawer";
import EditDeleteButton from "../table/EditDeleteButton";
import moment from "moment";
import PDFIcon from "../../assets/img/pdf.png";

const BooksTable = ({ books }) => {
  const { serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  return (
    <>
      <MainModal id={serviceId} />
      <MainDrawer>
        {serviceId ? <BookDrawer id={serviceId} /> : <BookDrawer />}
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
                href={API_BASE_URL_DOC + parent?.path}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  style={{ width: 25 }}
                  className="hidden mr-3 md:block bg-gray-50 p-1"
                  src={PDFIcon}
                  alt={parent?.parent}
                />
                {parent?.title}
              </a>
            </TableCell>
            <TableCell
              className="text-sm"
              style={{ overflow: "hidden", maxWidth: 30 }}
            >
              {parent?.description}
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

export default BooksTable;
