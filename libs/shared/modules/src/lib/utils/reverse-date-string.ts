export const reverseDateString = (dateString: string): string => {
    // Regex to test for 'YYYY-MM-DD' format
    const yyyyMmDdRegex = /^\d{4}-\d{2}-\d{2}$/;

    // Check if the dateString already matches 'YYYY-MM-DD'
    if (yyyyMmDdRegex.test(dateString)) {
        return dateString; // It's already in the desired format, so return as is.
    }

    // If not 'YYYY-MM-DD', assume it's 'DD-MM-YYYY' and attempt to convert
    const parts = dateString.split('-');

    // Basic validation for 'DD-MM-YYYY' format (ensure 3 parts)
    if (parts.length !== 3) {
        return "Invalid date format"; // Or throw an error, depending on desired error handling
    }

    const day = parts[0];
    const month = parts[1];
    const year = parts[2];

    // Additional validation to ensure parts are numeric and within expected ranges for 'DD-MM-YYYY'
    // This is a basic check; for robust date validation, consider using a date library.
    if (isNaN(Number(day)) || isNaN(Number(month)) || isNaN(Number(year)) ||
        Number(day) < 1 || Number(day) > 31 ||
        Number(month) < 1 || Number(month) > 12 ||
        Number(year) < 1000 || Number(year) > 9999 // Assuming 4-digit year
    ) {
        return "Invalid date format";
    }

    return `${year}-${month}-${day}`;
};