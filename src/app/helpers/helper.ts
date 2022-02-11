export function getClearValue(value: string): string {
  let result = ''
  if (value !== '' && value !== undefined && value !== null) {
    result = value.toString().trim()
  }
  return result
}

export function numberFormat(num: number, decimals = 0, decPoint = '', thousandsSep = ' '): string {
  let i
  let j
  let kw
  let kd
  let km

  i = parseInt((+num || 0).toFixed(decimals), undefined) + ''
  j = i.length
  if (j > 3) {
    j = j % 3
  } else {
    j = 0
  }

  km = (j ? i.substr(0, j) + thousandsSep : '')
  kw = i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousandsSep)
  // @ts-ignore
  kd = (decimals ? decPoint + Math.abs(num - i).toFixed(decimals).replace(/-/, '0').slice(2) : '')
  return km + kw + kd
}

export function declOfNum(num: number, titles: Array<string>): string {
  const cases = [2, 0, 1, 1, 1, 2]
  return titles[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]]
}


