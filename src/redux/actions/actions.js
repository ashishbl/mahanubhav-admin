export const getAdminInfo = (adminData) => {
  return {
    type: "GETADMININFO",
    payload: adminData,
  };
};

export const getMnthYr = (mnthYr) => {
  return {
    type: "GETMNTHYR",
    payload: mnthYr,
  };
};

export const collSidebar = (sdr) => {
  return {
    type: "COLLSIDEBAR",
    payload: sdr,
  };
};

export const modalStatus = (mdlst) => {
  return {
    type: "GETMODALSTATUS",
    payload: mdlst,
  };
};

export const newStateData = (nst) => {
  return {
    type: "GETNEWSTATE",
    payload: nst,
  };
};

export const dayInd = (di) => {
  return {
    type: "GETDAYINDEX",
    payload: di,
  };
};

export const userRole = (ur) => {
  return {
    type: "GETUSERROLE",
    payload: ur,
  };
};
