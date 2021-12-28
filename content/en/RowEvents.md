---
title: RowEvents
description: ''
position: 180
category: 'MODULES'
---
## Overview

## Display

This is how `RowEvents` is rendered in a webpage:

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
            <td><a href="./#rowevents" target="_blank">RowEvents</a></td>
            <td>
                  <ul>
                        <li>It is normally used as a submodule inside of <a href="./#rowmulticolumns" target="_blank">RowMultiColumns</a> module</li>
                        <li><a href="#rowbuttongrid" >See example</a></li>
                  </ul>
            </td>
      </tr>
</tbody>
</table>

## Code

This is how `RowEvents` is written in Markdown:
> Note: in the example below, the `module` is used in of a `RowButtonGrid` and it is defined after the property `cols`.

```md
      - 
        name: RowButtonGrid
        id: events
        cols:
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
`name`: **RowButtonGrid**

`id`: **events**
`cols`:
  * `title`:
  * `subtitle`:
  * `image`:
  * `items`:
      * `title`:
      * `subtitle`:
      * `status`:
      * `url`:
      * `target`:

### Description
`name`: **RowButtonGrid**
`id`: **events**
`cols`:
* this is an empty property that it is used to list the header content of the column
* these properties were already defined in the [`RowButtonGrid`]() `module`
  * `title`:
  * `subtitle`:
  * `image`:
  * `items`:
    * this property doesn't have assigned any value, it used to list the properties of the cells inside of the column.
    * the following properties are the same as the ones defined inside of the `items` property of the [`RowButtonGrid`]()
      * `title`:
      * `subtitle`:
      * `status`:
      * `url`:
      * `target`: