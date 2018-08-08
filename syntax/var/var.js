/*
 * Below are the possible syntax errors with all stupid typo mistakes for var variables.
 * Tested in Chrome, Firefox, Safari and IE Edge.
 * Venkat.R
*/

// var a=
// Chrome - SyntaxError: Unexpected end of input
// Firefox - SyntaxError: expected expression, got end of script
// Safari - SyntaxError: Unexpected EOF
// IE Edge - Syntax error

// var a='
// var a='hello
// Chrome - SyntaxError: Unexpected end of input
// Firefox - SyntaxError: '' string literal contains an unescaped line break
// Safari - SyntaxError: Unexpected EOF
// IE Edge - Unterminated string constant

// var a="
// var a="hello
// Chrome - SyntaxError: Unexpected end of input
// Firefox - SyntaxError: "" string literal contains an unescaped line break
// Safari - SyntaxError: Unexpected EOF
// IE Edge - Unterminated string constant

// var a(
// var a()
// Chrome - SyntaxError: Unexpected token (
// Firefox - SyntaxError: unexpected token: '('
// Safari - SyntaxError: Unexpected token '('
// IE Edge -  Expected ';'

// var a)
// Chrome - SyntaxError: Unexpected token )
// Firefox - SyntaxError: unexpected token: ')'
// Safari - SyntaxError: Unexpected token ')'
// IE Edge -  Expected ';'

// var a[
// var a[]
// Chrome - SyntaxError: Unexpected token [
// Firefox - SyntaxError: unexpected token: '['
// Safari - SyntaxError: Unexpected token '['
// IE Edge -  Expected ';'

// var a]
// Chrome - SyntaxError: Unexpected token ]
// Firefox - SyntaxError: unexpected token: ']'
// Safari - SyntaxError: Unexpected token ']'
// IE Edge -  Expected ';'

// var a{
// var a{}
// Chrome - SyntaxError: Unexpected token {
// Firefox - SyntaxError: unexpected token: '{'
// Safari - SyntaxError: Unexpected token '{'
// IE Edge - Expected ';'

// var a}
// Chrome - SyntaxError: Unexpected token }
// Firefox - SyntaxError: expected expression, got '}'
// Safari - SyntaxError: Parse error
// IE Edge -  Syntax error

// var a.
// Chrome - SyntaxError: Unexpected token .
// Firefox - SyntaxError: unexpected token: '.'
// Safari - SyntaxError: Unexpected token '.'
// IE Edge - Expected ';'

// var a, {}
// Chrome - SyntaxError: Missing initializer in destructuring declaration
// Firefox - SyntaxError: missing = in destructuring declaration
// Safari - SyntaxError: Expected an identifier but found '{' instead
// IE Edge - Destructuring declarations must have an initializer

// var "ram" = a;
// Chrome - SyntaxError: Unexpected string
// Firefox - SyntaxError: missing variable name
// Safari - SyntaxError: Unexpected string "ram"
// IE Edge - Expected identifier

// var a, [] = "ram";
// Chrome - No Errors
// Chrome - No Errors
// Safari - SyntaxError: Expected an identifier but found '[' instead
// Chrome - No Errors

// var a, {} = "ram";
// Chrome - No Errors
// Chrome - No Errors
// Safari - SyntaxError: Expected an identifier but found '{' instead
// Chrome - No Errors
