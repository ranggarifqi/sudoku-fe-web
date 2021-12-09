import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const MAX_LIFE = 5;
const MIN_LIFE = 0;

export interface HealthPointState {
  life: number;
}

const initialState: HealthPointState = {
  life: 3,
};

export const healthPointSlice = createSlice({
  name: "healthPoint",
  initialState,
  reducers: {
    increaseLife: (state, action: PayloadAction<number>) => {
      if (state.life <= MAX_LIFE) {
        if (state.life + action.payload >= MAX_LIFE) {
          state.life = MAX_LIFE;
          return;
        }
        state.life += action.payload;
      }
    },
    decreaseLife: (state, action: PayloadAction<number>) => {
      if (state.life >= MIN_LIFE) {
        if (state.life - action.payload <= MIN_LIFE) {
          state.life = MIN_LIFE;
          return;
        }
        state.life -= action.payload;
      }
    },
  },
});

export * from "./selectors";
export const { increaseLife, decreaseLife } = healthPointSlice.actions;

export default healthPointSlice.reducer;
