// const a=
// Chrome - SyntaxError: Unexpected end of input
// Firefox - SyntaxError: expected expression, got end of script
// Safari - SyntaxError: Unexpected EOF
// IE Edge - Syntax error

// const a='
// const a='hello
// Chrome - SyntaxError: Invalid or unexpected token
// Firefox - SyntaxError: '' literal not terminated before end of script
// Safari - SyntaxError: Unexpected EOF
// IE Edge - Unterminated string constant

// const a="
// const a="hello
// Chrome - SyntaxError: Invalid or unexpected token
// Firefox - SyntaxError: "" literal not terminated before end of script
// Safari - SyntaxError: Unexpected EOF
// IE Edge - Unterminated string constant

// const a(
// const a()
// Chrome - SyntaxError: Missing initializer in const declaration
// Firefox - SyntaxError: missing = in const declaration
// Safari - SyntaxError: Unexpected token '('
// IE Edge - Const must be initialized

// const a)
// Chrome - SyntaxError: Missing initializer in const declaration
// Firefox - SyntaxError: missing = in const declaration
// Safari - SyntaxError: Unexpected token ')'
// IE Edge - Const must be initialized

// const a[
// const a[]
// Chrome - SyntaxError: Missing initializer in const declaration
// Firefox - SyntaxError: missing = in const declaration
// Safari - SyntaxError: Unexpected token '['
// IE Edge - Const must be initialized

// const a]
// Chrome - SyntaxError: Missing initializer in const declaration
// Firefox - SyntaxError: missing = in const declaration
// Safari - SyntaxError: Unexpected token ']'
// IE Edge - Const must be initialized

// const a{
// const a{}
// Chrome - SyntaxError: Missing initializer in const declaration
// Firefox - SyntaxError: missing = in const declaration
// Safari - SyntaxError: Unexpected token '{'
// IE Edge - Const must be initialized

// const a}
// Chrome - SyntaxError: Missing initializer in const declaration
// Firefox - SyntaxError: missing = in const declaration
// Safari - SyntaxError: Parse error
// IE Edge - Const must be initialized

// const a.
// Chrome - SyntaxError: Missing initializer in const declaration
// Firefox - SyntaxError: missing = in const declaration
// Safari - SyntaxError: Unexpected token '.'
// IE Edge - Const must be initialized

// const a, {}
// Chrome - SyntaxError: Missing initializer in destructuring declaration
// Firefox - SyntaxError: missing = in destructuring declaration
// Safari - SyntaxError: Expected an identifier but found '{' instead
// IE Edge - Const must be initialized

// const "ram" = a;
// Chrome - SyntaxError: Unexpected string
// Firefox - SyntaxError: missing variable name
// Safari - SyntaxError: Unexpected string "ram"
// IE Edge - Expected identifier

// const a, [] = "ram";
// Chrome - SyntaxError: Missing initializer in const declaration
// Chrome - SyntaxError: missing = in const declaration
// Safari - SyntaxError: Expected an identifier but found '[' instead
// Chrome - Const must be initialized

// const a, {} = "ram";
// Chrome - SyntaxError: Missing initializer in const declaration
// Chrome - SyntaxError: missing = in const declaration
// Safari - SyntaxError: Expected an identifier but found '{' instead
// Chrome - Const must be initialized