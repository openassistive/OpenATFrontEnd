+++
date = "2017-04-10T00:00:00Z"
title = "Site Infrastructure - what makes the cogs work"
+++

So some of you will want to know how this all works. Well in short we are using a [JAMstack](http://jamstack.org) (Javascript, APIS and Markup).

In particular we use the following bits of technology:

- The main grunt work is done by [Hugo](http://gohugo.io). A static site generator. Its amazing. If you want to look at making your own static site look no further than Hugo. Why is it so good?
	- A lot of static site generators are really designed for Blogs. You can kind of get them to work to your own needs but its a bit messy
	- Its multiplatform without much hassle. They have installers for Mac and Windows. Most others rely on you installing a programming environment first. 
	- Its fast and super configurable
	- It allows for multi-language really easily (not that we are using that.. yet).

- A theme for Hugo called Tranquilpeak. It was originally developed for a different static site generator called hexo but that's not really as flexible as hugo. A big thanks to [@kawait](http://github.com/kawait/hugo-tranquilpeak-theme) for converting it ready for Hugo. We have made a few adjustments for our own purposes (which you can see [here](http://github.com/openassistive/hugo-tranquilpeak-theme). The theme is really designed for blogs but its allowed us to get us off the ground super quick. In time we may well change this. 

- Content is stored in [Markdown](http://daringfireball.net/) files. This is a really easy to understand - and clean file format. All you need is plain old text editor to edit files. Syntax is really simple. Doing it this way means there is no database. No potential corruption of data. And no need to create a funky backup plan. We do have a little header for these files - that helps provide things like a date and tags for each item You can see the raw format of these files [here](https://github.com/openassistive/OpenATFrontEnd/tree/master/content/item) 

- A custom NodeJS API that allows us to add things on the fly. If this goes down for any reason the site still works (just add wont work).  It allows you to post a URL to the system and it will try and scrape some information. This is returned in either a JSON format or Markdown format. You can then 'Save' this data directly to github (that is if you past the not-a-robot test.) Note by using this backend all files are marked as 'un-moderated'. The site admin team then will mark them moderated by hand when we are ready. Simples. (You can read more about this here https://github.com/openassistive/OpenATBackend/ or http://api.openassistive.org/docs/v1/ ) (Thanks to [Heroku](http://heroku.com) for hosting this!). 

- We use a third-party service called [Algolia](http://algolia.com) for search. Its neat (and as long you lot dont search too much its free!) 

- We use Git as a version control system. All changes are versioned and can be rolled back. We use GitHub as a central Git client that is public and allows anybody to fork it. If one of the central team gets bored of this - or we feel someone else should look after it then we can hand the reins over. 

- And lastly we use [Netlify](http://netlify.com) for hosting the site and generating on the site. A massive thanks to them as they provide this totally for free. Woo! Its awesome. To be clear Netlify allows us to:
  - Check changes on the OpenATFrontEnd Code repository
  - When it finds a new commit it spins up and rebuilds the site  - and re-indexes the search index and posts that to Algolia
  - It nicely sends us a message to let us know if anything went wrong and if so keep on the old committed site until we fix it
Netlify have some great tools if you want to host your own static site and have it content managed in the browser. Do take a look at them if you are in the business of doing this. Seriously - we initally were using Travis and GitHub pages to do this but its complicated and flaky. Netlify makes it simple



