---
title: Sensact
short_title: Sensact-dvx
authors: 'Ability Spectrum'
datemod: '2017-08-14T20:53:45Z'
download_url: 'https://github.com/AbilitySpectrum/Sensact/releases'
project_url: 'https://github.com/AbilitySpectrum/Sensact'
tags:
    - alternative-access
    - computer-automation
categories:
    - hardware
description: 'An Arduino shield with analog inputs and USB HID, IR and relay outputs with generic ''sensing'' and ''acting'' functions configurable by software'
original_url: 'https://github.com/AbilitySpectrum/Sensact'
image_download: 'https://avatars1.githubusercontent.com/u/22248747?v=4&s=40'
license: ""
date: '2017-08-24T19:30:17Z'
relayed_by_ip: 86.135.120.184
moderated: true
moderated_short_title: Sensact
image_download_sha: 1c2cda50bea8a603415b637908b035256ea1a577b081b54cb0de08e285496443
thumb: items/Sensact-dvx-thumb.png
image: items/Sensact-dvx.png
---
An Arduino shield with analog inputs and IR and relay outputs

- with generic 'sensing' and 'acting' functions configurable by software

Features

a shield that is compatible with the Arduino board
Arduino code that works in tandem with a web based app
The web-based app configures the Arduino+Sensact combo
Once configured, the combo may be plugged into any USB device for access control
The shield also has on-board IR transceivers and is Bluetooth capable
Motivation

Existing switch controls for computer users with physical impairment tend to be specialized and expensive. They general use one kind of sensors and have restricted functionality.

We provide a generic device that allows the user to experiment with different sensors, to find something that works best for him. We provide on-board IR output, a socket for an optional Bluetooth board and also configurable key strokes for USB HID controls.

The Sensact Hub brings together 3 analog inputs (one of them can be configured as an I2C input) and 2 relay outputs as well as HID, IR and Bluetooth outputs.

We use 2.5mm audio sockets to make it easy to swap different input sensors. The tip is VCC, sleeve is GND and Ring is Signal. The first socket can be used by an I2C device where the two rings are SDA and SCL.

Use cases

We have used a number of sensors: light, capacitive touch, microphone as touch detectors. The signal can be used to trigger a call bell on one of the relays. Or it can be used to send specific letters over USB to control a smartphone or tablet. With Bluetooth, the hub sends out the letters wirelessly. The IR transceivers can function as a remote control for TV.

We have also been able to plug in a 6DO gyroscope+accelerator module. The user can then use movements to control a mouse.