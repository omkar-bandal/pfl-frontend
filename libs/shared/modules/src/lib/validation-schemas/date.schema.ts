import * as yup from 'yup';

export const dateSchema = yup.string()
  .test('is-future-or-today', 'Date must be today or in the future', (value) => {
    if (!value) {
      return true; // Allow null or empty values
    }

    const selectedDate = new Date(value);
    const currentDate = new Date();

    // Set time to 00:00:00 to compare only dates
    selectedDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    return selectedDate >= currentDate;
  });

