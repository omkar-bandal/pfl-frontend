import {GetUOM} from "@prime-fresh/admin_api"
import { mapToValueLabelArray } from "@prime-fresh/ui_shared"

export const UomConvMatrixFormFields = (uoms: GetUOM[]) => {
  return (
    {
      "title": "Add UOM Conversions",
      "subtitle": "Create a new conversion factor for UOMs by filling below form.",
      "fields": [
        {
          "isRequired": true,
          "name": "conversionFactor",
          "label": "Conversion Factor",
          "type": "number",
          "placeholder": "Enter Conversion Factor."
        },
        {
          "isRequired": true,
          "name": "fromUOM",
          "label": "From UOM",
          "type": "select",
          "options": mapToValueLabelArray<GetUOM>(uoms, 'id', 'unit'),
        },
        {
          "isRequired": true,
          "name": "toUOM",
          "label": "To UOM",
          "type": "select",
          "options": mapToValueLabelArray<GetUOM>(uoms, 'id', 'unit'),
        }
      ]
    }
  )
}