export const signInState = {
  email: "",
  password: "",
  emailStatus: "unchecked",
  passwordStatus: "unchecked",
};

export const signInStateMange = (state, action) => {
  const inputName = action?.name;
  const value = action?.value;

  switch (inputName) {
    case "email": {
      const alphaNLenghthRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (alphaNLenghthRegex.test(value)) {
        return { ...state, email: value, emailStatus: "success" };
      } else if (!value) {
        return { ...state, email: "", emailStatus: "unchecked" };
      } else {
        return { ...state, email: value, emailStatus: "error" };
      }
    }
    case "password": {
      const alphaNLenghthRegex = new RegExp("^.{1,40}$");
      if (alphaNLenghthRegex.test(value)) {
        return { ...state, password: value, passwordStatus: "success" };
      } else if (!value) {
        return { ...state, password: "", passwordStatus: "unchecked" };
      } else {
        return { ...state, password: value, passwordStatus: "error" };
      }
    }
    default:
      return state;
  }
};