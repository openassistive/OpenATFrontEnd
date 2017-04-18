---
title: Orca
date: '2016-06-21'
description: 'Orca is a free, open source, flexible, and extensible screen reader that provides access to the graphical desktop via user-customizable combinations of speech, braille, and/or magnification.'
project: Software
tags:
    - 'Text to Speech'
    - 'General Tools'
    - 'Viewing the screen'
    - 'Alternative Access'
    - 'General Tools'
categories:
    - Software
project_url: ""
download_url: 'http://live.gnome.org/Orca/DownloadInstall'
moderated: true
---
Orca development has been led by the Sun Microsystems, Inc., Accessibility Program Office via continued engagement with its end users and generous contributions from the Mozilla Foundation and wonderful community members.

 

The Orca v2.23.1 release is targeted for the GNOME v2.23.1 development release and requires the latest at-spi/pyatspi infrastructure from GNOME v2.23.1, including atk and gail.

 

You can also read more about Orca at <a href="">http://live.gnome.org/Orca</a>.

 

==================================

\* What's changed for Orca v2.23.1?

==================================

 

This release includes lots of stuff since we branched for gnome-2-22 around the GNOME 2.21.92 timeframe.  Anything in the list below that begins with a '+' is in both the gnome-2-22 branch and trunk (this release).

 

2.23.1 - 21-Apr-2008

 

General:

 

+ Fix for bug #517505 - Orca doesn't present new active descendant

   when deleting from the top of a list

 

+ Fix for bug #518507 - getSpeechForAlert() assumes unrelated labels

   have names

 

+ Fix for bug #518518 - Need to do some sanity checks for broken table

   hierarchies

 

+ Fix for bug #518762 - When using gnome-terminal with multiple tabs,

   the name on the tab is not announced when switching between tabbed

   windows

 

\* Fix for bug #518914 - table column number missing in whereAmI info

 

+ Fix for bug #519901 - Orca doesn't warn via braille that an

   inaccessible object got the focus

 

\* Fix for bug #520611 - New mouse review feature

 

\* Fix for bug #520974 - Some script names are not marked for

   translation

 

\* Fix for bug #522657 - this may take a while should be removed from

   the orca prefs

 

+ Fix for bug #523082 - text-setup should not use speech if

   --disable=speech is used

 

+ Fix for bug #523147 - ""space"" keyname is not marked for translation

 

\* Fix for bug #523309 - ""return"" and ""backspace"" keynames is not

   marked for translations

 

\* Fix for bug #523268 - refactor braille support of text attributes

 

+ Fix for bug #523642 - orca\_prefs.py:\_writePronunciation should not

   generate bad Python syntax

 

+ Fix for bug #523712 - Orca application specific preferences window

   doesn't always get focus when user types Insert-Control-Space

 

 

\* Fix for bug #525348 - Orca uses wget. (It now uses DBus)

 

+ Fix for bug #525831 - isn't properly handling SIGTERM

 

\* Fix for bug #525592 - Provide 'diff' like output for regression test

   failures

 

\* Fix for bug #525649 - Don't bomb when no DISPLAY is set

 

Evolution:

 

\* Fix for bug #519936 - In Evolution Orca does not read the messages

   list properly when in ""read table row"" mode

 

Pidgin:

 

+ Fix for bug #525644 - Pidgin buddy status changes cause Orca to

   display ""cell"" in braille

 

+ Fix for bug #525656 - Orca needs to handle the new Pidgin typing

   status updates

 

OOo:

 

+ Fix for bug #517502 - Orca should not speak the previously focused

   menu item when arrowing across the menu bar in OpenOffice

 

+ Fix for bug #523018 - Orca does not speak the role for edits in the

   find and replace dialog in openoffice

 

Firefox:

 

+ Fix for bug #491837 - Implement Gecko.py 'go to' functions with

   Collections

 

\* Fix for bug #512103 - Orca speaks too much of the context in FF3

 

+ Fix for bug #512503 - Remove ""object:visible-data-changed"" listener

   from Gecko.py

 

+ Fix for bug #515804 - Whitespace needs to be removed from speech and

   braille contexts in FF3

 

+ Fix for bug #517277 - Orca should not get stuck while browsing

   articles at espn.com

 

+ Fix for bug #518893 - extra verbosity in web pages with nested frames

 

+ Fix for bug #519416 - Zoomer loses focus when doing a web search

 

+ Fix for bug #519478 - (ff3) missing text with line down navigation

   (<a href="" www.fixedearth.com="">www.fixedearth.com</a>)

 

\* Fix for bug #519587 - Navigating nested lists with Collection not

   functioning properly

 

+ Fix for bug #519931 - Orca does not read certain news feeds

   correctly

 

+ Fix for bug #520029 - Better handle our presentation of images and

   text on a web page when the image spans multiple lines

 

\* Fix for bug #520612 - Add cursor key routing support to Gecko

 

+ Fix for bug #520760 - (ff3) read document ignoring remainder of

   object when first subelement is non-text.

 

+ Fix for bug #523480 - Unwanted roles appearing in the braille

   context for dojo in FF3

 

+ Fix for bug #523759 - Gecko.getCharacterOffsetInParent() needs

   to check the parent for text

 

\* Fix for bug #526366 - Remove the unused line navigation code from

   Gecko.py

 

New and updated translations (THANKS EVERYONE!!!):

 

     ca      Catalan              Gil Forcada

     cs      Czech                Lucas Lommer, Martin Sukany and

                               Petr Kovar

     da      Danish               Kenneth Nielsen

     de      German               Jochen Skulj

     el      Greek                Giannis Katsampipis and

                                  Kostas Papadimas

     en\_GB   Philip Withnall      English/British

     es      Spanish              Francisco Javier Dorado Martinez

     hu      Hungarian            Attila Hammer and Gabor Kelemen

     ja      Japanese             Takeshi Aihana

     ml      Malayalam            Ani Peter

     nb      Norwegian Bokmål     Kjartan Maraas

     nl      Dutch                Vincent van Adrighem

     nn      Norwegian Nynorsk    Eskild Hustvedt

     pt\_BR   Brazilian Portuguese Tiago Melo Casal and

                                  Leonardo Ferreira Fontenelle

     sv      Swedish              Daniel Nylander

     te      Telugu               Krishna Babu K and Sunil Mohan Adapa

 

======================

\* Where can I get it ?

======================

 

You can obtain Orca v2.23.1 in source code form at the following:

 

<a href="">http://download.gnome.org/sources/orca/2.23/orca-2.23.1.tar.gz</a>

<a href="">http://download.gnome.org/sources/orca/2.23/orca-2.23.1.tar.bz2</a>

 

Enjoy!

 

The Orca Team

 

 

  - [cs] Adrian Gunis

  - [de] Hendrik Brandt

  - [es] Jorge Gonzalez

  - [nn] Eskild Hustvedt

      - [sl] Matej Urbančič

 

### Links:
- <a href="http://live.gnome.org/Orca">Project Home Page</a>

### Download: http://live.gnome.org/Orca/DownloadInstall 