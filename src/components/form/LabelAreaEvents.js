import React from "react";
import { Label } from "@windmill/react-ui";

const LabelAreaEvents = ({ label }) => {
  return (
    <Label
      style={{ color: "white", display: "flex", alignItems: "center" }}
      className="col-span-4 sm:col-span-1 font-medium text-sm"
    >
      {label}
    </Label>
  );
};

export default LabelAreaEvents;
