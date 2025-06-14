/* eslint-disable @typescript-eslint/no-explicit-any */
import { Inventory, Receipt } from "@mui/icons-material";
import { Box, Chip, LinearProgress, Typography } from "@mui/material";
import { useGetProductClassificationById, useGetProductById, useGetProductCategoryById, useGetProductSubcategoryById, useGetUOMById } from "@prime-fresh/admin/modules";
import { convertInTitleCase } from "@prime-fresh/shared/modules";
import { DataViewer, ObjectViewerConfig, PageTitle } from "@prime-fresh/ui_shared";
import { useParams } from "react-router-dom";

export const ViewProduct = () => {
    const { id } = useParams<{ id: string }>();
    const { data: Product, isLoading } = useGetProductById(id as string);
    const product = Product?.data ? Product.data : null;
    const { data: clas } = useGetProductClassificationById(product?.classification || '');
    const classification = clas?.data ? clas.data.name : null;
    const { data: cat } = useGetProductCategoryById(product?.category || '');
    const category = cat?.data ? cat.data.name : null;
    const { data: subcat } = useGetProductSubcategoryById(product?.subcategory || '');
    const subcategory = subcat?.data ? subcat.data.name : null;
    const { data: uom } = useGetUOMById(product?.uom || '');
    const selectedUOM = uom?.data ? uom.data.unit : null;
    console.log(Product);
    const productViewConfig: ObjectViewerConfig = {
        sections: [
            {
                title: "Details",
                sectionType: "object",
                layout: "grid",
                icon: <Receipt />,
                fields: [
                    {
                        key: "name",
                        label: "Product Name",
                        render: (value: string) => value ? <Typography variant="body1" component="div" sx={{fontWeight: 600}}>{convertInTitleCase(value)}</Typography> : <Typography variant="body1" component="div" sx={{fontWeight: 600}}></Typography>,
                    },
                    {
                        key: "classification",
                        label: "Classification",
                        render: (value: any) => value ? <Typography variant="body1" component="div" sx={{fontWeight: 600}}>{convertInTitleCase(classification || '')}</Typography> : null,
                    },
                    {
                        key: "category",
                        label: "Category",
                        render: (value: any) => value ? <Typography variant="body1" component="div" sx={{fontWeight: 600}}>{convertInTitleCase(category || '')}</Typography> : null,
                    },
                    {
                        key: "subcategory",
                        label: "Subcategory",
                        render: (value: any) => value ? <Typography variant="body1" component="div" sx={{fontWeight: 600}}>{convertInTitleCase(subcategory || '')}</Typography> : null,
                    },
                    {
                        key: "uom",
                        label: "UOM",
                        render: (value: any) => value ? <Typography variant="body1" component="div" sx={{fontWeight: 600}}>{convertInTitleCase(selectedUOM || '')}</Typography> : null
                    },
                    {
                        key: "productOrigin",
                        label: "Origin",
                        render: (value: any) => value ? <Typography variant="body1" component="div" sx={{fontWeight: 600}}>{convertInTitleCase(value || '')}</Typography> : null
                    },
                    {
                        key: "brand",
                        label: "Brand",
                        render: (value: string) => value ? <Typography variant="body1" component="div" sx={{fontWeight: 600}}>{convertInTitleCase(value)}</Typography> : <Typography variant="body1" component="div" sx={{fontWeight: 600}}></Typography>,
                    },
                    {
                        key: "packingType",
                        label: "Packing Type",
                        render: (value: string) => value ? <Typography variant="body1" component="div" sx={{fontWeight: 600}}>{convertInTitleCase(value)}</Typography> : <Typography variant="body1" component="div" sx={{fontWeight: 600}}></Typography>,
                    },
                    {
                        key: "shelfLife",
                        label: "Shelf Life",
                        render: (value: string) => value ? <Typography variant="body1" component="div" sx={{fontWeight: 600}}>{convertInTitleCase(value)}</Typography> : <Typography variant="body1" component="div" sx={{fontWeight: 600}}></Typography>,
                    },
                    {
                        key: "storageTemp",
                        label: "Storage Temparature",
                        render: (value: string) => value ? <Typography variant="body1" component="div" sx={{fontWeight: 600}}>{convertInTitleCase(value)}</Typography> : <Typography variant="body1" component="div" sx={{fontWeight: 600}}></Typography>,
                    },
                    {
                        key: "count",
                        label: "Count",
                        render: (value: string[]) => value ? value.map((count, index) => <Chip key={index} label={count} size="small" sx={{ width: 80, marginX: 1 }} />) : [],
                    },
                    {
                        key: "size",
                        label: "Size",
                        render: (value: string[]) => value ? value.map((size, index) => <Chip key={index} label={size} size="small" sx={{ width: 80, marginX: 1 }} />) : [],
                    },
                    {
                        key: "variety",
                        label: "Variety",
                        render: (value: string[]) => value ? value.map((variety, index) => <Chip key={index} label={variety} size="small" sx={{ width: 80, marginX: 1 }} />) : [],
                    },
                ],
                gridColumns: 3
            },
            {
                sectionType: "array",
                fieldArrayName: "qualityParameters",
                title: "Quality Parameters",
                icon: <Inventory />,
                fields: [
                    {
                        key: "name",
                        label: "Quality Paramters",
                        width: "50%",
                        render: (value: string) =>
                            <Typography variant="body1" color="text.primary">
                                {value}
                            </Typography>
                    },
                    {
                        key: "type",
                        label: "Parameter Type",
                        width: "50%",
                    },
                ],
            }
        ],
    }
    return (
        isLoading ? (
            <Box flex={1}>
                <LinearProgress />
            </Box>
        ) :
            <Box flex={1}>
                <PageTitle pagetitle="Product" />
                <DataViewer data={product || {}} config={productViewConfig} />
            </Box>
    )
}
