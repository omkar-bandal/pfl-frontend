// Format date string to a more readable format
export const formatDate = (dateString: string | null) => {
    if (!dateString) return "-"
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }
  
  // Format currency values
  export const formatCurrency = (value: number) => {
    return value ? `${value.toFixed(2)} Rs.` : 0;
  }
  
  // Get appropriate color for status
  export const getStatusColor = (status: string): "success" | "error" | "warning" | "info" | "default" => {
    const statusLower = status.toLowerCase()
    if (statusLower === "approved" || statusLower === "accepted") return "success"
    if (statusLower === "rejected" || statusLower === "rtv") return "error"
    if (statusLower === "pending") return "warning"
    return "default"
  }
  