import React, { useEffect, useState, useContext } from "react";
import "../../assets/css/custom.css";
import { useDispatch, useSelector } from "react-redux";
import { imgType } from "../../utils/monthFrontpage";
import CalenderServices from "../../services/CalenderServices";
import { newStateData } from "../../redux/actions/actions";
import { Card, CardBody, Label } from "@windmill/react-ui";
import notupl from "../../assets/img/notupl.png";
import { API_BASE_URL_DOC } from "../../config";
import Dates from "../../pages/Dates";
import Rashibhavishya from "../../components/Rashibhavishya";
import Information from "../../components/Information/Information";
import Mahurat from "./Mahurat/Mahurat";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import OrderTable from '../../components/order/OrderTable';

const Backpage = ({ monthData, getMonthData }) => {
  const [dateByMonth, setdateByMonth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [panchangImg, setPanchangImg] = useState();
  const [prevData, setPrevData] = useState();
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.setDate);
  const nwState = useSelector((state) => state.newState);
  const { month, year } = myState;

  const getDateByMonthData = async () => {
    if (month && year) {
      setLoading(true);
      console.log(month, year);
      const res = await CalenderServices.getDateByMonth(month, year);
      if (res) {
        setdateByMonth(res.data);
        dispatch(newStateData(0));
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getDateByMonthData();
  }, [nwState === 200]);

  const getPanchangImage = async () => {
    if (month && year) {
      const res = await CalenderServices.getMonthData(month, year);
      if (res) {
        setPrevData(res.data[month - 1]);
        setPanchangImg(res.data[month - 1].panchangImage);
      }
    }
  };

  return (
    <Tabs>
      <TabList>
        <Tab>तारखा</Tab>
        <Tab>राशी भविष्य</Tab>
        <Tab>पंचांग</Tab>
        <Tab>विवाह मुहूर्त</Tab>
        <Tab>भूमिपूजन</Tab>
        <Tab>वास्तुशांती</Tab>
      </TabList>
      <TabPanel>
        <Dates dateByMonth={dateByMonth} loading={loading} />
      </TabPanel>
      <TabPanel>
        <Rashibhavishya
          getMonthData={getMonthData}
          monthData={monthData}
          loading={loading}
        />
      </TabPanel>
      <TabPanel>
        <Information
          panchangImg={panchangImg}
          getPanchangImage={getPanchangImage}
          prevData={prevData}
        />
      </TabPanel>
      <TabPanel>
        <Mahurat category={'लग्नाचा मुहूर्त'} />
      </TabPanel>
      <TabPanel>
        <Mahurat category={'भूमिपूजन'} />
      </TabPanel>
      <TabPanel>
        <Mahurat category={'वास्तुशांती'} />
      </TabPanel>
    </Tabs>
  );
};

export default Backpage;
