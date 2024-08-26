interface Props {
  totalDaysStreak: number | undefined;
}

export const Header = ({ totalDaysStreak }: Props) => <h1>{totalDaysStreak} day streak</h1>
