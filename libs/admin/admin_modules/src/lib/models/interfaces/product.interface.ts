export interface ProductCategory {
    id?: string,
    name: string,
}

export interface ProductSubcategory {
    id?: string,
    name: string,
}

export interface ProductClassification {
    id?: string,
    name: string,

}

export interface Product {
    id?: string,
    name: string,
    image: string,
    classification: string,  
    category: string,       
    subcategory: string,    
    uom: string,            
    productCode: string,
    productOrigin: string,                                    
    count: number,                                          
    packingType: string,                                      
    shelfLife: number,                                     
    storageTemp: string
}
