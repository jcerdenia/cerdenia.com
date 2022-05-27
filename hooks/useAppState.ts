import { useContext } from "react";
import { AppStateContext } from "../components/AppStateProvider";

const useAppState = () => useContext(AppStateContext);

export default useAppState;
