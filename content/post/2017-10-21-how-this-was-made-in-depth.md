---
title: How this was made (in-depth!)
date: 2017-10-21T20:32:30.574Z
---
> So you have a new website. So whats the big deal?

Well in short, not a lot. But behind the scenes its costing us near to nothing to run and maintain and _should_ be indestructible (I hold my breath on that line.. but we think so!)

Before we delve into the technical details lets have a look at what we are trying to achieve.

Sometime in the past (12 years ago!) a number of individuals who work in the field of Assistive Technology at the [Ace Centre](https://acecentre.org.uk), [Barnsley AT Team](https://barnsleyat.wordpress.com) and [DART](http://dart.se) got together and made a [plone](https://plone.org) backed database to hold Open Source (primarily - but also free) software that was useful to the Assistive Technology world. It was called OATSoft and It was **great**.  No really - nothing else really existed and for many years it was the sole place to find that obscure project that was vital for a individual who was disabled to be independent in speaking or using their computer. 

However sometime in the last year the database got corrupted - and the backups are lost. _Gah!_ Lets make something clear here though: All of us work as Engineers (in the metal bending or wire soldering sense rather than software sense!), Occupational Therapists and Teachers finding solutions for individuals who require often bespoke pieces of equipment. None of us have the time to really babysit a server or get into the details of the latest web technologies (we may like to but thats another matter!). We do it - but its often in the spare time and I can speak from experience in that it can wake you up at night ("_Ahh! I need to install those security patches!_"). 

So firstly we went about grabbing any data we can and then figuring out what to do with it. That was fairly straightforward thanks to the [Archive.org](https://web.archive.org/web/20110301000000*/oatsoft.org) mirror and a bit of a late night hacking session to scrape all the data (see [here](https://gist.github.com/willwade/d9d759d1911fb3f0d6ee7eade7f073f0) for the code & csv output). 

At the time I was playing around with an idea of just dumping all the data into a static site generator - really as an interim project so this code dumped all the files into a markdown files ready for [hexo](http://hexo.io) to build a small site. It worked - really quickly we had the data on a site (hosted by GitHub Pages). We really weren't thinking at this stage what we would do with it - surely a little static site wouldn't be the best thing going forward right?

Why not?!

It solved some previous issues instantly:

* All data is stored on GitHub which we can share with others internationally to keep updated. A lot of the headaches about passwords and server details go away. GitHub is (relatively) easy to understand and safe.
* There is no database to be corrupted.
* The main 'dynamic' part of the site was comments which we can now use disqus for (and to be honest - I would prefer having managed comment forums before). There was also the ability for others to add and maintain their projects on the site but maybe we could do this differently.. Hmm.
* We have no money right now to develop this thing. Its purely a goodwill venture. So far this costs nothing to host
* We want to get it up and running - and its well, up and running!

So it seemed sensible. But there were some limitations:

* Hexo is primarily built for blogs. Its not great at doing more flexible stuff (or at least I couldn't figure out how quick enough)
* Auto-deploying from A hexo project to GitHub pages isnt straightforward (you have to be pretty adept with [Travis CI](https://travis-ci.org) or use something like [codeship](http://codeship.com)). 
* GitHub pages is great - but getting SSL working isnt fun. And its a bit slow at times (but heck.. its free!)
* We did want _some_ fancy functionality that a static site couldn't do: searching on the fly, ad ability to add/maintain projects

So we looked around and found [Hugo](http://gohugo.io). If you havent played with Hugo before _do_. Its awesome and its getting a ton of development right now. The best thing: you dont have to really know any programming stuff. This means myself & others didnt really need to worry about how to install and all the pre-requistie guff you often need to get up and running - it comes with its own binaries. 

We took a theme that originally was designed for hexo called [tranquilpeak](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak) - but has been ported to hugo  (see [here](https://github.com/kakawait/hugo-tranquilpeak-theme) for the port). Its pretty and clean - and looked like it could what we generally wanted with minimal hacking around. So we forked it and tweaked it ([now quite a bit](https://github.com/openassistive/hugo-tranquilpeak-theme)) removing some of the blogging aspects and re-working the search scripts to work with [Algolia](http://algolia.com) (basically you need to write a [small script](https://github.com/openassistive/OpenATFrontEnd/blob/master/scripts/algolia_index_items.js) that indexes the items and pushes it to Algolia - a lot of the frontend work had been done in the original tranquilpeak theme). So it was looking good. But how about how people add new projects?

In the past when working on projects like this you turn to a system which would:

* Need a user management system where users would create their own user account and have to maintain that (and verify it..)
* Need a CMS for every user to add/edit/delete their own entries
* Provide a interface to moderate entries

For a site that realistically a user may only have one or two projects they want to add this seems overkill. The "forgot password" feature would also need to be added. So we thought: "_Do they really need all this? Why cant they just add the item directly to GitHub?_".  Also another small factor. Most projects are already on the net. If you are a software developer you are more than likely hosting your code on GitHub or Sourceforge. If you are a hardware developer there are load of sites like Pinshape, Thingiverse and instructables. Surely they dont want to update their project in two places? The aim of OpenAT is really to catalogue all of the projects out there in one place leaving the developer to get on and develop. 

So we came up with a different model where a backend API would simply screen scrape data from these sites (or folk could host their own meta-data file) and the API would verify it and add it directly to GitHub - and re-build the hugo site making it live. Sounds too good to be true? Well yes. Have you ever tried writing a script to deploy to GitHub pages? Its not straightforward. Well not if you ask me. We could write the API (and that would take the majority of the time) - but hosting and deploying were still a problem

  **Step forward Netlify.**

[Netlify](https://www.netlify.com) solved a lot of our headaches. What does it do in a nutshell:

* It watches our GitHub repo for changes. These changes can either come from the maintainers updating content [items](https://github.com/openassistive/OpenATFrontEnd/tree/master/content/item) or from the [backend API hosted on heroku](http://api.openassistive.org/docs/v1/). When it sees a change it simply builds the site, runs the Algolia index and moves the output to their own awesomely quick static hosting (It can do other things too!)
* It also looks after our ssl issue
* It lets us know by Slack of any changes to the site (ooh! We got a new entry)
* _And because we are all opensource this is totally for free! Wooooo! These guys rock!_

So where are we at now? Lets recap.

[OpenATFrontEnd](http://github.com/openassistive/OpenATFrontEnd)

* Hugo built site using a [forked tranquilpeak theme](https://github.com/openassistive/hugo-tranquilpeak-theme). 
* All items are infact just small text files (markdown) in a folder that anyone can contribute to either by forking the project or using the backend..

[OpenATBackEnd](http://github.com/openassistive/OpenATBackEnd)

* A nodejs based API that grabs a URL passed to it and if its one of the sites we scrape will scrape the data and turn it into the correct markdown format for the hugo site
* When items are added they get marked as 'unmoderated'. A repo maintainer would have to edit the file to make it moderated. 
* It runs on heroku and costs us nothing (it may cost us nothing if we move to lamda)

And thats it! We now have a Open Assistive Technology database that anyone can add data to without creating accounts or logging in and we can pass onto to others in the future to maintain - hassle free. **Awesome**.
