/* eslint-disable @typescript-eslint/no-explicit-any */
import { IParticulars } from "@prime-fresh/purchase_api";
import { numToWords } from "@prime-fresh/shared/modules";
import { ChangeEvent } from "react";

const recalcTotal = (particulars: IParticulars[]): number => {
    return particulars.reduce((acc, item) => acc + (Number(item.amt) || 0), 0);
  };

export const handleRemove = (index: number, formikObj : any) => {
    const updatedParticulars = formikObj.values.particulars.filter((_: any, i: number) => i !== index);
    const total = recalcTotal(updatedParticulars);
    formikObj.setFieldValue("particulars", updatedParticulars, false);
    formikObj.setFieldValue("totalAmt", total, true);
    formikObj.setFieldValue("amtWords", numToWords(total), true);
  };

export const handlePush = (newItem: IParticulars, formikObj : any) => {
    const updatedParticulars = [...formikObj.values.particulars, newItem];
    const total = recalcTotal(updatedParticulars);
    formikObj.setFieldValue("particulars", updatedParticulars, false);
    formikObj.setFieldValue("totalAmt", total, true);
    formikObj.setFieldValue("amtWords", numToWords(total), true);
  };

export const handleAmountChange = (e: ChangeEvent<HTMLInputElement>, index: number, formikObj : any) => {
    const newAmount = Number(e.target.value);
    const updatedParticulars = formikObj.values.particulars.map((item: any, i: number) =>
      i === index ? { ...item, amt: newAmount } : item
    );
    const total = recalcTotal(updatedParticulars);
    formikObj.setFieldValue(`particulars.${index}.amt`, newAmount, false);
    formikObj.setFieldValue("totalAmt", total, true);
    formikObj.setFieldValue("amtWords", numToWords(total), true);
  };