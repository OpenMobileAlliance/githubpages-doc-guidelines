---
title: RowDynamicTable
description: ''
position: 190
category: 'MODULES'
---

## Overview
This `module` is used when it is necesary to introduce a table with `filters`, `search`, and `pagination`. The columns headers are defined inside of the property `columns` by a set of properties: `key`, `label` and `sortable`. The content of the rows are also defined inside of the property `items` by another set of sub-properties: `title`, `icon`, `url`, `target`. These set of sub-properties are used to characterized the specific names given to the column readers in the `key` values.

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
            <td><b>RowDynamicTable</b></td>
            <td>
                  <ul>
                        <li>This module is used when is needed to present information in a table with rows and columns</li>
                        <li>The table is supported by other functions such as: <b>sorting</b> columns content in ascendent or descendent order; <b>searching</b> that filter the rows by content; and <b>pagination</b> that allows to present the content in groups of certain number of rows or pages</li>
                        <li>The table contains properties to define the title of the column headers as well as the row content</li>
                        <li>The table cells may contain: text, links, or icons to characterize the content inside of each row and cell</li>
                  </ul>
            </td>
      </tr>
</tbody>
</table>

## Code
This is an example of how a [`RowDynamicTable`](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/resources.md) module is written in Markdown:

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
  name: RowDynamicTable   # the name of the module
  description:            # the table description
  pagination:             # the number of pages or rows to display per page
  filter:                 # this property is a wrapper that defines the name of the columns to search
      - title:            # these names cange from table to table
      - type:
      - published:
  columns:                # this property is a wrapper that groups the properties to define the column headers
    -                     # repite the content inside of this section for each column of the table
      key:                # this property indicates the key value of the column header
      label:              # it indicates if the name of the header to display at the header column
      sortable:           # true or false, it indicates if the column is sortable in ascending/descending order
  items:                  # the properties inside of items define the content of each row
    - title:              # this name is particular to each table, in this example the column header is called title
        title:            # this represents the value to be displayed on that cell
      type:               # this name is particular to each table, in this example the column header is called type
        title:            # this represents the value to be displayed on that cell
      published:          # this name is particular to each table, in this example the column header is called published
        title:            # this represents the value to be displayed on that cell
      download:           # this name is particular to each table, in this example the column header is called download
        icon:             # this represents the name of image-icon to display on that cell
        url:              # this property is used to display a URL on that cell
        target:           # if the value of this property is set to "_blank", then a new webpage will be open to display the content
    -                     #repite the content inside of items for each row on the table
```

### Description
This `module` inserts a table with multiple `columns`, `pagination`, `filtering` and `searching` functionality.
The properties: `title`, `icon`, `url` and `target` are properties that can be used inside of any of the cell of the table.

`name`: **RowDynamicTable**

`description`:
* it is a string that describes the purpose of the table.

`pagination`:
* this property indicates row many `rows` will be displayed per page

`filter`:
* this property allows to filter in asdesding/descending order the content on the colums. The value to insert is the title of the column, which is described in by the `key` property of the `columns` 

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
  * this is the name to be displayed as the header of the first column
  * this value MUST be the same as the one defined inside of the `columns` properties. In this particular example the value of the `key` property was set to `title`

   * `title`:
    * this property contains a value to display on the row of the `table`

* `type`:
  * this is the name to be displayed as the header of the second column
  * this value MUST be the same as the one defined inside of the `columns` properties. In this particular example the value of the `key` property was set to `type`

   * `title`:
      * this property contains a value to display on the `table`

* `published`:
  * this is the name to be displayed as the header of the third column
  * this value MUST be the same as the one defined inside of the `columns` properties. In this particular example the value of the `key` property was set to `published`

  * `title`:
      * this property contains a value to display on the `table`

* `download`:
  * this is the name to be displayed as the header of the fourth column
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
Please create an issue by clicking [here](https://github.com/OpenMobileAlliance/githubpages-doc-guidelines/issues).