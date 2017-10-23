---
title: OpenChair
short_title: OpenChair
authors: majinstudios
datemod: '2017-02-22T10:06:31Z'
download_url: 'https://cdn.hackaday.io/files/13347571038048/OpenChair.zip'
project_url: 'https://github.com/majinstudios/OpenChair'
tags:
    - mobility
    - powered-mobility
categories:
    - hardware
description: 'With OpenChair we want to create the first wheelchair development platform in which users can code or design the adaptations necessary to fit their needs.'
original_url: 'https://github.com/majinstudios/OpenChair'
image_download: 'https://avatars0.githubusercontent.com/u/3091487?s=40&v=4'
license: 'CC BY-SA 4.0'
date: '2017-10-23T10:18:24Z'
relayed_by_ip: 217.155.33.193
moderated: true
moderated_short_title: OpenChair
image_download_sha: aa4c1084b41ded46b415c9e5050ca8a804f0c1d5025284cddbeaaab1376881c2
thumb: items/OpenChair-thumb.jpg
image: items/OpenChair.jpg
---
Wheelchairs are one of the most used accessibility devices worldwide, however, the prices for electric wheelchairs are still too high (starting at about 1000€) and they are certainly not open for the user to hack.

With this project we intend to build an open-source, affordable electric wheelchair the user can modify to suit their needs, something that while seeming obvious, is in a lot of cases impossible since the chairs are loaned by health services and users are not allowed to alter them.

The first step was to get the electric part. After searching for a combination of motors, drivers and battery+charger powerful enough to transport an adult for more than ten minutes, we came to the conclusion that taking advantage of mass production was the smartest thing to do and went ahead and got a hoverboard. For about 270€ new (and with the huge number of sales, probably a lot less in a second-hand store) we got 2x350W brushless motors and a 36V 4400mAh LiPo battery with an autonomy of up to 20km per charge.

Once the motion was taken care of, we wanted everyone to be able to customize their chair easily, so apart from uploading all the source files we incorporated a set of slots into which a number of accessories could be slid. These could be anything from hooks to carry bags, drink holders, phone/tablet stands... or even active ones, such as a torch or horn. To this end, all the grooves have a hole through which the cables can pass and go to the controller board, effectively hiding them from view and keeping a clean look.

Finally, we are a using a Nucleo F446RE as the control board, but are currently working on our own board, based on the NXP LPC1768 and which incorporates a nRF8001 to provide BLE connectivity. This, in addition to the broken-out GPIOs and I2C, SPI and UART buses should give the user the ability to add any type of sensor or actuator to interact with the chair in the way that suits them best, be it from a board that sends commands based on a user's limb orientation, an eye tracking system, a sip-and-puff device, phone app or any other imaginable way of control that would make life easier.

More info at Hackaday: https://hackaday.io/project/13347-openchair