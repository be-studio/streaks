import { Streak } from "../utility/Streak.ts";
import { Header } from "./Header.tsx";
import { DaysHeader } from "./DaysHeader.tsx";
import { Grid } from "./Grid.tsx";


interface Props {
  streak: Streak | undefined;
}

export const Calendar = ({ streak }: Props) => {
  return (
    <div style={{
      width: "400px",
      margin: "0 auto"
    }}>
      <Header totalDaysStreak={streak?.streak_length} />
      <DaysHeader />
      <Grid calendar={streak?.calendar} images={streak?.images} />
    </div>
  )
};
