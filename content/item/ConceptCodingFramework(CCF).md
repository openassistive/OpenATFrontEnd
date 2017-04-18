---
title: 'Concept Coding Framework (CCF)'
date: '2016-06-21'
description: 'Around the world, people with impaired communication, including difficulties to read or write, may use symbols as an alternative or complement to character based texts. Referencing to, and exchanging these alternatively coded messages over the Internet is difficult due to the lack of standardised encoding schemes and common practises. The Concept Coding Framework (CCF) is being developed to overcome some of these difficulties.'
project: Software
tags:
    - 'Symbol Library'
    - 'Alternative and Augmentative Communication'
    - Communication
    - 'Accessing the Web'
    - Symbols
categories:
    - Software
project_url: ""
download_url: 'http://www.conceptcoding.org/downloads'
moderated: true
---
News
----

### 3 February 2011 - (Mats Lundälv)

In spite of nothing appearing at this spot for quite some time, the CCF development continues, currently in the context of the AEGIS project. More to appear here soon after the recent move of the server home of OATS, as well as for the conceptcoding.org domain. More to come - soon hopefully ...

  
### 3 September 2009 - (Mats Lundälv)

The summer has passed and the work towards the first CCF release is slowly progressing. Will we make it during the 3rd quarter of 2009 as envisaged ? Well - surprise - possibly not :-/ It currently looks uncertain whether we will be ready during this month. It will probably be a bit later this autumn.

Bengt Farre's completely re-written new SYMBERED version is getting close to completion, but still has some way to go.

The good news is that Lars Nordberg is well on the way to transfer our CCF databases from MySQL to the <a href="">Sun JavaDB</a> (based on <a href="">Apache Derby</a>) Java database. This will provide another option for providing CCF resources (in addition to the MySQL and RDF resources) in a light weight format that will be easier to deploy, install and use for those who will like to try working with CCF based applications and services.

We'll keep you updated at this space ..

  
### 19 June 2009 - (Mats Lundälv)

A first full release of the updated CCF package is now envisaged during the 3rd quarter of 2009. It will cover a set of concepts covering the authorized Blissymbolics vocabulary of around 4450 Bliss-words. These will be organised in a Base Reference Ontology (BRO) with concepts covered by WordNet, and a Complementary Reference Ontology (CRO) for the rest. The Concept Coded concepts in the Reference Ontologies will be linked to an open ended numbers of so called Assistive Ontologies containing the different supported language representations for the concepts - Bliss being the first target for graphical symbol representations, and English and Swedish being the first natural language lexicons fully supported. The structure is already prepared for supporting a number of other symbolic representations, as well as all Scandinavian/Nordic, and a number of other European languages. More will be added as soon as interest and resources will be around.

In technical terms; the first release will contain a Java based CCF Tool for browsing and managing the CCF resources (<a href="">WordNet</a>, the BRO and CRO, Assistive Ontologies and symbol resources). The data will be stored in or retrieved from either a MySQL database or an RDF/XML based resource.

The first practical implementation will be an updated version of the <a href="">SYMBERED</a> tool for creating symbol supported web content via a CMS module written in PHP working towards the MySQL database. (This will be a complete re-write of the first SYMBERED version based on the <a href="">Papunet </a>CMS). 

The next practical implementation will be the first prototypes of the envisaged CCF symbol support plugin extension for OpenOffice.org within the AEGIS project - planned for the 4th quarter of 2009.

### 08 June 2009 - (Mats Lundälv)

In the AEGIS project 1:st international workshop (in Slough at RIM 05 June) Dr. Christian Galinski from <a href="">Infoterm </a>gave a very interesting and informative presentation on issues concerning ""Standards for content in the field of eInclusion - and beyond"" - with great relevance for the CCF work in particular, and for the <a href="">AEGIS </a>and <a href="">Raising The Floor</a> projects in general. We will have to do some studying about ISO//TC 37 ""Terminology and other language and content resources"" ;-)  I hope the presentations will be on-line soon.

### **22 February 2009 - (Mats Lundälv)**

The  concept coding work has continued in slow pace as follow up work after the Nordic <a href="">SYMBERED project</a> - which is still ongoing.   
It is now brought further in relation to a task within the ongoing European and international <a href="">AEGIS-project</a>. Concept coding will be employed in building open source components for graphic symbol support - in OpenOffice.org, as well as in prototype Java based cross-platform AAC applications - for mobile devices and other environments.

### **03/12/2007 - (Andy Judson)**  


With my move from the University of Dundee's School of Computing, I thought it time I ported the old CCF website to the OATS portal. With the Bliss Think Tank in July'07 we've been busy hacking more demonstrators. Mats, Bengt and Lars have been busy fine-tuning the <a coding="" concept="" editor="" href="" symbered="" symbol="" title="">SYMBERED</a> system (CCF support for CMS - using PHP, MySQL, Java). I've been busy working on a .NET infrastructure and building a central CCF ontology in SQLServer. The database I've been working with is now populated with around 9000 concepts (based on the STANDUP project ontology) and around 3000 Bliss symbols (some of which are mapped to concept codes). There is an prototype asp.net website where you can search the ontologies, update the bliss-ccf mappings, write ruby annotated bliss messages (then you can copy the source to your own website like I've done below). This webservice could be used as a portal to manage the ccf, and more excitingly, for use by other software / web applications, e.g. <a foxysymbols="" href="" title="">FoxySymbols</a>. I hope to get the webservice & database hosted soon.

Background
----------

Around the world, people with impaired communication, including difficulties to read or write, may use symbols as an alternative or complement to character based texts. Referencing to, and exchanging these alternatively coded messages over the Internet is difficult due to the lack of standardised encoding schemes and common practises. This site is intended to motivate, describe and promote the introduction and adoption of a common, open and vendor neutral Concept Coding Framework (CCF) to overcome some of these difficulties. In particular will act as a base for all contribution to this work - be it formal documentation or informal discussions.

The suggested CCF has been carefully designed to be conformant to the standard language technologies that are rapidly developing and penetrating the Internet communities. In this way we believe that the proposed CCF can contribute to a major leap in bridging between different technologies and products developed for AAC users and, more importantly, between these Assistive Technologies (AT) and the main-stream technologies of today's and tomorrow's networked information society.

The bridging approach also implies that the CCF is not intended to replace and exclude the use and development of current and future proprietary assistive technologies in the AAC field. Instead the CCF and its bridging technology and tools are designed to provide added value for all stake-holders; AAC users, special product developers and service providers, as well as general service and information providers who want to support improved accessibility to their products.

Designed to be used over the Internet for email, web-based activities, chat and/or other emerging Internet based services, the CCF technology can, however, be used by software manufacturers also to provide additional functionality, enhanced support for, and integration of, software and systems with multi-modal language features mainly intended for local use.

Although, this work is part of the EU funded WWAAC project, the concept coding work is to be kept open source as we want to collaborate with experts and stakeholders in both the AAC field and internet technologies/accessibility area. Thus we are wanting to use this area to establish an interest group in the concept coding approach. if you are interested in getting involved at whatever level then please contact us.

Links
-----

These are some of the most relevant links i can think of to share, if you have others, please add them.

### research projects

- <a href="">wwaac</a> project (the eu project that funded this initial work)

> <div align="" left="">- ""<a href="">Code ofPractice</a>"" - the WWAAC project deliverable on the Concept Coding Framework (PDF 1.2MB)
> 
> </div>

- <a href="" http:="" title="">symbered</a> project (swedish project continuing ccf developments)
- <a href="" http:="" title="">swad-europe</a> project (semantic web advanced development for europe)

### web accessibility resources (general)

- <a href="" http:="" title="">w3c-wai</a> (world wide web consortium - web accessibility initiative)
- <a href="" http:="" title="">w3c-wcag</a> (world wide web consortium - web content accessibility guidelines working group)
- <a href="" http:="" title="">w3c-wcag 1.0</a> (world wide web consortium - web content accessibility guidelines 1.0)
- <a href="" http:="" title="">w3c-wcag 2.0 (draft)</a> (world wide web consortium - web content accessibility guidelines 2.0)
- <a href="" http:="" title="">w3c-wcag 2.0 rdf techniques (draft)</a> (rdf techniques document for wcag 2.0 (above))
- <a href="" http:="" title="">dmag</a> (digital media access group)
- <a href="" http:="" title="">accessify</a>
- <a href="" http:="" title="">alistapart</a>
- <a href="" http:="" title="">diveintoaccessibility</a>
- <a href="" http:="" title="">jakob nielsen on usability</a>

### web accessibility resources (learning difficulties)

- <a href="" http:="" title="">ld-web</a> (web specialists looking into learning difficulties)
- <a href="" http:="" title="">juicystudio article</a>
- <a href="" http:="" title="">webusability article</a>
- <a href="" http:="" title="">article by lisa seeman at www2002 conference</a>
- <a href="" http:="" title="">article by kanta jiwnani</a>
- <a href="" http:="" title="">webaim article (part1)</a>
- <a href="" http:="" title="">webaim article (part2)</a>
- <a href="" http:="" title="">uk leading learning difficulties charity</a>
- <a href="" http:="" title="">communicate:webwide</a> (a commercial symbol browser by widget, an leading AAC company)

### technologies

- <a href="" http:="" title="">rdf</a> (resource description framework)
- <a href="" http:="" title="">owl</a> (ontology web language)

### miscellaneous

- <a href="" http:="" title="">semantic web</a> (a portal to information about the semantic web)
- <a href="" http:="" title="">isaac</a> (the international society for augmentative and alternative communication)

### Links:
- <a href="http://www.oatsoft.org/Software/concept-coding-framework-ccf/help">Help</a>
- <a href="mailto:Bengt.Farre@gmail.com">Contact Address</a>
- <a href="http://www.conceptcoding.org/">Project Home Page</a>

### Download: http://www.conceptcoding.org/downloads 