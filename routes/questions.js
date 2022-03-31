const pool = require("../db/pool");

const getQuestions = async (req, res) => {
  console.log(req.query);
  try {
    const getAllQuestion = await pool.query(
      `SELECT * FROM ${req.params.topic}${req.params.questiontype}`
    );
    res.send(getAllQuestion.rows);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getQuestions,
};
