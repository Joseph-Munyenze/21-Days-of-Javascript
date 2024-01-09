function isPalindrome(number) {
    const numberString = number.toString();
    const reversedString = numberString.split('').reverse().join('');
    return numberString === reversedString;
  }
  // Test the function
  const num1 = 121;
  const num2 = 12345;
  console.log(`${num1} is a palindrome: ${isPalindrome(num1)}`); // true
  console.log(`${num2} is a palindrome: ${isPalindrome(num2)}`); // false
  