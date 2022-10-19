import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newStateData } from "../redux/actions/actions";
import { SidebarContext } from "../context/SidebarContext";

const useAsyncDate = (asyncFunction) => {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.setDate);
  const nwState = useSelector((state) => state.newState);
  console.log(nwState);
  const { month, year } = myState;
  const [data, setData] = useState([] || {});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { isUpdate, setIsUpdate } = useContext(SidebarContext);

  useEffect(() => {
    let unmounted = false;
    let source = axios.CancelToken.source();

    if (month && year) {
      asyncFunction(month, year, { cancelToken: source.token })
        .then((res) => {
          dispatch(newStateData(200));
          if (!unmounted) {
            setData(res.data);
            setError("");
            setLoading(false);
          }
        })
        .catch((err) => {
          if (!unmounted) {
            console.log(err.message);
            setError(err.message);
            if (axios.isCancel(err)) {
              // console.log(`request cancelled:${err.message}`);
              setError(err.message);
              setLoading(false);
              setData([]);
            } else {
              // console.log('another error happened:' + err.message);
              setError(err.message);
              setLoading(false);
              setData([]);
            }
          }
        });
    } else {
      setLoading(false);
      setError("somthing went wrong");
      setIsUpdate(false);
    }
    setIsUpdate(false);

    return () => {
      unmounted = true;
      source.cancel("Cancelled in cleanup");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdate, nwState === 200]);

  return {
    data,
    error,
    loading,
  };
};

export default useAsyncDate;
