---
title: Home
description: ''
position: 10
category: 'Pages'
---

## Overview
This is the default landing page for [lwm2m.openmobilealliance.org](https://lwm2m.openmobilealliance.org/) website.

The home page can be reached by using the URL [https://lwm2m.openmobilealliance.org/](https://lwm2m.openmobilealliance.org/) or by clicking on the LwM2M logo.

The page contains a table defined by the [`RowMultiColumn`]() module that contains the following information:
* [LwM2M News](https://lwm2m.openmobilealliance.org/news/)
* Versions of the [LwM2M protocol](https://guidelines.openmobilealliance.org/#v12-functionality) relased until now
* List of available [LwM2M Test Specifications](http://www.openmobilealliance.org/release/LightweightM2M/ETS/)
* Other [LwM2M Enablers](https://guidelines.openmobilealliance.org/enablers)
* [LwM2M Registry](https://technical.openmobilealliance.org/OMNA/LwM2M/LwM2MRegistry.html) and [wiki](https://github.com/OpenMobileAlliance/OMA_LwM2M_for_Developers/wiki)
* Open-Source implementations of LwM2M Enabler: [Lesham](https://github.com/eclipse/leshan), [Wakaama](https://github.com/eclipse/wakaama), [Anjay](https://github.com/AVSystem/Anjay)
* Events related to LwM2M: [Previous](https://github.com/OpenMobileAlliance/OMA_LwM2M_for_Developers/wiki/Virtual-TestFest-Mar-2021) and current.

## Display
The image below depictures the content of this page broken down into `modules`.
![image](https://user-images.githubusercontent.com/3258579/147797014-ba8f9fc6-ddfb-4a97-b056-c8d2e204bbab.png)

## Structure
**Location**: [`oma_github_pages / content / index.md`](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)

The properties that define the page are inserted inside of the `front-matter` [^1] and are:

  `title`:   **Home Page**

  `description`:

  * Main page of the web application

  `modules`: 

  * the modules that define the content of the page are indented to the left of the `module` property, and they are listed below.

### Modules

The `modules` presented on this page are:

**Inside of the `front-matter`**:

* [RowText](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
  * this container contains a text `module` with links to the DMSE and IPSO information on the OMA Specs Work website.
* [RowSepartor](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
  * this represents an empty space to separate two containers
* [RowMulticolumns](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
  * this container is a `module` that introduces a table where each column contains other `modules` 
  * in this case the property `cols` is set to **3**, which means the table will contain **3** columns
  * the property `widths` defines the width of each column, in this page it is set to **[2, 8, 2]**. The addition of these widths MUST be **12**, which is the maximum number of columns that can be fit into a webpage. These values represent:
    * **2**, indicates that the width of the first column is 2 out of 12 possible columns. This column is used to display the **News** using [RowNewsList](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md) `module`
      * [RowNewsList](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
      * this container contains a `module` with the News information that is listed in the menu `News`
      * the value of the property `homepage` represents the order in which the news will be listed in this column
    * **8**, sets the width of the second column to 8 columns out of 12. This column is used to display a table with **5** subcolumns. To display these subcolumns the page uses the [RowButtonGrid](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md) `module`
      * [RowButtonGrid](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
        * this `module` is used to define the content of the following **5** columns:
          * **LwM2M** *Protocol*
          * **Test** *Specs*
          * **LwM2M** *Enablers*
          * **Resources** *Information*
          * **Implementations** *Code*
    * **2**, is set as the width for the third column out of possible 12 widths columns. This column is the furthest on the left-hand side of the screen. The `module` to represent the content on this third column is [RowButtonGrid](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md), which differs from the above by a property called `id` that it is set to **events** value. This value of this `id` property is interpreted by the **CSS** and provides a wider width of this third column.
        * [RowButtonGrid](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md) with property `id` set to **events** that increases the width of the column
* [RowSeparator](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
  * it introduces a empty horizontal space between the above and the below `module`
* [RowImageText](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
  * this container contains a single `module` with an `image` on the left-hand side of the row and `text` on the right-hand side
  * the content of this `module` is used to define DMSE scope of work
* [RowSeparator](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
  * this container introduces an empty horizontal space to speparated vertically the containers the above and below `modules`
* [RowTextImage](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
  * this container contains a single `module` with `text` on the lef-hand side and an `image` on the right-hand side of the row
  * it is used to define IPSO scope of work
* [RowSeparator](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
  * this container introduces a empty horizontal space that separates the the above `module` from the markdown text outside of the `front-matter`

**Outside of the `front-matter`**
No `modules` can be defined outside of the `front-matter`, `---`

But it is possible to use standard [markdown](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md) content to define any content that can be represented by markdown language.

In this page, markdown is used to define the **About OMA SpecWorks** using markdown language directly without using a `module`.


## F.A.Q



<!--- below is a footnote --->

[^1]: each markdown page defined inside of the folder `content` contains a `front-matter`, which is represented by properties inserted inside of **3** `-`. One is inserted at the begining `---` before defining the properties and the other after defining the properties.