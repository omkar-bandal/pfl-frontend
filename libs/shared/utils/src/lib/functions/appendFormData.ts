// export const appendFormData = (formData: FormData, data: Record<string, any>, prefix = "") => {
//     Object.keys(data).forEach((key) => {
//         const value = data[key];
//         const formKey = prefix ? `${prefix}[${key}]` : key;

//         if (value instanceof File) {
//             formData.append(formKey, value);
//         } else if (typeof value === "object" && value !== null && !(value instanceof Date)) {
//             appendFormData(formData, value, formKey); // Recursively handle nested objects
//         } else if (value !== undefined && value !== null) {
//             formData.append(formKey, value.toString());
//         }
//     });
// };


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const appendFormData = (formData: FormData, data: Record<string, any>, prefix = "") => {
    Object.keys(data).forEach((key) => {
        const value = data[key];
        const formKey = prefix ? `${prefix}[${key}]` : key;

        if (value instanceof File) {
            formData.append(formKey, value);
        } else if (typeof value === "object" && value !== null && !(value instanceof Date)) {
            appendFormData(formData, value, formKey); // Recursively handle nested objects
        } else if (typeof value === "string" && value.length > 0) {
            formData.append(formKey, value.trim().toLowerCase()); // Convert to lowercase and trim
        } else if (value !== undefined && value !== null) {
            formData.append(formKey, value.toString());
        }
    });
};
