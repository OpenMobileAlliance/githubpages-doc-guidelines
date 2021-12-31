---
title: Resources
description: ''
position: 15
category: Pages
---
## Overview
This page contains a table with links to different type of resources: webpages, PDF, etc.
The content on the table is searcheable, it is possible to filter the content of some columns and if the number of resources growth is possible to use pagination to specify how many row will be shown per page.

## Display
This image depictures the content displayed on this page.
![image](https://user-images.githubusercontent.com/3258579/147797815-f0bd7b73-d18e-4975-b5f0-6498fa29c887.png)

## Structure
**Location**: [oma_github_pages / content /resources.md](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/resources.md)

The properties that define this page, are inserted inside of the `front-matter` and are:

* `layout`: **resources**

* `title`:  provides a title to the page

* `description`: provides a description on the content of this page

* `modules`:
    * the modules that define the content of the page are indented to the left of the `module` property, and are listed below.

### Modules

This page contains the following modules:

**Inside of the `front-matter`**

* [`RowText`](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/resources.md)
    * It is used to introduce the table

* [`RowSeparator`](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/resources.md)
    * it provides a gap or space between the above and the below `modules`

* ['RowDynamicTable'](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/resources.md)
  * This container introduces a `module` that is a table with filtering, searching and pagination functionaly
  * The table contains **4** columns, which headers are:
    * Title
    * Type
    * Published
    * Download
  * The following columns can be sorted out:
    * title
    * type
    * published
  * The content of each row is defined by the following properties:
    * `title`
        * `title`
    * `type`
        * `title`
    * `published`
        * `title`
    * `download`
        * `icon`
        * `url`
        * `target`


**Outside of the `front-matter`**
In this page, markdown language is not used outside of the `front-matter` to define further content.

## F.A.Q


