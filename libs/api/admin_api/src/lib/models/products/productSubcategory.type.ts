import { GetProductCategory } from "./productCategory.type"

export type GetProductSubcategory = {
    id: string,
    name: string,
    category: GetProductCategory,
}

export type PostProductSubcategory = {
    name: string,
    category: string,
}