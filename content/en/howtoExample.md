---
title: How to ...
description: ''
position: 20
category: 'GETTING STARTED'
---
## Overview
This section provides a step-by-step guideline on how to construct a **TestFest** webpage from scratch.

## Steps
1. Create a webpage
2. Populate the webpage with its properties
3. Insert containers & `modules`
4. Add free markdown content outside of the `front-matter`
4. Add a menu to link the new webpage from the navigation or header pannel

### 1. Create Webpage
A an empty markdown file called `testfest.md`inside of this folder [oma_github_pages / content](https://github.com/OpenMobileAlliance/oma_github_pages/tree/main/content)

The full content of this webapge can be seen in this page [TestFest](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/testfests.md)

### 2. Add Properties
Inside of this file insert a `front-matter` property that define the content of the webpage. Add the following lines:

```yml
---
title: TestFest
description: information about applying to attend and participating in an OMA TestFest
---
```
### 3. Insert Modules
As we want to insert one or more `modules`, we need to add the `module` property.

```yml[]
---
title: TestFest
description: bla bla
modules:
---
```
In this step we will extend the content inside of the `front-matter` by adding the following `modules`, in this order and indented to the right of the property `modules`:

> Note: in this example containers are stuck one on top of each other and they contains a single `module` inside. In other cases, a container may contain one or more `modules`

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

* Separator Module - `RowSeparator`
Next, insert a module to separate the above and the below `modules`

```yml
  -  # start with a '-' indented to the right inside of modules
    name: RowSeparator
    size: S # provide XS, S, M, L, XL spacing between modules

```

* Text & Image Module - `RowTextImage`
Insert a `module` with `text` and a `image` just below the `RowSeparator`

```yml
  -  # start with a '-' indented to the right inside of modules
    name: RowTextImage # this module inserts text on the left and an image on the right
    cols: 1 # out of 12 possible columns, the space dedicated to text is 1
    image: "/images/events.png"  # this is where the image is stored
    title: separator  # provide a title to the image
    status:  # 'second-wide' it is an optional value, it establish a framework around the image
    text: # insert the markdown text for this module. In this case it is empty. This module RowTextImage was used to center the image.
```

* Separator Module - `RowSeparator`
Next, insert a module to separate the above and the below `modules`

```yml
  -  # start with a '-' indented to the right inside of modules
    name: RowSeparator
    size: S # provide XS, S, M, L, XL spacing between modules

```
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

* Separator Module - `RowSeparator`
Next, insert a module to separate the above and the below `modules`

```yml
  -  # start with a '-' indented to the right inside of modules
    name: RowSeparator
    size: S # provide XS, S, M, L, XL spacing between modules

```
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

* Separator Module - `RowSeparator`
Next, insert a module to separate the above from any other content outside of the `front-matter`

```yml
  -  # start with a '-' indented to the right inside of modules
    name: RowSeparator
    size: S # provide XS, S, M, L, XL spacing between modules

```
### 4. Add Markdown
Inside of the `front-matter` the content is written as pair key-value following a `yaml` file strcture, which describes the properties and its values.

Outside of the `front-matter` we can write `markdown` text. This give us a great flexibility to write any markdown content as describe in this [markdown_constructors](https://standards-hub.github.io/markdown_constructors/) website.

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
> Note: to insert TestFest a submenu then use the property `items` and indent to the right the content of the submenu. For example to insert **TestFests** a submenu inside of the **Information** menu:

```yml
    - 
      title: Information
      description: News & BLog pages of the OMA DMSE
      class: text-uppercase
      items:
        - 
           title: TestFests # name of the menu
           url: /testfest/  # name of the markdown file without .md extension
           class: text-uppercase
```