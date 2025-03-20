module.exports = (err, req, res, next) => {
    console.error('Error:', err.message);
    
    if (err.message.includes('Invalid number ID')) {
        return res.status(400).json({ 
            error: 'Invalid number ID. Use p for prime, f for Fibonacci, e for even, or r for random numbers.' 
        });
    }

    if (err.response) {
        return res.status(err.response.status).json({
            error: err.response.data.message || 'API Error',
            details: err.response.data
        });
    }

    res.status(500).json({ 
        error: 'Internal server error',
        message: err.message 
    });
}; 