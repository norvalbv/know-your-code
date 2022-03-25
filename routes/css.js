const pool = require("../db/pool");

const getCSSAllQuestions = async (req, res) => {
  try {
    const getAllQuestion = await pool.query(`SELECT * FROM css_all_questions`);
    res.send(getAllQuestion.rows);
  } catch (error) {
    console.error(error);
  }
};

const getCSSAllSyntax = async (req, res) => {
  try {
    const getAllQuestion = await pool.query(`SELECT * FROM css_all_syntax`);
    res.send(getAllQuestion.rows);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getCSSAllQuestions,
  getCSSAllSyntax,
};
