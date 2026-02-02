function printNumberPyramid(n) {
       if (n < 1 || n > 31 || n % 2 === 0) {
        console.log("Error: n must be an odd number between 1 and 31");
        return;
    }
    for (let i = 1; i <= n; i++) {
        
        let spaces = ' '.repeat(n - i);        
        let numbers = '';
        for (let j = 1; j <= i; j++) {
            numbers += j + ' ';
        }
        console.log(spaces + numbers.trim());
    }
}

printNumberPyramid(5);
