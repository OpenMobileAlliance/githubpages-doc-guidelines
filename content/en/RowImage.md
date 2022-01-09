---
title: RowImage
description: ''
position: 120
category: 'MODULES'
---
## Overview

## Display

This is how a `RowImage` module is rendered in a webpage:

<img width="1130" alt="image" src="https://user-images.githubusercontent.com/3258579/146674618-8a39d80f-325d-4de6-b17d-2fe36474a12b.png">

## Use
This table describes what is and how to use the `RowImage` module.

<table>
<thead>
      <tr>
            <th>Name</th>
            <th>Description</th>
      </tr>
</thead>
<tbody>
      <tr>
            <td><b>RowImage</b></td>
            <td>
                  <ul>
                        <li>This module is used to insert an <b><i>image</i></b> that goes across the screen width</li>
                  </ul>
            </td>
      </tr>
</tbody>
</table>



## Code
This is how a `RowImage` module is written in markdown:

```md [oma_github_pages/content/index.md]
  -
    name: RowImage
    cols: # optional, restrics the image to the space betwen column 1 to 12
    image: "/images/events.png"
    title: separator
    status: # optional, `border-image` restricts the image to a window X, Y
```
This is an example of a [`RowImage`](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/faq.md).

## Properties
### Structure
```yml
-  # always start with a `-`
   name:
   image:
   title: 
   status:
```

### Description
These are the properties of the `RowImage` module: 

`name`: **RowImage**

`image`:
* location of the image, by the fault all the images MUST be place inside of the folder `static/images/`

`title`: 
* it provides a title to the image

`status`:
* it is an optional property
* if the property is set to *border-image*, then a window (X,Y) is place on top of the image trimming anything outside of the window

## F.A.Q