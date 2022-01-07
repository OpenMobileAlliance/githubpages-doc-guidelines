---
title: Menus
description: ''
position: 10
category: 'GETTING STARTED'
---
## Overview

<figure>
      <img  src="images/website-header.svg" alt="Website Header">
      <figcaption>Website Header</figcaption>
</figure>

## Display
This image depictures the menu section of the [lwm2m.openmobilealliance.org](https://lwm2m.openmobilealliance.org/) website.

![image](https://user-images.githubusercontent.com/3258579/148471037-35e764d5-4627-40e3-93d1-476713de6771.png)


## Code

The website `logo` can be found in [oma_github_pages / static / images / logo1.png](https://github.com/OpenMobileAlliance/oma_github_pages/blob/main/static/images/logo1.jpg), and the file that contains the `menus` & `submenus` in [oma_github_pages / content / menus.md](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/menus.md)

This is the code for the webisite menus:

```yml [oma_github_pages / content / menus.md]
--- # start of front-matter
  component: Navbar
  description: this file is dedicated to menus
  menus: # start of menus
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
      items: # start of submenus
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
    
    - # add GitHub icon to the left-hand side of the menu
      description: link to GitHub
      icon: "fab github"
      url: https://github.com/OpenMobileAlliance
      target: _blank
      class: ml-auto
--- # end of the front-matter
```
### Structure
This is the `menu` structure:

```yml
---  # always start with a `-`
    component:
    description:
    menus: # this property indicates the begining of the menus
      -    # use these properties to define a particular menu
        title:
        description:
        url:
        target:
        class:
      - # repite the above properties for each menu

      - # to insert a submenus inside of a menu use these properties
        title:
        description:
        url:
        target:
        class:
        items:
          - # 'items' is used to define the properties of a submenu
            title:
            url:
            class:
          - # repite the 'items' properties for each submenu
      -     # use the properties define below to add an icon to the left-hand side of the header
        description:
        icon:
        url:
        target:
        class:
---
```

### Properties

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
                * Global URL that the menu points to ,e.g.: https://guidelines.openmobilealliance.org/ 
    * `target`
        * it is an optional property
        * if it is set to *_blank*. It will open the link in a new webpage
    * `class`
        * if the value *text-uppercase* is inserted, then the menu text will appear in capital letters
    * `items`
        * this property is a wrapper that encloses the submenus properties
        * `title`
            * indicates the title of the submenu
        * `url`
            * indicates the URL where the submenu should be pointing to
            * The URL link can be:
              * **local** link:
                * the format for local URLs is:  `/`nameOfSubFileMenu`/`
              * **external** link:
                * Global URL that the menu points to ,e.g.: https://guidelines.openmobilealliance.org/ 
        * `class`
            * if the value of this property is set to *text-uppercase*, then the submenu will appear in capital letters

    * the following properties are used to set icons on the right-hand side of the menu area.
    * `description`
        * this property is used to describe the content of the icon
    * `icon`
        * all the icons on this website are stored outside of the GitHub in [XXX]()
    * `url`
        * this property indicates the URL where the icon should be pointing to
    * `target`
        * this property has two values:
            * empty: it opens the link on the current webpage
            * `_blank`: it opens the link in a new webpage
    * `class`
        * if the value of this property is set to *ml-auto* then, XXXX

## F.A.Q
