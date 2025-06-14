export const downloadDoc = (pdfUrl: string) => {
  try {
    if (pdfUrl) {
      // window.open(pdfUrl, '_blank');
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'document.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.log('No PDF URL found in the response');
    }
  } catch (error) {
    console.log(error);
  }
};
