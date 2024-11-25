export const uomFormFields = () => {
    return(
        {
            "title": "Add UOM",
            "subtitle": "Create a new Unit of Measurement by filling below form.",
            "fields": [
              {
                "isRequired": true,
                "name": "unit",
                "label": "Name of UOM",
                "type": "text",
                "placeholder": "Enter name of UOM."
              },
              {
                "isRequired": true,
                "name": "abbreviation",
                "label": "Abbreviation of UOM",
                "type": "text",
                "placeholder": "Enter abbreviation of UOM."
              },
              {
                "isRequired": false,
                "name": "description",
                "label": "Description",
                "type": "text",
                "placeholder": "Enter short description"
              }   
            ]
          }          
    )
}