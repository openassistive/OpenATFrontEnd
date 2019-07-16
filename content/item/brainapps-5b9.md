---
title: 'brainapps - P300 Speller'
short_title: brainapps-5b9
authors: Andrey1994
datemod: '2019-07-16T22:27:35Z'
download_url: 'https://github.com/Andrey1994/brainapps.git'
project_url: 'https://github.com/Andrey1994/brainapps'
tags:
    - alternative-and-augmentative-communication
    - eeg/emg
    - un-moderated
categories:
    - software
description: 'P300 speller. Based on '
original_url: 'https://github.com/Andrey1994/brainapps'
image_download: 'https://camo.githubusercontent.com/7b58ba1fbc6769e514f2f3b6c2f5328b092aaa68/68747470733a2f2f6661726d382e737461746963666c69636b722e636f6d2f373831312f34353731333634393130345f316233326661613334395f682e6a7067'
license: 'MIT License'
date: '2019-07-16T22:33:00Z'
relayed_by_ip: 46.208.41.100
moderated: false
moderated_short_title: brainapps
image_download_sha: f2819995c84ae1c44b7983a6c16c48ee5a248f6648d06b41ffc4ee9af5b66d24
thumb: items/brainapps-5b9-thumb.png
image: items/brainapps-5b9.png
---
P300 speller is based on Event Related Potentials. I use TKInter to draw UI and LDA to perform classification


Installation

- Electrode placement: P3,P4,C3,C4,T5,T6,O1,O2
- Install Git LFS because I use it to save eeg data and pickled classifier
- Use Python &gt;=3.x x64, and install packages from requirements.txt 


NB: To be used with [OpenBCI Cyton](https://brainflow.readthedocs.io/en/latest/SupportedBoards.html#openbci-cyton) &amp; [BrainFlow Library](https://github.com/Andrey1994/brainflow)