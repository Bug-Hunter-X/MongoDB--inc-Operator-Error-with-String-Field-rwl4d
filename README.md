# MongoDB $inc Operator Error with String Field
This repository demonstrates a common error when using the MongoDB `$inc` operator: attempting to increment a field that is not a number.  The provided `bug.js` file shows the incorrect usage, and `bugSolution.js` offers the corrected approach.

## Bug Description
The `$inc` operator is intended for incrementing numeric values. Applying it to a string field will result in an error.

## Solution
Ensure that the field you're attempting to increment is of numeric type (int, long, double) before using `$inc`.  If necessary, convert the field to a number before performing the update.
