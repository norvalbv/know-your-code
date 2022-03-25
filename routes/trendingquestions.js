const pool = require("../db/pool");

const getTrendingAllQuestions = async (req, res) => {
  try {
    const getAllQuestion = await pool.query(
      `SELECT * FROM trending_all_questions`
    );
    res.send(getAllQuestion.rows);
  } catch (error) {
    console.error(error);
  }
};
const getTrendingAllSyntax = async (req, res) => {
  try {
    const getAllQuestion = await pool.query(
      `SELECT * FROM trending_all_syntax`
    );
    res.send(getAllQuestion.rows);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getTrendingAllQuestions,
  getTrendingAllSyntax,
};
