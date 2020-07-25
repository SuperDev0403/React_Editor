import { INC_NUM, DEC_NUM } from "./constants";

export const incNum = (payload) => ({
  type: INC_NUM,
  payload,
});

export const decNum = (payload) => ({
  type: DEC_NUM,
  payload,
});
