---
title: Structure
description: ''
position: 5
category: 'GETTING STARTED'
---
## Overview
This section describes the framework used to construct this website and how the webpages are structured.

## Framework
`StandardsCode` Open-Source project, is developing [`modules`]() that can be easily inserted in markdown files. Using the [NUTXT.js]() framework the content on these markdonw files are as webpages using GitHub Pages.

<figure>
      <img  src="images/website-framework.svg" alt="Website Framework">
      <figcaption>Website Framework</figcaption>
</figure>

### Javascript (JS)
It is a programming language that is one of the core techologies of the World Wide Wed, alongside HTML and CSS.
### Vue.js 
It is an open-source model-view-viewmodel front end JavaScript framework for building user interfaces and single-page applications.

### Nutx.js
It is a free and open-source web application framework based on [Vue.js](), [Node.js](), [Webpack]() and [Babel.js]().

### Standards Code
It is an open-source web application framework that extends [Nutx.js]() by defining `modules` that represent content in a webpage.

## Website Structure
The image below describes the website structure for [lwm2m.openmobilealliance.org](https://lwm2m.openmobilealliance.org/).

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

The main placeholder for the content is the `page`. 
A `page` is formed by `containers` that are boxes stacked one of top of each other and spreaded across the width of the webpage. Each `container` can contain one or more `modules`. The basic type of content that can be inserted inside of a `module` are: `image`, `text`, `table`, `blank-separator`, `news-card`, `blog-card`, etc.

Inside of a `container` is possible to insert a `module` which in turn contains another `module`. The above image depictures an example where one `container` contains a `module`, called `rowMultiColumns` - a table with two columns - in one of the columns is inserted a `rowNewList` module and in other column is inserted a `rowButtonGrid` module.

It also possible to concatenate two `modules` inside of a `container`, e.g. a text section on the left followed by a imgage to the right, called `rowTextImage` or the reserve an image to the left followed by a text to the right, called `rowImageText`.


### Footer

The `footer` contains OMA copyright statement and its `social media` icons.

* Location: [oma_github_pages / components / row / footer.vue](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/components/Footer.vue)

#### Code
This is the code that describes the content of the `footer`:

```js[oma_github_pages / components / row / footer.vue]
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

<script>
export default {}
</script>

```
#### Structure

```js
<template>
<footer class="fixed-bottom footer mt-auto py-3">
    <b-container fluid>
      <b-row no-gutters>
            <b-col>
                  ...
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
* it is used to host the URLs to the Social Media platforms, e.g. Twitter, FaceBook, etc
   * `href` = property which value is the URL of the Social Media to point to
   * `target`= "_blank", opens the link-content in a new webpage
   * `<FontAwesomeIcon>` 
   * it is used to indicate the type of Social Media
      * `icon="['fab', 'logoName']"`
      * `logName` is set to value like: facebook, twitter, github, etc
