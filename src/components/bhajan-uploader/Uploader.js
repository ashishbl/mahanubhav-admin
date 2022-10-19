import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import Pdf from "../../assets/img/pdf.png";
import { FiUploadCloud } from "react-icons/fi";

const Uploader = ({ setFile, getObjURL }) => {
  const [files, setFiles] = useState([]);
  const uploadUrl = "";
  const upload_Preset = "";
  const { getRootProps, getInputProps } = useDropzone({
    // accept: "audio/*",
    multiple: false,
    maxSize: 500000,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(() => {
    setFile(files[0]);
    // getObjURL(files[0]);
  }, [files]);

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img
          className="inline-flex border-2 border-gray-100 w-24 max-h-24"
          src={Pdf}
          alt={file.name}
        />
      </div>
    </div>
  ));
  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <div className="w-full text-center">
      <div
        className="px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <span className="mx-auto flex justify-center">
          <FiUploadCloud className="text-3xl text-green-500" />
        </span>
        <p className="text-sm mt-2">तुमची फाइल येथे ड्रॅग करा</p>
        <em className="text-xs text-gray-400">(फक्त *.mp3 स्वीकारले जाईल)</em>
      </div>
      {/* {thumbs ? (
        thumbs.map((dt, ind) => (
          <>
            <div
              style={{
                height: "fit-content",
                display: "flex",
                alignItems: "center",
                paddingTop: "10px",
              }}
            >
              <div style={{ width: "50px" }}>{thumbs}</div>
              <div style={{ marginLeft: "10px" }}>{dt.key}</div>
            </div>
          </>
        ))
      ) : (
        <></>
      )} */}
    </div>
  );
};

export default Uploader;
