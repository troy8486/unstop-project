import { configureStore } from "@reduxjs/toolkit";
import desktopSlice from "./appSlice";

const appStore = configureStore({
    reducer: {
        app: desktopSlice,
    },
})

export default appStore