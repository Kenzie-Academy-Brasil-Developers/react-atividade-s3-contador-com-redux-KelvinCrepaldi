import { NUMBER_ADD, NUMBER_SUB } from "./actionTypes";

export const addNumber = (number) => {
  return {
    type: NUMBER_ADD,
    number,
  };
};

export const subNumber = (number) => {
  return {
    type: NUMBER_SUB,
    number,
  };
};
