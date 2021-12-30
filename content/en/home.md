---
title: Home
description: ''
position: 10
category: 'Pages'
---

## Overview
This is the default landing page for [lwm2m.openmobilealliance.org](https://lwm2m.openmobilealliance.org/) website.

## Display

![image](https://user-images.githubusercontent.com/3258579/145714934-f1f4564e-79db-4b6e-80be-11cae2e10c2c.png)

* Location: [`oma_github_pages / content / index.md`](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
* `title`:   Home Page
* `description`:   Main page of the web application
* `modules`:       See list below


## Structure

### Modules
This page contains the following modules an in this order.

**Inside of the `front-matter`**:

* [RowText](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
  * this container contains a `module` with text only
* [RowSepartor](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
  * this represents an empty space to separate two containers
* [RowMulticolumns](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
  * this container is a `module` that introduces a table where each column contains other `modules` 
  * in this case the property `cols` is set to **3**, which means the table will contain **3** columns
  * the property `widths` defines the width of each column, in this page it is set to **[2, 8, 2]**. The addition of these widths MUST be **12**, which is the maximum number of columns that can be fit into a webpage
    * **2**, indicates that the width of the first column is 2 out of 12, which is used to display the News by using the `module` [RowNewsList](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
    * **8**, sets the width of the second column, this will allow to split this column in **5** subcolumns. the content of the subcolumns is defined with the `module` called [RowButtonGrid](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
    * **2**, is set as the width for the third column, the furthest on the left of the screen. The `module` to represent this content is called [RowButtonGrid](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md) but it differs from the above by a property `id` set to **events** value. This is pick up by the **CSS** and provides a wider width of the column.
      * [RowNewsList](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
       * this container contains a `module` with the News information that is listed in the menu `News`
       * the value of the property `homepage` represents the order in which the news will be listed in this column
      * [RowButtonGrid](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
        * this `module` is used to define the content of the following **5** columns:
          * **LwM2M** *Protocol*
          * **Test** *Specs*
          * **LwM2M** *Enablers*
          * **Resources** *Information*
          * **Implementations** *Code*
      * [RowButtonGrid](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md) with property `id` set to **events** that increases the width of the column
* [RowSeparator](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
  * it introduces a empty horizontal space between the containers [RowMulticolumns](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md) and [RowImageText](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
* [RowImageText](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
  * this container contains a single `module` with an `image` on the left-hand side of the row and `text` on the right-hand side
* [RowSeparator](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
  * this container introduces an empty horizontal space to speparated vertically the containers [RowImageText](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md) and [RowTextImage](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
* [RowTextImage](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
  * this container contains a single `module` with `text` on the lef-hand side and an `image` on the right-hand side of the row
* [RowSeparator](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md)
  * this container introduces a empty horizontal space that separates the [RowTextImage](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md) `module` from the `front-matter`

**Outside of the `front-matter`**
* Free [markdown](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md) content

> Note: `from-matter` starts and ends with 3 dashes `---`

## F.A.Q

