import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { receiving, State } from "../../slice/defaultSlice";
import Line from "../line";

import "./table.scss";

function Table() {
  const dispatch = useDispatch();
  const data = useSelector((state: State) => state.data);

  useEffect(() => {
    dispatch(receiving());
  }, []);

  const lines = data?.map((item) => {
    return <Line {...item} key={item.id} />;
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <td className="td center">Пользователь</td>
          <td className="td center blue">Текуший день</td>
          <td className="td center">Вчера</td>
          <td className="td center">Этот день недели</td>
        </tr>
      </thead>
      {lines}
    </table>
  );
}

export default Table;
