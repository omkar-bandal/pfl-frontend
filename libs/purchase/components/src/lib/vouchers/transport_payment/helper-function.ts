/* eslint-disable @typescript-eslint/no-explicit-any */
import { numToWords } from "@prime-fresh/shared/modules";
import { ChangeEvent } from "react";

export const handleAmountChange = (event: ChangeEvent<HTMLInputElement>, setFieldValue: (field: string, value: any) => void) => {
    const {name, value} = event.target;
    setFieldValue(name, value);
    const amtInWords = numToWords(Number(value));
    setFieldValue("amtWords", amtInWords);
}