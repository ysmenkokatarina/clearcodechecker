const eslint = require('eslint');

function clearCodeChecker(code) {
    // Create ESLint instance
    const linter = new eslint.CLIEngine();

    // Lint the provided code
    const report = linter.executeOnText(code);

    // Format the linting results
    const formatter = linter.getFormatter();

    // Output the formatted results
    console.log(formatter(report.results));
}

// Example usage
const code = `
    function greet(name) {
        console.log('Hello, ' + name);
    }
    
    greet('World');
`;

clearCodeChecker(code);

// Export the function for usage in other modules
module.exports = clearCodeChecker;
