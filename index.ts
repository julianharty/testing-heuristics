import * as fs from 'fs';
import * as cheerio from 'cheerio';
import * as EJS from 'ejs';
import { markdown } from 'markdown';

const catalog = require('./catalog.json');

const templates = {
    error: fs.readFileSync('./templates/error.ejs', 'utf8'),
    welcome: fs.readFileSync('./templates/welcome.ejs', 'utf8'),
    page: fs.readFileSync('./templates/page.ejs', 'utf8'),
    heuristic: fs.readFileSync('./templates/heuristic.ejs', 'utf8'),
    term: fs.readFileSync('./templates/term.ejs', 'utf8')
};

const rewriteUrls = function (html) {
    const $ = cheerio.load(html);
    const anchorsToRewrite = $('a[href]:not(.letter)')
        .toArray()
        .filter(el => !!~el.attribs.href.indexOf('.md'));

    anchorsToRewrite.forEach(el => {
        const oldUrl = el.attribs.href;
        const fileName = oldUrl.split('/').pop().split('.')[0]; //Various issues with this (what if there are dots or slashes in filename?)
        const oldPathName = `./terms/${fileName}.md`;

        const newUrl = `dynamic_${fileName}.html`;
        const newPathName = `./dist/dynamic_${fileName}.html`;

        let fileContent;

        try {
            fileContent = markdown.toHTML(fs.readFileSync(oldPathName, 'utf8'));
        } catch (e) {
            fileContent = templates.error;
        }

        const page = EJS.render(templates.page, { content: fileContent });

        fs.writeFileSync(newPathName, page, 'utf8');
        console.log(oldUrl, newUrl)
        html = html.replace(new RegExp(oldUrl, 'g'), newUrl);
    });
    return html;
}

catalog.heuristics.map(h => {
    h.body = markdown.toHTML(fs.readFileSync(h.filename, 'utf8'));

    h.terms = h.terms.map(t => {
        const key = t;
        return {
            title:markdown.toHTML(t).slice(3, -4),
            key: t
        }
    });
    const content = rewriteUrls(EJS.render(templates.heuristic, h));

    const page = EJS.render(templates.page, { content });
    fs.writeFileSync(`./dist/${h.title}.html`, page, 'utf8');
});

Object.keys(catalog.terms)
    .forEach(key => {
        const term = catalog.terms[key];
        term.body = markdown.toHTML(fs.readFileSync(term.filename, 'utf8'));

        let content = EJS.render(templates.term, term);
        content = rewriteUrls(content);

        const page = EJS.render(templates.page, { content });
        fs.writeFileSync(`./dist/term_${key}.html`, page, 'utf8');
    });

const welcomeBody = markdown.toHTML(fs.readFileSync('./terms/welcome.md', 'utf8'));

let welcomeContent = EJS.render(templates.welcome, { content: welcomeBody, ...catalog });
welcomeContent = rewriteUrls(welcomeContent);

const welcomePage = EJS.render(templates.page, { content: welcomeContent });
fs.writeFileSync(`./dist/index.html`, welcomePage, 'utf8');