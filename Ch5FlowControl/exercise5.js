return foo() ? 'bar' : qux();

// Refactor to If statements

if(foo()) {
    return 'bar'
} else {
    return qux()
}