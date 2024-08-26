import { CalendarDay } from "./CalendarDay.tsx";
import { Day } from "../utility/Streak.ts";


interface Props {
  calendar: Day[] | undefined;
  images: Record<string, string> | undefined;
}

export const Grid = ({ calendar, images }: Props) => {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)"
    }}>
      {calendar && calendar.map(dayOfMonth => <CalendarDay key={dayOfMonth.day} streakType={dayOfMonth.streak_type} images={images} />)}
    </div>
  )
}
