# [Eloquent JavaScript](https://github.com/marijnh/Eloquent-JavaScript)

Code Sandbox
You can use [this page](http://eloquentjavascript.net/code/) to download source code and solutions to exercises for 
the book Eloquent JavaScript, and to directly run code in the context of chapters from that book, 
either to solve exercises to simply play around.

These are the sources used to build the second edition of Eloquent
JavaScript (http://eloquentjavascript.net).

Feedback welcome, in the form of issues and pull requests.

## Building

    npm install --production
    apt-get install asciidoc inkscape
    make html

For OSX, you can use port or brew to install the asciidoc package.

To build the PDF file:

    apt-get install texlive texlive-xetex texlive-fonts-extra
    make book.pdf

To build the ePub book:

    make book.epub
