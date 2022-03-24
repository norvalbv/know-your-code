const pool = require("../db/pool");

const getJSQuestions = async (req, res) => {
  try {
    const getAllQuestion = await pool.query(`SELECT * FROM javascriptquestions`);
    res.send(getAllQuestion.rows);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
    getJSQuestions,
};
