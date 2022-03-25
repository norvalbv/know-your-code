const pool = require("../db/pool");

const getJavaScriptAllQuestions = async (req, res) => {
  try {
    const getAllQuestion = await pool.query(
      `SELECT * FROM javascript_all_questions`
    );
    res.send(getAllQuestion.rows);
  } catch (error) {
    console.error(error);
  }
};

const getJavaScriptAllSyntax = async (req, res) => {
  try {
    const getAllQuestion = await pool.query(
      `SELECT * FROM javascript_all_syntax`
    );
    res.send(getAllQuestion.rows);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getJavaScriptAllQuestions,
  getJavaScriptAllSyntax,
};
