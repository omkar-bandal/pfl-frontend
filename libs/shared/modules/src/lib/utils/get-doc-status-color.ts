import { DocumentStatus } from "@prime-fresh/common_api";

export const getDocStatusColor = (status: DocumentStatus) => {
  if(status === 'COMPLETE' || status === 'VERIFIED' || status === 'approved')
    return '#09B83E';
  else if(status === 'REJECT')
    return '#AF0606';
  else
    return '#FF5700';
}
