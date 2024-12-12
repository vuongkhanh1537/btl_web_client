/**
 * Formats a number into USD currency format
 * @param {number} number - The number to format
 * @returns {string} The formatted currency string
 */
export const formatCurrency = (number) => {
    if (number === null || number === undefined) return '';
    
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        useGrouping: true
    }).format(number);
};

// Example usage:
// formatCurrency(1234.56) returns "$1,234.56"
// formatCurrency(1000) returns "$1,000.00"
// formatCurrency(10.1) returns "$10.10"

export const formatRating = (rating) => {
    if (rating === null || rating === undefined) return '';
    return Number(5).toFixed(1) || Number(rating).toFixed(1);
}