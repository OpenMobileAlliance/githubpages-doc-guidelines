---
title: RowMultiColumns
description: ''
position: 150
category: 'MODULES'
---
## Overview
This `module` is use to insert a table inside of a `container`. The property `cols` is used to define the number of columns of the table and the property `widths` is used to define the width of each column. The total width of the `container` is `12` columns. The addition of all the values inserted in the `widths` property MUST be equal to `12` in order to keep the table rendered correctly. 
At the same time each column of the table can contain its own `module`.

## Display

This is how `RowMultiColumns` is rendered on the webpage:
The table is inserted inside of the container. The table has 3 columns. Each column is used by a `module`:
* Column 1: `RowNewList`
* Column 2: `RowButtonGrid` table that contains 5 columns
* Column 3: `RowButtonGrid` with an special `id` property set to *events* that extends the width of the buttons or bubles.

<img width="1180" alt="image" src="https://user-images.githubusercontent.com/3258579/149394151-ff366cd7-433c-4944-b15d-6d83322b9f10.png">

## Use
This table describes what `RowMultiColumns` is and how to use it.

<table>
<thead>
      <tr>
            <th>Name</th>
            <th>Description</th>
      </tr>
</thead>
<tbody>
      <tr>
            <td><b>RowMultiColumns</b></td>
            <td><ul>
                  <li>It is used to insert a table on the webpage, which width can be an equivalent to 12 columns</li>
                  <li>Each column of the table can contain any module defined on these guidelines</li>
                  <li>The width of each column of the table is controlled by a property called <i>width</i>. The additions of the columns widths MUST be <b>12</b> or less </li>
                  <li>The property <i>columns</i> is a wrapper to hold the properties that define the column(s) content. Each column will contain its own module </li>
                </ul>
            </td>
      </tr>
</tbody>
</table>

## Code

This an [example](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md) of a `RowMultiColumns` module written  in a markdown file:
In this example, the table contains **12** columns allocated as follow:
* the first column takes an space of **2** columns out of **12** possible columns and it contains the [`RowNewList`](/RowNewList.md) module
* the second columns takes an space of **8** columns out of **12** possible columns and it contains the [`RowButtonGrid`](/RowButtonGrid.md) module, which is another table that contains **5** columns in the space allocated to the second column, with a width of **8** columns

```md
  -
    name: RowMultiColumns
    cols: 3
    widths: [2, 8, 2]
    modules:
      - 
        name: RowNewsList
        title: News
        subtitle: Latest
        image: fas cube
      -
        name: RowButtonGrid
        cols:
          -
            title: LwM2M
            subtitle: Protocol
            image: fas cog
            items:
              -
                title: V1.2
                subtitle: 10-Nov-20
                status: active
                url: https://openmobilealliance.github.io/dmse-documentation/#v12-functionality
                target: _blank
              - 
                title: V1.1.1
                subtitle: 17-Jun-2019
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#v11-functionality
                target: _blank
              - 
                title: V1.0.2
                subtitle: 02-Feb-2018
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#v10-functionality
                target: _blank
          -
            title: Test
            subtitle: Specs
            image: fas check-circle
            items:
              -
                title: V1.2
                subtitle: Pending
                status: pending  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url:
              - 
                title: V1.1
                subtitle: 12-Sep-2019
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: http://www.openmobilealliance.org/release/LightweightM2M/ETS/OMA-ETS-LightweightM2M-V1_1-20190912-D.pdf
              - 
                title: V1.0.2
                subtitle: 18-Aug-2015
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: http://www.openmobilealliance.org/release/LightweightM2M/ETS/OMA-ETS-LightweightM2M-V1_0_2-20180815-A.zip
          -
            title: LwM2M
            subtitle: Enablers
            image: fas spinner
            items:
              - 
                title: Binary Application Data
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-binary-application-data
                target: _blank
              - 
                title: Connectivity Management
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-connectivity-management
                target: _blank
              - 
                title: Device Capabilities Management
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-device-capabilities-management
                target: _blank
              - 
                title: Event Log
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-event-log
                target: _blank
              - 
                title: Lock & Wipe
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-lock--wipe
                target: _blank
              - 
                title: Portfolio Object
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-portfolio-object
                target: _blank
              - 
                title: Software Management
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-software-management
                target: _blank
              - 
                title: LwM2M Virtual Observation
                subtitle:
                status: active  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://openmobilealliance.github.io/dmse-documentation/#lwm2m-virtual-observation
                target: _blank
          -
            title: Resources
            subtitle: Information
            image: fas laptop
            items:
              - 
                title: LwM2M Registry
                subtitle:
                status: highlight  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: http://www.openmobilealliance.org/wp/OMNA/LwM2M/LwM2MRegistry.html
                target: _blank
              - 
                title: Developer's Wiki
                subtitle:
                status: highlight  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://github.com/OpenMobileAlliance/OMA_LwM2M_for_Developers/wiki
                target: _blank
          -
            title: Implementations
            subtitle: Code
            image: fas handshake
            items:
              - 
                title: Leshan
                subtitle: (Eclipse)
                status: highlight  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://github.com/eclipse/leshan
                target: _blank
              - 
                title: Wakaama
                subtitle: (Eclipse)
                status: highlight  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://github.com/eclipse/wakaama
                target: _blank
              - 
                title: Anjay
                subtitle: (AVSystem)
                status: highlight  # options "active" = on; "deactive" = off; "pending" = in transition; "highlight" = extra visible
                url: https://github.com/AVSystem/Anjay
                target: _blank
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

```yml
-  # always start with a `-`
  name:
  cols:
  widths:
  modules:
    -    # these properties define the content of each column header
      name:
      title:
      subtitle:
      image:
    -
      # insert another module as a submodule
    - 
      # insert as many modules as you need

```

### Description

>Note: please pay special attention to the [indentation]() of the `properties` and `submodules`
`name`: **RowMultiColumns**

`cols`:
* the value of this property is an integer from `1` to `12`, which represents the number of columns contained by the table that goes across the webpage width.

`widths`:
* this property represents the width of each column. It values MUST be an integer. The addition of all the columns widths values MUST be equal to `12`, which is the maximum number of columns that a `container` can display.

`modules`:
* this property doesn't have any value, it is used to [indent]() to the right the following `properties`:

  * `name`:
    * this represents the name of the [`module`](https://openmobilealliance.github.io/githubpages-doc-guidelines/modules)

  * `title`:
    * the value of this `property` will be used to display a title at the top of the column
    * the value will be displayed in `bold`

  * `subtitle`:
    * the value of this `property` will be used to display a subtitle, in `italic` and below the title

  * `image`:
    * each column will have an `icon` which is displayed on top of the `title` property
    * the `icon` is stored externally, out side of the repository in [free images](https://fontawesome.com/v5.15/icons?d=gallery&p=2&s=brands,solid&m=free)
    * in this case the value of the `image` is a `string` which name represents an `icon` in the above reference, e.g.: search for image name **handshake** the value to insert on the `image` property is prefixed by `fas` string, e.g., *fas handshake*

*Submodule 1*
  * This indicates that one of the existing [`module`](https://openmobilealliance.github.io/githubpages-doc-guidelines/modules) can be inserted inside of the `RowMultiColumns` as a column.
  * See content [indentation]()

*Submodule n*
  * A [`module`](https://openmobilealliance.github.io/githubpages-doc-guidelines/modules) MUST be inserted for each defined column 
  * See content [indentation]()

## F.A.Q
Please create an issue by clicking [here](https://github.com/OpenMobileAlliance/githubpages-doc-guidelines/issues).
