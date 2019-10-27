import React from "react";

import { Chart, Chart2, Chart3, Chart4, Chart5, Chart6, MainText } from "./index";

function HomeView() {
  return (
    <div className="bg-white shadow-l overflow-hidden">
      <MainText />
      <div className="w-full container mx-auto flex flex-col flex-wrap mt-0 pt-6 pb-4 py-1">
        <h2 className="text-2xl">Car cost allocation</h2>
        <Chart />
        The leaders of the high-end segment are Mercedes-Maybach S 560, they are owned
12 deputies. These same cars are the most expensive declared
cars. The most typical car (200 pieces) of a deputy is
Mercedes S500, whose average cost ranges around a million.

        <h2 className="text-xl mt-24">2% of the most expensive cars</h2>
        <Chart2 />
        Car lovers prefer a classic more expensive: Bentley Mulsanne,
         Maybach 57 and Rolls-Royce Phantom. Their cost starts at 19
         million rubles.
        <h2 className="text-xl mt-24">The remaining 98%/h2>
        <Chart3 />In the price category up to 20 million rubles prevail
         Mercedes-Benz S500, Toyota Land Cruiser Prado and Toyota Rav 4. If you
         If you want to flaunt, then buy a BMW X5 or Lexus RX350.
        <div className="flex -mx-2 items-center">
          <div className="w-1/3 px-2 items-center flex flex-col">
            <img src="/mercedes-benz.png" />
            <p>Mercedes-Benz S500</p>
          </div>
          <div className="w-1/3 px-2 items-center flex flex-col">
            <img src="/crusak.png" />
            <p>Toyota Land Cruiser Prado</p>
          </div>
          <div className="w-1/3 px-2 items-center flex flex-col">
            <img src="/rav4.png" />
            <p>Toyota Rav 4</p>
          </div>
        </div>
        <h2 className="text-2xl mt-24">
        The average cost of a car for a party member
        </h2>
        <Chart4 />
        We decided to see if the requirements of the members of the various
         batches to your cars. It turned out that the wishes of the opposite parties coincide
         at the mark of 1,416,000 rubles. The most picky are the members
         Communist Party. They have enough for 200 thousand less.

        <h2 className="text-2xl mt-24">
        The share of domestic cars from the total number of party cars
        </h2>
        <Chart5 />
        For interest, we found out what proportion of officials supports domestic
         auto industry. The leaders were representatives of the Communist Party - 11% of their fleet consist of
         VAZ cars.
        <h2 className="text-2xl mt-24">
        The ratio of personal and joint income to the cost of a personal fleet, and
           fleet of relatives
        </h2>To search for inconsistencies in the declarations, we calculated 4 values:</h2>
        <ol style={{ listStyle: "symbols", paddingLeft: "40px" }}>
          <li>Total personal income</li>
          <li>Total income of all relatives</li>
          <li>The total cost of all cars in personal use</li>
          <li>
          The total value of all cars used by relatives
          </li>
        </ol>
        Based on these data, we calculated the ratio of value to income and
         looked how many years it will take to accumulate on such property with
         current income indicated in the declaration. Results of the most interesting
         declarations we displayed on the following chart. On the axes of the graph are plotted
         the total cost of a personal fleet and a fleet of relatives. Size and
         colors highlighted personal income and income of relatives, respectively.
        <Chart6 />
      </div>
    </div>
  );
}

export default HomeView;
