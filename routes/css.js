const pool = require("../db/pool");

const getCSSQuestions = async (req, res) => {
  try {
    const getAllQuestion = await pool.query(`SELECT * FROM cssquestions`);
    res.send(getAllQuestion.rows);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getCSSQuestions,
};
