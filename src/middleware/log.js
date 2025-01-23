const logRequest = (req, res, next) => {
    console.log('ngehit ' + req.path + ' yaaaa...');
    next();
};

// module.exports = logRequest;
export default logRequest;