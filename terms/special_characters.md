# Special Characters
## Description
Unexpected characters, unusual characters, unconsidered characters can ambush naive software and trigger problems that affect the app and the text.

How text is encoded, processed, and stored can also lead to issues, frustration, and problems. And even humble ASCII can cause problems with the special characters, originally intended for control purposes such as sounding a bell, formatting text (tabs, line-feeds, etc), punctuation, and so on. Also many programming languages, including those used to create mobile apps use some characters and character-combinations for special purposes, for instance to search for text, to delineate inputs (such as data separated by commas in the CSV file format).  

UNICODE enables programs to work with the many human languages around the world. However, for various reasons, there are several ways UNICODE content is 'encoded'. For programmers it a challenge to write concise software that copes with all the various encodings, so some apps may not handle some formats at all, and others may have flaws in processing UNICODE correctly.
## Testing focus
## Test ideas
Test any text inputs using characters, words, sentences, etc. from various languages. These may include:

* those used in Western Europe (which may be encoded in 8-bit ASCII such as àéïøū)
* those which require UNICODE encoding and read from left-to-right
* those that read from right-to-left such as Hebrew, Arabic, etc.

### Tips
There are lots of text samples we can use for testing. These can be used both interactively, e.g. by copy/pasting them into text inputs, and programmatically in automated tests. Some examples are available in the Further reading section.
## Further reading
A great article that explains many of the challenges is by Joel Spolski <https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/>

The following links provide ideas for text strings we can use to test input fields
<https://github.com/minimaxir/big-list-of-naughty-strings>
<https://news.ycombinator.com/item?id=10035008>

James Bach explains how to create self-describing strings that embed the number of characters they contain or display e.g. `2*4*6*8*11*14*17*20*23*` is 23 characters long. Read his article for a fuller explanation <http://www.satisfice.com/blog/archives/22>
