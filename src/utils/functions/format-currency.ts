export function formatCurrency (value: number) {
    return value.toLocaleString('pt-PT',{
        style: 'currency',
        currency: "Kzs",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
}