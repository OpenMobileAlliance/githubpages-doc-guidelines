---
title: Blogs
description: ''
position: 70
category: 'Pages'
---

## Overview
This page is dedicated by OMA Working Groups to publish LwM2M related **Blogs**.

## Display
The image below depictures a blog and its filters.

![image](https://user-images.githubusercontent.com/3258579/151093367-cd185f5e-9ae8-48cc-be99-8d283f92fa3c.png)

## Structure
The code for this webpage can be found in [oma_github_pages / content / blogs / 2020-01-23-Lw2M2M-5G.md](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/blogs/2020-01-23-Lw2M2M-5G.md)

The properties, inside of the `front-matter` that define the content of the page are:
 
* `layout`:  **blog**

* `image`: 
  * this property allows to asign an image stored in the images folder, e.g.: `/images/blogs.jpeg`

* `title`:
  * It provides the title of the blog
  * It is desplayed in **bold**

* `subtitle`:
  * It provides the subtitle of the blog
  * It is displayed in *italic* and with different font-color.

* `description`:
  * It provides an description of the blog
  * Currently, the value of this property is not displayed

* `url`:
  * It is an optional property that can connect the blog with an external URL
  * When the `url` property is present, then a new page will be open pointing to the URL value

*  `date`:
  * It provides a date when the blog is published 

* `by`:
  * This property indicates who is releasing the *Blog*, e.g.: `OMA SpecWorks` or a company name.

* `author`: 
  * This property indicates who authored the blog.

* `tags`:
  * This properties is an array that contains a list of *filters* or *tags* to associate the **Blog** with a particular topic.
  * These tags should be approved by the Working Group, this will reduce the options and ensure a relevant set of options
  * The tags are inserted as indicated below:

```yml
tags:
  - tag1
  - tag2
  - tagn
```

**Outside of the `front-matter`**
The actual content of the **Blog** is inserted outside of the `front-matter`.
It is expressed with `markdown` and `HTML` statements.

<alert>
The expression: 

```xml
<!--more-->

```
is inserted inside of the blog, and it is used to delimit the amount of text that is displayed as a blog in the **Blog** page

</alert>

### Blog FileName

<alert>

It is important to name the file that contains the blog text correctly. 
The file is stored inside of the folder <a href="https://github.com/OpenMobileAlliance/oma_github_pages/tree/main/content/blogs" >/content / blogs /</a>

FileName Schema: <b>"YYYY-MM-DD-BlogTitle.md"</b>

"YYYY": is the year

"MM": is the month

"DD": is the day

"BLogTitle": is a free name for the file

</alert>


## F.A.Q
Please create an issue by clickig [here](https://github.com/OpenMobileAlliance/githubpages-doc-guidelines/issues).