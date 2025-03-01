import { Box, LinearProgress } from "@mui/material";
import { useGetProductById } from "@prime-fresh/admin/modules";
import { DataDisplay } from "@prime-fresh/ui_shared";
import { useParams } from "react-router-dom";

export const ViewProduct = () => {
    const { id } = useParams<{ id: string }>();
    const { data: Product, isLoading } = useGetProductById(id as string);
    const product = Product?.data ? Product.data : {};
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