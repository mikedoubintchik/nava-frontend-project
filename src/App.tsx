import "bootstrap/dist/css/bootstrap.min.css";
import React, { ReactElement, Reducer, useReducer } from "react";
import { initialState, InitialStateType, IReducer, reducer } from "store";
import "App.scss";
import Header from "components/Header";
import MarketplacePage from "pages/MarketplacePage";
import { AppContext } from "store";

const App = (): ReactElement => {
  const [state, dispatch] = useReducer<Reducer<InitialStateType, IReducer>>(
    reducer,
    initialState
  );

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header title="Marketplace" />
        <MarketplacePage />
      </div>
    </AppContext.Provider>
  );
};

export default App;
