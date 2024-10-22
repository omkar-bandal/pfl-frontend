export const numToWords = (num: number): string => {
    const ones = [
        '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
        'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
    ];
    
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    
    const scales = ['', 'Thousand', 'Lakh', 'Crore'];

    if (num === 0) return 'zero';
 
    const chunk = (n: number) => {
        let str = '';
        if (n > 99999) {
            str += ones[Math.floor(n / 100000)] + ' Lakh ';
            n %= 100;
        }
        if (n > 999) {
            str += ones[Math.floor(n / 1000)] + ' Thousand ';
            n %= 100;
        }
        if (n > 99) {
            str += ones[Math.floor(n / 100)] + ' Hundred ';
            n %= 100;
        }
        if (n > 19) {
            str += tens[Math.floor(n / 10)] + ' ';
            n %= 10;
        }
        if (n > 0) {
            str += ones[n] + ' '; 
        }
        return str.trim();
    };

    let word = '';
    let scaleIndex = 0;

    while (num > 0) {
        const part = num % 1000;
        if (part > 0) {
            word = `${chunk(part)} ${scales[scaleIndex]} ${word}`.trim();
        }
        num = Math.floor(num / 1000);
        scaleIndex++;
    }

    return word.trim() + " Rupees";
};
  