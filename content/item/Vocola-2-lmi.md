---
title: Vocola-2
short_title: Vocola-2-lmi
authors: mdbridge
datemod: '2017-12-23T13:50:56Z'
download_url: 'https://github.com/mdbridge/Vocola-2/releases'
project_url: 'http://vocola.net/'
tags:
    - voice-recognition
    - un-moderated
categories:
    - software
description: 'Vocola is a voice command language―a language for creating commands to control a computer by voice. Vocola 2 is the version that works with Dragon NaturallySpeaking.'
original_url: 'https://github.com/mdbridge/Vocola-2'
image_download: 'https://avatars0.githubusercontent.com/u/15827795?s=40&v=4'
license: MIT
date: '2018-01-03T13:59:12Z'
relayed_by_ip: 217.155.33.193
moderated: false
moderated_short_title: Vocola-2
image_download_sha: 918761b9df9a420f6052a6159f2d9b65c82e3e911b3b4eb18a59aa39301342fa
thumb: items/Vocola-2-lmi-thumb.png
image: items/Vocola-2-lmi.png
---
## Synopsis

Vocola is a **vo**ice **co**mmand **la**nguage — a language for
creating commands to control a computer by voice — created by Rick
Mohr.  Two versions are available: Vocola 2 works with Dragon
NaturallySpeaking (DNS) and Vocola 3 works with Windows Speech
Recognition (WSR) on Windows 8, 7, and Vista.  This repository contains
the source code for Vocola 2.  While DNS and WSR handle the heavy
lifting, Vocola (pronounced &quot;vo-CO-luh&quot;) concentrates on features and
ease of use.  In particular, Vocola offers the following:

Easy to use:

* Simple, concise command syntax—most commands are one-liners
* Easy to view and modify commands
* Changed commands are loaded automatically
* Large set of useful sample commands
* Free

Features:

* Create commands which capture any dictated words
* Use concise number ranges, optional words, and inline word lists
* Specify different actions for variable words
* Speak a continuous sequence of commands
* Re-use work with include files and user-defined functions

Complete documentation can be found at the <a href="http://vocola.net/">Vocola website</a>.


## Examples

Here are four voice commands defined in Vocola:

    Copy That = {Ctrl+c};
    Copy to WordPad = {Ctrl+a}{Ctrl+c} AppBringUp(WordPad);
    1..40 (Left | Right | Up | Down) = {$2_$1};
    Sort by (Date=e | Sender=n | Subject=s) = {Alt+v}o $1;

The first is a simple keystroke command—saying &quot;Copy That&quot; sends the
keystroke Control-C, which copies the current selection to the
clipboard.  The great majority of commands needed for controlling a
computer by voice are simple keystroke commands like this.

The second command, invoked by saying &quot;Copy to WordPad&quot;, copies a window
of text (Control-A selects all text and Control-C copies it) and brings
up the WordPad editor (using the built-in function AppBringUp).

The third command allows controlling the cursor, by saying for example
&quot;3 Left&quot; to move left three characters, or &quot;6 Down&quot; to move down six
lines.  Spoken words match variable terms on the left and are
substituted into the keystroke sequence on the right.  For example, when
saying &quot;3 Left&quot; the spoken &quot;3&quot; matches the numeric range 1..40 and the
spoken &quot;Left&quot; matches the alternative set (Left | Right | Up | Down).
The keystroke sequence {Left 3} is constructed and sent, and the cursor
moves left three characters.

The fourth command allows sorting messages in Mozilla's Thunderbird
Mailer, by saying &quot;Sort by Date&quot;, &quot;Sort by Sender&quot;, or &quot;Sort by
Subject&quot;.  The matched word &quot;Date&quot;, &quot;Sender&quot;, or &quot;Subject&quot;, causes the
appropriate keystroke &quot;e&quot;, &quot;n&quot;, or &quot;s&quot; to be inserted into the keystroke
sequence, choosing the desired option in Thunderbird's View &gt; Sort menu.


## Why a custom voice command language?

Other systems for defining voice commands are grafted onto existing
programming languages.  This means you can program any behavior you
want, but you're stuck with the syntactic overhead of the base language.
In contrast, Vocola is designed specifically as a voice command
language, not as a general-purpose programming language.  This means you
can write quickly and concisely the great majority of voice commands you
need, and use another language in the few cases where you need more
power.

When I (Rick) switched from the Dragon Macro Language to Vocola I was
able to convert all but two of my 200+ Dragon macros (achieving a source
line count reduction of roughly 6:1) and at this writing use well over
1000 Vocola commands.


## Installation

Instructions for installing the latest released version can be found at
http://vocola.net/v2/InstallVocola.asp

To install the version checked out in your git repository rooted at *R*,
just run *R*/src/install.bat then (re-)start Dragon.  (This assumes you
have already installed NatLink at the default location, C:\NatLink.)


## Tests

To be written: describe and show how to run the tests with code
examples.


## Contributors

To be written: let people know how they can dive into the project,
include important links to things like issue trackers, irc, twitter
accounts if applicable.


## License

MIT (see LICENSE.txt)