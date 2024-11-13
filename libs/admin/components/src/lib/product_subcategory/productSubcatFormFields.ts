import { ADMIN_API_URL, useGetAllProductsCat } from "@prime-fresh/admin_api"
import { mapToValueLabelArray } from "@prime-fresh/ui_shared";

export const productSubcatFormFields = () => {
  const {data} = useGetAllProductsCat(ADMIN_API_URL.GET_ALL_PRODUCT_CATEGORY);
  const categories = data ? data :[{id: '', name: ''}]
  return(
        {
            "title": "Add Product Subcategory",
            "subtitle": "Create a new product subcategory data by filling below form.",
            "fields": [
              {
                "isRequired": true,
                "name": "name",
                "label": "Name of Product Subcategory",
                "type": "text",
                "placeholder": "Enter name of product subcategory."
              },   
              {
                "isRequired": true,
                "name": "category",
                "label": "Related Product Category",
                "type": "select",
                "options": mapToValueLabelArray(categories, 'id', 'name'),
              }   
            ]
          }
    )
}