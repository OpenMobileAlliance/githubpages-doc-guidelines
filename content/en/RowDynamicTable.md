---
title: RowDynamicTable
description: ''
position: 190
category: 'MODULES'
---

## Overview
This `module` is used when it is necesary to introduce a `table`. with `filters`, `search`, and `pagination`.

## Display
This is how `RowDynamicTable` is rendered in a webpage:

<img width="1140" alt="image" src="https://user-images.githubusercontent.com/3258579/146674562-a4e1a8ea-c4a8-41db-98b1-f72d1161b7c8.png">

## Use
This table describes what `RowDynamicTable` is and how to use it

<table>
<thead>
      <tr>
            <th>Name</th>
            <th>Description</th>
      </tr>
</thead>
<tbody>
      <tr>
            <td><a href="./#rowdynamictable" target="_blank">RowDynamicTable</a></td>
            <td>
                  <ul>
                        <li>It is used when when a `table` is needed <a href="./#rowdynamictable" target="_blank">RowDynamicTable</a> module</li>
                        <li><a href="#rowdynamictable" >See example</a></li>
                  </ul>
            </td>
      </tr>
</tbody>
</table>

## Code
This is how `RowDynamicTable` is written in Markdown:

```md
  - 
    name: RowDynamicTable
    description: Table dedicated to display resources
    pagination: 10
    filter: 
     - title
     - type
     - published
    columns:
      - 
        key: title
        label: Title
        sortable: true
      - 
        key: type
        label: Type
        sortable: true
      - 
        key: published
        label: Published
        sortable: true
      - 
        key: download
        label: Download
        sortable: false
    items:
      - title:
          title: LwM2M v1.2 Features
        type:
          title: PDF
        published:
          title: 2020-Nov-10
        download:
          icon: fas download
          url: "https://www.openmobilealliance.org/release/LightweightM2M/"
          target: _blank
      - title:
          title: LwM2M v1.1 Presentation Overview
        type:
          title: PDF
        published:
          title: 2019-Jun-17
        download:
          url: "https:/www.openmobilealliance.org/release/LightweightM2M/Lightweight_Machine_to_Machine-v1_1-OMASpecworks.pdf"
          target: _blank
          icon: fas download
      - title:
          title: LwM2M v1.1 overview including new features due for release in Q2 2019
        type:
          title: Video
        published:
          title: 2019-Jan-21
        download:
          icon: fas download
          url: "https://www.youtube.com/watch?v=D7xEYnwOeHU"
          target: _blank
      - title:
          title: LwM2M Specifications
          url: "https://technical.openmobilealliance.org/Overviews/lightweightm2m_overview.html"
          target: _blank
        type:
          title: Documents
        published:
          title: 2020-Nov-10
        download:
          icon: 
      - title:
          title: LwM2M Open-Source Specifications
          url: 
          target: _blank
        type:
          title: Implementations
        published:
          title: 2020-Nov-10
        download:
          icon: fas download
          url: "https://github.com/OpenMobileAlliance/OMA_LwM2M_for_Developers/wiki/LwM2M-Open-Source-Code"
          target: _blank
      - title:
          title: LwM2M Object and Resource Registry
          url: "https://github.com/OpenMobileAlliance/lwm2m-registry"
          target: _blank
        type:
          title: Registry
        published:
          title: 2021-Oct-06
        download:
          icon: 
      - title:
          title: LwM2M Enabler Test Specifications
          url: "http://www.openmobilealliance.org/release/LightweightM2M/ETS/"
          target: _blank
        type:
          title: Test Specs
        published:
          title: 2019-Sep-12
        download:
          title: 
      - title:
          title: OMA SlideShare Account
          url: "http://www.slideshare.net/OpenMobileAlliance/presentations"
          target: _blank
        type:
          title: SlideShare
        published:
          title: 
        download:
          icon: 
```


## Properties
### Structure

```yml
-  # always start with a `-`
  name:
  description:
  pagination:
  filter:
      - title:
      - type:
      - published:
  columns:
    - # these properties define the header of the columns
      key:
      label:
      sortable:
    -
      # repite the content inside of columns for each column on the table
  items:  # the properties inside of items define the content of each row
    - title:
        title:
      type:
        title:
      published:
        title:
      download:
        icon:
        url:
        target:
    -
      #repite the content inside of items for each row on the table
```

### Description
This module inserts a `table` with multiple `columns`, `pagination`, `filtering` and `search`.

`name`: **RowDynamicTable**

`description`:
* it is a string that describes the purpose of the table.

`pagination`:
* this property indicates row many `rows` will be displayed per page

`filter`:
* this property allows to filter in alphabetic or asdesding/descending order the content on the colums. The value to insert is the title of the column, which is described in by the `key` property of the `columns` 

`columns`:
* This attribute is a wraper that defines the headers or titles of the `table`. It contains the following properties:

* `key`:
  * this property holds the `key` value that identify the title of the column

* `label`:
  * the value of this property is used to display the column title

* `sortable`:
  * this property can have two values:
    * `true`: the columns can be filtered
    * `false`: the column cannot be filtered

`items`:
* this property is a wrapper that lists the content of each `row` on the `table`

* `title`:
  * this is a wrapper for the value associated to the `key` property
  * this value MUST be the same as the one defined inside of the `columns` properties. In this particular example the value of the `key` property was set to `title`

   * `title`:
    * this property contains a value to display on the row of the `table`

* `type`:
  * this is a wrapper for the `type` property
  * this value MUST be the same as the one defined inside of the `columns` properties. In this particular example the value of the `key` property was set to `type`

   * `title`:
      * this property contains a value to display on the `table`

* `published`:
  * this is a wrapper for the `published` property
  * this value MUST be the same as the one defined inside of the `columns` properties. In this particular example the value of the `key` property was set to `published`

  * `title`:
      * this property contains a value to display on the `table`

* `download`:
  * this is a wrapper for the `published` property
  * this value MUST be the same as the one defined inside of the `columns` properties. In this particular example the value of the `key` property was set to `download`
  * Inside of this wrapper it has been defined some extra properties:

   * `icon`:
     * the `icon` property is used to insert an icon from an external reference XXX
  
   * `url`:
    * the `url` property is used to insert a URL
    * a click in the icon will open the webpage on the corresponding URL

   * `target`:
    * this is an optinal property which value is `_blank`
    * if this value `_blank` is inserted then the webpage will be open in a new window

## F.A.Q