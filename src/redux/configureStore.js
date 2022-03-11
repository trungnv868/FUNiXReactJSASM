import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Staffs } from "./staffs";
import { Department } from "./department";
import { Salary } from "./staffSalary";
import { StaffInDept } from "./staffInDep";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      staffs: Staffs,
      department: Department,
      salary: Salary,
      staffInDept: StaffInDept,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
