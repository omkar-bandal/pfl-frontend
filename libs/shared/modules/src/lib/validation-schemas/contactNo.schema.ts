import * as yup from 'yup';

const contactNoRegex = /^[6-9]\d{9}$/; // Matches Indian mobile numbers

export const contactNoSchema = yup.string()
  .matches(contactNoRegex, 'Please enter a valid 10-digit contact number')
