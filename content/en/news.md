---
title: News
description: ''
position: 80
category: 'Pages'
---

## Overview
This page is dedicated by OMA Working Groups to publish LwM2M related **News**.

## Display
The image below depictures a News.

![image](https://user-images.githubusercontent.com/3258579/151098261-f07962a1-70b8-44cf-b27c-5095473e8b85.png)


## Structure
The code for this webpage can be found in [oma_github_pages / content / news / 2021-03-02-uCIFI.md](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/news/2021-03-02-uCIFI.md)

The properties, inside of the `front-matter`that define the content of the page are:
 
* `layout`:  **news**

* `image`: 
  * this property allows to asign an image stored in the images folder, e.g.: `/images/news/ucifi.png`

* `title`:
  * It provides the title of the news
  * It is desplayed in **bold**

* `subtitle`:
  * It provides the subtitle of the news
  * It is displayed in *italic* 

* `description`:
  * It provides an description of the blog
  * Currently, the value of this property is not displayed

* `url`:
  * It is an optional property that can connect the blog with an external URL
  * When the `url` property is present, then a new page will be open pointing to the URL value

* `by`:
  * This property indicates who is releasing the *News*, e.g.: `OMA SpecWorks` or a company name.

*  `date`:
  * It provides a date when the news is published 

* `homepage`: 
  * This property is optional and it must be an `integer` if present
  * The value of the `integer` indicates the order in which the news will be displayed in the **News** page on in the module [`RowNewsCards`](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowNewsCards)

* `tags`:
  * This properties is an array that contains a list of *filters* or *tags* to associate the **News** with a particular topic.
  * These tags should be approved by the Working Group, this will reduce the options and ensure a relevant set of options
  * The tags are inserted as indicated below:

```yml
tags:
  - tag1
  - tag2
  - tagn
```

**Outside of the `front-matter`**
The actual content of the **News** is inserted outside of the `front-matter`.
The content can be expressed with `markdown` and or `HTML` statements.

<alert>
The expression: 

```xml
<!--more-->

```
is inserted inside of the news, and it is used to delimit the amount of text that is displayed as a news in the **News** page

</alert>

### News FileName

<alert>

It is important to name the file that contains the blog text correctly. 
The file is stored inside of the folder <a href="https://github.com/OpenMobileAlliance/oma_github_pages/tree/main/content/news" >/content / news /</a>

FileName Schema: <b>"YYYY-MM-DD-NewsTitle.md"</b>

"YYYY": is the year

"MM": is the month

"DD": is the day

"NewsTitle": is a free name for the file

</alert>


## F.A.Q
Please create an issue by clicking [here](https://github.com/OpenMobileAlliance/githubpages-doc-guidelines/issues).