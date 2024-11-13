export const productClassFormFields = () => {
    return(
        {
            "title": "Add Product Classification",
            "subtitle": "Create a new product classification data by filling below form.",
            "fields": [
              {
                "isRequired": true,
                "name": "name",
                "label": "Name of Product Classification",
                "type": "text",
                "placeholder": "Enter name of product classification."
              }   
            ]
          }
    )
}