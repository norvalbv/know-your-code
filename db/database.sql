CREATE DATABASE knowyourcode;

CREATE TABLE htmlquestions (
    id SERIAL PRIMARY KEY,
    question varchar(256) NOT NULL,
    answer varchar(1024) NOT NULL
);

INSERT INTO
    htmlquestions (question, answer)
VALUES
    ('html question', 'html answer');

INSERT INTO
    htmlquestions (question, answer)
VALUES
    ('html question 2', 'html answer 2');

INSERT INTO
    htmlquestions (question, answer)
VALUES
    ('html question 3', 'html answer 3');

CREATE TABLE cssquestions (
    id SERIAL PRIMARY KEY,
    question varchar(256) NOT NULL,
    answer varchar(1024) NOT NULL
);

INSERT INTO
    cssquestions (question, answer)
VALUES
    ('css question', 'css answer');

INSERT INTO
    cssquestions (question, answer)
VALUES
    ('css question 2', 'css answer 2');

INSERT INTO
    cssquestions (question, answer)
VALUES
    ('css question 3', 'css answer 3');

CREATE TABLE javascriptquestions (
    id SERIAL PRIMARY KEY,
    question varchar(256) NOT NULL,
    answer varchar(1024) NOT NULL
);

INSERT INTO
    javascriptquestions (question, answer)
VALUES
    ('javascript question', 'javascript answer');

INSERT INTO
    javascriptquestions (question, answer)
VALUES
    ('javascript question 2', 'javascript answer 2');

INSERT INTO
    javascriptquestions (question, answer)
VALUES
    ('javascript question 3', 'javascript answer 3');

CREATE TABLE trendingquestions (
    id SERIAL PRIMARY KEY,
    question varchar(256) NOT NULL,
    answer varchar(1024) NOT NULL
);

INSERT INTO
    trendingquestions (question, answer)
VALUES
    ('trending question', 'trending answer');

INSERT INTO
    trendingquestions (question, answer)
VALUES
    ('trending question 2', 'trending answer 2');

INSERT INTO
    trendingquestions (question, answer)
VALUES
    ('trending question 3', 'trending answer 3');

CREATE TABLE trendingsyntax (
    id SERIAL PRIMARY KEY,
    question varchar(256) NOT NULL,
    answer varchar(1024) NOT NULL
);

INSERT INTO
    trendingsyntax (question, answer)
VALUES
    ('trending syntax question', 'trending syntax answer');

INSERT INTO
    trendingsyntax (question, answer)
VALUES
    ('trending syntax question 2', 'trending syntax answer 2');

INSERT INTO
    trendingsyntax (question, answer)
VALUES
    ('trending syntax question 3', 'trending syntax answer 3');


CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    topic varchar(128) NOT NULL
);

INSERT INTO
    topics (topic)
VALUES
    ('HTML', 'CSS', 'JavaSript');

CREATE TABLE htmlsyntax (
    id SERIAL PRIMARY KEY,
    question varchar(256) NOT NULL,
    answer varchar(1024) NOT NULL,
    image varchar(256)
);

INSERT INTO
    htmlsyntax (question, answer)
VALUES
    ('html syn qus', 'html syntax ans');


CREATE TABLE csssyntax (
    id SERIAL PRIMARY KEY,
    question varchar(256) NOT NULL,
    answer varchar(1024) NOT NULL,
    image varchar(256)
);

INSERT INTO
    css_all_syntax (question, answer)
VALUES
    ('css syn qus', 'css syntax ans');

CREATE TABLE javascript_all_syntax (
    id SERIAL PRIMARY KEY,
    question varchar(256) NOT NULL,
    answer varchar(1024) NOT NULL,
    image varchar(256)
);

INSERT INTO
    javascript_all_syntax (question, answer)
VALUES
    ('js syn qus', 'js syntax ans');