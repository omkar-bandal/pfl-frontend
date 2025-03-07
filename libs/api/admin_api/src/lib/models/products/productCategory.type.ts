import { GetProductClassification } from "./productClassification.type"

export type PostProductCategory = {
    name: string,
    productClassification: string,
}

export type GetProductCategory = {
    id: string,
    name: string,
    productClassification: GetProductClassification,
}