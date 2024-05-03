import { chartsConfig } from "src/configs";

export function insertDataChart({data, categories}){
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
          categories: categories
        },
      },
    }
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
    description: "Last Campaign Performance",
    chart: websiteViewsChart,
  },
  {
    color: "white",
    title: "City",
    description: "Last Campaign Performance",
    chart: websiteViewsChart,
  },
  {
    color: "white",
    title: "Paid",
    description: "Last Campaign Performance",
    chart: websiteViewsChart,
  },
  {
    color: "white",
    title: "Type Intern",
    description: "Last Campaign Performance",
    chart: websiteViewsChart,
  },
  {
    color: "white",
    title: "Type Work",
    description: "Last Campaign Performance",
    chart: websiteViewsChart,
  },
  
];

export default statisticsChartsData;
