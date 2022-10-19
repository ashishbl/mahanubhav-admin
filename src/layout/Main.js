import React from "react";

const Main = ({ children }) => {
  return (
    <main className="h-full overflow-y-auto">
      <div className="container-fluid grid px-6 mx-auto">{children}</div>
    </main>
  );
};

export default Main;
