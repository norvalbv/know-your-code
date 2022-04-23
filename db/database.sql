-- CREATE DATABASE knowyourcode;
--
-- SCHEMAS -----------------------------------------------------------------
--
CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    name varchar(16) NOT NULL UNIQUE,
    category varchar(16),
    dev_end varchar(16) -- either front end, back end of full stack
);

CREATE TABLE subcategory (
    id SERIAL PRIMARY KEY,
    topic_id varchar(16) REFERENCES topics(name) NOT NULL,
    subcategory varchar(64) UNIQUE
);

CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    topic_id varchar(16) REFERENCES topics(name) NOT NULL,
    subcategory_id varchar(64) REFERENCES subcategory(subcategory),
    question varchar(128) NOT NULL,
    answer varchar(1024) NOT NULL,
    example varchar(1024),
    difficulty varchar(32),
    internal_source varchar(256),
    -- for internal use only, to understand where we got the questions from (if sourced & needed)
    external_source varchar(256),
    -- for users - links to MDN or similar.
    is_syntax boolean NOT NULL,
    is_trending boolean
);

--
-- TOPIC DATA -------------------------------------------------------------
--
INSERT INTO
    topics (name, category, dev_end)
VALUES
    ('html', 'language', 'front'),
    ('css', 'language', 'front'),
    ('javascript', 'language', 'full'),
    ('react', 'framework', 'front'),
    ('redux', 'framework', 'front');

--
-- SUBCATEGORY -----------------------------------------------------
--
INSERT INTO
    subcategory (topic_id, subcategory)
VALUES
    ('javascript', 'classes'),
    ('react', 'fundamentals'),
    ('react', 'jsx'),
    ('react', 'hooks'),
    ('react', 'components');

--
-- HTML QUESTION DATA -----------------------------------------------------
--
INSERT INTO questions (topic_id,subcategory_id,question,answer,example,difficulty,internal_source,external_source,is_syntax,is_trending)
VALUES
    ('html', null, 'What is the purpose of the alt attribute on images?', 'The alt attribute provides alternative information for an image if a user cannot view it. The alt attribute should be used to describe any images except those which only serve a decorative purposes, in which case it should be left empty.', null, 'entry', 'https://www.fullstack.cafe/interview-questions/html5', null, 'false', 'false'),
    ('html', null, 'What is the difference between span and div?', 'div is a block element
span is inline element
For bonus points, you could point out that itâs illegal to place a block element inside an inline element, and that while div can have a p tag, and a p tag can have a span, it is not possible for span to have a div or p tag inside.', null, 'junior', 'https://www.fullstack.cafe/interview-questions/html5', null, 'false', 'false'),
    ('html', null, 'What is Character Encoding?', 'To display an HTML page correctly, a web browser must know which character set (character encoding) to use. This is specified in the tag:', null, 'junior', 'https://www.fullstack.cafe/interview-questions/html5', null, 'false', 'false'),
    ('html', null, 'What is a self closing tag?', 'In HTML5 it is not strictly necessary to close certain HTML tags. The tags that arenât required to have specific closing tags are called âself closingâ tags. An example of a self closing tag is something like a line break (<br />) or the meta tag (<meta>). This means that the following are both acceptable:', null, 'junior', 'https://www.fullstack.cafe/interview-questions/html5', null, 'false', 'false'),
    ('html', null, 'What''s the difference between an "attribute" and a "property" in HTML? ', 'Attributes are defined on the HTML markup but properties are defined on the DOM.', null, 'junior', 'https://www.fullstack.cafe/interview-questions/html5', null, 'false', 'false'),
    ('html', null, 'How do you change the direction of html text?', 'You can set text direction in HTML in one of two ways:

With the HTML dir attribute
With the CSS direction property', null, 'junior', 'https://www.fullstack.cafe/interview-questions/html5', null, 'false', 'false'),
    ('html', null, 'What is semantic HTML?', 'It is the use of HTML markup to reinforce the semantics or meaning of the content. For example: In semantic HTML <b> </b> tag is not used for bold statement as well as <i> </i> tag is used for italic. Instead of these we use <strong></strong> and <em></em> tags.', null, 'junior', 'https://www.javatpoint.com/html-interview-questions', null, 'false', 'false'),
    ('html', null, 'How to create a nested webpage in HTML?', 'The HTML iframe tag is used to display a nested webpage. In other words, it represents a webpage within a webpage.', null, 'junior', 'https://www.javatpoint.com/html-interview-questions', null, 'false', 'false'),
    ('html', null, 'What is the difference between progress and meter tag?', 'The progress tag is used to represent the progress of the task only while the meter tag is used to measure data within a given range.', null, 'senior', 'https://www.javatpoint.com/html-interview-questions', null, 'false', 'false'),
    ('html', null, 'Which type of video formats are supported by HTML5?', 'HTML 5 supports three types of video format:

mp4
WebM
Ogg', null, 'senior', 'https://www.javatpoint.com/html-interview-questions', null, 'false', 'false');

--
-- CSS QUESTION DATA -----------------------------------------------------
--
INSERT INTO questions (topic_id,subcategory_id,question,answer,example,difficulty,internal_source,external_source,is_syntax,is_trending)
VALUES
    ('css', null, 'Explain the three main ways to apply CSS styles to a web page', 'Using the inline style attribute on an element, using a <style> block in the <head> section of your HTML, and loading an external CSS file using the <link> tag', null, 'entry', 'https://www.fullstack.cafe/interview-questions/css', null, 'false', 'false'),
    ('css', null, 'How to use variables in Sass?  
', 'Sass uses the $ symbol to make something a variable. Inside those variables, you can store things like colors, font stacks, or any CSS value you think you''ll want to reuse.', null, 'junior', 'https://www.fullstack.cafe/interview-questions/css', null, 'false', 'false'),
    ('css', null, 'Explain the CSS box model and the layout components that it consists of', 'The CSS box model is a rectangular layout paradigm for HTML elements that consists of the following:
Content - The content of the box, where text and images appear
Padding - A transparent area surrounding the content (i.e., the amount of space between the border and the content)
Border - A border surrounding the padding (if any) and content
Margin - A transparent area surrounding the border (i.e., the amount of space between the border and any neighboring elements)', null, 'junior', 'https://www.fullstack.cafe/interview-questions/css', null, 'false', 'false'),
    ('css', null, 'What is a CSS rule?', 'Web browsers apply CSS rules to a document to affect how they are displayed. A CSS rule is formed from:

A set of properties, which have values set to update how the HTML content is displayed,
A selector, which selects the element(s) you want to apply the updated property values to.', null, 'junior', 'https://www.fullstack.cafe/interview-questions/css', null, 'false', 'false'),
    ('css', null, 'When would you use CSS flexbox and grid?', 'Flexbox is mainly meant for 1-dimensional layouts while Grid is meant for 2-dimensional layouts. Flexbox solves many common problems in CSS, such as vertical centering of elements within a container, sticky footer, etc. Grid is by far the most intuitive approach for creating grid-based layouts, but browser support is not wide at the moment.', null, 'junior', 'https://www.fullstack.cafe/interview-questions/css', null, 'false', 'false'),
    ('css', null, 'What is the difference between classes and IDs in CSS?', 'IDsâ are meant to be unique within the document. They can be used to identify an element when linking using a fragment identifier. Elements can only have one id attribute.

Classes can be reused on multiple elements within the document. They are mainly for styling and targeting elements.', null, 'junior', 'https://www.fullstack.cafe/interview-questions/css', null, 'false', 'false'),
    ('css', null, 'Explain CSS sprites, and how you would implement them on a page or site', 'CSS sprites combine multiple images into one single larger image. It is commonly used technique for icons (Gmail uses it)

- Use a sprite generator that packs multiple images into one and generate the appropriate CSS for it.
- Each image would have a corresponding CSS class with background-image, background-position and background-size properties defined.
- To use that image, add the corresponding class to your element.', null, 'junior', 'https://www.fullstack.cafe/interview-questions/css', null, 'false', 'false'),
    ('css', null, 'What is the Adjacent Sibling Combinator?', 'A selector that uses the adjacent sibling combinator uses the plus symbol (+), and is almost the same as the general sibling selector. The difference is that the targeted element must be an immediate sibling, not just a general sibling', null, 'junior', 'https://www.interviewbit.com/css-interview-questions/', null, 'false', 'false'),
    ('css', null, 'What is a CSS Preprocessor?', 'A CSS Preprocessor is a tool used to extend the basic functionality of default vanilla CSS through its own scripting language. It helps us to use complex logical syntax like â variables, functions, mixins, code nesting, and inheritance to name a few, supercharging your vanilla CSS.', null, 'junior', 'https://www.interviewbit.com/css-interview-questions/', null, 'false', 'false'),
    ('css', null, 'What is the difference between reset vs normalize CSS?. How do they differ?', 'Reset CSS: CSS resets aim to remove all built-in browser styling. For example margins, paddings, font-sizes of all elements are reset to be the same. 

Normalize CSS: Normalize CSS aims to make built-in browser styling consistent across browsers. It also corrects bugs for common browser dependencies.', null, 'senior', 'https://www.interviewbit.com/css-interview-questions/', null, 'false', 'false'),
    ('css', null, 'How is the nth-child() different from nth of type selectors?', 'The nth-child() pseudo-class is used for matching elements based on the number that represents the position of an element based on the siblings. The number is used to match an element on the basis of the elementâs position amongst its siblings.

The nth-of-type() pseudo-class is similar to the nth-child but it helps in matching the selector based on a number that represents the position of the element within the elements that are the siblings of its same type. The number can also be given as a function or give keywords like odd or even.', null, 'senior', 'https://www.interviewbit.com/css-interview-questions/', null, 'false', 'false');

--
-- JavaScript QUESTION DATA ------------------------------------------------------
--

INSERT INTO questions (topic_id,subcategory_id,question,answer,example,difficulty,internal_source,external_source,is_syntax,is_trending)
VALUES   
    ('javascript', 'fundamentals', 'What is the some method used for?', 'The some method is used to test whether at least one element of an array passes a condition', '[1, 2, 3, 4].some(x => x > 3) <span className="example-result">// true</span> <br /> [1, 2, 3, 4].some(x => x > 5) <span className="example-result">// false</span>', 'junior', null, 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some', 'false', 'false'),
    ('javascript', 'fundamentals', 'What is the new keyword used for?', 'The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.', null, null, null, null, 'false', 'false'),
    ('javascript', 'fundamentals', 'What is a Primitive type?', 'In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods. There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.', null, null, null, null, 'false', 'false'),
    ('javascript', 'fundamentals', 'What does the set object do?', 'The set object allows the storage of unique values of any type in an array. ', 'const setA = new Set([1, 2, 3, 4]) <span className="example-result">// [1, 2, 3, 4]</span> <br /> setA.add(4) <span className="example-result">// [1, 2, 3, 4]</span>', null, null, null, 'false', 'false'),
    ('javascript', 'fundamentals', 'What do the Array.prototype.map and Array.prototype.reduce methods do and when would you typically use them?', 'foo', null, null, null, null, 'false', 'false');


--
-- REACT QUESTION DATA ------------------------------------------------------
--

INSERT INTO questions (topic_id,subcategory_id,question,answer,example,difficulty,internal_source,external_source,is_syntax,is_trending)
VALUES 
    ('react', 'fundamentals', 'What are the benefits to using React?', 'React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application.', null, null, null, null, 'false', 'false'),
    ('react', 'fundamentals', 'What is JSX?', 'foo', null, 'junior', null, null, 'false', 'false'),
    ('react', 'fundamentals', 'How does JSX work?', 'foo', null, 'junior', null, null, 'false', 'false'),
    ('react', 'fundamentals', 'What is the component lifeycle?', 'foo', null, 'junior', null, null, 'false', 'false'),
    ('react', null, 'What are the differences between the component lifecycle in class components and functional components?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', 'hooks', 'What are hooks?', 'foo', null, 'junior', null, null, 'false', 'false'),
    ('react', 'fundamentals', 'What is the constructor function used for?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', 'hooks', 'What is the useState Hook?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', 'hooks', 'How do you use the useState hook?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', 'hooks', 'What is lazy initialization?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', 'hooks', 'What does the useEffect hook do?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', 'hooks', 'How and when would you use the useEffect hook?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', 'hooks', 'What does the dependency array in the useEffect hook do?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', 'hooks', 'What is the purpose of returning a function from within the useEffect callback?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', 'hooks', 'What does the useRef hook do?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', 'fundamentals', 'What are the typical usages of refs?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', 'fundamentals', 'What is a higher order component?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', 'hooks', 'What is the useCallback hook?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', 'hooks', 'What is the useMemo hook?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', 'hooks', 'What are the differences between useCallback and useMemo hooks?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', 'fundamentals', 'What is the virtual DOM and how does it work?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', null, 'What are error boundaries?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', null, 'What is the difference between a controlled and an uncontrolled component?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', 'fundamentals', 'Why would you bind a function in a class component?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', null, 'Why is React declarative by nature?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', null, 'What is prop drilling?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', null, 'What is an alternative to prop drilling?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', 'fundamentals', 'What is props?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', 'fundamentals', 'What is state?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', 'fundamentals', 'What are the differences between props and state?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', 'fundamentals', 'What are keys and why are they necessary?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', 'fundamentals', 'How does React work?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', 'fundamentals', 'What are the disadvantages of using React?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', null, 'What is a pure component?', 'foo', null, null, null, null, 'false', 'false'),
    ('react', null, 'What is propTypes used for?', 'foo', null, null, null, null, 'false', 'false');