export type PostCrops = {
    crop: string;
    variety: string;
    noOfPlants: number;
    pruningDate: string;
    expectedHarvestDate: string;
    expectedQuantityInTonnes: number;
};
export type GetCrops = {
    id: string;
} & PostCrops;
