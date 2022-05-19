import { useContext } from "react";
import { AppStateContext } from "../components/AppStateProvider";

export const useAppState = () => useContext(AppStateContext);
