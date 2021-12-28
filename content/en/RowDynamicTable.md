---
title: RowDynamicTable
description: ''
position: 180
category: 'MODULES'
---

## Overview

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
> Note: it is important to keep the indentation described in this structure.

`name`

`description`

`pagination`

`filter`:
* `title`
* `type`
* `published`

`columns`:

* `key`

* `label`

* `sortable`

`items`:

* `title`:

   `title`

* `type`:

   * `title`

* `published`:

   * `title`

* `download`:

   * `icon`
   * `url`
   * `target`

### Description
This module inserts a table with multiple columns, with pagination, and filtering.
`name`:

`description`:

`pagination`:

`filter`:
It is composed of one or more attributes

`columns`:
This attribute is a wraper that contains the following attributes:

* `key`:

* `label`:

* `sortable`:

`items`:

* `title`:

   `title`:

* `type`:

   * `title`:

* `published`:

   * `title`:

* `download`:

   * `icon`:
   * `url`:
   * `target`: