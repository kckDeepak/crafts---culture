import { createContext, useReducer } from 'react';

const initialState = { artisans: [], products: [] };

const GlobalContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ARTISANS':
      return { ...state, artisans: action.payload };
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
