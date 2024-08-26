export interface Day {
  streak_type:  "on_fire" | "almost_on_fire" | "freeze" | "none";
  day: number;
}

export interface Streak {
  streak_length: number;
  calendar: Day[];
  images: Record<string, string>
}
