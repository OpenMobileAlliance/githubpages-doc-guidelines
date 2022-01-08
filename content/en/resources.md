---
title: Resources
description: ''
position: 55
category: Pages
---
## Overview
This page contains a table with links to different type of resources: webpages, PDF, etc.
The content on the table is searcheable. It is possible to sort out the content in some columns and specify how many rows will be shown per page.

## Display
This image depictures the content displayed on this page broken down in containers with a single `module`.

![image](https://user-images.githubusercontent.com/3258579/147797815-f0bd7b73-d18e-4975-b5f0-6498fa29c887.png)

## Structure
The code for this page can be found in this file, [oma_github_pages / content /resources.md](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/resources.md)

The properties that define this page, are inserted inside of the `front-matter` and are:

* `layout`: **resources**

* `title`:  provides a title to the page

* `description`: provides a description on the content of this page

* `modules`:
    * the modules that define the content of the page are indented to the right of the property `module`, and are listed below.

    * [`RowText`](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowText)
        * It is used to introduce the content listed in the table
        * the properties of this module are:
            * `name`: RowText
            * `text`: start with the symbol `|` follow by markdown text

    * [`RowSeparator`](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowSeparator)
        * it provides a gap or space between the above and the below `modules`
        * the properties for this module are:
            * `name`: RowSeparator
            * `size`: S 
                * this value provides the a small gap between modules other options are: XS, M, L, XL spacing

    * ['RowDynamicTable'](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowDynamicTable)
    * This container introduces a `module` that is a table with filtering, searching and pagination functionaly
    * the table is defined by this properties:
        * `name`: RowDynamicTable
        * `description`: table dedicated to display resources
        * `pagination`: 10
            * the table will diplay resources in groups of 10 rows
        * `filter`:
            * it defines the value of three of the column headers: **Title**, **Type** and **Published**. This means that it will be possible to sort out the content these of these three columns.
        * `columns`:
            * the table contains **4** columns, which headers titles are:
                * **Title**
                * **Type**
                * **Published**
                * **Download**
            * each column header is defined using three properties:
                * `key`: this represents the key or code value, e.g. **title**
                * `label`: this represents the value to display at the header of the table, e.g. **Title**
                * `sortable`: if set to `true` then the column can be sort out
                * as the table have 4 columns, these properties are repeated for each column. In this page the `key` values of the properties are: **title**, **type**, **published** and **download**
            * The content of each row is defined by the following properties under the property `items`
        * `items`:
            * `title`:
                * `title`: this property contains the value for the property parent title, e.g.: *LwM2M v1.2 Features*
            * `type`:
                * `title`: this property holds the value for the property parent type, e.g.: *PDF*
            * `published`:
                * `title`: this property holds the value for the property parent published, e.g.: 2020-Nov-10
            * `download`:
                * it has three properties to define the resource:
                   * `icon`: it is a pointer to an external database of icons, e.g.: fas download (for a download icon)
                   * `url`: the value of the URL to point to, e.g.: *"https://www.openmobilealliance.org/release/LightweightM2M/"*
                   * `target`: if set to `"_blank"` then the content of the link is open in a new webpage.

            * these properties `title`, `type`, `published` and `download` must be presented for each row on the table, see [resources.md](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/resources.md)


**Outside of the `front-matter`**
In this page, although it is possible to insert further content after the table, the markdown language is not used outside of the `front-matter`.

## F.A.Q


