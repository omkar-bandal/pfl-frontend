import React from 'react';
import { Button } from '@mui/material';
import { Download } from '@mui/icons-material';

type DownloadButtonProps = {
    fileUrl: string;
    fileName?: string;
};

const getFileNameFromUrl = (url: string | null): string => {
    if (url !== null) {
        try {
            const urlObj = new URL(url);
            const segments = urlObj.pathname.split('/');
            const lastSegment = segments[segments.length - 1];
            return lastSegment || 'download.xlsx';
        } catch (error) {
            return 'download.xlsx';
        }
    } else {
        return "";
    };
};

export const DownloadButton: React.FC<DownloadButtonProps> = ({ fileUrl, fileName }) => {
    // If fileName is not provided, extract it from the URL.
    const resolvedFileName = fileName || getFileNameFromUrl(fileUrl);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = resolvedFileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Button 
        variant="contained" 
        size="small" 
        startIcon={<Download fontSize='small' />} 
        color="primary" 
        sx={{textTransform: "none", backgroundColor: "blue", width: 120}}
        onClick={handleDownload}>
            Download
        </Button>
    );
};

