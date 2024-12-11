export function formatCurrency(amount) {
    if (amount >= 1000000) {
        return `${(amount / 1000000).toFixed(1)}m USD`;
    } else if (amount >= 1000) {
        return amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + ' USD';
    } else {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    }
}
