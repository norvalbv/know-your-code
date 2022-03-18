const pool = require("../db/pool");

const getAllQuestions = async (req, res) => {
  try {
    const getAllQuestion = await pool.query(`SELECT * FROM htmlquestions`);
    res.send(getAllQuestion.rows);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllQuestions,
};
