---
title: RowEvents
description: ''
position: 180
category: 'MODULES'
---
## Overview

## Display

This is how `RowEvents` module is rendered in a webpage:

<img width="1180" alt="image" src="https://user-images.githubusercontent.com/3258579/146674469-634ef489-c3ac-4f7a-9d44-3a019f827373.png">

## Use
This table describes what `RowEvents` is and how to use it.

<table>
<thead>
      <tr>
            <th>Name</th>
            <th>Description</th>
      </tr>
</thead>
<tbody>
      <tr>
            <td><b>RowEvents</b></td>
            <td>
                  <ul>
                        <li>This module is used to highlight information related to events</li>
                        <li>The module presents the information in a column, where each row contains a button or bubble with information and a background color</li>
                        <li>The module can also be used as a submodule inside of e.g.: <a href="https://openmobilealliance.github.io/githubpages-doc-guidelines/RowMultiColumns" target="_blank">RowMultiColumns</a> module</li>
                        <li></li>
                  </ul>
            </td>
      </tr>
</tbody>
</table>

## Code

This is an example of how a [`RowEvents`](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md) module is written in Markdown file:

> Note: in this example, the `module` is used inside of a `RowButtonGrid` which is also inside of a `RowMultiColumns`.

```md
- 
      title: Events
      subtitle: Coming
      image: fas users
      items:
            - 
            title: Last Virtual Event
            subtitle: 2021-Nov-10
            status: deactive  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
            url: https://github.com/OpenMobileAlliance/OMA_LwM2M_for_Developers/wiki/Virtual-TestFest-Mar-2021
            target: _blank
            - 
            title: Previous
            subtitle: Events
            status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
            url: https://github.com/OpenMobileAlliance/OMA_LwM2M_for_Developers/wiki/Virtual-TestFest-Mar-2021
            target: _blank
```
## Properties
### Structure

```yml
-  # always start with a `-`
  title: Events
  subtitle:
  image:
  items:
    - # this section defines the content on each row
      title:
      subtitle:
      status:
      url:
      target:
   -  # repite the properties inside of items for each row
```
If the `module` is used inside of the of e.g.: `RowButtonGrid` which at the same time is inside of `RowMultiColumns`, then the structure is:

```yml
  - # alwasys start with `-`, the next set of properties define a table with 3 columns
    name: RowMultiColumns
    cols: 3
    widths: [2, 8, 2]
    modules:'
      - 
        name: RowButtonGrid  # one of the modules
        id:   event          # this property will provide wider buttons or bubbles
        cols:                # this property doesn't have a value but indicates the beginning of the column
          - 
            title:           # title of the column in bold
            subtitle:        # subitle of the column in italic
            image:           # image e.g. fas users
            items:           # it doesn't have a value, indicates the beginning of the rows
            - # this section defines the content on each row, which are represented as buttons or bubbles
                  title:     # title of the button in bold
                  subtitle:  # subtitle of the button in italic
                  status:    # provides the background color
                  url:       # host the value for the URL to point to
                  target:    # allows to open the URL content in a new page if it is set to "_blank"
            -  # repite the properties inside of items for each row
```

### Description

`name`: **RowButtonGrid**

`id`: **events**

`cols`:
* this is an empty property that it is used to list the header content of the column
* these properties were already defined in the [`RowButtonGrid`](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowButtonGrid) `module`
  * `title`:
  * `subtitle`:
  * `image`:
  * `items`:
    * this property doesn't have assigned any value, it used to list the properties of the rows inside of the column.
    * the following properties are the same as the ones defined inside of the `items` property of the [`RowButtonGrid`](https://openmobilealliance.github.io/githubpages-doc-guidelines/RowButtonGrid)
      * `title`:
      * `subtitle`:
      * `status`:
      * `url`:
      * `target`:

## F.A.Q