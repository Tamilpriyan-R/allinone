export const dateFilterState = {
  startDate: "",
  endDate: "",
};

export const dateFilterStateMange = (state, action) => {
  const inputName = action?.name;
  const value = action?.value;

  switch (inputName) {
    case "startDate": {
      const alphaNLenghthRegex = new RegExp("^.{1,100}$");

      if (alphaNLenghthRegex.test(value)) {
        return {
          ...state,
          startDate: value,
          startDateStatus: "success",
        };
      } else if (!value) {
        return {
          ...state,
          startDate: "",
          startDateStatus: "unchecked",
        };
      } else {
        return {
          ...state,
          startDate: value,
          startDateStatus: "error",
        };
      }
    }
    case "endDate": {
      const alphaNLenghthRegex = new RegExp("^.{1,100}$");

      if (alphaNLenghthRegex.test(value)) {
        return {
          ...state,
          endDate: value,
          endDateStatus: "success",
        };
      } else if (!value) {
        return {
          ...state,
          endDate: "",
          endDateStatus: "unchecked",
        };
      } else {
        return {
          ...state,
          endDate: value,
          endDateStatus: "error",
        };
      }
    }

    default:
      return state;
  }
};
