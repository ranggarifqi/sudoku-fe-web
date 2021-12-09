import { createSelector } from "reselect";
import { RootState } from "..";

const sltHealthPoint = (state: RootState) => state.healthPoint;
export const sltHealthPointLive = createSelector(
  sltHealthPoint,
  (state) => state.life
);
