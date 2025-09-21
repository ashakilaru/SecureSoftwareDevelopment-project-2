const DOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const purify = DOMPurify(window);

const userHtml = '<img src=x onerror=alert(1)><b>Hello</b>';
const cleanHtml = purify.sanitize(userHtml, {
    ALLOWED_TAGS: ['b', 'i', 'u', 'a', 'p', 'ul', 'li', 'br'],
    ALLOWED_ATTR: ['href', 'title']
});

console.log(cleanHtml);
