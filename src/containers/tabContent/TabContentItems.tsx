import React, { FC, useEffect } from "react";
import { FetchRV, TabDataType, TabItemType, ThunkDispatcher } from "types";
import { useDispatch } from "react-redux";
import { setAlert } from "redux/alert/actions";
import TabContentItem from "./TabContentItem";

type Props = {
  data: FetchRV<TabDataType>[];
};

const TabContentItems: FC<Props> = ({ data }) => {
  const items = data.reduce<TabItemType[]>(
    (acc, curr) => (curr.res?.results ? [...acc, ...curr.res.results] : acc),
    []
  );

  const dispatch = useDispatch<ThunkDispatcher>();

  useEffect(() => {
    const lastData = data[data.length - 1];
    if (lastData.status) dispatch(setAlert(true, "error", lastData.status));
  }, [data]);

  return (
    <>
      {items.map((item, index) => (
        <TabContentItem item={item} key={index} />
      ))}
    </>
  );
};

export default TabContentItems;
