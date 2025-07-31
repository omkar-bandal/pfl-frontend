export type PostCrops = {
    crop: string | null;
    variety: string | null;
    noOfPlants: number | null;
    pruningDate: string | null;
    expectedHarvestDate: string | null;
    expectedQuantityInTonnes: number | null;
};
export type GetCrops = {
    id: string | null;
} & PostCrops;
