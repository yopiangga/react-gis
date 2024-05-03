import { chartsConfig } from "src/configs";

export function insertDataChart({ data, categories }) {
  return {
    type: "bar",
    height: 220,
    series: [
      {
        name: "Views",
        data: data,
      },
    ],
    options: {
      ...chartsConfig,
      colors: "#388e3c",
      plotOptions: {
        bar: {
          columnWidth: "16%",
          borderRadius: 5,
        },
      },
      xaxis: {
        ...chartsConfig.xaxis,
        categories: categories,
      },
    },
  };
}

const websiteViewsChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Views",
      data: [50, 20, 10, 22, 50, 10, 40],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#388e3c",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
  },
};

export const statisticsChartsData = [
  {
    color: "white",
    title: "State",
    description: "Distribution student intern by State",
    chart: websiteViewsChart,
  },
  {
    color: "white",
    title: "City",
    description: "Distribution student intern by City",
    chart: websiteViewsChart,
  },
  {
    color: "white",
    title: "Paid",
    description: "Distribution data paid intern",
    chart: websiteViewsChart,
  },
  {
    color: "white",
    title: "Type Intern",
    description: "Distribution data type intern",
    chart: websiteViewsChart,
  },
  {
    color: "white",
    title: "Type Work",
    description: "Distribution data type work",
    chart: websiteViewsChart,
  },
];

export default statisticsChartsData;
