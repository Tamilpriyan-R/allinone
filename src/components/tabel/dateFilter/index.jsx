import { useReducer } from "react";
import { dateFilterState, dateFilterStateMange } from "./data";
import { tableDateStyles } from "../tableStyles/styles";

const DateFilter = ({ dateChange }) => {
  const [dateState, dispatch] = useReducer(
    dateFilterStateMange,
    dateFilterState
  );

  const handleDateChange = (start, end) => {
    dateChange(start, end);
  };
  return (
    <div style={{ ...tableDateStyles.container }}>
      <div style={{ ...tableDateStyles.box }}>
        <label style={{ ...tableDateStyles.label }}>Start Date</label>
        <input
          value={dateState?.startDate}
          name="startDate"
          style={{ ...tableDateStyles.input }}
          type="date"
          onChange={(e) => {
            dispatch({
              value: e?.target?.value,
              name: "startDate",
            });
            handleDateChange(e?.target?.value, dateState?.endDate);
            dispatch({
              value: "",
              name: "endDate",
            });
          }}
        />
      </div>
      <div style={{ ...tableDateStyles.box }}>
        <label style={{ ...tableDateStyles.label }}>End Date</label>
        <input
          value={dateState?.endDate}
          name="endDate"
          style={{ ...tableDateStyles.input }}
          type="date"
          disabled={dateState?.startDate == ""}
          min={dateState?.startDate}
          onChange={(e) => {
            dispatch({
              value: e?.target?.value,
              name: "endDate",
            });
            handleDateChange(dateState?.startDate, e?.target?.value);
          }}
        />
      </div>
    </div>
  );
};

export default DateFilter;
