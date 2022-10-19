import React from "react";
import { TableContainer, Card } from "@windmill/react-ui";
import NotFound from "../components/table/NotFound";
import Loading from "../components/preloader/Loading";
import PageTitle from "../components/Typography/PageTitle";
import DateTable from "../components/date/DateTable";

const Dates = ({ dateByMonth, loading }) => {
  return (
    <>
      {/* <PageTitle>दिवस</PageTitle> */}
      {/* <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5"></Card> */}
      {loading ? (
        <Loading loading={loading} />
      ) : dateByMonth.length !== 0 ? (
        <TableContainer className="mb-8">
          <DateTable dateByMonth={dateByMonth} />
        </TableContainer>
      ) : (
        <NotFound title="Books" />
      )}
    </>
  );
};

export default Dates;
