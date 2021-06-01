const express = require('express');
const { notANumber, mean, median, mode } = require('./utils');

const app = new express();

class ExpressError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
    }
}

app.use('/mean', (req, res, next) => {
    if (!req.query.hasOwnProperty('nums')) {
        throw new ExpressError('Bad Request: Nums is required.', 400);
        return next();
    }
    const nums = req.query.nums.split(',');
    if (notANumber(nums).length > 0) {
        throw new ExpressError(`Bad Request: ${notANumber(nums)} is not a number.`, 400);
        return next()
    }
    const result = mean(nums);
    return res.json({'operation': 'mean', 'value': result});
})

app.use('/median', (req, res) => {
    if (!req.query.hasOwnProperty('nums')) {
        throw new ExpressError('Bad Request: Nums is required.', 400);
        return next();
    }
    const nums = req.query.nums.split(',');
    if (notANumber(nums).length > 0) {
        throw new ExpressError(`Bad Request: ${notANumber(nums)} is not a number.`, 400);
        return next()
    }
    result = median(nums);
    return res.json({'operation': 'median', 'value': result})
})

app.use('/mode', (req, res) => {
    if (!req.query.hasOwnProperty('nums')) {
        throw new ExpressError('Bad Request: Nums is required.', 400);
        return next();
    }
    const nums = req.query.nums.split(',');
    if (notANumber(nums).length > 0) {
        throw new ExpressError(`Bad Request: ${notANumber(nums)} is not a number.`, 400);
        return next()
    }
    result = mode(nums)
    return res.json({'operation': 'mode', 'value': result});
})

app.use((err, req, res, next) => {
    let status = err.status || 500;
    let message = err.message;

    return res.status(status).json({error: {message, status}});
});

app.listen(3000, function() {
    console.log('App on port 3000');
})