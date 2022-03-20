const pool = require("../db/pool");

const getTrendingQuestions = async (req, res) => {
  try {
    const getAllQuestion = await pool.query(`SELECT * FROM trendingquestions`);
    res.send(getAllQuestion.rows);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
    getTrendingQuestions,
};
