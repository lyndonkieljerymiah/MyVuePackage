/**
 * 
 * 
 *
 * @param {String} sign
 * @param {Number} decimals Decimal places
 */

export const toDateFormat = (value, format = 'D-MMM-Y') => {
  if (isNaN(Date.parse(value))) {
    value = moment().format(format);
  }
  return moment(value).format(format);
}

export const toCurrencyFormat = (value) => {
  if (isNaN(Number.parseFloat(value))) {
    value = 0;
  }
  return accounting.formatNumber(value)
}

export const toUpperCase = (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
}