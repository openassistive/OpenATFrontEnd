+++
date = "2017-04-10T00:00:00Z"
title = "How to add/edit your own project files (Advanced)"

+++

So you know your GitHub from your BitBucket or you know your Gcode from your STL. Welcome..
<!--more-->

As well as the super simple "Add" system you can have more control over your projects on OpenAssistive by adding & maintaining your own project files. There are a few different ways in achieving this depending on your level of knowledge of GitHub and Markdown;

1. Host your descriptor file yourself. Create a plain-text file called `YourProjectName.md` in a folder accessible by the world. This could be a dropbox folder that you then share - or it could be on a webserver somewhere. It needs to have some 'metadata' in the header which looks like this:

	```---
	title: 'Title here'
	authors: 'willwade, phewett'
	download_url: 'https://www.dropbox.com/sh/0eagft7ugo3xkz0/AAC_WJHVssyY3yMiVgv3aVq-a?dl=1'
	project_url: 'https://www.dropbox.com/sh/0eagft7ugo3xkz0/AAC_WJHVssyY3yMiVgv3aVq-a?dl=0'
	description: 'short description here'
	license: "MIT or nothing"
	image: path/to/your/image/relative-to-your-file/should-be-500px-high/image.png
	---
	```

	So a little background detail on those fields:
	* title: The long title of your project
	* authors: could be a single name or several. Try and not put your email address here unless you want to be spammed
	* download_url: This is the URL for people to simply download the binary or final file (e.g. STL file or zip)
	* project_url: Whats the URL of your project home page? (could be the URL of this very readme file if you don't have one)
	* description: This is a short, brief one-line description
	* license: what Licence, if any, are you using (NB: It really helps if you do)
	* image: Do you have an image? If so add the path to it here. NB: we crop it to 500px wide and will make a thumb from it. You have been warned!
	 
	You can then add any content you like to the body (i.e. after that last ---). Note though it has to be [markdown formatted](https://daringfireball.net/projects/markdown/). 

	E.g. 

			This is the main body of your project here. Use markdown syntax 
			## Caeleste quinque nocturnae artus cum

			Lorem markdownum hac suis doloris: lenire capientibus caput est bracchia; ora
			molle nos venisse artes, sub. [Ceu se et](http://www.luxque.io/vicina.html), est
			anima nurus dedit miserabilis et interea possumus lacessas nec **et orbem
			orbem** videns nec increvit.


	Once you are happy with this add your file using the add feature [here](http://openassistive.org/add). Fingers crossed it all works! (If you have any issues [drop us a line](http://openassistive.org/contact). You may have found a bug!)

	NB: In time we will change this so your files will get updated nightly. Hold tight though till we add this! For now - just re-add your file if it needs updating. 

2. Fork the [OpenATFrontend project](http://github.com/openassistive/OpenATFrontEnd) and add/edit the items directly (files can be found in [/master/content/item](https://github.com/openassistive/OpenATFrontEnd/tree/master/content/item). You may want to install [Hugo](http://gohugo.io) and run ``hugo server`` locally to test out what it looks like.  Then do a Pull request when ready.  For detailed instructions visit [http://help.github.com/fork-a-repo/](http://help.github.com/fork-a-repo/). Just do a Pull request when you are ready. 

3. Edit directly to the project. If we physically know you - or you make a number of pull requests we will consider adding you as a team member. Just drop us a line!

3. Write your own code to interact with the backend. There is some docs you can find about this here: http://api.openassistive.org/docs/v1/