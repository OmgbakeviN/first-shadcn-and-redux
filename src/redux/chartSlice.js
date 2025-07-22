import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chartData: [
        { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
        { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
        { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
        { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
        { browser: "other", visitors: 90, fill: "var(--color-other)" }, 
    ],
};

const chartSlice = createSlice({
    name: "chart",
    initialState,
    reducers: {
        setChartData(state, action) {
            state.chartData = action.payload;
        },
    },
});

export const { setChartData } = chartSlice.actions;
export default chartSlice.reducer;