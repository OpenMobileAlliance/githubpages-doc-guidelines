---
title: RowSeparator
description: ''
position: 105
category: 'MODULES'
---
## Overview
When building a page sometimes is necessary to separate one `container` from the other with an empty line. The high of the empty line between two consecutive `containers` can be adjusted with the property `size`

The `RowSepartor` allows to establish a gap between two consecutive `containers`.

![image](https://user-images.githubusercontent.com/3258579/147421681-8183eed8-d5b6-4c3d-ba24-d96612f81864.png)


## Use
This table describes what is and how to use `RowSeparator` module.

<table>
<thead>
      <tr>
            <th>Name</th>
            <th>Description</th>
      </tr>
</thead>
<tbody>
      <tr>
            <td><a href="./#rowseparator" target="_blank">RowSeparator</a></td>
            <td>
               <ul>
                  <li>It is used to insert en empty line. </li>
                  <li>It is possible to control the high of the line by using the <b><i>size</i></b> property and a value: </li>
                        <ul>
                              <li><b><i>XS</i></b> : extra small empty line</li>
                              <li><b><i>S</i></b> : small empty line</li>
                              <li><b><i>M</i></b> : medium empty line</li>
                              <li><b><i>L</i></b> : large empty line</li>
                              <li><b><i>XL</i></b> : extra large empty line</li>
                        </ul>
                  <li><a href="#rowseparator" >See example</a></li>
                </ul>
            </td>
      </tr>
</tbody>
</table>

## Display

<img width="1180" alt="image" src="https://user-images.githubusercontent.com/3258579/146674402-d8cb7185-e767-4dfb-9a66-79ead6430c44.png">

## Code
This is how to insert a `RowSeparator` in a Markdonw file:

```md [oma_github_pages/content/index.md]
  -
    name: RowSeparator
    size: S #provide XS, S, M, L, XL spacing between component
```
## Properties
`name`: **RowSeparator**

`size`: It is used to control the high of the empty space between two consecutive `containers`
* `XS`: extra small empty line
* `S` : small empty line
* `M` : medium empty line
* `L` : large empty line
* `XL`: extra large empty line
## F.A.Q
