import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

// Define the structure for the titles and their corresponding keys
interface FieldTitle {
  title: string;
  key: string;
}

interface PreviewCardProps<T> {
  data: T;
  fieldTitles: FieldTitle[]; 
}

export const PreviewCard = <T extends Record<string, any>>({
  data,
  fieldTitles,
}: PreviewCardProps<T>) => {
  return (
    <Card sx={{ marginTop: 4 }}>
      <CardContent>
        <Typography variant="h5">Form Submission Preview</Typography>
        <Grid container spacing={2}>
          {fieldTitles.map(({ title, key }, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Typography variant="body1">
                <strong>{title}:</strong>{" "}
                {Array.isArray(data[key]) ? (
                  // Handle array fields
                  <ul>
                    {data[key].map((item: any, idx: number) => (
                      <li key={idx}>{JSON.stringify(item)}</li> // Format this as needed
                    ))}
                  </ul>
                ) : (
                  ` ${data[key]}`
                )}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
