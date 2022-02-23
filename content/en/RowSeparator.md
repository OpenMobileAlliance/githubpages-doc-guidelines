---
title: RowSeparator
description: ''
position: 105
category: 'MODULES'
---
## Overview
When building a webpage sometimes is necessary to separate one `container` from the other with an empty line. The high of the empty line between two consecutive `containers` can be adjusted with the property `size`.

The `RowSepartor` allows to establish a gap between two consecutive `containers`.

![image](https://user-images.githubusercontent.com/3258579/147421681-8183eed8-d5b6-4c3d-ba24-d96612f81864.png)

## Display

<img width="1180" alt="image" src="https://user-images.githubusercontent.com/3258579/146674402-d8cb7185-e767-4dfb-9a66-79ead6430c44.png">

## Use
This table describes what is and how to use the `RowSeparator` module.

<table>
<thead>
      <tr>
            <th>Name</th>
            <th>Description</th>
      </tr>
</thead>
<tbody>
      <tr>
            <td><b>RowSeparator</b></td>
            <td>
               <ul>
                  <li>It is used to insert an empty line or space between two consecutive modules </li>
                  <li>It is possible to control the high of the line by using the <b><i>size</i></b> property and a value: </li>
                        <ul>
                              <li><b><i>XS</i></b> : extra small empty line</li>
                              <li><b><i>S</i></b> : small empty line</li>
                              <li><b><i>M</i></b> : medium empty line</li>
                              <li><b><i>L</i></b> : large empty line</li>
                              <li><b><i>XL</i></b> : extra large empty line</li>
                        </ul>
                </ul>
            </td>
      </tr>
</tbody>
</table>

## Code
This is an [example](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md) of a `RowSeparator` module written in a markdown file:

```md [oma_github_pages/content/index.md]
  -
    name: RowSeparator
    size: S #provide XS, S, M, L, XL spacing between component
```

## Properties
### Structure

```yml
-  # always start with a `-`
   name:
   size:
```

### Description

`name`: **RowSeparator**

`size`: It is used to control the high of the empty space between two consecutive `containers`
* `XS`: extra small empty line
* `S` : small empty line
* `M` : medium empty line
* `L` : large empty line
* `XL`: extra large empty line

## F.A.Q
Please create an issue by clicking [here](https://github.com/OpenMobileAlliance/githubpages-doc-guidelines/issues).
