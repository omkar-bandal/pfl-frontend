import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { authActionCreators, layoutActionCreators, notificationActionCreators, previewActionCreators } from "../store/slices";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators({ 
        ...authActionCreators, 
        ...layoutActionCreators,
        ...notificationActionCreators,
        ...previewActionCreators
    }, dispatch);
  };
  