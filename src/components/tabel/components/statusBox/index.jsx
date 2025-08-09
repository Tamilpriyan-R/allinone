import { tableStatusCard } from "../../tableStyles/styles";

const TabelStatusCard = ({ children, bg, color }) => {
  return (
    <div
      style={{
        ...tableStatusCard.box,
        background: bg,
        color: color,
      }}
    >
      {children}
    </div>
  );
};

export default TabelStatusCard;
