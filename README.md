# Fizz Buzz

Fizz buzz is a group word game often used to teach children about division.

Players take turns to count incrementally, replacing numbers with the words Fizz and Buzz according to these rule:

* If the number is divisible by 3 then the player should say "Fizz"
* If the number is divisible by 5 then the player should say "Buzz"
* If the number is divisible by both 3 and 5 then the player should say "FizzBuzz" instead of Fizz or Buzz
* For any number not divisible by 3 or 5 the player should say that number

Write a function that given an array of integers will return a new array containing the strings denoting what should have been said.

Examples:

1. Given A = [1, 2, 3, 4, 5] The function should return ["1", "2", "Fizz", "4", "Buzz"]
2. Given B = [1, 3, 5, 10, 30] The function should return ["1", "Fizz", "Buzz", "Buzz", "FizzBuzz"]
