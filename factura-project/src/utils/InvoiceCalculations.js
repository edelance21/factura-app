
//Itebis
export const ITBIS_RATE = 0.18

//convierte cualquier valor a numero y redondea a 2 decimales 
// y si el valor no es un numero valido devueve 0
export function roundToTwoDecimal(value) {
    const numericValue = Number(value ?? 0)


//si la conversion falla que devuelva 0
    if (Number.isNaN(numericValue)) {
        return 0
    }

    return Number(numericValue.toFixed(2))
}

//Convierte el valor de input a un numero positivo
//si el campo esta vacio o el valor es invalido devuelve 0
export function normalizeNonNegativeNumber(value) {
    if (value === "") {
        return 0
    }

    const numericValue = Number(value)

    //Si no es numero valido devolvemos 0
    if (Number.isNaN(numericValue)) {
        return 0
    }

    return Math.max(0, numericValue)
}

//Calcula el subtotal de un producto cantidad * precio
// y rededondeando 2 decimales
export function calculateProductSubtotal(product) {
    return roundToTwoDecimal(product.quantity * product.price)
}

// Suma los subtotales de todos los productos para obtener el subtotal general
export function calculateSubtotal(products) {
    return roundToTwoDecimal (
        products.reduce((accumulator, product) => + calculateProductSubtotal(product), 0),
    )
}

//Calcular el itbis(18%)
export function calculateItbis(subtotal) {
    return roundToTwoDecimal(subtotal * ITBIS_RATE)
}

//Calculo total del itbis y subtotal
export function calculateTotal(subtotal, itbis) {
    return roundToTwoDecimal(subtotal + itbis)
}