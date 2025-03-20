const { fetchAndCalculateAverage } = require('../services/numberService');

exports.getNumbers = async (req, res, next) => {
  try {
    const { numberId } = req.params;
    const result = await fetchAndCalculateAverage(numberId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}; 