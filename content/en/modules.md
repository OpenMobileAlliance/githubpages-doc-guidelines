---
title: Modules
description: ''
position: 10
category: 'GETTING STARTED'
---

## Type of Content
As previously indicated the basic type of content inside of a `module` could be:

* text,
* image,
* text & image,
* table (each cell on the table can contain inside another container)
* separator
* blog card
* news card

> Note: the `module` name `Row+containerType` provides an indication what is inside of the module, e.g. a `module` with the name `RowTextImage`contains `text` on the left-hand and an `image` on the right-hand. A `module` called `RowText` only contains text.

List of available modules:

<table>
<thead>
      <tr>
            <th>Name</th>
            <th>Description</th>
      </tr>
</thead>
<tbody>
      <tr>
            <td><a href="./#rowtext" target="_blank">RowText</a></td>
            <td><ul>
                  <li>it is used to insert text</li>
                  <li>If multiple lines are needed, then insert `|` symbol and then write content across multiple lines.</li>
                  <li><a href="#rowtex" >See example</a></li>
                </ul>
            </td>
      </tr>
      <tr>
            <td><a href="./#rowseparator" target="_blank">RowSeparator</a></td>
            <td><ul>
                  <li>It is used to insert a blank line. It is possible to control the high of the line by using a property.</li>
                  <li><a href="#rowseparator" >See example</a></li>
                </ul>
            </td>
      </tr>
      <tr>
            <td><a href="./#rowmulticolumns" target="_blank">RowMultiColumns</a></td>
            <td><ul>
                  <li>It is used to insert a table</li>
                  <li>Each table column can contain any of the defined modules</li>
                  <li><a href="#rowmulticolumns" >See example</a></li>
                </ul>
            </td>
      </tr>
      <tr>
            <td><a href="./#rownewlist" target="_blank">RowNewList</a></td>
            <td>
                  <ul>
                        <li>It is normally used as a submodule inside of <a href="./#rowmulticolumns" target="_blank">RowMultiColumns</a> module</li>
                        <li><a href="#rownewlist" >See example</a></li>
                  </ul>
            </td>
      </tr>
      <tr>
            <td><a href="./#rowbuttongrid" target="_blank">RowButtonGrid</a></td>
            <td>
                  <ul>
                        <li>It is normally used as a submodule inside of <a href="./#rowmulticolumns" target="_blank">RowMultiColumns</a> module</li>
                        <li><a href="#rowbuttongrid" >See example</a></li>
                  </ul>
            </td>
      </tr>
      <tr>
            <td><a href="./#rowimage" target="_blank">RowImage</a></td>
            <td>
                  <ul>
                        <li>This module is used to insert an `image` that covers the screen width</li>
                        <li><a href="#rowimage" >See example</a></li>
                  </ul>
            </td>
      </tr>
      <tr>
            <td><a href="./#rowimagetext" target="_blank">RowImageText</a></td>
            <td>
                  <ul>
                        <li>This module is representing as a row, with an `image` on the left and `text` on the right</li>
                        <li><a href="#rowimagetext" >See example</a></li>
                  </ul>
            </td>
      </tr>
      <tr>
            <td><a href="./#rowtextimage" target="_blank">RowTextImage</a></td>
            <td>
                  <ul>
                        <li>This module is used to represent, in a row, `text` on the left and an `image` on the right </li>
                        <li><a href="#rowteximage" >See example</a></li>
                  </ul>
            </td>
      </tr>
      <tr>
            <td></td>
            <td>
                  <ul>
                        <li></li>
                  </ul>
            </td>
      </tr>
</tbody>
</table>

## Modules


### `RowText`


### `RowSeparator`


### `RowMultiColumns`


### `RowNewList`


### `RowBottonGrid`


### `RowEvents`


### `RowImageText`



### `RowTextImage`


### `RowDynamicTable`


### `RowImage`



### `Blogs`

<table>
<thead>
      <tr>
            <th>Name</th>
            <th>Description</th>
      </tr>
</thead>
<tbody>

</tbody>
</table>

This is how `Blogs` is rendered in a webpage:

<img width="1153" alt="image" src="https://user-images.githubusercontent.com/3258579/146674678-fd65ae8a-498c-4555-8865-afef125ffd8d.png">

This is how `Blogs` is written in Markdown:

```md
---
layout: blog
image:
title: LwM2M v1.2 is now available!
subtitle: Latest LwM2M Protocol version
description: The standardization work on the LwM2M v1.2 specification has been completed and the specification bundle is now available for public download
url: 
date: 2020-Dec-09
by:  OMA SpecWorks
author: Hannes Tschofening
tags:
    - v1.2
    - Release
---

<b>The standardization</b> work on the LwM2M v1.2 specification has been completed and the specification bundle is now available for public download.

Originally proposed in 2012, LwM2M v1.0 was finally published in early 2017 after comprehensive research with developers across multiple industries and application areas. The original standard was a compelling solution for device lifecycle management with focus on constrained IoT devices. With LwM2M adoption observed across a broader range of device types and the benefit of feedback from real use cases, releases including v1.0.1 and v1.0.2 were published to keep up with ever increasing demand and expansion of LwM2M use. With v1.1 published in 2018, OMA SpecWorks increased the functionality of the protocol by adding support for Cellular IoT, LoRaWAN as well as in enterprise networks with CoAP over TCP/TLS.<!--more-->
```

### `News`

<table>
<thead>
      <tr>
            <th>Name</th>
            <th>Description</th>
      </tr>
</thead>
<tbody>

</tbody>
</table>

This is how `News` is rendered in a webpage:

<img width="1158" alt="image" src="https://user-images.githubusercontent.com/3258579/146674721-f6f1770d-84a2-4dbd-b584-61bcee5fdd9b.png">

This is how `News` is written in Markdown:

```md
---
layout: news
image: /images/news/ENISA.png
title: LwM2M in ENISA’s Secure Supply Chain for IoT
subtitle: NISA collaborates with OMA LwM2M
description: LwM2M protocol is ENISA compliant
url: 
by: OMA SpecWorks
date: 2021-Jul-08
homepage: 1
tags: security
---

**Concerns** with supply chain security have steadily increased over the past several years. Economics has “shrunk” the world and most supply chains now include, at some point, components (hardware/
```