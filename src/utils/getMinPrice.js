export function getMinPrice(priceInfo = {}) {
    const allPrices = [];

    for (const type of Object.values(priceInfo)) {
        if (type && typeof type === 'object') {
            for (const value of Object.values(type)) {
                if (typeof value === 'number') {
                    allPrices.push(value);
                }
            }
        }
    }

    return allPrices.length ? Math.min(...allPrices) : null;
}
/*тут считаем самую низкую стоимость билета в направлении */