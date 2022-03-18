CREATE DATABASE knowyourcode;

CREATE TABLE htmlquestions (
    id SERIAL PRIMARY KEY,
    description varchar(256) NOT NULL,
    answer varchar(512) NOT NULL
);

INSERT INTO
    htmlquestions (id, description, answer)
VALUES
    (1, 'test', 'test');