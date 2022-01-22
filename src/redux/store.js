const logger = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return (state = action.payload);
    case "LOGOUT":
      return (state = null);
  }
};

const login = (id) => {
  return {
    type: "LOGIN",
    payload: id,
  };
};
const logout = () => {
  return {
    type: "LOGOUT",
  };
};
