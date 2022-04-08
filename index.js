import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";

const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "buy cake action",
  };
};

const buyIcecream = () => {
  return {
    type: BUY_ICECREAM,
    info: "buy ice-cream action",
  };
};

const initialCakeState = {
  numOfCakes: 10,
};

const initialIcecreamState = {
  numOfIcecreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    default:
      return state;
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIcecreams: state.numOfIcecreams - 1 };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ cake: cakeReducer, icecream: icecreamReducer }),
  applyMiddleware(logger)
);
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyIcecream());
unsubscribe();
