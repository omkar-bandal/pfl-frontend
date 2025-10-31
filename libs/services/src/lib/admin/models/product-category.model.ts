import { GetProductClassification } from "./product-classification.model"

export type PostProductCategory = {
    name: string,
    productClassification: string,
}

export type GetProductCategory = {
    id: string,
    name: string,
    productClassification: GetProductClassification,
}