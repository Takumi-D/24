export default interface Api {
  options: {
    title: {
      text: string;
    };
    series: [
      {
        data: number[];
      },
    ];
  };
  highcharts: boolean;
  text: string;
  dey: {
    value: number;
    background: string;
  };
  yesterday: {
    value: number;
    percent: number;
    percentBoolean: boolean;
    background: string;
  };
  thisDayOfTheWeek: {
    value: number;
    background: string;
  };
  id: number;
}

export interface Action {
  payload: number;
}
