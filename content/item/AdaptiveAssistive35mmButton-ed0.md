---
title: 'Adaptive/Assistive 3.5mm Button'
authors: ctag
datemod: '2016-04-07T03:19:41Z'
download_url: 'http://www.thingiverse.com/thing:1471760/zip'
project_url: 'http://www.thingiverse.com/thing%3A1471760'
description: 'This is a low cost, printable AT button. It interfaces with any standard 3.5mm mono jack system'
tags:
    - switches
    - un-moderated
categories:
    - hardware
original_url: 'http://www.thingiverse.com/thing%3A1471760'
short_title: AdaptiveAssistive35mmButton-ed0
image_download: 'https://cdn.thingiverse.com/renders/dd/16/be/f4/c0/eab09856bbbf44095b1b65a0d3a7c105_preview_featured.JPG'
license: 'GNU - GPL '
date: '2017-10-23T10:10:58Z'
relayed_by_ip: 217.155.33.193
moderated: false
moderated_short_title: AdaptiveAssistive35mmButton
image_download_sha: 078b6abf1de1f9ea77e0c7e6dc745db1d3003c6748fe59e4e993a6bdc97cd522
thumb: items/AdaptiveAssistive35mmButton-ed0-thumb.png
image: items/AdaptiveAssistive35mmButton-ed0.png
---
# Summary

## What

This is a low cost, printable AT button. It interfaces with any standard 3.5mm mono jack system, commonly found in support situations for people living with physical disabilities.

AT buttons are a way for someone with a limited range of motion to control his or her environment at the same level as anyone else. These buttons can be used to adapt toys and home appliances such that they can be actuated with ease. Most AT buttons available are quite expensive, and are engineered to be used in serious -- 100% reliability -- situations. As a result there are a lot of [DIY projects](http://www.instructables.com/id/CD-Switch/) to make buttons meant for more relaxed use cases. We wanted to make a button that can be used for toy adapting and similar functions, while also providing a clean and durable design.

## Why

This button was created as part of a team-based senior design course. We worked with a local organization, [UCP and TASC of Huntsville](http://ucphuntsville.org/what-we-do/t-a-s-c/), to design and construct an AT keyboard and AT button.

## How

Making one button takes me about 8 hours of printing and 1 hour of assembly.

### Materials

*   [Cherry MX Switch](https://mechanicalkeyboards.com/shop/index.php?l=product_list&amp;c=43)
*   [3.5mm Mono Port](http://smile.amazon.com/TOOGOO-Chassis-Female-Socket-Connectors/dp/B00EZIGTYY?ie=UTF8&amp;psc=1&amp;redirect=true&amp;ref_=oh_aui_search_detailpage)
*   6&quot; or so of wire
*   Optional: [Compression spring](http://www.homedepot.com/p/Everbilt-Spring-Assortment-Kit-84-Pack-15642/202045461) for adjusting the button's actuation force.
*   Optional: [3.5mm Mono cable](http://www.mycablemart.com/store/cart.php?m=product_list&amp;c=178) to connect the button to things
*   Optional: drawer/shelf/toolbox liner **or** dual-lock **or** velcro as a grip base

### Assembly

*   Print the button base, button hatch, and and key cap.
*   Solder the MX switch to the mono port with two pieces of wire, about 3 inches each.
*   Install the MX switch in the middle of the button base, and then run the mono jack to the port on the flat side. Screw the mono port's threads into the hole in the side of the button.
*   Jam the key cap onto the cherry MX switch. This can optionally be done with a light spring over the switch stem to adjust the force of the button.
*   Optionally glue or bolt (M3 bolts) the shelf liner to the bottom of the button to make a no-slip base!

Can also optionally have superglue to hold things together.

## Doing Things With AT Button

Here I'm just running through some small use cases that I've personally found for this button.

### Control a computer via an Arduino

You can use a [small firmware](https://github.com/ctag/cpe495/tree/master/button_test/button_test) on an arduino along with a [shell script](https://github.com/ctag/cpe495/tree/master/button_test/button_test) to automate tasks on your computer. In the example code the shell script uses xdotool to generate a Right arrow key press, which allows me to use the button to advance slides in a power point.

### Control a computer via microphone input

You can also wire the button directly to a computer's microphone and detect button presses. This is still something we're looking into, and hope to return with more robust code.

# Print Settings

**Printer Brand:**

Printrbot

**Printer:**

Simple Black

**Rafts:**

Doesn't Matter

**Supports:**

No

**Resolution:**

0.25

**Infill:**

10%

**Notes:**

I print the base piece at a low-infill to save plastic, but higher infills give you a very satisfying heft.

# How I Designed This

#### Programs

Designed with Inkscape, OpenSCAD, and FreeCAD.

#### Keycap

The key cap was made with OpenSCAD files from [gcb's repo](https://bitbucket.org/gcb/3dump/overview).

#### Anti-Warp

I had a lot of trouble with warping and lift-off with these large parts since my printer isn't calibrated very well. To account for this, the base part has a design etched in the bottom of it to try and minimize warping. If you would rather not have this, please contact me and I'll work on maintaining a separate version of that file without the anti-warp pattern.