import axios from "axios";
import { ErrorType } from "../models";

export function handleError(error: unknown): never {
  if (axios.isAxiosError(error)) {
    const errorResponse: ErrorType = error.response?.data || {
      message: "An error occurred. Try after some time.",
    };
    throw new Error(errorResponse.message);
  } else {
    throw new Error("Unknown error occurred");
  }
}