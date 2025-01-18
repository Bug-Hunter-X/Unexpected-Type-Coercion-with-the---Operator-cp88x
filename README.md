# Unexpected Type Coercion in JavaScript
This example demonstrates a common JavaScript issue related to type coercion with the addition (+) operator.  In JavaScript, the + operator will perform string concatenation if either operand is a string, leading to unexpected results when working with numbers and strings together.

## Problem
The `foo` function is intended to add two numbers.  However, due to JavaScript's loose typing, if either input is a string, the + operator will concatenate the values as strings instead of performing numerical addition.

## Solution
The solution involves explicitly converting the input values to numbers using `parseInt()` or `Number()` before performing the addition.  This ensures that the + operator performs numerical addition as intended, regardless of the input types.