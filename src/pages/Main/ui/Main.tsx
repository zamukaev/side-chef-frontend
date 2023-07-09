import { FC, useEffect, useState } from "react";

import { IRecipes, IVegetarianPicsTypes } from "shared/types";
import { PickCard } from "widgets/pickCard";
import { Cuisines } from "shared/ui";
import { Picks } from "db";

import axios from "axios";

import styles from "./Main.module.scss";

interface MainProps {
  className?: string;
}

const Main: FC<MainProps> = (props) => {
  const { className } = props;

  const [vegetarianPicks, setVegetarianPicks] = useState<
    IVegetarianPicsTypes[]
  >([]);

  const getVegetarianPicks = async () => {
    // const { data } = await axios.get<IRecipes>("https://side-chef-api.vercel.app/api/vegetarian");
    setVegetarianPicks(Picks);
  };

  useEffect(() => {
    getVegetarianPicks();
  }, []);
  return (
    <main className={styles.main}>
      <Cuisines />
      <PickCard
        cardType="vegetarian"
        headline="Our Vegetarian Picks"
        slidesPerView={4}
        spaceBetween={10}
        picks={Picks}
      />
      <PickCard
        cardType="trending"
        headline="Trending"
        spaceBetween={40}
        slidesPerView={5}
        picks={Picks}
      />
    </main>
  );
};

export default Main;
