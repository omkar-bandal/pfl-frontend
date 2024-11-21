import { Box, LinearProgress } from "@mui/material";
import { ADMIN_API_URL, useGetAProduct } from "@prime-fresh/admin_api";
import { DataDisplay } from "@prime-fresh/ui_shared";
import { useParams } from "react-router-dom";

export const ViewProduct = () => {
    const { id } = useParams<{ id: string }>();
    const { data: Product, isLoading } = useGetAProduct(ADMIN_API_URL.GET_A_PRODUCTS, id as string);
    const product = Product ? Product : {};
    console.log(Product);
    if (isLoading) {
        return (
            <Box>
                <LinearProgress />
            </Box>
        )
    }
    else {
        return (
            <DataDisplay header="Product Details" data={product} />
        )
    }
}