import { GetUOM } from "../uoms"
import { GetProductCategory } from "./productCategory.type"
import { GetProductClassification } from "./productClassification.type"
import { GetProductSubcategory } from "./productSubcategory.type"

export type PostProduct = {
    name: string,
    image: File | null,
    description: string,
    classification: string,  
    category: string,       
    subcategory: string,    
    uom: string,            
    productOrigin: string,                                    
    count: string[],
    size: string[], 
    variety: string[], 
    brand: string,                                        
    packingType: string,                                      
    shelfLife: number,                                     
    storageTemp: number,
    qualityParameters:{name: string}[],
}

export type GetProduct = {
    id: string,
    productCode: string,
    name: string,
    image: File | null,
    description: string,
    classification: GetProductClassification,  
    category: GetProductCategory,       
    subcategory: GetProductSubcategory,    
    uom: GetUOM,            
    productOrigin: string,                                    
    count: string[],
    size: string[], 
    variety: string[], 
    brand: string,                                        
    packingType: string,                                      
    shelfLife: number,                                     
    storageTemp: number,
    qualityParameters:{id: string, name: string}[],
}
