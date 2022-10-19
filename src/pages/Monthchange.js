import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { newStateData } from "../redux/actions/actions";
import "react-tabs/style/react-tabs.css";

//Components
import Frontpage from "../components/frontpage/Frontpage";
import Backpage from "../components/backpage/Backpage";
import PageTitle from "../components/Typography/PageTitle";
import Setdate from "../components/setdate/Setdate";
import CalenderServices from "../services/CalenderServices";
import { useDispatch, useSelector } from "react-redux";

const Monthchange = () => {
  const myState = useSelector((state) => state.setDate);
  const nwState = useSelector((state) => state.newState);
  const { month, year } = myState;
  const [monthData, setmonthData] = useState(null);

  const getMonthData = async () => {
    if (month && year) {
      const res = await CalenderServices.getMonthData(month, year);
      if (res) {
        setmonthData(res.data);
      }
    }
  };

  useEffect(() => {
    getMonthData();
  }, [nwState === 200]);

  return (
    <>
      <PageTitle>महिन्याचा बदल</PageTitle>
      <Setdate />
      <div>
        <Tabs>
          <TabList>
            <Tab>पहिले पान</Tab>
            <Tab>मागील पान</Tab>
          </TabList>
          {monthData && (
            <>
              <TabPanel>
                <Frontpage data={monthData} getMonthData={getMonthData} />
              </TabPanel>
              <TabPanel>
                <Backpage monthData={monthData} getMonthData={getMonthData} />
              </TabPanel>
            </>
          )}
        </Tabs>
      </div>
    </>
  );
};

export default Monthchange;
