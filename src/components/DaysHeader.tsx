export const DaysHeader = () => (
  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)"
  }}>
    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => <div>{day}</div>)}
  </div>
)
