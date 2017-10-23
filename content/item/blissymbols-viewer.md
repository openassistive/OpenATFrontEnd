---
title: 'Bliss Symbols (Viewer)'
short_title: blissymbols-viewer
authors: 'Peter Ljunglöf'
datemod: '2017-08-29T05:51:24Z'
download_url: 'https://codeload.github.com/blissymbolics/blissymbols/zip/gh-pages'
project_url: 'http://blissymbolics.github.io/blissymbols'
tags:
    - alternative-access
    - alternative-and-augmentative-communication
    - developer-tools
    - symbols
categories:
    - software
description: 'A database of all official Blissymbols, and their definitions'
original_url: 'https://github.com/blissymbolics/blissymbols'
image_download: 'https://avatars2.githubusercontent.com/u/1324196?s=40&v=4'
license: 'GNU General Public License v3.0'
date: '2017-10-22T11:04:27Z'
relayed_by_ip: 80.192.71.80
moderated: true
moderated_short_title: blissymbols-viewer
image_download_sha: ebac5233325fe2399dbd6c13c6353602b2f67f6559136663bd7e1823097de1c3
thumb: items/bliss-viewer-thumb.png
image: items/bliss-viewer.png
---
A database of all official Blissymbols, and their definitions. Plus some additional utilities. Contents:

- `blissdata_chars.js`, `blissdata_words.js`: this are the most important files, the database itself
- `blissviewer.js`: a generic Javascript module for attaching Blissymbols to text
  - this file is compiled from the corresponding TypeScript file `blissviewer.ts`
- `blissviewer.css`: example CSS style sheet for displaying the Blissymbols
- `blissviewer-demo.html`: a simple webpage that shows how `blissviewer.js` can be used; you can test it out here:
  - <https://blissymbolics.github.io/blissymbols/blissviewer-demo.html>
  - the demo uses a wrapper Javascript file `blissdemo.js`, and the JQuery library

There are only three global names that are introduced by the library:
`BLISS_CHAR_DATA`, `BLISS_WORD_DATA` and `BlissViewer` are defined by `blissdata_chars.js`, `blissdata_words.js`
and `blissviewer.js`, respectively. They are supposed to be used like this:

    var myBlissViewer = new BlissViewer(BLISS_CHAR_DATA, BLISS_WORD_DATA, {...})

(The third argument to the BlissViewer constructor is an optional configuration dictionary).
