import './App.css'
import { Calendar } from "./components/Calendar.tsx";
import { Streak } from "./utility/Streak.ts";


function App() {
  // I would use a state variable to store the API data and use 'useEffect' to call the API to retrieve the data, set that state variable and pass the data to the Calendar component.

  const streak: Streak = {
    streak_length: 22,
    calendar: [
      {
        streak_type: "none",
        day: 1,
      },
      {
        streak_type: "none",
        day: 2
      },
      {
        streak_type: "on_fire",
        day: 3,
      },
      {
        streak_type: "on_fire",
        day: 4,
      },
      {
        streak_type: "on_fire",
        day: 5
      },
      {
        streak_type: "almost_on_fire",
        day: 6,
      },
      {
        streak_type: "almost_on_fire",
        day: 7
      },
      {
        streak_type: "on_fire",
        day: 8
      },
      {
        streak_type: "almost_on_fire",
        day: 9
      },
      {
        streak_type: "on_fire",
        day: 10,
      },
      {
        streak_type: "on_fire",
        day: 11,
      },
      {
        streak_type: "on_fire",
        day: 12
      },
      {
        streak_type: "on_fire",
        day: 13,
      },
      {
        streak_type: "on_fire",
        day: 14,
      },
      {
        streak_type: "freeze",
        day: 15
      },
      {
        streak_type: "on_fire",
        day: 16,
      },
      {
        streak_type: "on_fire",
        day: 17,
      },
      {
        streak_type: "on_fire",
        day: 18
      },
      {
        streak_type: "on_fire",
        day: 19,
      },
      {
        streak_type: "on_fire",
        day: 20,
      },
      {
        streak_type: "on_fire",
        day: 21
      },
      {
        streak_type: "freeze",
        day: 22
      },
      {
        streak_type: "almost_on_fire",
        day: 23
      },
      {
        streak_type: "on_fire",
        day: 24
      },
      {
        streak_type: "none",
        day: 25,
      },
      {
        streak_type: "none",
        day: 27
      },
      {
        streak_type: "none",
        day: 28,
      },
    ],
    images: {
      on_fire: "on_fire.jpg",
      almost_on_fire: "almost_on_fire.jpg",
      freeze: "freeze.jpg",
      none: "none.jpg"
    }
  }

  return <Calendar streak={streak} />;
}

export default App
