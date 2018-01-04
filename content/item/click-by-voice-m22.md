---
title: click-by-voice
short_title: click-by-voice-m22
authors: mdbridge
datemod: '2017-12-23T11:50:23Z'
download_url: 'https://chrome.google.com/webstore/detail/click-by-voice/dleiijbbjajmfcaiiiadgjpgfjmfdfen'
project_url: 'https://github.com/mdbridge/click-by-voice'
tags:
    - accessing-the-web
    - voice-recognition
    - un-moderated
categories:
    - software
description: 'Chrome browser extension that provides support for activating links and other elements by voice commands'
original_url: 'https://github.com/mdbridge/click-by-voice'
image_download: 'https://raw.githubusercontent.com/mdbridge/click-by-voice/master/screenshot.jpg'
license: MIT
date: '2018-01-04T16:48:06Z'
relayed_by_ip: 217.155.33.193
moderated: false
moderated_short_title: click-by-voice
image_download_sha: 5fe50ede0114a6fb9793a9935dbb9db1b7dcb288a239b93327eedb75b83f6fb4
thumb: items/click-by-voice-m22-thumb.png
image: items/click-by-voice-m22.png
---
This Chrome browser extension is being developed to provide support
for activating links and other HTML elements using voice commands.


## Using Click by Voice manually

Click by Voice provides two keyboard shortcuts, which are bound by
default to `{ctrl+shift+space}` (pop up command dialog box) and
`{ctrl+shift+,}` (blur).  You can rebind these as desired using the
keyboard shortcuts link at the bottom of the <a>extensions page</a>.

The blur shortcut removes keyboard focus from an element, returning it
to the overall webpage.  This can be useful, for example, when you want
to page the website up and down and an input element like a text field
has focus.

### Activating hints

The pop-up command shortcut pops up a small dialog box in the upper
right asking for the hint number that should be activated.  At its
simplest, typing the number displayed next to an element then pressing
enter will dismiss the dialog box then click or focus that element as
appropriate.  (Click by Voice uses heuristics to attempt to determine
whether an element should be clicked or focused; if it guesses wrong,
you can use one of the more specific commands below to force clicking or
focusing.)

To specify that something different be done with the element, add a
colon and one of the following operation codes:

* 'f' focuses the element (doesn't work on all elements, does work on iframes)
* 'c' clicks the element
* 't' opens links and iframes in a new tab, changing focus to that tab
* 'b' opens links and iframes in a new tab, but does not change focus to
that tab
* 'w' opens links and iframes in a new window, changing focus to that window
* 'k' copies link and iframe locations to the clipboard
* 'h' simulates hovering the mouse over the element; repeat to unhover
* 's' copies the text contents of the element to the clipboard

For example, `153:t` opens the link with hint number 153 in a new tab.
An empty operation (e.g., `153:`) is equivalent to specifying no
operation.  Note that `t`, `b`, `w`, and `k` work only on links and
iframes that explicitly give a target address (currently `<a href="`...`">` and ``).

Instead of providing a hint number, you can provide a CSS selector that
specifies which element you wish to activate.  For example,
`${button.go}:c` clicks the first element that is a both button and of
class `go`.  This feature is useful for programmatically activating
elements.

You can dismiss the command dialog box by typing `{escape}`.

###  Displaying hints

When a page is loaded (this includes reloading the current page), Click
by Voice displays hints according to the last _show [no] hints_ command
it received.  The current such commands are:

* ':+' show standard hints and/or refresh them
* ':++' similar but displays more hints, attempting to hint every
  element that might be clickable or focusable, however unlikely that
  might be.
* ':-' stop displaying hints, removing any existing hints

To use these commands, just enter them into the hint number popup
instead of a hint number.  On Chrome startup, Click by Voice defaults to
standard hints.  Note that show hints commands given when using one tab
will affect refreshes of other tabs.  Hint numbers are not shown when
printing.


## Using with voice commands

WARNING: this extension by itself provides no voice functionality;
procurement of the needed voice commands is the user's
responsibility. One recommended means of doing this is to use Vocola
(http://vocola.net/) to create the needed voice commands.

Writing voice commands to use Click by Voice should be straightforward,
although delays may need to be incorporated.  As an example, here are
Vocola 2 commands that provide access to the Click by Voice
functionality:

    blur me = &quot;{ctrl+shift+,}&quot;;
    show      numbers = {ctrl+shift+space} Wait(500) :+  {enter};
    show more numbers = {ctrl+shift+space} Wait(500) :++ {enter};
    hide      numbers = {ctrl+shift+space} Wait(500) :-  {enter};
    
     0..9 [0..9 [0..9 [0..9]]] = {ctrl+shift+space} Wait(500) $2$3$4$5 &quot;:$1&quot;{enter};
    
     := (        pick = &quot;&quot;    # guess whether to click or focus
              | go     pick = f
              | click  pick = c
              | push   pick = b     # stay but open new tab w/ link or iframe
              | tab    pick = t
              | window pick = w
              | hover  pick = h
              | link   pick = k     # copy link destination address
              | copy   pick = s
              );
</a>