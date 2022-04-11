const pool = require("../db/pool");

// Gets all questions from the database
const getQuestions = async (req, res) => {
  console.log(req.query);
  try {
    const getAllQuestion = await pool.query(
      `SELECT * FROM question;`
    );
    res.send(getAllQuestion.rows);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getQuestions,
};
