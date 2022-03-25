const pool = require("../db/pool");

const getHTMLAllQuestions = async (req, res) => {
  try {
    const getAllQuestion = await pool.query(`SELECT * FROM html_all_questions`);
    res.send(getAllQuestion.rows);
  } catch (error) {
    console.error(error);
  }
};

const getHTMLAllSyntax = async (req, res) => {
  try {
    const getAllQuestion = await pool.query(`SELECT * FROM html_all_syntax`);
    res.send(getAllQuestion.rows);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getHTMLAllQuestions,
  getHTMLAllSyntax,
};
