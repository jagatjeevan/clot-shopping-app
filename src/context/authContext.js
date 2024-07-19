import CreatedContext from "./createContext";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, isLoggedIn: true, user: action.payload };

    case "logout":
    default:
      return { ...initialState };
  }
};

const login = (dispatch) => (user) =>
  dispatch({ type: "login", payload: user });

const logout = (dispatch) => () => dispatch({ type: "logout" });

export const { Context, Provider } = CreatedContext({
  actions: { login, logout },
  reducer,
  initialState,
});

export default withAuth = (Component) => {
  return function contextComponent(props) {
    return (
      <Context.Consumer>
        {(context) => <Component {...props} authContext={context} />}
      </Context.Consumer>
    );
  };
};
