---
title: "mouseTrap"
date: "2016-06-21"
description: "mouseTrap is an application (for Linux) that intends to provide control of the mouse pointer using a Web Cam and face detection. The users can move the pointer using the face or other parts of it."
project: "Software"
tags: ['Environmental Control','Using the Mouse' ]
categories: ['Software']
project_url: ""
download_url: "http://git.gnome.org/browse/mousetrap/"
---
**1) History:**

mouseTrap started as a simple widgetsTrap (read bellow), while the development advanced new ideas were coming and one of them was the idea of creating an application to move the mouse with the head using a simple and low cost web cam. After doing some research I found OpenCV ( base library of mouseTrap ). After downloading and testing OpenCV I found out that it is capable to do amazing things including face detection. After this I just performed some other tests and apply everything into mouseTrap and so the Web Cam feature became the main function of it.

**2)** **Project Main Goal:**

The main goal of the project is to become a completely accessible application for people with movement impairments and so take care of that important part of accessibility that wasn’t covered until now. With this, It’s possible to expand even more the Assistive Technology and Computer Accessibility and so make the technology accessible for more people.

**3) What does mouseTrap use to model the head movement into mouse movement?**

It calculates the 2D coordinates variation of the face movement on the Web Cam image and after that it executes the required movements with the pointer. It is a really simple calculation that gives an absolute and flexible control. The required movement is completely customizable by the user through the gtk based GUI.

**4) Other Important Features:**

- **WidgetsTrap**: The widgetsTrap is a time-out focus executer feature that catches all the selectable and focusable widgets of the current window ( Desktop or any other application ) and if the mouse hasn’t been moved in the setted time-out the nearest selectable or focusable widget will be focused. A demonstration video can be found <a _self="" demo="" href="" target="" title="" widgetstrap="">here</a>
- **HttpServer:** It is a basic httpServer to communicate with mouseTrap using command line ( wget ) or a simple web browser.
- **KeyBindings:** Yes Keybindings! The keybindings let the user perform some extra mouseTrap actions like, re-detect points, enable/disable features and so on…
- **Mousebindings**: There are also mousebindings for the main or most important actions ( like re-detect points ) so the can be executed using the Web Cam too requiring less movement.
- **Internationalisation:** multi language support.

**5) Future Features:**

- **Eyetraking:** This is the most important feature to implement, hopefully in a short future. This will allow the user to move the mouse just with the eyes, just watching the point in the screen where the mouse should be moved.
- **Plugins Interface**: a simple interface for plugins implementations.
- **More Features to add soon…**

### Links:
- <a href="mailto:flaper87@gmail.com">Contact Address</a>
- <a href="http://live.gnome.org/MouseTrap">Project Home Page</a>

### Download: http://git.gnome.org/browse/mousetrap/ 