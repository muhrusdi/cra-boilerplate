import { createOvermind } from "overmind";
import { createHook } from "overmind-react";

export const useOvermind = createHook();

export const overmind = createOvermind({
  state: {},
  actions: {},
});
