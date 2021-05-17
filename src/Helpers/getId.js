// Determina el último valor de la ID categories
export const getId = (array) => {
    return array.reduce((acumulator, current) => {
        return acumulator < current.id ? current.id : acumulator;
    }, 0) + 1;
}