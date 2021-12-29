---
title: Menus
description: ''
position: 10
category: 'GETTING STARTED'
---
## Overview

<figure>
      <img  src="/images/website-header.svg" alt="Website Header">
      <figcaption>Website Header</figcaption>
</figure>

## Display

![image](https://user-images.githubusercontent.com/3258579/147700449-8e01fe87-9b17-43ef-9b4b-21834ba86bdb.png)

## Code

```md[oma_github_pages / content / menus.md]
---
  component: Navbar
  description: this file is dedicated to menus
  menus:
    - 
      title: OMA Website
      description: 
      url: http://www.openmobilealliance.org/
      target: _blank
      class: text-uppercase
    -
      title: Resources
      description:
      url: /resources/
      class: text-uppercase
    -
      title: TestFests
      description:
      url: /testfests/
      class: text-uppercase
    -
      title: Specifications
      description:
      url: https://openmobilealliance.github.io/dmse-documentation/
      target: _blank
      class: text-uppercase
    - 
      title: Information
      description: News & BLog pages of the OMA DMSE
      class: text-uppercase
      items:
        - 
           title: Blogs
           url: /blogs/
           class: text-uppercase
        -
           title: News
           url: /news/
           class: text-uppercase
        -
           title: F.A.Q
           url: /faq/
           class: text-uppercase
    - 
      description: link to GitHub
      icon: "fab github"
      url: https://github.com/OpenMobileAlliance
      target: _blank
      class: ml-auto
---
```
### Properties

`logo`

* location: [oma_github_pages / static / images / logo1.png]()

`menus` & `submenus`

  * location: [oma_github_pages / content / menus.md]()

### Structure

* `component`
* `description`
* `menus`
    * `title`
    * `description`
    * `url`
    * `target`
    * `class`
    * `items`
        * `title`
        * `url`
        * `class`
    * `description`
    * `icon`
    * `url`
    * `target`
    * `class`

### Description

* `component`: **Navbar**
* `description`
    - this property provides a description of the menus content

* `menus`
    * this property is a wrapper that encloses all the properties used in defining the menus.
    * `title`
        * indicates the title of the menu to be displayed
    * `description`
        * it provides a description about the menu
    * `url`
        * it points to the URL. The URL link can be:
            * **local** link:
                * the format for local URLs is:  `/`nameOfFileMenu`/`
            * **external** link:
                * Glogal URL that the menu should be pointing to
    * `target`
        * it is an optional 
        * if this property is set to a value *_blank*. It will open the link in a new webpage
    * `class`
        * if the value *text-uppercase* is inserted, then the menus appear in capital letters
    * `items`
        * this property is a wrapper that encloses the properties to define a submenu insider of a defined menu
        * `title`
            * indicates the title of the submenu
        * `url`
            * indicates where the submenu should be pointing to
        * `class`
            * if the value of this property is set to *text-uppercase*, then the submenu will appear in capital letters

    * the following properties are used to set icons on the right-hand side of the menu area.
    * `description`
        * this property is used to describe the content of the icon
    * `icon`
        * all the icons on this website are stored outside of the GitHub in [XXX]()
    * `url`
        * this property indicates the URL where the icon should point to
    * `target`
        * this property has two values:
            * empty: it opens the link on the current webpage
            * `_blank`: it opens the link in a new webpage
    * `class`
        * if the value of this property is set to *ml-auto* then, XXXX

## F.A.Q


