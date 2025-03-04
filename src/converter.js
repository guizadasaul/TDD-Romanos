function convertToRoman(num) {
  const romanNumerals = [

    { value: 1, numeral: 'I' },
  ];

  let result = '';

  for (const { value, numeral } of romanNumerals) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }

  return result;
}

export default convertToRoman;