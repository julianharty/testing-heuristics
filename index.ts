import * as fs from 'fs';

import * as EJS from 'ejs';
import { markdown } from 'markdown';

const catalog = require('./catalog.json');

const templates = {
    welcome: fs.readFileSync('./templates/welcome.ejs', 'utf8'),
    page: fs.readFileSync('./templates/page.ejs', 'utf8'),
    heuristic: fs.readFileSync('./templates/heuristic.ejs', 'utf8'),
    term: fs.readFileSync('./templates/term.ejs', 'utf8')
};

catalog.heuristics.map(h => {
    h.body = markdown.toHTML(fs.readFileSync(h.filename, 'utf8'));
    h.terms = h.terms.map(t => {
        const key = t;
        return {
            title:markdown.toHTML(t).slice(3, -4),
            key: t
        }
    });
    const content = EJS.render(templates.heuristic, h);
    const page = EJS.render(templates.page, { content });
    fs.writeFileSync(`./dist/${h.title}.html`, page, 'utf8');
});

Object.keys(catalog.terms)
    .forEach(key => {
        const term = catalog.terms[key];
        term.body = markdown.toHTML(fs.readFileSync(term.filename, 'utf8'));
        const content = EJS.render(templates.term, term);
        const page = EJS.render(templates.page, { content });
        fs.writeFileSync(`./dist/term_${key}.html`, page, 'utf8');
    });

const welcomeBody = markdown.toHTML(fs.readFileSync('./terms/welcome.md', 'utf8'));
const welcomeContent = EJS.render(templates.welcome, { content: welcomeBody, ...catalog });
const welcomePage = EJS.render(templates.page, { content: welcomeContent });
fs.writeFileSync(`./dist/index.html`, welcomePage, 'utf8');