/* eslint-disable @typescript-eslint/no-explicit-any */
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
// export const appendFormData = (formData: FormData, data: Record<string, any>, prefix = "") => {
//     Object.keys(data).forEach((key) => {
//         const value = data[key];
//         const formKey = prefix ? `${prefix}[${key}]` : key;

//         if (value instanceof File) {
//             formData.append(formKey, value);
//         } else if (typeof value === "object" && value !== null && !(value instanceof Date)) {
//             appendFormData(formData, value, formKey);
//         } else if (typeof value === "string" && value.length > 0) {
//             formData.append(formKey, value.trim().toLowerCase()); 
//         } else if (value !== undefined) {
//             formData.append(formKey, value);
//         }
//     });
// };
export const appendFormData = (
    formData: FormData,
    data: Record<string, any>,
    prefix = ""
  ): void => {
    Object.keys(data).forEach((key) => {
      const value = data[key];
      const formKey = prefix ? `${prefix}[${key}]` : key;
  
      // If value is null, do not append the key to FormData.
      if (value === null) {
        return;
      }
  
      if (value instanceof File) {
        formData.append(formKey, value);
      } else if (typeof value === "object" && value !== null && !(value instanceof Date)) {
        // Recursively handle nested objects/arrays
        appendFormData(formData, value, formKey);
      } else if (typeof value === "string") {
        // Append string only if it has a non-empty trimmed value.
        if (value.trim().length > 0) {
          formData.append(formKey, value.trim().toLowerCase());
        }
      } else if (value !== undefined) {
        // For numbers or dates, convert to string explicitly.
        formData.append(formKey, value.toString());
      }
    });
  };
  