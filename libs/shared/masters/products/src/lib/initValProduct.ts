import {PostProduct} from '@prime-fresh/admin_api'
export const initValProduct: PostProduct = {
    name: '',
    productOrigin: '',
    brand: '',
    classification: '',
    category: '',
    subcategory: '',
    description: '',
    variety: [],
    count: [],
    size: [],
    uom:'',
    packingType: '',
    shelfLife: 0,
    storageTemp: 0,
    qualityParameters: [{name: ''}],
    image: null,
}