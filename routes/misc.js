const pool = require("../db/pool");

// Get all questions from the database that match a topic
const getTopicQuestions = async (req, res) => {
  console.log(req.query);
  try {
    const getAllQuestion = await pool.query(
      `SELECT * FROM question WHERE topic_id = $1;`,
      [req.query.topic]
    );
    res.send(getAllQuestion.rows);
  } catch (error) {
    console.error(error);
  }
};

// Get all topics whose topic name matches the search term
const searchTopics = async (req, res) => {
  console.log(req.query);
  try {
    const getAllTopics = await pool.query(
      `SELECT * FROM topic WHERE topic_name LIKE $1;`,
      [`%${req.query.searchTerm}%`]
    );
    res.send(getAllTopics.rows);
  } catch (error) {
    console.error(error);
  }
};

// const filterQuestions = async (req, res) => {
//   try {
//     console.log(req.params);
//     const getAllQuestion = await pool.query(
//       `SELECT * FROM ${req.params.topic}_all_${req.params.questiontype} WHERE question LIKE '%${req.params.question}%';`
//     );
//     res.send(getAllQuestion.rows);
//   } catch (error) {
//     console.error(error);
//   }
// };

const filterTopics = async (req, res) => {
  try {
    const getAllQuestion = await pool.query(
      `SELECT * FROM topic WHERE topic LIKE '%${req.params.search}%';`
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
