import { GetProductCategory } from "./product-category.model"
import { GetProductClassification } from "./product-classification.model"

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