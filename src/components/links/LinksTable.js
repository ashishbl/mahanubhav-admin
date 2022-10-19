import React from "react";
import { TableBody, TableRow, TableCell, Avatar } from "@windmill/react-ui";
import { API_BASE_URL_DOC } from "../../config";
//internal import
import MainModal from "../modal/MainModal";
import MainDrawer from "../drawer/MainDrawer";
// import BookDrawer from "../drawer/BookDrawer";
import MakeadminDrawer from "../drawer/MakeadminDrawer";
import useToggleDrawer from "../../hooks/useToggleDrawer";
import EditDeleteButton from "../table/EditDeleteButton";
import moment from "moment";
import PDFIcon from "../../assets/img/pdf.png";
import LinkDrawer from "../drawer/LinkDrawer";

const LinksTable = ({ books }) => {
  const { serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

  return (
    <>
      <MainModal id={serviceId} />
      <MainDrawer>
        {serviceId ? <LinkDrawer id={serviceId} /> : <LinkDrawer />}
      </MainDrawer>
      <div className="iframes-div">
        <div className="main-iframe">
          <h6>my video</h6>
          <div className="iframes">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/11tlNwOjmis"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div
              style={{
                paddingBottom: "20px",
                width: "100%",
                marginTop: "10px",
              }}
            >
              lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
              amet, consectetur adip lorem ipsum dolor sit amet, consectetur
              adip lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor
              sit amet, consectetur adip
            </div>
          </div>
        </div>
      </div>
      {/* <TableBody>
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
      </TableBody> */}
    </>
  );
};

export default LinksTable;
