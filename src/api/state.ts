import State from "../type/store";

const state: Array<State> = [
  {
    options: {
      title: {
        text: "Выручка руб",
      },
      series: [
        {
          data: [4, 5, 4],
        },
      ],
    },
    highcharts: false,
    text: "Выручка руб",
    dey: {
      value: 500521,
      background: "blue",
    },
    yesterday: {
      value: 500521,
      percent: 4,
      percentBoolean: true,
      background: "green",
    },
    thisDayOfTheWeek: {
      value: 4805121,
      background: "red",
    },
    id: 1,
  },
  {
    options: {
      title: {
        text: "Наличные",
      },
      series: [
        {
          data: [3, 3, 3],
        },
      ],
    },
    highcharts: false,
    text: "Наличные",
    dey: {
      value: 300000,
      background: "blue",
    },
    yesterday: {
      value: 300000,
      percent: 0,
      percentBoolean: true,
      background: null,
    },
    thisDayOfTheWeek: {
      value: 300000,
      background: null,
    },
    id: 2,
  },
  {
    options: {
      title: {
        text: "Безналичный Расчёт",
      },
      series: [
        {
          data: [1, 1, 1],
        },
      ],
    },
    highcharts: false,
    text: "Безналичный Расчёт",
    dey: {
      value: 100000,
      background: "blue",
    },
    yesterday: {
      value: 100000,
      percent: 0,
      percentBoolean: true,
      background: null,
    },
    thisDayOfTheWeek: {
      value: 100000,
      background: null,
    },
    id: 3,
  },
  {
    options: {
      title: {
        text: "Кредитные Карты",
      },
      series: [
        {
          data: [1.5, 1.5, 1.5],
        },
      ],
    },
    highcharts: false,
    text: "Кредитные Карты",
    dey: {
      value: 100521,
      background: "blue",
    },
    yesterday: {
      value: 100521,
      percent: 0,
      percentBoolean: true,
      background: null,
    },
    thisDayOfTheWeek: {
      value: 100521,
      background: null,
    },
    id: 4,
  },
  {
    options: {
      title: {
        text: "Средний чек. руб",
      },
      series: [
        {
          data: [1, 2, 2],
        },
      ],
    },
    highcharts: false,
    text: "Средний чек. руб",
    dey: {
      value: 1300,
      background: "blue",
    },
    yesterday: {
      value: 900,
      percent: 44,
      percentBoolean: true,
      background: "green",
    },
    thisDayOfTheWeek: {
      value: 900,
      background: "green",
    },
    id: 5,
  },
  {
    options: {
      title: {
        text: "Средний гость. руб",
      },
      series: [
        {
          data: [1, 2, 1],
        },
      ],
    },
    highcharts: false,
    text: "Средний гость. руб",
    dey: {
      value: 1200,
      background: "blue",
    },
    yesterday: {
      value: 800,
      percent: 50,
      percentBoolean: true,
      background: "green",
    },
    thisDayOfTheWeek: {
      value: 800,
      background: "green",
    },
    id: 6,
  },
  {
    options: {
      title: {
        text: "Удаления из чека (после оплаты). руб",
      },
      series: [
        {
          data: [2, 2, 1],
        },
      ],
    },
    highcharts: false,
    text: "Удаления из чека (после оплаты). руб",
    dey: {
      value: 1000,
      background: "blue",
    },
    yesterday: {
      value: 1100,
      percent: 9,
      percentBoolean: false,
      background: "red",
    },
    thisDayOfTheWeek: {
      value: 900,
      background: "green",
    },
    id: 7,
  },
  {
    options: {
      title: {
        text: "Удаления из чека (до оплаты). руб",
      },
      series: [
        {
          data: [2, 2, 1],
        },
      ],
    },
    highcharts: false,
    text: "Удаления из чека (до оплаты). руб",
    dey: {
      value: 1300,
      background: "blue",
    },
    yesterday: {
      value: 1300,
      percent: 0,
      percentBoolean: true,
      background: null,
    },
    thisDayOfTheWeek: {
      value: 900,
      background: "green",
    },
    id: 8,
  },
  {
    options: {
      title: {
        text: "Количество чеков",
      },
      series: [
        {
          data: [36, 34, 34],
        },
      ],
    },
    highcharts: false,
    text: "Количество чеков",
    dey: {
      value: 34,
      background: "blue",
    },
    yesterday: {
      value: 36,
      percent: 6,
      percentBoolean: false,
      background: "red",
    },
    thisDayOfTheWeek: {
      value: 34,
      background: null,
    },
    id: 9,
  },
  {
    options: {
      title: {
        text: "Количество гостей",
      },
      series: [
        {
          data: [36, 34, 32],
        },
      ],
    },
    highcharts: false,
    text: "Количество гостей",
    dey: {
      value: 34,
      background: "blue",
    },
    yesterday: {
      value: 36,
      percent: 6,
      percentBoolean: false,
      background: "red",
    },
    thisDayOfTheWeek: {
      value: 32,
      background: "green",
    },
    id: 10,
  },
];

export default state;
