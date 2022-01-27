---
title: RowNewsCards
description: ''
position: 163
category: 'MODULES'
---
## Overview
It it used to display the content inside of the folder **News**. 
This `module` is be used by itself inside of a `container`.

## Display

This is how `RowNewsCards` module is rendered in a webpage:
<img width="1231" alt="image" src="https://user-images.githubusercontent.com/3258579/150850423-13f59bcc-01f6-4ee3-ab09-2721b75e248f.png">


## Use
This table describes what `RowNewsCards` is and how to use it.

<table>
<thead>
      <tr>
            <th>Name</th>
            <th>Description</th>
      </tr>
</thead>
<tbody>
      <tr>
            <td><b>RowNewsCards</b></td>
            <td>
                  <ul>
                        <li>This module is used to provide a list of **News** available in the News folder </li>
                        <li>The information displayed is in the form of Cards in a row next to each other.</li>
                        <li>In the News markdown file, (inside of the News folder) the property <i>homepage</i> may contain an integer value. This value indicates the order from left to right in which the News will appears in the set of Cards</li>
                        <li>To view other method to diplay news please refer to <a href="https://openmobilealliance.github.io/githubpages-doc-guidelines/RowNewList.md" target="_blank">RowNewList</a> module</li>
                  </ul>
            </td>
      </tr>
</tbody>
</table>

## Code

This is an example of how [`RowNewsCards`](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/RowNewsCards.md) is written on a markdown file:

```md
      - 
        name: RowNewsCards
        news: 
```
## Properties
### Structure

```yml
-  # always start with a `-`
  name:
  news:
```

### Description

`name`: **RowNewsCards**

`news`:
* it is an empty property to indicate that the module will holds news

## F.A.Q
Please create an issue by clickig [here](https://github.com/OpenMobileAlliance/githubpages-doc-guidelines/issues).
