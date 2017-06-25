---
title: 'Speech Dasher'
date: '2016-06-21'
description: 'Speech Dasher is a novel interface for the input of text using a combination of speech and gestures.'
license: Unknown
authors: Keith Vertanen
project: Software
tags:
    - 'Computer Automation'
    - 'Text input Projects'
    - 'Alternative Access'
categories:
    - Software
project_url: "http://www.keithv.com/software/speechdasher/"
download_url: 'http://www.keithv.com/software/speechdasher/'
image: items/speed-dasher.png
thumb: items/speed-dasher-thumb.png
moderated: true
---
It is hoped that Speech Dasher will provide a text input interface which is:

- More efficient - allowing faster input than either speech or gestures alone.
- More fun - providing a consistent and less frustrating method of correcting speech recognition errors.
- More accessible - enabling text input by people unable to use a keyboard and by those using mobile devices.
  
Entering text using Speech Dasher begins with the user speaking their desired sentence to a continuous speech recognition engine (currently <a href="">Microsoft's Speech Recognizer v5.1</a> or <a href="">Dragon Naturally Speaking v7 or v8</a>). A word lattice is generated from the recognizer's results and then expanded to cover likely recognition errors. The expanded lattice is used to estimate the probability of what letter the user might enter next based on both the recognition results and what has already been entered. The interface also seamlessly integrates a default language model, allowing the user to efficiently enter words missed completely by the recognizer. These probability estimates are then used in the continuous gestured-based interface <a href="">Dasher</a> to allow the user to confirm and correct their dictated sentence.   