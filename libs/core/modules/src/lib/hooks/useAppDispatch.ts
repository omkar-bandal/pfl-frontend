import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store.core";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()