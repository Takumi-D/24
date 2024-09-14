import React from "react";
import Highcharts from "highcharts";

import HighchartsReact from "highcharts-react-official";
import { openHighcharts } from "../../slice/defaultSlice";
import { useDispatch } from "react-redux";

import "./line.scss";
import Api from "../../type/store";

function Line({
  text,
  dey,
  yesterday,
  thisDayOfTheWeek,
  highcharts,
  id,
  options,
}: Api) {
  const dispatch = useDispatch();

  const highchartsEl = (
    <tr>
      <td className="HighchartsReactTable" colSpan={4}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </td>
    </tr>
  );

  return (
    <>
      <tbody className="tbody">
        <tr
          onClick={() => {
            dispatch(openHighcharts({ id, highcharts }));
          }}
        >
          <td className="td">{text}</td>
          <td className={`td end ${dey.background}`}>
            <span className="end">{dey.value}</span>
          </td>
          <td className={`td center ${yesterday.background}`}>
            <span className="one">{yesterday.value}</span>{" "}
            <span
              className={`${yesterday.percentBoolean ? "text-green" : "text-red end"}`}
            >
              {yesterday.percentBoolean
                ? yesterday.percent
                : -yesterday.percent}
              %
            </span>
          </td>
          <td className={`td end ${thisDayOfTheWeek.background}`}>
            {thisDayOfTheWeek.value}
          </td>
        </tr>
        {highcharts ? highchartsEl : null}
      </tbody>
    </>
  );
}

export default Line;
