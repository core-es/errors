// let a=
// Chrome - SyntaxError: Unexpected end of input
// Firefox - SyntaxError: expected expression, got end of script
// Safari - SyntaxError: Expected an identifier but found 'a' instead
// IE Edge - Syntax error

// let a='
// let a='hello
// Chrome - SyntaxError: Invalid or unexpected token
// Firefox - SyntaxError: '' literal not terminated before end of script
// Safari - SyntaxError: Expected an identifier but found 'a' instead
// IE Edge - Unterminated string constant

// let a="
// let a="hello
// Chrome - SyntaxError: Invalid or unexpected token
// Firefox - SyntaxError: "" literal not terminated before end of script
// Safari - SyntaxError: Expected an identifier but found 'a' instead
// IE Edge - Unterminated string constant

// let a(
// let a()
// Chrome - SyntaxError: Unexpected token (
// Firefox - SyntaxError: unexpected token: '('
// Safari - SyntaxError: Expected an identifier but found 'a' instead
// IE Edge -  Expected ';'

// let a)
// Chrome - SyntaxError: Unexpected token )
// Firefox - SyntaxError: unexpected token: ')'
// Safari - SyntaxError: Expected an identifier but found 'a' instead
// IE Edge -  Expected ';'

// let a[
// let a[]
// Chrome - SyntaxError: Unexpected token [
// Firefox - SyntaxError: unexpected token: '['
// Safari - SyntaxError: Expected an identifier but found 'a' instead
// IE Edge -  Expected ';'

// let a]
// Chrome - SyntaxError: Unexpected token ]
// Firefox - SyntaxError: unexpected token: ']'
// Safari - SyntaxError: Expected an identifier but found 'a' instead
// IE Edge -  Expected ';'

// let a{
// let a{}
// Chrome - SyntaxError: Unexpected token {
// Firefox - SyntaxError: unexpected token: '{'
// Safari - SyntaxError: Expected an identifier but found 'a' instead
// IE Edge - Expected ';'

// let a}
// Chrome - SyntaxError: Unexpected token }
// Firefox - SyntaxError: expected expression, got '}'
// Safari - SyntaxError: Expected an identifier but found 'a' instead
// IE Edge -  Syntax error

// let a.
// Chrome - SyntaxError: Unexpected token .
// Firefox - SyntaxError: unexpected token: '.'
// Safari - SyntaxError: Expected an identifier but found 'a' instead
// IE Edge - Expected ';'

// let a, {}
// Chrome - SyntaxError: Missing initializer in destructuring declaration
// Firefox - SyntaxError: missing = in destructuring declaration
// Safari - SyntaxError: Expected an identifier but found '{' instead
// IE Edge - Destructuring declarations must have an initializer

// let "ram" = a;
// Chrome - SyntaxError: Unexpected string
// Firefox - SyntaxError: unexpected token: string literal
// Safari - SyntaxError: Unexpected string "ram"
// IE Edge - Expected ';'

// let a, [] = "ram";
// Chrome - No Errors
// Chrome - No Errors
// Safari - SyntaxError: Expected an identifier but found 'a' instead
// Chrome - No Errors

// let a, {} = "ram";
// Chrome - No Errors
// Chrome - No Errors
// Safari - SyntaxError: Expected an identifier but found 'a' instead
// Chrome - No Errors