---
title: hat-mouse
short_title: hat-mouse-8ga
authors: jfedor2
datemod: '2020-09-28T12:33:30Z'
download_url: 'https://github.com/jfedor2/hat-mouse/releases'
project_url: 'https://github.com/jfedor2/hat-mouse'
tags:
    - head-mouse
    - joysticks
categories:
    - hardware
description: 'Bluetooth input device using an orientation sensor'
original_url: 'https://github.com/jfedor2/hat-mouse'
image_download: 'https://github.githubassets.com/images/search-key-slash.svg'
license: ""
date: '2020-09-30T22:09:22Z'
relayed_by_ip: 83.209.118.200
moderated: true
moderated_short_title: hat-mouse
image_download_sha: 7e2d30caebb4fdfbbb2cdfbf93e1877d14f4fe7ab030c80b28e4973604a4c16e
thumb: items/hat-mouse-thumb.png
image: items/hat-mouse.jpg
---
Bluetooth input device using an orientation sensor. This is built using an nrf52840 Feather Sense. The way it works is it reads accelerometer, gyroscope and magnetometer data, puts it through a sensor fusion algorithm to get orientation and then uses the yaw and pitch values to position the mouse cursor on the screen. It uses absolute cursor positioning instead of the most common relative mode, hence the custom HID report descriptor.

Cursor re-centering is done by pressing the "user switch" button on the board.

{{< youtube aJb6M_2izWQ >}}
