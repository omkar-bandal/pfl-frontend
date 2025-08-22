import { styled, Paper } from "@mui/material";

export const FormScrollContainer = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  flex: 1,
  overflowY: "auto",
  padding: theme.spacing(2),

  // Chrome, Safari, Edge
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#555",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#f1f1f1",
  },

  // Firefox
  scrollbarWidth: "thin",
  scrollbarColor: "#888 #f1f1f1",
}));

