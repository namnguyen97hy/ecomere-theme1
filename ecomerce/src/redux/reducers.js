import { combineReducers } from "redux";
import brandReducer from "../pages/Home/redux/brandSlice";
import clientReviewReducer from "../pages/Home/redux/clientReviewSlice";
import productReducer from "../pages/Home/redux/productSlice";
import recentNewsReducer from "../pages/Home/redux/recentNewSlice";

const rootReducer = combineReducers({
  product : productReducer,
  clientReview : clientReviewReducer,
  recentNews: recentNewsReducer,
  brands: brandReducer
});

export default rootReducer;