interface Props {
  streakType: "on_fire" | "almost_on_fire" | "freeze" | "none";
  images: Record<string, string> | undefined;
}

export const CalendarDay = ({ streakType, images }: Props) => {
  return (
    <div>
      {images && <img src={`../src/assets/${images[streakType]}`} style={{ maxWidth: "32px"}} />}
    </div>
  );
}
