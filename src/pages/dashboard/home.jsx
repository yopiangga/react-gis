import React, { useEffect, useState } from "react";
import { StatisticsCard } from "src/widgets/cards";
import { StatisticsChart } from "src/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  insertDataChart,
} from "src/data";
import { HomeServcies } from "src/services/HomeServices";

export function HomePage() {
  const homeServices = new HomeServcies();

  const [cards, setCards] = useState(statisticsCardsData);
  const [charts, setCharts] = useState(statisticsChartsData);

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    const resCount = await homeServices.getCounts();
    const resStatistics = await homeServices.getStatistics();

    const tempCards = statisticsCardsData.map((item, index) => {
      const indexing =
        index == 0
          ? "company"
          : index == 1
          ? "postActivity"
          : index == 2
          ? "roleIntern"
          : "student";

      const temp = {
        ...item,
        value: resCount[indexing],
      };
      return temp;
    });

    setCards(tempCards);

    const tempStats = statisticsChartsData.map((item, index) => {
      const indexing =
        index == 0
          ? "state"
          : index == 1
          ? "city"
          : index == 2
          ? "paid"
          : index == 3
          ? "typeIntern"
          : "typeWork";

      const temp = {
        ...item,
        chart: insertDataChart({
          data: resStatistics[indexing].data,
          categories: resStatistics[indexing].categories,
        }),
      };
      return temp;
    });

    setCharts(tempStats);
  }

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((props) => (
          <StatisticsCard
            key={props.title}
            title={props.title}
            icon={React.createElement(props.icon, {
              className: "w-6 h-6 text-white",
            })}
            color={props.color}
            value={props.value}
          />
        ))}
      </div>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {charts.map((props) => (
          <StatisticsChart key={props.title} {...props} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
