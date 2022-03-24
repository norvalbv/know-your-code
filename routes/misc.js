const pool = require("../db/pool");

const filterQuestions = async (req, res) => {
  try {
    const getAllQuestion = await pool.query(
      `SELECT * FROM ${req.params.topic}questions WHERE question LIKE '%${req.params.question}%';`
    );
    res.send(getAllQuestion.rows);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  filterQuestions,
};
