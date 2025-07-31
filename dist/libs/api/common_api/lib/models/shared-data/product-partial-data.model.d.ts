export type ProductPartialData = {
    id: string;
    name: string;
    description: string | null;
    productCode: string | null;
    productOrigin: string[] | null;
    count: string[] | null;
    size: string[] | null;
    variety: string[] | null;
    brand: string;
};
