/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { createOvermind } from "overmind";
import { createHook } from "overmind-react";

export const useOvermind = createHook();

export const overmind = createOvermind({
  onInitialize({ state, actions, effects }, instance) {
    state.todos = effects.storage.getTodos();
  },
  state: {
    todos: {},
  },
  actions: {},
  effects: {
    storage: {
      getTodos() {
        return {
          title: "last",
          title2: "first",
        };
      },
    },
  },
}, { devtools: process.env.NODE_ENV !== "production" });
