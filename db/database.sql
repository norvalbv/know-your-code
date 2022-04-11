CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  topic_id INTEGER REFERENCES topics(id),
  question varchar(128) NOT NULL,
  answer varchar(1024) NOT NULL,
  difficulty varchar(32),
  source varchar(128),
  is_syntax boolean NOT NULL,
  is_trending boolean
 );
 
INSERT INTO questions (topic_id, question, answer, is_syntax)
VALUES (1, 'HTML QUESTION TEST', 'HTML ANSWER TEST', false);

INSERT INTO questions (topic_id, question, answer, is_syntax)
VALUES (2, 'CSS QUESTION TEST', 'CSS ANSWER TEST', false);

INSERT INTO questions (topic_id, question, answer, is_syntax)
VALUES (3, 'JS QUESTION TEST', 'JS ANSWER TEST', false);

INSERT INTO questions (topic_id, question, answer, is_syntax)
VALUES (4, 'REACT QUESTION TEST', 'REACT ANSWER TEST', false);

INSERT INTO questions (topic_id, question, answer, is_syntax)
VALUES (5, 'REDUX QUESTION TEST', 'REDUX ANSWER TEST', false);

INSERT INTO questions (topic_id, question, answer, is_syntax)
VALUES (6, 'SASS QUESTION TEST', 'SASS ANSWER TEST', false);