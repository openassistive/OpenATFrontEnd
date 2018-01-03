---
title: cboard
short_title: cboard-206
authors: shayc
datemod: '2018-01-02T09:45:54Z'
download_url: 'https://github.com/shayc/cboard/releases'
project_url: 'https://github.com/shayc/cboard'
tags:
    - alternative-and-augmentative-communication
categories:
    - software
description: 'AAC communication board with text-to-speech for the browser'
original_url: 'https://github.com/shayc/cboard'
image_download: 'https://camo.githubusercontent.com/9bf6187bb0f04d4aa504adea19dc200cc2c308ef/68747470733a2f2f692e696d6775722e636f6d2f6565483963554d2e6a7067'
license: 'GPL v3'
date: '2018-01-03T14:08:39Z'
relayed_by_ip: 217.155.33.193
moderated: true
moderated_short_title: cboard
image_download_sha: 5bb005d8a5040ea8bec03377b04d2e9fcd2de18cf904ab59862dbd69c348405b
thumb: items/cboard-206-thumb.png
image: items/cboard-206.png
---
[Cboard](https://shayc.github.io/cboard) is an augmentative and alternative communication (AAC) web application, allowing users with speech and language impairments (autism, cerebral palsy) to communicate by symbols and text-to-speech.



The app uses the browser's Speech Synthesis API to generate speech when a symbol is clicked, there are 3400 symbols to choose from when creating a board. Cboard is available in 33 languages (support varies by platform - Android, iOS, Windows).

**We're using Discord to collaborate, join us at: https://discord.gg/TEH8uxh**

## How does it work?

This video from Real Look Autism will help you understand how communication boards are being used.

**Disclaimer:** the app in the video is not Cboard.

<a href="https://www.youtube.com/watch?v=oIGrxzPMVtw"></a>

## Translations

The app supports 33 languages.
Languages were machine translated and require proofreading, if you want to help proofread click here: https://shayc.github.io/cboard-translate/ - you do not need to be a programmer!

In order to pull the latest translations from CrowdIn into the codebase, you can run `yarn translations:pull`. This will update all language files such as `en.json` as well as the central `cboard.json` file. Please note that this requires the CrowdIn API key to be available in the `.private` config file. Refer to [Secrets Management](#secrets-management). After the script completes, changes to the translation files will need to be committed to the repo by the usual process.
