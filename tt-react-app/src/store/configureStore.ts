import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

export default function configureStore() {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_COMPOSE__ || compose;

  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}
