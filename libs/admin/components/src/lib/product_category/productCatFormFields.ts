import { ADMIN_API_URL, useGetAllProductClassification } from "@prime-fresh/admin_api"
import { mapToValueLabelArray } from "@prime-fresh/ui_shared";

export const ProductCatFormFields = () => {
  const { data } = useGetAllProductClassification(ADMIN_API_URL.GET_ALL_PRODUCT_CLASSIFICATION);
  const classifications = data ? data : [{ id: "", name: "" }];
  return (
    {
      "title": "Add Product Category",
      "subtitle": "Create a new product category data by filling below form.",
      "fields": [
        {
          "isRequired": true,
          "name": "name",
          "label": "Name of Product Category",
          "type": "text",
          "placeholder": "Enter name of product category."
        },
        {
          "isRequired": true,
          "name": "productClassification",
          "label": "Related Product Classification",
          "type": "select",
          "options": mapToValueLabelArray(classifications, 'id', 'name'),
        }
      ]
    }
  )
}