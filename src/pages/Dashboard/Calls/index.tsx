import React, { useEffect, useState } from "react";

// hooks
import { useRedux } from "../../../hooks/index";

// components
import Loader from "../../../components/Loader";
import AppSimpleBar from "../../../components/AppSimpleBar";
import LeftbarTitle from "../../../components/LeftbarTitle";
import Call from "./Call";

// actions
import { getCalls } from "../../../redux/actions";

// interface
import { CallItem } from "../../../data/calls";

interface IndexProps {}
const Index = (props: IndexProps) => {
  // global store
  const { dispatch, useAppSelector } = useRedux();

  const { calls, getCallsLoading } = useAppSelector((state: any) => ({
    calls: state.Calls.calls,
    getCallsLoading: state.Calls.getCallsLoading,
  }));

  // get user calls
  useEffect(() => {
    dispatch(getCalls());
  }, [dispatch]);

  const [callsList, setCallsList] = useState([]);

  useEffect(() => {
    setCallsList(calls);
  }, [calls]);

  return (
    <div className="position-relative">
      {getCallsLoading && <Loader />}
      <LeftbarTitle title="Calls" />
      {/* end p-4 */}

      {/* Start contact lists */}
      <AppSimpleBar className="chat-message-list chat-call-list">
        <ul className="list-unstyled chat-list">
          {(callsList || []).map((call: CallItem, key: number) => (
            <Call call={call} key={key} />
          ))}
        </ul>
      </AppSimpleBar>
      {/* end contact lists */}
    </div>
  );
};

export default Index;
