---
title: RowImage
description: ''
position: 120
category: 'MODULES'
---
## Overview

## Use
This table describes what is and how to use `RowImage` module.

<table>
<thead>
      <tr>
            <th>Name</th>
            <th>Description</th>
      </tr>
</thead>
<tbody>
      <tr>
            <td><a href="./#rowimage" target="_blank">RowImage</a></td>
            <td>
                  <ul>
                        <li>This module is used to insert an <b><i>image</i></b> that goes across the screen width</li>
                        <li><a href="#rowimage" >See example</a></li>
                  </ul>
            </td>
      </tr>
</tbody>
</table>

## Display

This is how `RowImage` is rendered in a webpage:

<img width="1130" alt="image" src="https://user-images.githubusercontent.com/3258579/146674618-8a39d80f-325d-4de6-b17d-2fe36474a12b.png">

## Code
This is how `RowImage` is written in Markdown:

```md [oma_github_pages/content/index.md]
  -
    name: RowImage
    cols: # optional, restrics the image to the space betwen column 1 to 12
    image: "/images/events.png"
    title: separator
    status: # optional, `border-image` restricts the image to a window X, Y

```
## Properties
`name`: **RowImage**

`cols`: 
* integer from 1 to 12, that indicates the width space taken by the image

`image`:
* location of the image, by the fault all the images MUST be place inside of the folder `static/images/`


`title`: 
* it provides a title to the image

`status`:
* it is an optional property
* `border-image` place a window (X,Y) on top of the image trimming anything outside of the window

## F.A.Q