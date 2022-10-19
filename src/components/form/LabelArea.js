import React from "react";
import { Label } from "@windmill/react-ui";

const LabelArea = ({ label }) => {
  return (
    <Label
      style={{ display: "flex", alignItems: "center" }}
      className="col-span-4 h-12 sm:col-span-1 font-medium text-sm"
    >
      {label}
    </Label>
  );
};

export default LabelArea;
