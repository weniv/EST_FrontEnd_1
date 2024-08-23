import React from 'react'

const currencyConfig = {
    USD: { locale: 'en', currency: 'USD', symbol: '$' },
    KRW: { locale: 'ko-KR', currency: 'KRW', symbol: '₩' },
    JPY: { locale: 'ja', currency: 'JPY', symbol: '¥' },
    EUR: { locale: 'it', currency: 'EUR', symbol: '€' },
    GBP: { locale: 'en-GB', currency: 'GBP', symbol: '£' },
}


const formatPrice = (price, currencyCode) => {
    const config = currencyConfig[currencyCode] || currencyCode.KRW;

    return new Intl.NumberFormat(config.locale, {
        style: 'currency',
        currency: config.currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(price);

};


export default function PriceFormatter({ price, currencyCode }) {
    const formattedPrice = formatPrice(price, currencyCode);
    return (
        <data value={price}>{formattedPrice}</data>
    )
}
