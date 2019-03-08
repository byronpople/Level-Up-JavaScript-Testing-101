export const add = (x, y) => {
  return x + y
}

export const subtract = (a, b) => a - b


export const total = (shipping, subTotal) => {
  return '$' + add(shipping, subTotal)  
}
