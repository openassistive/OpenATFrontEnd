---
title: openSip+Puff
short_title: openSipPuff
authors: 'Jason Webb'
datemod: '2017-09-22T17:43:57Z'
download_url: 'https://github.com/jasonwebb/openSipPuff/archive/master.zip'
project_url: 'https://github.com/jasonwebb/openSipPuff'
tags:
    - switches
categories:
    - hardware
description: 'Simple, low-cost "sip and puff" USB interface for expressive interactions, enabling breath-based control of keypresses, mouse actions and much more using USB HID.'
original_url: 'https://github.com/jasonwebb/openSipPuff'
image_download: 'https://raw.githubusercontent.com/jasonwebb/openSipPuff/master/docs/assembled-prototype.jpg'
license: 'Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International'
date: '2017-10-26T22:12:38Z'
relayed_by_ip: 109.157.207.228
moderated: true
moderated_short_title: openSipPuff
image_download_sha: 29c41a9a2cea3dc4a3ee9673931e75386ab908657eed5695746080fb852604ff
thumb: items/openSipPuff-f9g-thumb.png
image: items/openSipPuff-f9g.png
---
__openSip+Puff__ aims to provide a cheap, simple, open and modern alternative input method based on the breath of a user that can be easily mapped to a variety of common actions like mouse clicks and keypresses.

The ultimate goal of this project is to go beyond simple utilitarian functionality and provide a new modality for creative expression that is meaningful for people with or without limited mobility. For me this means musical expression and visual art applications, but you are welcome to take it in whatever direction you want!

## Features
### Hardware
The core functionality of this project is built upon the capabilities of the [ATmega32U4 microcontroller](https://github.com/jasonwebb/openSipPuff/blob/master/datasheets/ATMega32u4.pdf) running the [Arduino Leonardo bootloader](https://www.arduino.cc/en/Main/ArduinoBoardLeonardo) paired with an analog pressure sensor.

Currently this project uses the [MPX12GP](https://github.com/jasonwebb/openSipPuff/blob/master/datasheets/MPX12.pdf) pressure sensor from Freescale, which requires an instrumentation amplifier in order to interface with the microcontroller. However, this sensor has proven to be hard to integrate into a manufacturable design, so I will be experimenting with another sensor very soon.

### Firmware
Thanks to the [Arduino Leonardo bootloader](https://www.arduino.cc/en/Main/ArduinoBoardLeonardo), __openSip+Puff__ can mimic generic USB devices such as keyboards, mice, game controllers, or musical instruments allowing data from the pressure sensor to be associated with real actions on the user's computer.

The current firmware uses a rather crude data structure stored in EEPROM to do this association, but I am hoping to come up with a more elegant solution over time. If you know of a good way to do this, please consider detailing your idea in an Issue or a fork!

### Software
Currently whenever an end user wants to change how pressure data events are associated with keyboard/mouse/etc behaviors they need to dive into the firmware code, make alterations and upload a fresh sketch. For developers this is pretty trivial, but I ultimately want this process to be easier for non-developers.

Therefore my current plan is to experiment with [Electron](http://electron.atom.io/) to build a modern, cross-platform desktop application using web technologies to create a simple, intuitive interface that allows for easy reconfiguration of the board over a transparent serial connection.

## License
This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/).

Use this project to learn, tinker and share with friends. Small commercial runs for workshops or other educational uses is completely cool, but please contact me if you'd like to mass produce this project for profit.
