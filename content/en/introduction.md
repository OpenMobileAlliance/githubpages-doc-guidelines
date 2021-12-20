---
title: Introduction
description: ''
position: 1
category: 'GETTING STARTED'
---
## Overview
These guidelines provide all the information that you need to maintain and create new web pages for the DMSE/IPSO website.
The content of OMA LwM2M website is stored in the GitHub repository, [oma_github_pages](https://github.com/OpenMobileAlliance/oma_github_pages) and the website is rendered by GitHub as GitHub pages in [lwm2m.openmobilealliance.org](https://lwm2m.openmobilealliance.org/).

## Website Structure
The image below describes the website structure for [lwm2m.openmobilealliance.org](https://lwm2m.openmobilealliance.org/).

<figure class="text-center">
      <img src="./images/website-structure.svg" alt="Website Structure ">
      <figcaption>Website Structure</figcaption>
</figure>
<img width="611" alt="image" src="https://user-images.githubusercontent.com/3258579/146739678-1f8a3f21-48db-477a-96ce-35dbf2d9a9d2.png">

**Navigation**

The content of this block contains a clicable `logo`, the `menus` and `submenus`.

**Body**

The main placeholder for the body is the `page`. 
A `page` is formed by `containers` that are boxes stacked one of top of each other and spreaded across the width of the webpage. Each `container` can contain one or more `modules`. The basic type of content that can be inserted inside of a `module` are: `image`, `text`, `table`, `blank-separator`, `news-card`, `blog-card`, etc.

Inside of a `container` is possible to insert a `module` which in turn contains another `module`. The above image depictures an example where one `container` contains a `module`, called `rowMultiColumns` - a table with two columns - in one of the columns is inserted a `rowNewList` module and in other column is inserted a `rowButtonGrid` module.

It also possible to concatenate two `modules` inside of a `container`, e.g. a text section on the left followed by a imgage to the right, called `rowTextImage` or the reserve an image to the left followed by a text to the right, called `rowImageText`.


**Footer**

The `footer` contains OMA copyright statement and its `social media` icons.

In the next section [Structure](structure.md#structure) you can see how each of these components is structured.

## Modules
A `module` is a container or a box that is spreaded across a row of the website. Inside of the container is possible to define one of these types of content:
* text,
* image,
* text & image,
* table (each cell on the table can contain inside another container)
* blank line
* blog card
* news card

> Note: the module name provides an indication what is inside of the module,
`Row+containerType`, e.g. a containe with `text` on the left and an `image` on the right is named, `RowTextImage`.

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
                </ul>
            </td>
      </tr>
      <tr>
            <td><a href="./#rowseparator" target="_blank">RowSeparator</a></td>
            <td>It is used to insert a blank line. It is possible to control the high of the line.</td>
      </tr>
      <tr>
            <td><a href="./#rowmulticolumns" target="_blank">RowMultiColumns</a></td>
            <td><ul>
                  <li>It is used to insert a table</li>
                  <li>Each table column can reuse any of the defined modules</li>
                </ul>
            </td>
      </tr>
      <tr>
            <td><a href="./#rownewlist" target="_blank">RowNewList</a></td>
            <td>
                  <ul>
                        <li>It is normally used as a submodule inside of <a href="./#rowmulticolumns" target="_blank">RowMultiColumns</a> module</li>
                  </ul>
            </td>
      </tr>
      <tr>
            <td><a href="./#rowbuttongrid" target="_blank">RowButtonGrid</a></td>
            <td>
                  <ul>
                        <li>It is normally used as a submodule inside of <a href="./#rowmulticolumns" target="_blank">RowMultiColumns</a> module</li>
                  </ul>
            </td>
      </tr>
      <tr>
            <td><a href="./#rowimage" target="_blank">RowImage</a></td>
            <td>
                  <ul>
                        <li>This module is used to insert an `image` that covers the screen width</li>
                  </ul>
            </td>
      </tr>
      <tr>
            <td><a href="./#rowimagetext" target="_blank">RowImageText</a></td>
            <td>
                  <ul>
                        <li>This module is representing as a row, with an `image` on the left and `text` on the right</li>
                  </ul>
            </td>
      </tr>
      <tr>
            <td><a href="./#rowtextimage" target="_blank">RowTextImage</a></td>
            <td>
                  <ul>
                        <li>This module is used to represent, in a row, `text` on the left and an `image` on the right </li>
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

## Examples of `modules`


### `RowText`

<img width="1180" alt="image" src="https://user-images.githubusercontent.com/3258579/146674378-2affdcd4-18f4-48a5-b857-38954693dc7d.png">

### `RowSeparator`
<img width="1180" alt="image" src="https://user-images.githubusercontent.com/3258579/146674402-d8cb7185-e767-4dfb-9a66-79ead6430c44.png">

### `RowMultiColumns`
<img width="1180" alt="image" src="https://user-images.githubusercontent.com/3258579/146674432-8800c643-3b85-4647-8c9f-b718a5869192.png">

### `RowNewList`
<img width="1180" alt="image" src="https://user-images.githubusercontent.com/3258579/146674445-f5d7f46a-6c3b-4a3d-8962-0f0f680b2511.png">

### `RowBottonGrid`
<img width="1180" alt="image" src="https://user-images.githubusercontent.com/3258579/146674459-90a77f96-a38a-4398-95ce-bacf5aceb426.png">

### `RowEvents`
<img width="1180" alt="image" src="https://user-images.githubusercontent.com/3258579/146674469-634ef489-c3ac-4f7a-9d44-3a019f827373.png">

### `RowImageText`
<img width="1134" alt="image" src="https://user-images.githubusercontent.com/3258579/146674517-2a11b964-10d9-49c2-a396-74857f35cd47.png">

### `RowTextImage`
<img width="1124" alt="image" src="https://user-images.githubusercontent.com/3258579/146674537-f07848b0-fed1-4f1a-b84b-aace9a5672f3.png">

### `RowDynamicTable`
<img width="1140" alt="image" src="https://user-images.githubusercontent.com/3258579/146674562-a4e1a8ea-c4a8-41db-98b1-f72d1161b7c8.png">

### `RowImage`

<img width="1130" alt="image" src="https://user-images.githubusercontent.com/3258579/146674618-8a39d80f-325d-4de6-b17d-2fe36474a12b.png">

### `Blogs`
<img width="1153" alt="image" src="https://user-images.githubusercontent.com/3258579/146674678-fd65ae8a-498c-4555-8865-afef125ffd8d.png">

### `News`
<img width="1158" alt="image" src="https://user-images.githubusercontent.com/3258579/146674721-f6f1770d-84a2-4dbd-b584-61bcee5fdd9b.png">