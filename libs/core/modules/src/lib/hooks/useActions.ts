import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { authActionCreators, dialogBoxActionCreators, layoutActionCreators, previewActionCreators } from "../store/slices";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators({ 
        ...authActionCreators, 
        ...layoutActionCreators,
        ...previewActionCreators,
        ...dialogBoxActionCreators
    }, dispatch);
  };
  