const pool = require("../db/pool");

const filterQuestions = async (req, res) => {
  try {
    console.log(req.params);
    const getAllQuestion = await pool.query(
      `SELECT * FROM ${req.params.topic}_all_${req.params.questiontype} WHERE question LIKE '%${req.params.question}%';`
    );
    res.send(getAllQuestion.rows);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  filterQuestions,
};
