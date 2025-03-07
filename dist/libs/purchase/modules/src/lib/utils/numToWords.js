"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numToWords = void 0;
const numToWords = (num) => {
    if (num === 0)
        return 'Zero Rupees';
    const ones = [
        '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
        'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen',
    ];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const scales = ['', 'Thousand', 'Lakh', 'Crore'];
    // Helper function to process numbers less than 1000
    const convertChunk = (n) => {
        let result = '';
        if (n >= 100) {
            result += ones[Math.floor(n / 100)] + ' Hundred ';
            n %= 100;
        }
        if (n >= 20) {
            result += tens[Math.floor(n / 10)] + ' ';
            n %= 10;
        }
        if (n > 0) {
            result += ones[n] + ' ';
        }
        return result.trim();
    };
    // Splitting the number into groups based on Indian numbering system
    const chunks = [];
    chunks.push(num % 1000); // Extract the last three digits (ones, tens, hundreds)
    num = Math.floor(num / 1000);
    while (num > 0) {
        chunks.push(num % 100); // Extract chunks of two digits (thousands, lakhs, crores)
        num = Math.floor(num / 100);
    }
    let word = '';
    let scaleIndex = 0;
    // Process each chunk from right to left (smallest to largest)
    while (chunks.length > 0) {
        const chunk = chunks.shift();
        if (chunk > 0) {
            const chunkWord = convertChunk(chunk);
            if (scaleIndex > 0) {
                word = `${chunkWord} ${scales[scaleIndex]} ${word}`.trim();
            }
            else {
                word = `${chunkWord} ${word}`.trim();
            }
        }
        scaleIndex++;
    }
    return word + ' Rupees';
};
exports.numToWords = numToWords;
//# sourceMappingURL=numToWords.js.map