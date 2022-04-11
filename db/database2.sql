CREATE DATABASE knowyourcode2;

--
-- SCHEMAS -----------------------------------------------------------------
--

CREATE TABLE topic (
    id SERIAL PRIMARY KEY,
    name varchar(16) NOT NULL
);

CREATE TABLE question (
    id SERIAL PRIMARY KEY,
    topic_id varchar(16) REFERENCES topic(name) NOT NULL,
    question varchar(128) NOT NULL,
    answer varchar(1024) NOT NULL,
    difficulty varchar(32),
    source varchar(256),
    is_syntax boolean NOT NULL,
    is_trending boolean
);

--
-- TOPIC DATA -------------------------------------------------------------
--

INSERT INTO
    topic (name)
VALUES
    ('html');

INSERT INTO
    topic (name)
VALUES
    ('css');
    
--
-- HTML QUESTION DATA -----------------------------------------------------
--

INSERT INTO
    question (topic_id, question, answer, difficulty, source, is_syntax, is_trending)
VALUES
    ('html', 
    'What is the purpose of the alt attribute on images?', 
    'The alt attribute provides alternative information for an image if a user cannot view it. The alt attribute should be used to describe any images except those which only serve a decorative purposes, in which case it should be left empty.', 
    'entry', 
    'https://www.fullstack.cafe/interview-questions/html5', 
    false,
    false);

INSERT INTO
    question (topic_id, question, answer, difficulty, source, is_syntax, is_trending)
VALUES
    ('html', 
    'What is the difference between span and div?', 
    'div is a block element
span is inline element
For bonus points, you could point out that it’s illegal to place a block element inside an inline element, and that while div can have a p tag, and a p tag can have a span, it is not possible for span to have a div or p tag inside.', 
    'junior', 
    'https://www.fullstack.cafe/interview-questions/html5', 
    false,
    false);

INSERT INTO
    question (topic_id, question, answer, difficulty, source, is_syntax, is_trending)
VALUES
    ('html', 
    'What is character encoding?', 
    'To display an HTML page correctly, a web browser must know which character set (character encoding) to use.', 
    'junior', 
    'https://www.fullstack.cafe/interview-questions/html5', 
    false,
    false);

INSERT INTO
    question (topic_id, question, answer, difficulty, source, is_syntax, is_trending)
VALUES
    ('html', 
    'What is a self closing tag?', 
    'In HTML5 it is not strictly necessary to close certain HTML tags. The tags that aren’t required to have specific closing tags are called “self closing” tags. An example of a self closing tag is something like a line break (<br />) or the meta tag (<meta>)', 
    'junior', 
    'https://www.fullstack.cafe/interview-questions/html5', 
    false,
    false);

INSERT INTO
    question (topic_id, question, answer, difficulty, source, is_syntax, is_trending)
VALUES
    ('html', 
    'What is the difference between an "attribute" and a "property" in HTML?', 
    'Attributes are defined on the HTML markup but properties are defined on the DOM.', 
    'junior', 
    'https://www.fullstack.cafe/interview-questions/html5', 
    false,
    false);

INSERT INTO
    question (topic_id, question, answer, difficulty, source, is_syntax, is_trending)
VALUES
    ('html', 
    'How do you change the direction of HTML text?', 
    'You can set text direction in HTML in one of two ways:

With the HTML dir attribute
With the CSS direction property', 
    'junior', 
    'https://www.fullstack.cafe/interview-questions/html5', 
    false,
    false);

INSERT INTO
    question (topic_id, question, answer, difficulty, source, is_syntax, is_trending)
VALUES
    ('html', 
    'What is semantic HTML?', 
    'It is the use of HTML markup to reinforce the semantics or meaning of the content. For example: In semantic HTML <b> </b> tag is not used for bold statement as well as <i> </i> tag is used for italic. Instead of these we use <strong></strong> and <em></em> tags.', 
    'junior', 
    'https://www.javatpoint.com/html-interview-questions', 
    false,
    false);

INSERT INTO
    question (topic_id, question, answer, difficulty, source, is_syntax, is_trending)
VALUES
    ('html', 
    'How do you create a nested webpage in HTML?', 
    'The HTML iframe tag is used to display a nested webpage. In other words, it represents a webpage within a webpage.', 
    'junior', 
    'https://www.javatpoint.com/html-interview-questions', 
    false,
    false);

INSERT INTO
    question (topic_id, question, answer, difficulty, source, is_syntax, is_trending)
VALUES
    ('html', 
    'What is the difference between progress and meter tag?', 
    'The progress tag is used to represent the progress of the task only while the meter tag is used to measure data within a given range.', 
    'senior', 
    'https://www.javatpoint.com/html-interview-questions', 
    false,
    false);

INSERT INTO
    question (topic_id, question, answer, difficulty, source, is_syntax, is_trending)
VALUES
    ('html', 
    'Which type of video formats are supported by HTML5?', 
    'HTML 5 supports three types of video format:

mp4
WebM
Ogg', 
    'senior', 
    'https://www.javatpoint.com/html-interview-questions', 
    false,
    false);

--
-- CSS QUESTION DATA ------------------------------------------------------
--

INSERT INTO
    question (topic_id, question, answer, difficulty, source, is_syntax, is_trending)
VALUES
    ('css', 
    'Explain the three main ways to apply CSS styles to a web page', 
    'Using the inline style attribute on an element, using a <style> block in the <head> section of your HTML, and loading an external CSS file using the <link> tag', 
    'entry', 
    'https://www.fullstack.cafe/interview-questions/css', 
    false,
    false);

INSERT INTO
    question (topic_id, question, answer, difficulty, source, is_syntax, is_trending)
VALUES
    ('css', 
    'How to use variables in Sass?', 
    'Sass uses the $ symbol to make something a variable. Inside those variables, you can store things like colors, font stacks, or any CSS value you think you will want to reuse.', 
    'junior', 
    'https://www.fullstack.cafe/interview-questions/css', 
    false,
    false);

INSERT INTO
    question (topic_id, question, answer, difficulty, source, is_syntax, is_trending)
VALUES
    ('css', 
    'Explain the CSS box model and the layout components that it consists of', 
    'The CSS box model is a rectangular layout paradigm for HTML elements that consists of the following:
Content - The content of the box, where text and images appear
Padding - A transparent area surrounding the content (i.e., the amount of space between the border and the content)
Border - A border surrounding the padding (if any) and content
Margin - A transparent area surrounding the border (i.e., the amount of space between the border and any neighboring elements)', 
    'junior', 
    'https://www.fullstack.cafe/interview-questions/css',
    false, 
    false);

INSERT INTO
    question (topic_id, question, answer, difficulty, source, is_syntax, is_trending)
VALUES
    ('css', 
    'What is a CSS rule?', 
    'Web browsers apply CSS rules to a document to affect how they are displayed. A CSS rule is formed from:

A set of properties, which have values set to update how the HTML content is displayed,
A selector, which selects the element(s) you want to apply the updated property values to.', 
    'junior', 
    'https://www.fullstack.cafe/interview-questions/css', 
    false,
    false);

INSERT INTO
    question (topic_id, question, answer, difficulty, source, is_syntax, is_trending)
VALUES
    ('css', 
    'When would you use CSS flexbox and grid?', 
    'Flexbox is mainly meant for 1-dimensional layouts while Grid is meant for 2-dimensional layouts. Flexbox solves many common problems in CSS, such as vertical centering of elements within a container, sticky footer, etc. Grid is by far the most intuitive approach for creating grid-based layouts, but browser support is not wide at the moment.', 
    'junior', 
    'https://www.fullstack.cafe/interview-questions/css', 
    false,
    false);
    
INSERT INTO
    question (topic_id, question, answer, difficulty, source, is_syntax, is_trending)
VALUES
    ('css', 
    'What is the difference between classes and IDs in CSS?', 
    'IDs are meant to be unique within the document. They can be used to identify an element when linking using a fragment identifier. Elements can only have one id attribute.

Classes can be reused on multiple elements within the document. They are mainly for styling and targeting elements.', 
    'junior', 
    'https://www.fullstack.cafe/interview-questions/css', 
    false,
    false);
    
INSERT INTO
    question (topic_id, question, answer, difficulty, source, is_syntax, is_trending)
VALUES
    ('css', 
    'Explain CSS sprites, and how you would implement them on a page or site', 
    'CSS sprites combine multiple images into one single larger image. It is commonly used technique for icons (Gmail uses it)

- Use a sprite generator that packs multiple images into one and generate the appropriate CSS for it.
- Each image would have a corresponding CSS class with background-image, background-position and background-size properties defined.
- To use that image, add the corresponding class to your element.', 
    'junior', 
    'https://www.fullstack.cafe/interview-questions/css', 
    false,
    false);
    
INSERT INTO
    question (topic_id, question, answer, difficulty, source, is_syntax, is_trending)
VALUES
    ('css', 
    'What is the Adjacent Sibling Combinator?', 
    'A selector that uses the adjacent sibling combinator uses the plus symbol (+), and is almost the same as the general sibling selector. The difference is that the targeted element must be an immediate sibling, not just a general sibling', 
    'junior', 
    'https://www.interviewbit.com/css-interview-questions/', 
    false,
    false);
    
INSERT INTO
    question (topic_id, question, answer, difficulty, source, is_syntax, is_trending)
VALUES
    ('css', 
    'What is a CSS Preprocessor?', 
    'A CSS Preprocessor is a tool used to extend the basic functionality of default vanilla CSS through its own scripting language. It helps us to use complex logical syntax like - variables, functions, mixins, code nesting, and inheritance to name a few, supercharging your vanilla CSS.', 
    'junior', 
    'https://www.interviewbit.com/css-interview-questions/', 
    false,
    false);
    
INSERT INTO
    question (topic_id, question, answer, difficulty, source, is_syntax, is_trending)
VALUES
    ('css', 
    'What is the difference between reset vs normalize CSS?. How do they differ?', 
    'Reset CSS: CSS resets aim to remove all built-in browser styling. For example margins, paddings, font-sizes of all elements are reset to be the same. 

Normalize CSS: Normalize CSS aims to make built-in browser styling consistent across browsers. It also corrects bugs for common browser dependencies.', 
    'senior', 
    'https://www.interviewbit.com/css-interview-questions/', 
    false,
    false);
    
INSERT INTO
    question (topic_id, question, answer, difficulty, source, is_syntax, is_trending)
VALUES
    ('css', 
    'How is the nth-child() different from nth of type selectors?', 
    'The nth-child() pseudo-class is used for matching elements based on the number that represents the position of an element based on the siblings. The number is used to match an element on the basis of the element’s position amongst its siblings.

The nth-of-type() pseudo-class is similar to the nth-child but it helps in matching the selector based on a number that represents the position of the element within the elements that are the siblings of its same type. The number can also be given as a function or give keywords like odd or even.', 
    'senior', 
    'https://www.interviewbit.com/css-interview-questions/', 
    false
    false);
