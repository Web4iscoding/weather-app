function safeAsync(func, keyword) {
    return function() {
        return func(keyword).catch(reject => {
            throw reject;
        });
    }
}

export { safeAsync };