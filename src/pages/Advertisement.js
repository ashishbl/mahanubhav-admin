import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Button,
  Input,
  Card,
  CardBody,
  Pagination,
} from "@windmill/react-ui";
import { FiPlus } from "react-icons/fi";

import useAsyncCalender from "../hooks/useAsyncCalender";
import useFilter from "../hooks/useFilter";
import NotFound from "../components/table/NotFound";
import Loading from "../components/preloader/Loading";
import { SidebarContext } from "../context/SidebarContext";
import CalenderServices from "../services/CalenderServices";
import PageTitle from "../components/Typography/PageTitle";
import BooksTable from "../components/books/BooksTable";
import AdvertisementTable from "../components/advertisement/AdvertisementTable";

const Advertisement = () => {
  const { toggleDrawer } = useContext(SidebarContext);
  const { data, loading } = useAsyncCalender(CalenderServices.getAdvertisement);
  const [advData, setAdvData] = useState();
  const {
    categoryRef,
    handleChangePage,
    totalResults,
    resultsPerPage,
    dataTable,
    serviceData,
    handleSubmitCategory,
  } = useFilter(data);

  // return <div style={{ display: 'flex', justifyContent: 'center' }}>
  //   <h1 style={{ margin: 50, fontSize: 30 }}>Comming Soon</h1>
  // </div>

  // const getAllAdv = async () => {
  //   const res = await fetch(
  //     "http://165.232.181.53:5055/api/mahanubhav/get-advertisement",
  //     {
  //       method: "POST",
  //       headers: {
  //         Accept: "*/*",
  //       },
  //     }
  //   );
  //   const data = await res.json();
  //   if (data) {
  //     console.log("data found");
  //     setAdvData(data.data);
  //   } else {
  //     console.log("no data found");
  //   }
  // };

  // useEffect(() => {
  //   getAllAdv();
  // }, []);

  return (
    <>
      <PageTitle>जाहिरात</PageTitle>
      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <CardBody>
          <form
            onSubmit={handleSubmitCategory}
            className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex"
          >
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <Input
                ref={categoryRef}
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                type="search"
                name="search"
                placeholder="Search by category type"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-1"
              ></button>
            </div>
            <div className="w-full md:w-56 lg:w-56 xl:w-56">
              <Button onClick={toggleDrawer} className="w-full rounded-md h-12">
                <span className="mr-3">
                  <FiPlus />
                </span>
                जाहिरात जोडा
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>

      {loading ? (
        <Loading loading={loading} />
      ) : serviceData.length !== 0 ? (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>शीर्षक</TableCell>
                <TableCell>वर्णन</TableCell>
                <TableCell>तारीख</TableCell>
                <TableCell className="text-right">क्रिया</TableCell>
              </tr>
            </TableHeader>
            <AdvertisementTable books={dataTable} />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              onChange={handleChangePage}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      ) : (
        <NotFound title="Books" />
      )}
    </>
  );
};

export default Advertisement;
