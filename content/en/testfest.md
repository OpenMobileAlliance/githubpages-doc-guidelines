---
title: TestFests
description: ''
position: 60
category: 'Pages'
---

## Overview
This page is used to present TestFest related information.
The page is browken down into several `modules` as described below.

## Display
The image below depictures the content displayed on this page broken down into `modules`.

![image](https://user-images.githubusercontent.com/3258579/147799164-c9e3c40e-3819-40ce-ba9b-8b4b098484ff.png)

## Structure
The code for this webpage can be found in [oma_github_pages / content / testfest.md](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/testfests.md)
The properties, inside of the `front-matter` that define the content of the page are:
 
* `title`:  **TestFest**
* `description`: provides a description on the content of this page
* `modules`:
    * the modules that define the content of the page are indented to the left of the module property, and are listed in the next section.
        * [`RowText`](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowText)
            * The properties are:
                * `name`: **RowText**
                * `text`:
                    * as the text is extended over more than one line, the symbol `|` MUST be added at the begining 
                    * the content is written in markdonw language
        * [`RowSeparator`](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowSeparator)
            * The properties are:
                * `name`: **RowSeparator**
                * `size`: S #provide XS, S, M, L, XL spacing between two `modules`

        * [`RowTextImage`](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowTextImage)
            * The properties are:
                * `name`: RowTextImage
                * `cols`: 1, this implies that text is taken the space of 1 column out of 12 possible columns
                * `image`: the value is the location of the image, e.g.: i*mages/events.png*
                * `title`: title of the module
                * `status`: this is an optional value if set to *second*, then the images will be extended
                * `text`: provides the content for the text, if the symbol `|` is inserted then it is possible to add multiple markdown lines.
        * [`RowSeparator`](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowSeparator)
            * The properties for this `module` are defined above

        * [`RowText`](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowText)
            * The properties are:
                * `name`: **RowText**
                * `text`:
                    * as the text is extended over more than one line, the symbol `|` MUST be added at the begining 
                    * the content is written in markdonw language

        * [`RowSeparator`](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowSeparator)
            * The properties for this `module` are defined above

        * [`RowText`](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowText)
            * The properties are:
                * `name`: **RowText**
                * `status`: this property is set to the value **second** which provides a `background-color` to the text `module`
                * `text`:
                    * as the text is extended over more than one line, the symbol `|` MUST be added at the begining 
                    * the content is written in markdonw language to define a registration area

        * [`RowSeparator`](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowSeparator)
            * The properties for this `module` are defined above


**Outside of the `front-matter`**

No modules are or can be defined outside of the `front-matter`, only markdown text content is allowed.
In this page markdown language is used to elaborate **Frequent Asked Questions** about TestFests.

## F.A.Q
Please create an issue by clickig [here](https://github.com/OpenMobileAlliance/githubpages-doc-guidelines/issues).
