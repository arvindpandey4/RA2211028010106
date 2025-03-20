exports.updateSlidingWindow = (slidingWindow, newNumbers) => {
    const uniqueNumbers = [...new Set([...slidingWindow, ...newNumbers])];
    const updatedWindow = uniqueNumbers.length > 10 ? uniqueNumbers.slice(-10) : uniqueNumbers;

    return {
        previousState: slidingWindow,
        currentState: updatedWindow,
    };
}; 