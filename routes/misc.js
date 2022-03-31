const pool = require("../db/pool");

const filterQuestions = async (req, res) => {
  try {
    console.log(req.params);
    const getAllQuestion = await pool.query(
      `SELECT * FROM ${req.params.topic}${req.params.questiontype} WHERE question LIKE '%${req.params.question}%';`
    );
    res.send(getAllQuestion.rows);
  } catch (error) {
    console.error(error);
  }
};

const filterTopics = async (req, res) => {
  try {
    const getAllQuestion = await pool.query(
      `SELECT * FROM topics WHERE topic LIKE '%${req.params.search}%';`
    );
    res.send(getAllQuestion.rows);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  filterQuestions,
  filterTopics,
};
