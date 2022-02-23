---
title: Create a Page
description: ''
position: 25
category: 'How To ...'
---
## Overview
This section provides a step-by-step guidelines on how to build the [**TestFest**](https://lwm2m.openmobilealliance.org/testfests/) webpage.

Follow the steps in the next section to update or create a webpage.

## Steps to add TestFests
Follow these steps to add a new webpage called **TestFests**

1. Create a webpage
2. Populate the webpage with properties
3. Insert containers & `modules` inside of the `front-matter`
4. Add free markdown content outside of the `front-matter`
4. Add a menu entry to link the new webpage

### 1. Create Webpage
Inside of this folder [oma_github_pages / content](https://github.com/OpenMobileAlliance/oma_github_pages/tree/main/content), create an empty markdown file called `testfest.md`

The full content of this webpage can be seen on this page, [TestFest](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/testfests.md)

### 2. Add Properties
Inside of this file insert two lines with `---`. The content between these two lines is called the `front-matter`. Inside of this structure, we will add the `modules` and properties that define the content of the [TestFest](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/testfests.md)webpage. 

Add the following lines:

```yml
--- # start front-matter
title: TestFest
description: information about applying to attend and participating in an OMA TestFest
--- # end front-matter
```
### 3. Insert Modules
As we want to insert one or more `modules`, we need to add the `module` property.

```yml
---  # start front-matter
title: TestFest
description: bla bla
modules:
--- # end front-matter
```
In this step we will extend the content inside of the `front-matter` by adding the `modules` listed below. The `modules` are indented to the right of the property `modules`:

> Note: in this example the containers are stuck one on top of each other and  contain a single `module`. In other cases, a container may contain one or more `modules`.

Insert a `text` module:

* Text Module - `RowText`

```yml
modules:
  - 
    name: RowText
    text: | # insert `|` if the module will contain more than one line of markdown text
          ### Insert Markdown language
          * Line 1
          ** Line 2
```
Insert a `separator` module:

* Separator Module - `RowSeparator`
Next, insert a module to separate the above and the below `modules`

```yml
  -  # start with a '-' indented to the right inside of modules
    name: RowSeparator
    size: S # provide XS, S, M, L, XL spacing between modules

```
Insert a `tex/image` module:

* Text & Image Module - `RowTextImage`
Insert a `module` with `text` and an `image` just below the `RowSeparator`

```yml
  -  # start with a '-' indented to the right inside of modules
    name: RowTextImage # this module inserts text on the left and an image on the right
    cols: 1 # out of 12 possible columns, the space dedicated to text is 1
    image: "/images/events.png"  # this is where the image is stored
    title: separator  # provide a title to the image
    status:  # 'second-wide' it is an optional value, it establish a framework around the image
    text: # insert the markdown text for this module. In this case it is empty. This module RowTextImage was used to center the image.
```
Insert a `separator` module:

* Separator Module - `RowSeparator`
Next, insert a module to separate the above and the below `modules`

```yml
  -  # start with a '-' indented to the right inside of modules
    name: RowSeparator
    size: S # provide XS, S, M, L, XL spacing between modules

```
Insert a `text` module:

* Text Module - `RowText`

```yml
modules:
  - 
    name: RowText
    text: | # insert `|` if the module will contain more than one line of markdown text
          ### Insert Markdown language
          * Line 1
          ** Line 2
```
Insert a `separator` module:

* Separator Module - `RowSeparator`
Next, insert a module to separate the above and the below `modules`

```yml
  -  # start with a '-' indented to the right inside of modules
    name: RowSeparator
    size: S # provide XS, S, M, L, XL spacing between modules

```
Insert a `text` module:

* Text Module - `RowText`

```yml
modules:
  - 
    name: RowText
    text: | # insert `|` if the module will contain more than one line of markdown text
          ### Insert Markdown language
          * Line 1
          ** Line 2
```
Insert a `separator` module:

* Separator Module - `RowSeparator`
Next, insert a module to separate the above module from the content outside of the `front-matter`

```yml
  -  # start with a '-' indented to the right inside of modules
    name: RowSeparator
    size: S # provide XS, S, M, L, XL spacing between modules

```
### 4. Add Markdown
As seen above, inside of the `front-matter` the content is written as pair key-value following a `yaml` file strcture, which describes the properties and its values.

Outside of the `front-matter` it is possible to write `markdown` and `HTML`directly. This give us a great flexibility to write any content as described in this [markdown_constructors](https://standards-hub.github.io/markdown_constructors/) website.

```yml
--- # close the `front-matter`
</br>  # insert markdown and HTML language

### TestFest Frequent Asked Questions
#### What is an OMA SpecWorks TestFest?

OMA TestFests are designed to achieve a number of goals, including:

```
### 5. Add a Menu
Now that we have the page constructed with all the content let's connect that page to the **Menus**.

Open the [menus.md](https://github.com/OpenMobileAlliance/oma_github_pages/tree/main/content) file.

Insert a new menu item between the **Resources** and the **Specifications** menu

```yml
    -
      title: TestFests  # provide a title
      description:      # provide a description of this page
      url: /testfests/  # the name of the file without the .md extension
      class: text-uppercase  # this property will display the menu name on uppercase
```
> Note: to insert TestFest as a submenu use the property `items`. For example to insert **TestFests** a submenu inside of the **Information** menu:

```yml
    - 
      title: Information
      description: News & Blog pages of the OMA DMSE
      class: text-uppercase
      items:
        - 
           title: TestFests # name of the menu
           url: /testfest/  # name of the markdown file without .md extension
           class: text-uppercase
```

The content of this webpage can be found in [TestFest](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/testfests.md).

## F.A.Q
Please create an issue by clicking [here](https://github.com/OpenMobileAlliance/githubpages-doc-guidelines/issues).
