import { GetProductCategory } from "./productCategory.type"
import { GetProductClassification } from "./productClassification.type"

export type GetProductSubcategory = {
    id: string,
    name: string,
    category: GetProductCategory,
    classification: GetProductClassification,
}

export type PostProductSubcategory = {
    name: string,
    category: string,
}