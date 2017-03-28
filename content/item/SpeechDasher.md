---
title: "Speech Dasher"
date: "2016-06-21"
description: "Speech Dasher is a novel interface for the input of text using a combination of speech and gestures. A speech recognizer provides the initial guess of the user\'s desired text while a gesture-based interface allows the user to confirm and correct the recognizer\'s output."
type: "Software"
tags: ['Computer Automation','Text input Projects','Alternative Access' ]
categories: ['Software']
image: "images/full/1.png"
thumb: "images/thumbs/1.png"
project_url: ""
download_url: "http://www.keithv.com/software/speechdasher/"
---
It is hoped that Speech Dasher will provide a text input interface which is:

- More efficient - allowing faster input than either speech or gestures alone.
- More fun - providing a consistent and less frustrating method of correcting speech recognition errors.
- More accessible - enabling text input by people unable to use a keyboard and by those using mobile devices.

  
Entering text using Speech Dasher begins with the user speaking their desired sentence to a continuous speech recognition engine (currently <a href="">Microsoft's Speech Recognizer v5.1</a> or <a href="">Dragon Naturally Speaking v7 or v8</a>). A word lattice is generated from the recognizer's results and then expanded to cover likely recognition errors. The expanded lattice is used to estimate the probability of what letter the user might enter next based on both the recognition results and what has already been entered. The interface also seamlessly integrates a default language model, allowing the user to efficiently enter words missed completely by the recognizer. These probability estimates are then used in the continuous gestured-based interface <a href="">Dasher</a> to allow the user to confirm and correct their dictated sentence.   
  
The current research prototype is available for download below. So try it out and send me your feedback. I'm especially interested in how it could be improved for people with disabilities.

### Links:
- <a href="http://www.oatsoft.org/Software/speech-dasher/help">Help</a>
- <a href="mailto:kv227@cam.ac.uk">Contact Address</a>
- <a href="http://www.inference.phy.cam.ac.uk/kv227/speechdasher/">Project Home Page</a>

### Download: http://www.keithv.com/software/speechdasher/ 