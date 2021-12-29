---
title: RowNewList
description: ''
position: 160
category: 'MODULES'
---
## Overview
It lists the content inside of the folder **News**. 
The `module` can be used by itself inside of a `container` or as a `submodule` inside for example a table or [`RowMultiColumns`]() `module`.

## Display

This is how `RowNewList` module is rendered in webpage:

<img width="1180" alt="image" src="https://user-images.githubusercontent.com/3258579/146674445-f5d7f46a-6c3b-4a3d-8962-0f0f680b2511.png">

## Use
This table describes what `RowNewList` is and how to use it.

<table>
<thead>
      <tr>
            <th>Name</th>
            <th>Description</th>
      </tr>
</thead>
<tbody>
      <tr>
            <td><a href="./#rownewlist" target="_blank">RowNewList</a></td>
            <td>
                  <ul>
                        <li>It is normally used as a submodule inside of <a href="./#rowmulticolumns" target="_blank">RowMultiColumns</a> module</li>
                        <li><a href="#rownewlist" >See example</a></li>
                  </ul>
            </td>
      </tr>
</tbody>
</table>

## Code

This is how it is written:

```md
      - 
        name: RowNewsList
        title: News
        subtitle: Latest
        image: fas cube
```
## Properties
`name`: **RowNewsList**

`title`:
* it provides a **bold** title at the top of the column

`subtitle`:
* it provides an *italic* subtitle, below the `title`

`image`:
* same arrangement as in the `RowMultiColumns` module
* this is an `icon` displayed on top of the `title`
* the `icon` is stored externally, out side of the repository in XXX
* in this case the value of the `image` is a `string` which name represents an `icon` in the above reference

## F.A.Q
