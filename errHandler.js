module.exports = err => {
    res.status(500).json({
        message: 'Sorry, there was an error processing your request.',
        error: err
    })
}