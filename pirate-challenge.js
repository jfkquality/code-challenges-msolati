function answer(numbers) {
    if (numbers.length < 2 || numbers.length > 5000) {
        return
    }
    let loop = [];
    let currentRedirect = 0;
    while (loop.indexOf(currentRedirect) == -1) {
        loop.push(currentRedirect);
        currentRedirect = numbers[currentRedirect];
    }
    loop = loop.slice(loop.indexOf(currentRedirect));
    return loop;    
}
