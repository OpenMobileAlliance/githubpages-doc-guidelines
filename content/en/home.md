---
title: Home
description: ''
position: 50
category: 'Pages'
---

## Overview
This is the default landing page for the [lwm2m.openmobilealliance.org](https://lwm2m.openmobilealliance.org/) website.

The home page can be reached by using the URL [https://lwm2m.openmobilealliance.org/](https://lwm2m.openmobilealliance.org/) or by clicking on the LwM2M logo.

The page contains a table defined by the [`RowMultiColumn`](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowMultiColumns) module that contains the following information:
* [LwM2M News](https://lwm2m.openmobilealliance.org/news/)
* Versions of the [LwM2M protocol](https://guidelines.openmobilealliance.org/#v12-functionality) relased until now
* List of available [LwM2M Test Specifications](http://www.openmobilealliance.org/release/LightweightM2M/ETS/)
* Other [LwM2M Enablers](https://guidelines.openmobilealliance.org/enablers)
* [LwM2M Registry](https://technical.openmobilealliance.org/OMNA/LwM2M/LwM2MRegistry.html) and [wiki](https://github.com/OpenMobileAlliance/OMA_LwM2M_for_Developers/wiki)
* Open-Source implementations of LwM2M Enabler: [Lesham](https://github.com/eclipse/leshan), [Wakaama](https://github.com/eclipse/wakaama), [Anjay](https://github.com/AVSystem/Anjay)
* TestFest Events related to LwM2M: [Previous](https://github.com/OpenMobileAlliance/OMA_LwM2M_for_Developers/wiki/Virtual-TestFest-Mar-2021) and current.

## Display
The image below depictures the content of this page broken down into containers with single `modules`.
![image](https://user-images.githubusercontent.com/3258579/147797014-ba8f9fc6-ddfb-4a97-b056-c8d2e204bbab.png)

## Structure
The code for this webpage can be found in [`oma_github_pages / content / index.md`](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)

The properties that define the page are inserted inside of the `front-matter` [^1] and are:

* `title`: Home page
* `description`: Main page of the web application
* `modules`: 
  * the modules that define the content of the page are indented to the right of the `module` property, and they are listed below.
    * [RowText](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowText)
      * this container contains a text `module` with links to the DMSE and IPSO information on the OMA Specs Work website.
      * `name`: RowText
      * `text`: the value contains a symbol `|` follow by markdown language
    * [RowSepartor](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowSeparator)
      * `name`: RowSeparator
      * `size`: S other optiosn: XS, S, M, L, XL provides a spacing between component
      * this represents an empty space to separate two containers
    * [RowMulticolumns](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowMultiColumns)
      * `name`: RowMultiColumns
        * this container is a `module` that introduces a table where each column contains other `modules` 
      * `cols`: 3
        * in this case the property `cols` is set to **3**, which means the table will contain **3** columns
      * `widths`: [2, 8, 2]
        * the property `widths` defines the width of each column, in this page it is set to **[2, 8, 2]**. The addition of these widths MUST be **12**, which is the maximum number of columns that can be fit into a webpage. These values represent:
          * **2**, indicates that the width of the first column is 2 out of 12 possible columns. This column is used to display the **News** using [RowNewsList](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowNewList) `module`
            * [RowNewsList](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowNewList)
              * this container contains a `module` with the News information that is listed in the menu `News`
              * the value of the property `homepage` - this property is defined inside of the file that contains the `News`- and it represents the order in which the news will be listed in this column
              * `name`: RowNewList
              * `title`: News
              * `subtitle:` Latest
              * `image`: e.g. *fas cube*, which is the value of the icon in an external database 
          * **8**, sets the width of the second column to 8 columns out of the 12 possible columns. This column is used to display a table that contains an additional **5** subcolumns. To display these subcolumns the page uses the [RowButtonGrid](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowButtonGrid) module
            * [RowButtonGrid](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowButtonGrid)
              * this `module` is used to define the content of the following      **5** columns:
              * **LwM2M** *Protocol*
              * **Test** *Specs*
              * **LwM2M** *Enablers*
              * **Resources** *Information*
              * **Implementations** *Code*
          * **2**, is set as the width for the third column out of the possible 12 columns. This column is the furthest on the left-hand side of the screen. The `module` to represent the content on this third column is [RowButtonGrid](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowButtonGrid), which differs from the above by a property called `id`, which is set to **events** value. This value is interpreted by the **CSS** and provides a wider width to the third column.
            * [RowButtonGrid](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowButtonGrid) with property `id` set to **events** that increases the width of the column
    * [RowSeparator](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowSeparator)
      * it introduces a empty horizontal space between the above and the below `module`
        * `name`: RowSeparator
        * `size`: it is set to one of these values XS, S, M, L, XL to provide spacing between modules
    * [RowImageText](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowImageText)
      * this container contains a single `module` with an `image` on the left-hand side of the row and `text` on the right-hand side
      * the content of this `module` is used to define DMSE scope of work
        * `name`: RowImageText
        * `cols`: 3, to indicate that the image part is limited to 3 columns
        * `image`: e.g. images/dmse.png, the file name of the image inside of images folder
        * status: optional, it can be set to `second` which extends the width of the image
        * `text`: if it starts with the symbol `|`, then multiple markdown lines can be used
    * [RowSeparator](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowSeparator)
      * this container introduces an empty horizontal space to speparated vertically the containers the above and below `modules`
      * see properties above
    * [RowTextImage](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowTextImage)
      * this container contains a single `module` with `text` on the lef-hand side and an `image` on the right-hand side of the row
      * it is used to define IPSO scope of work
      * the same as `RowImageText` but in this case the text goes to the left and the `cols` property limits the size of the text part
    * [RowSeparator](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowSeparator)
      * this container introduces a empty horizontal space that separates the the above `module` from the markdown text outside of the `front-matter`

**Outside of the `front-matter`**

No `modules` can be defined outside of the `front-matter`, `---`

But it is possible to use standard [markdown](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md) and HTML language to define any other content.

In this page, markdown language is used to define the **About OMA SpecWorks** section without using a `module`.


## F.A.Q


[^1]: a `front-matter` section is an space inside of a markdown file limited by  two set of dashes `---`. Any other content outside of these dashes is considered outside of the `front-matter`.