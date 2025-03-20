const apiClient = require('../utils/apiClient');
const { updateSlidingWindow } = require('../utils/slidingWindow');
require('dotenv').config();

let slidingWindow = [];

const fetchAndCalculateAverage = async (numberId) => {
    const numberType = numberId.charAt(0);
    
    const apiUrls = {
        p: process.env.PRIME_API,
        f: process.env.FIBONACCI_API,
        e: process.env.EVEN_API,
        r: process.env.RANDOM_API,
    };

    if (!apiUrls[numberType]) {
        throw new Error(`Invalid number ID: ${numberType}`);
    }

    const numbers = await apiClient.fetchNumbers(apiUrls[numberType]);
    const previousState = [...slidingWindow];
    const { currentState } = updateSlidingWindow(slidingWindow, numbers);
    slidingWindow = currentState;

    const avg = currentState.length > 0 
        ? currentState.reduce((sum, num) => sum + num, 0) / currentState.length
        : 0;

    return {
        windowPrevState: previousState,
        windowCurrState: currentState,
        numbers,
        avg: parseFloat(avg.toFixed(2)),
    };
};

module.exports = { fetchAndCalculateAverage }; 