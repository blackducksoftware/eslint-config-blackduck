module.exports = {
    rules: {
        'accessor-pairs': 'off',

        'array-callback-return': 'off',

        // Examples of correct spacing with the 'never' option:
        // var arr = [];
        // var arr = ['foo', 'bar', 'baz'];
        // var arr = [['foo'], 'bar', 'baz'];
        // var arr = [
        //     'foo',
        //     'bar',
        //     'baz'
        // ];
        'array-bracket-spacing': [
            'warn',
            'never'
        ],

        // This rule aims to reduce the usage of variables
        // outside of their binding context and emulate
        // traditional block scope from other languages.
        // This is to help newcomers to the language avoid
        // difficult bugs with variable hoisting.
        'block-scoped-var': 'warn',

        //  Encourage spaces inside of single line blocks
        //  Valid spacing with 'always':
        //  function foo() { return true; }
        //  if (foo) { bar = 0; }
        'block-spacing': [
            'warn',
            'always'
        ],

        // The one true brace style is one of the most common brace styles in JavaScript, in which the opening brace of a block is
        // placed on the same line as its corresponding statement or declaration. For example:
        //
        // if (foo) {
        //     bar();
        // } else {
        //     baz();
        // }
        'brace-style': [
            'warn',
            '1tbs'
        ],

        // Doesn't include leading or trailing underscores, or all-cap constants
        'camelcase': 'warn',

        'capitalized-comments': 'off',

        /*
        * Discourage dangling commas
        * e.g.
        * var obj = {
        *   a: 1,
        * }
        * */
        'comma-dangle': [
            'warn',
            'never'
        ],

        // Valid: [1, 2]
        // Invalid: [1 ,2]
        // Invalid: [1,2]
        // Invalid: [1 , 2]
        'comma-spacing': [
            'warn',
            {
                before: false,
                after: true
            }
        ],

        // Valid 'first' comma style placement:
        // var foo = 1, bar = 2;
        //
        // var foo = 1
        // ,   bar = 2;
        //
        // var foo = [
        //     'apples'
        //     , 'oranges'
        // ];
        //
        // function bar() {
        //     return {
        //         'a': 1
        //         , 'b:': 2
        //     };
        // }
        'comma-style': [
            'warn',
            'first'
        ],


        // Disallow more than 15 linear paths through a single function
        // This encourages breakoing down huge functions into manageable blocks. We may need to set this
        // high and slowly bring it down over time
        'complexity': [
            'warn',
            15
        ],

        //  Valid 'never' computed property spacing:
        //  obj[foo]
        //  obj['foo']
        //  var x = {[b]: a}
        //  obj[foo[bar]]
        'computed-property-spacing': [
            'warn',
            'never'
        ],

        'consistent-return': 'off',

        'consistent-this': 'off',

        // JavaScript allows the omission of curly braces when a block contains only one statement.
        // However, it is considered by many to be best practice to never omit curly braces around blocks,
        // even when they are optional, because it can lead to bugs and reduces code clarity.
        'curly': [
            'warn',
            'all'
        ],

        'default-case': 'off',

        // JavaScript allows you to place newlines before or after a dot in a member expression.
        // Consistency in placing a newline before or after the dot can greatly increase readability.
        'dot-location': [
            'warn',
            'property'
        ],

        // In JavaScript, one can access properties using the dot notation (foo.bar) or square-bracket notation (foo['bar']).
        // However, the dot notation is often preferred because it is easier to read, less verbose, and works better with aggressive
        // JavaScript minimizers.
        'dot-notation': [
            'warn',
            {
                allowKeywords: true,
                // allow for kebab-case square bracket notation
                allowPattern: '^[a-z]+(-[a-z]+)+$'
            }
        ],

        // Trailing newlines in non-empty files are a common UNIX idiom. Benefits of trailing newlines include the ability
        // to concatenate or append to files as well as output files to the terminal without interfering with shell prompts.
        'eol-last': [
            'warn',
            'always'
        ],

        // It is considered good practice to use the type-safe equality operators === and !==
        // instead of their regular counterparts == and !=. The reason for this is that == and != do type coercion which
        // follows the rather obscure Abstract Equality Comparison Algorithm.
        'eqeqeq': 'warn',

        // require or disallow spacing between function identifiers and their invocations
        'func-call-spacing': [
            'warn',
            'never'
        ],

        'func-names': 'off',

        'func-name-matching': 'off',

        'func-style': 'off',

        // Require for-in loops to do a conditional check on keys (hasOwnProperty is recommended)
        // It would be nice to completely discourage the use of for-in, because it is significantly
        // less performant than iterating over object keys with Object.keys and prone to de-optimizing
        // its containing function https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#5-for-in
        'guard-for-in': 'error',

        'id-blacklist': 'off',

        'id-length': 'off',

        'id-match': 'off',

        'indent': [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],

        'init-declarations': 'off',

        /*
         'beforeColon': false (default) disallows spaces between the key and the colon in object literals.
         'afterColon': true (default) requires at least one space between the colon and the value in object literals.
         'mode': 'strict' (default) enforces exactly one space before or after colons in object literals.
         */
        'key-spacing': [
            'warn',
            {
                beforeColon: false,
                afterColon: true,
                mode: 'strict'
            }
        ],

        'line-comment-position': 'off',

        // The linebreaks (new lines) used in windows operating system are usually carriage returns (CR) followed by a
        // line feed (LF) making it a carriage return line feed (CRLF) whereas Linux and Unix use a simple line feed (LF).
        // The corresponding control sequences are '\n' (for LF) and '\r\n' for (CRLF).
        'linebreak-style': [
            'error',
            'unix'
        ],

        'lines-around-comment': 'off',

        // require or disallow newlines around directives
        'lines-around-directive': [
            'warn',
            'always'
        ],

        // This rule enforces a maximum depth that blocks can be nested to reduce code complexity. Defaults to 4
        'max-depth': [
            'warn',
            4
        ],

        // Very long lines of code in any language can be difficult to read. In order to aid in readability
        // and maintainability many coders have developed a convention to limit lines of code to X number of characters
        'max-len': [
            'error',
            {
                code: 140,
                ignoreTrailingComments: true
            }
        ],

        // Many JavaScript libraries use the callback pattern to manage asynchronous operations.
        // A program of any complexity will most likely need to manage several asynchronous operations
        // at various levels of concurrency. A common pitfall that is easy to fall into is nesting callbacks,
        // which makes code more difficult to read the deeper the callbacks are nested.
        'max-nested-callbacks': [
            'warn',
            {
                'max': 3
            }
        ],

        // Functions that take numerous parameters can be difficult to read and write because
        // it requires the memorization of what each parameter is, its type, and the order
        // they should appear in. As a result, many coders adhere to a convention that caps
        // the number of parameters a function can take.
        'max-params': [
            'warn',
            {
                'max': 4
            }
        ],

        // enforce a maximum number of statements allowed in function blocks
        // This is arbitrarily high right now
        'max-statements': [
            'error',
            50
        ],

        // require constructor names to begin with a capital letter
        'new-cap': 'warn',

        // JavaScript allows the omission of parentheses when invoking a function via the
        // new keyword and the constructor has no arguments. However, some coders believe
        // that omitting the parentheses is inconsistent with the rest of the language and
        // thus makes code less clear.
        'new-parens': 'error',

        'newline-after-var': 'off',

        'newline-before-return': 'off',

        'newline-per-chained-call': 'warn',

        'no-alert': 'error',

        'no-array-constructor': 'warn',

        'no-compare-neg-zero': 'warn',

        'no-bitwise': 'warn',

        // Disallow referencing arguments.caller / arguments.callee
        // They're disallowed in strict mode, deprecated, and V8 deoptimizers
        'no-caller': 'error',

        // This rule disallows lexical declarations (let, const, function and class) in case/default clauses.
        // The reason is that the lexical declaration is visible in the entire switch block but it only gets
        // initialized when it is assigned, which will only happen if the case where it is defined is reached.
        // To ensure that the lexical declaration only applies to the current case clause wrap your clauses in blocks.
        'no-case-declarations': 'error',

        // disallow catch clause parameters from shadowing variables in the outer scope
        'no-catch-shadow': 'warn',

        // disallow assignment operators in conditional expressions
        'no-cond-assign': 'warn',

        // disallow the use of console
        'no-console': 'error',

        // disallow constant expressions in conditions
        'no-constant-condition': 'warn',

        'no-continue': 'off',

        // Control characters are special, invisible characters in the ASCII range 0-31.
        // These characters are rarely used in JavaScript strings so a regular expression containing
        // these characters is most likely a mistake.
        'no-control-regex': 'error',

        'no-debugger': 'error',

        // The purpose of the delete operator is to remove a property from an object.
        // Using the delete operator on a variable might lead to unexpected behavior.
        'no-delete-var': 'error',

        // disallow division operators explicitly at the beginning of regular expressions
        'no-div-regex': 'warn',

        // disallow duplicate arguments in function definitions
        'no-dupe-args': 'error',

        // disallow duplicate keys in object literals
        'no-dupe-keys': 'error',

        // disallow duplicate case labels
        'no-duplicate-case': 'error',

        // disallow else blocks after return statements in if statements
        'no-else-return': 'warn',

        // disallow empty block statements
        'no-empty': 'warn',

        // disallow empty character classes in regular expressions
        'no-empty-character-class': 'warn',

        'no-empty-function': 'off',

        // disallow labeled statements
        'no-labels': 'warn',

        // disallow null comparisons without type-checking operators
        'no-eq-null': 'warn',

        // disallow the use of eval()
        'no-eval': 'error',

        // If a catch clause in a try statement accidentally (or purposely)
        // assigns another value to the exception parameter, it impossible to
        // refer to the error from that point on. Since there is no arguments object
        // to offer alternative access to this data, assignment of the parameter
        // is absolutely destructive.
        'no-ex-assign': 'error',

        // disallow extending native types
        'no-extend-native': 'error',

        // disallow unnecessary calls to .bind()
        'no-extra-bind': 'warn',

        // disallow unnecessary boolean casts
        'no-extra-boolean-cast': 'warn',

        'no-extra-label': 'off',


        // This rule always ignores extra parentheses around the following:
        // 1. RegExp literals such as (/abc/).test(var) to avoid conflicts with the wrap-regex rule
        // 2. immediately-invoked function expressions (also known as IIFEs) such as
        // var x = (function () {})(); and ((function foo() {return 1;})())
        // to avoid conflicts with the wrap-iife rule
        'no-extra-parens': [
            'warn',
            'all',
            {
                'conditionalAssign': false,       // allows extra parentheses around assignments in conditional test expressions
                'returnAssign': false,            // allows extra parentheses around assignments in return statements
                'nestedBinaryExpressions': false, // allows extra parentheses in nested binary expressions
                'ignoreJSX': 'none'               // none|all|multi-line|single-line. Defaults to none
            }
        ],

        // disallow unnecessary semicolons
        'no-extra-semi': 'warn',

        // disallow fallthrough of case statements
        'no-fallthrough': 'error',

        // disallow leading or trailing decimal points in numeric literals
        'no-floating-decimal': 'warn',

        // disallow reassigning function declarations
        'no-func-assign': 'error',

        // JavaScript environments contain a number of built-in global variables,
        // such as window in browsers and process in Node.js. In almost all cases,
        // you don’t want to assign a value to these global variables as doing so
        // could result in losing access to important functionality.
        'no-global-assign': 'error',

        // disallow the use of eval()-like methods
        // It’s considered a good practice to avoid using eval() in JavaScript. There are security
        // and performance implications involved with doing so, which is why many linters
        // (including ESLint) recommend disallowing eval(). However, there are some other ways
        // to pass a string and have it interpreted as JavaScript code that have similar concerns.
        // The first is using setTimeout(), setInterval() or execScript() (Internet Explorer only),
        // both of which can accept a string of JavaScript code as their first argument.
        'no-implied-eval': 'error',

        //disallow shorthand type conversions
        'no-implicit-coercion': 'warn',

        // Don't allow implicit global variable and function declarations
        'no-implicit-globals': 'error',

        'no-inline-comments': 'off',

        // In JavaScript, prior to ES6, a function declaration is only allowed
        // in the first level of a program or the body of another function,
        // though parsers sometimes erroneously accept them elsewhere.
        // This only applies to function declarations; named or anonymous
        // function expressions can occur anywhere an expression is permitted.
        'no-inner-declarations': [
            'error',
            'functions'
        ],

        // disallow invalid regular expression strings in RegExp constructors
        'no-invalid-regexp': 'error',

        // Various whitespace characters can be inputted by programmers by mistake for example from
        // copying or keyboard shortcuts. Pressing Alt + Space on OS X adds in a non breaking space
        // character for example.
        //
        // Known issues these spaces cause:
        //
        // Zero Width Space
        // Is NOT considered a separator for tokens and is often parsed as an Unexpected token ILLEGAL
        // Is NOT shown in modern browsers making code repository software expected to resolve the visualisation
        // Line Separator
        // Is NOT a valid character within JSON which would cause parse errors
        'no-irregular-whitespace': 'warn',

        // disallow the use of the __iterator__ property
        'no-iterator': 'error',

        'no-label-var': 'off',

        // disallow unnecessary nested blocks
        'no-lone-blocks': 'warn',

        // disallow if statements as the only statement in else blocks
        'no-lonely-if': 'warn',

        // disallow function declarations and expressions inside loop statements
        'no-loop-func': 'warn',

        'no-magic-numbers': 'off',

        'no-mixed-operators': 'warn',

        // Most code conventions require either tabs or spaces be used for
        // indentation. As such, it’s usually an error if a single line of
        // code is indented with both tabs and spaces.
        'no-mixed-spaces-and-tabs': 'error',

        // Not sure about this one, this just caused a bug but I do like them
        // disallow use of chained assignment expressions
        'no-multi-assign': 'warn',

        // Disallow multiple spaces between characters, with exceptions for aligning properties and variable declarations
        'no-multi-spaces': [
            'warn',
            {
                'exceptions': {
                    'Property': true,
                    'VariableDeclarator': true
                }
            }
        ],

        // disallow multiline strings
        'no-multi-str': 'warn',

        'no-multiple-empty-lines': [
            'warn',
            {
                max: 1
            }
        ],

        // Negated conditions are more difficult to understand. Code can be made more readable by inverting the condition instead.
        'no-negated-condition': 'warn',

        // disallow nested ternary expressions
        'no-nested-ternary': 'warn',

        // disallow new operators outside of assignments or comparisons
        'no-new': 'warn',

        // disallow new operators with the Function object
        'no-new-func': 'error',

        // disallow Object constructors
        'no-new-object': 'error',

        // disallow new operators with the String, Number, and Boolean objects
        'no-new-wrappers': 'error',

        // disallow calling global object properties as functions
        // ECMAScript provides several global objects that are intended
        // to be used as-is. Some of these objects look as if they could
        // be constructors due their capitalization (such as Math and JSON)
        // but will throw an error if you try to execute them as functions.
        'no-obj-calls': 'error',

        // disallow octal literals
        'no-octal': 'error',

        // disallow octal escape sequences in string literals
        'no-octal-escape': 'error',

        // no-param-reassign
        'no-param-reassign': 'warn',

        'no-plusplus': 'off',

        // disallow the use of the __proto__ property
        'no-proto': 'error',

        // disallow calling some Object.prototype methods directly on objects
        'no-prototype-builtins': 'off',

        // disallow variable redeclaration
        'no-redeclare': 'error',

        // disallow multiple spaces in regular expressions
        // Regular expressions can be very complex and difficult
        // to understand, which is why it’s important to keep them
        // as simple as possible in order to avoid mistakes. One of
        // the more error-prone things you can do with a regular expression
        // is to use more than one space
        'no-regex-spaces': 'warn',

        'no-restricted-globals': 'off',

        'no-restricted-imports': 'off',

        'no-restricted-modules': 'off',

        'no-restricted-syntax': 'off',

        // disallow assignment operators in return statements
        'no-return-assign': 'warn',

        // disallow javascript: urls
        'no-script-url': 'error',

        // disallow assignments where both sides are exactly the same
        'no-self-assign': 'warn',

        // disallow comparisons where both sides are exactly the same
        'no-self-compare': 'warn',

        // disallow the comma operator
        'no-sequences': 'warn',

        // disallow variable declarations from shadowing variables declared in the outer scope
        'no-shadow': 'warn',

        // disallow identifiers from shadowing restricted names
        'no-shadow-restricted-names': 'warn',

        'no-sparse-arrays': 'off',

        'no-tabs': 'warn',

        'no-ternary': 'off',

        // disallow throwing literals as exceptions
        'no-throw-literal': 'warn',

        // disallow trailing whitespace at the end of lines
        'no-trailing-spaces': 'warn',

        // disallow the use of undeclared variables unless mentioned in /*global */ comments
        'no-undef': 'error',

        // disallow initializing variables to undefined
        'no-undef-init': 'warn',

        'no-undefined': 'off',

        // disallow dangling underscores in identifiers
        'no-underscore-dangle': 'warn',

        // disallow confusing multiline expressions
        'no-unexpected-multiline': 'warn',

        // JavaScript suspends the control flow statements of try and catch blocks
        // until the execution of finally block finishes. So, when return, throw,
        // break, or continue is used in finally, control flow statements inside
        // try and catch are overwritten, which is considered as unexpected behavior.
        'no-unsafe-finally': 'error',

        // Just as developers might type -a + b when they mean -(a + b) for the
        // negative of a sum, they might type !key in object by mistake when they
        // almost certainly mean !(key in object) to test that a key is not in an
        // object.
        'no-unsafe-negation': 'error',

        // disallow unmodified loop conditions
        'no-unmodified-loop-condition': 'warn',

        // disallow ternary operators when simpler alternatives exist
        'no-unneeded-ternary': 'warn',

        // disallow unreachable code after return, throw, continue, and break statements
        'no-unreachable': 'error',

        // An unused expression which has no effect on the state of the program indicates a logic error.
        // For example, n + 1; is not a syntax error, but it might be a typing mistake where a programmer
        // meant an assignment statement n += 1; instead.
        'no-unused-expressions': 'warn',

        'no-unused-labels': 'off',

        'no-unused-vars': [
            'warn',
            {
                'args': 'after-used',
                'vars': 'all'
            }
        ],

        // In JavaScript, prior to ES6, variable and function declarations are hoisted to the
        // top of a scope, so it’s possible to use identifiers before their formal declarations
        // in code. This can be confusing and some believe it is best to always declare variables
        // and functions before using them.
        'no-use-before-define': 'error',

        // a function invocation can be written as Function.prototype.call()
        // and Function.prototype.apply(). But Function.prototype.call() and
        // Function.prototype.apply() are slower than the normal function invocation.
        'no-useless-call': 'warn',

        // disallow unnecessary concatenation of literals or template literals
        'no-useless-concat': 'warn',

        // disallow redundant return statements
        'no-useless-return': 'warn',

        // disallow void operators
        'no-void': 'warn',

        // Maybe warn on TODO?
        'no-warning-comments': 'off',

        // disallow whitespace before properties
        'no-whitespace-before-property': 'warn',

        // disallow with statements
        'no-with': 'error',

        'nonblock-statement-body-position': 'off',

        'object-curly-spacing': [
            'warn',
            'always'
        ],

        //  This rule enforces consistent line breaks inside braces of object literals or destructuring assignments.
        //  'multiline': true (default) requires line breaks if there are line breaks inside properties or between properties
        'object-curly-newline': [
            'warn',
            {
                multiline: true
            }
        ],

        'object-property-newline': 'off',

        'one-var': 'off',

        // require or disallow newlines around variable declarations
        'one-var-declaration-per-line': 'warn',

        'operator-assignment': 'off',

        'operator-linebreak': [
            'warn',
            'before'
        ],

        //  This rule enforces consistent empty line padding within blocks.
        //  'never' disallows empty lines at the beginning and ending of block
        // statements (excepting switch statements and classes)
        'padded-blocks': [
            'warn',
            'never'
        ],

        // require quotes around object literal property names
        'quote-props': [
            'warn',
            'as-needed',
            {
                keywords: true,
                numbers: true
            }
        ],

        // Prefer single quotes to double quotes
        'quotes': [
            'warn',
            'single'
        ],

        'radix': 'off',

        'require-jsdoc': 'off',

        // require semicolons instead of ASI
        'semi': 'error',

        // JavaScript allows you to place unnecessary spaces before or after a semicolon.
        // Disallowing or enforcing space around a semicolon can improve the readability of your program.
        'semi-spacing': [
            'warn',
            {
                'after': true,
                'before': false
            }
        ],

        'sort-vars': 0,

        'sort-keys': 'off',

        //  This rule takes one argument. If it is "always" then blocks must always have
        // at least one preceding space. If "never" then all blocks should never have any preceding space.
        'space-before-blocks': [
            'warn',
            'always'
        ],

        //  This rule aims to enforce consistent spacing before function parentheses and as such, will warn whenever whitespace doesn’t match the preferences specified.
        //  anonymous is for anonymous function expressions (e.g. function () {})
        //  named is for named function expressions (e.g. function foo() {})
        "space-before-function-paren": [
            'warn',
            {
                "anonymous": "always",
                "named": "never"
            }
        ],

        //  Keywords are syntax elements of JavaScript, such as function and if.
        // These identifiers have special meaning to the language and so often
        // appear in a different color in code editors. As an important part of
        // the language, style guides often refer to the spacing that should be used around keywords
        "keyword-spacing": 'warn',

        //  This rule will enforce consistency of spacing directly inside of parentheses,
        // by disallowing or requiring one or more spaces to the right of ( and to the left of ).
        //  In either case, () will still be allowed.
        'space-in-parens': [
            'warn',
            'never'
        ],

        //  While formatting preferences are very personal, a number of style guides require spaces around operators, such as:
        //  var sum = 1 + 2;
        //  The proponents of these extra spaces believe it make the code easier to read and can more easily highlight potential errors
        'space-infix-ops': 'warn',

        // Some style guides require or disallow spaces before or after unary operators.
        // This is mainly a stylistic issue, however, some JavaScript expressions can be
        // written without spacing which makes it harder to read and maintain.
        'space-unary-ops': [
            'warn',
            {
                'nonwords': false,
                'words': true
            }
        ],

        'spaced-comment': 'off',

        'strict': [
            'warn',
            'global'
        ],

        // The Unicode Byte Order Mark (BOM) is used to specify whether code units
        // are big endian or little endian. That is, whether the most significant or
        // least significant bytes come first. UTF-8 does not require a BOM because
        // byte ordering does not matter when characters are a single byte. Since UTF-8
        // is the dominant encoding of the web, we make "never" the default option.
        'unicode-bom': 'warn',

        // require calls to isNaN() when checking for NaN
        'use-isnan': 'error',

        'valid-jsdoc': 'off',

        // For a vast majority of use cases, the result of the
        // typeof operator is one of the following string literals:
        // 'undefined', 'object', 'boolean', 'number', 'string',
        // 'function' and 'symbol'. It is usually a typing mistake
        // to compare the result of a typeof operator to other
        // string literals.
        'valid-typeof': 'error',

        'vars-on-top': 'off',

        'wrap-iife': [
            'warn',
            'inside'
        ],

        'wrap-regex': 'off',

        //  Yoda conditions are so named because the literal value of the condition comes first while the variable comes second.
        //  if ('red' === color) { ... }
        //  Reduces code readability
        'yoda': [
            'warn',
            'never'
        ]
    }
};
