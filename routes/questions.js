const pool = require("../db/pool");

const getQuestions = async (req, res) => {
  console.log(req.query);
  try {
    const getAllQuestion = await pool.query(
      `SELECT * FROM questions
      WHERE topic_id = ${req.params.topicId}
      AND is_syntax = ${req.params.isSyntax}
      ORDER BY question`
    );
    res.send(getAllQuestion.rows);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getQuestions,
};
