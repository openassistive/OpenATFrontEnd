# OpenATFrontEnd
a front-end to OpenAssistive. 

## To run locally (for the first time)

1. Install Hugo: https://gohugo.io
2. git clone https://github.com/openassistive/OpenATFrontEnd.git
3. cd OpenATFrontend && mkdir themes && cd themes && git clone https://github.com/openassistive/openat-hugrid.git
4. cd .. && hugo server --buildDrafts


## To run locally (following the inital run)

1. cd OpenATFrontEnd
2. hugo server --buildDrafts

## To export the site to gh-pages (linux/mac)

1. hugo -d dist --buildDrafts
2. ./scripts/deploy2.sh 

## To export the site to gh-pages (windows or other)

Not so straightforward.. Basically you have to build the site (to public) and then copy any changes to a checked out version of the gh-pages branch
Its what that deploy2.sh does for you automagically. 
The neatest way in the future is really to make changes directly on github and travis-ci will do the automagic for you

Have a read of:
* https://gohugo.io/overview/quickstart#step-12-deploy-bookshelf-on-github-pages
* https://gohugo.io/tutorials/github-pages-blog#configure-git-workflow


## Notes

* Note that the theme is Based at https://github.com/openassistive/openat-hugrid
* The hugo site is a static site generator. Its designed to be run locally and then all /public (or dist - depending on how you want to run the build) is the live static site all in html
* there is a Makefile and a .travis.yml file in this repo. This allows the site to be automagically built on a commit on travis. 

