import React from "react";
import { create } from "zustand";

export const DataShareContext = create((set) => ({
  mealName: "pizza",
  handleChooseMeal: (meal) => set(() => ({ mealName: meal })),
}));
