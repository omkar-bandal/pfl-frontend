import { DocumentStatus } from "@prime-fresh/common_api";

export const getDocStatusColor = (status: DocumentStatus | string) => {
  const receivedStatus = status !== null ? status.toLowerCase() : status;
  if (receivedStatus === 'verified')
    return '#6A00FF';
  else if (receivedStatus === 'approved')
    return '#40bf40';
  else if (receivedStatus === 'finalizing')
    return '#0063B1'
  else if (receivedStatus === 'reject')
    return '#AF0606';
  else if (receivedStatus === 'complete')
    return '#006600';
  else
    return '#FF5700';
}
