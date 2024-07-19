const { useReducer, createContext } = require("react");

const CreatedContext = ({ actions, reducer, initialState }) => {
  const Context = createContext();
  const Provider = ({ children }) => {
    const [state, dispatchActions] = useReducer(reducer, initialState);

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatchActions);
    }

    return (
      <Context.Provider value={{ state, dispatch: boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};

export default CreatedContext;
