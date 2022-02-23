---
title: Structure
description: ''
position: 5
category: 'GETTING STARTED'
---
## Overview
This section describes the structure and the components of the [lwm2m.openmobilealliance.org](https://lwm2m.openmobilealliance.org/) website.

## Website Structure
The image below depictures the website structure for [lwm2m.openmobilealliance.org](https://lwm2m.openmobilealliance.org/).

* Header
* Pages
* Footer

<figure>
      <img src="images/website-structure.svg" alt="Website Structure">
      <figcaption>Website Structure</figcaption>
</figure>

### Header

The content of this block contains clickable items such as [`logo`](), [`menus`]() and [`submenus`]().


### Pages

The main placeholder for the content is the `page`, a markdown file such as [structure.md]().
A `page` is formed by `containers` that are boxes stacked one of top of each other and spreaded across the width of the webpage. Each `container` can hold one or more `modules`. The basic type of content that can be inserted inside of a `module` are: `image`, `text`, `table`, `blank-separator`, `news-card`, `blog-card`, etc.

Inside of a `container` is possible to insert a `module` which in turn contains another `modules`. The above image depictures an example where one `container` holds a `module`, called `RowMultiColumns` - a table with two columns - in one of the columns is inserted another module `RowNewList` and in other column is inserted a `RowButtonGrid` module.

It also possible to combine two `modules` inside of a `container`, e.g. `RowTextImage` is a module that provides a text area on the left-hand side and  an image on the right-hand side. Another module, `RowImageText` provides the opposite, an area for an image on the left-hand and a text area on the right-hand side. The space taken by the `text` or `image` area is controlled by a property called `cols`; which value goes from **1** to **12**.


### Footer

The `footer` of the website contains OMA copyright statement and its `social media` icons.

* Location: [oma_github_pages / components / row / footer.vue](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/components/Footer.vue)

#### Code
This is the code that describes the content of the `footer`:

```js [oma_github_pages / components / row / footer.vue]
<template>
  <footer class="fixed-bottom footer mt-auto py-3">
    <b-container fluid>
      <b-row no-gutters>
        <b-col> /* OMA copyrigh statement */
          <p class="font-weight-light mt-2">
            <small>(&copy;) 2021 Open Mobile Alliance</small>
          </p>
        </b-col>
        <b-col>
          <b-nav class="float-right"> 
            <b-nav-item href="https://twitter.com/OMASpecWorks" target="_blank"> 
              <FontAwesomeIcon :icon="['fab', 'twitter']" />
            </b-nav-item> /* Twitter account */
            <b-nav-item
              href="https://www.facebook.com/OMASpecWorks"  
              target="_blank">
              <FontAwesomeIcon :icon="['fab', 'facebook']" />
            </b-nav-item> /* Facebook account */
            <b-nav-item
              href="https://github.com/OpenMobileAlliance"
              target="_blank"            >
              <FontAwesomeIcon :icon="['fab', 'github']" />
            </b-nav-item> /* GitHub account */
          </b-nav>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
```

#### Properties
`<b-nav-item>`
* this element is used to store the Social Media platforms URLs, e.g. Twitter, FaceBook, etc. 
* the properties are:
   * `href` = property which value is the URL of the Social Media to point to
   * `target`= "_blank", opens the link-content in a new webpage
   * `<FontAwesomeIcon>` 
   * this elment is used to indicate the type of Social Media its icon.
      * `icon="['fab', 'logoName']"`
      * `logName` is set to value like: facebook, twitter, github, etc

* insert a new `<b-nav-item>` element and its properties to add a new Social Media link

## F.A.Q
Please create an issue by clicking [here](https://github.com/OpenMobileAlliance/githubpages-doc-guidelines/issues).