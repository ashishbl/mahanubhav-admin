import React from "react";
import { TableBody, TableRow, TableCell, Avatar } from "@windmill/react-ui";
import { API_BASE_URL_DOC } from "../../config";
//internal import
import MainModal from "../modal/MainModal";
import MainDrawer from "../drawer/MainDrawer";
import BookDrawer from "../drawer/BookDrawer";
import AdvertisementDrawer from "../drawer/AdvertisementDrawer";
import useToggleDrawer from "../../hooks/useToggleDrawer";
import EditDeleteButton from "../table/EditDeleteButton";
import moment from "moment";
import PDFIcon from "../../assets/img/pdf.png";

const AdvertisementTable = ({ books }) => {
  const { serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();
  console.log(books);

  return (
    <>
      <MainModal id={serviceId} />
      <MainDrawer>
        {serviceId ? (
          <AdvertisementDrawer id={serviceId} />
        ) : (
          <AdvertisementDrawer />
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
                href={API_BASE_URL_DOC + parent?.path}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  style={{ width: 60, height: 60 }}
                  onClick={(e) => {
                    console.log(e.target.src);
                  }}
                  className="hidden mr-3 md:block bg-gray-50 p-1"
                  src={`http://165.232.181.53:5055${parent.path}`}
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

export default AdvertisementTable;
