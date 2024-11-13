export type PostCrops = {
    crop: string,
    variety: string,
    noOfPlants: string,
    pruningDate: Date,
    expectedHarvestDate: Date,
    expectedQuantityInTonnes: number
}

export type GetCrops = {id: string} & PostCrops;