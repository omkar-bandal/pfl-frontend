import { PostProduct, IQCParameters } from '@prime-fresh/admin_api'

export const initValProductQCParams: IQCParameters = {
    name: '',
    type: 'good',
}

export const initValProduct: PostProduct = {
    name: '',
    prefix: '',
    brand: '',
    classification: '',
    category: '',
    subcategory: '',
    description: '',
    productOrigin: [],
    variety: [],
    count: [],
    size: [],
    uom: '',
    packingType: '',
    shelfLife: 0,
    storageTemp: 0,
    qualityParameters: [{
        name: '',
        type: 'good',
    }],
    image: null,
}