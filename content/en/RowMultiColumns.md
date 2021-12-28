---
title: RowMultiColumns
description: ''
position: 150
category: 'MODULES'
---
## Overview
This `module` is use to insert a table inside of the `container`. The property `cols` is used to define the number of columns of the table and the property `widths` is used to define the width of each column. The total width of the `container` is of `12` columns. The additon of all the values inserted in the `widths` property MUST be equal to `12`.

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
            <td><a href="./#rowmulticolumns" target="_blank">RowMultiColumns</a></td>
            <td><ul>
                  <li>It is used to insert a table</li>
                  <li>Each table column can contain any of the defined modules</li>
                  <li><a href="#rowmulticolumns" >See example</a></li>
                </ul>
            </td>
      </tr>
</tbody>
</table>

## Display

This is how `RowMultiColumns` is rendered on the webpage:

<img width="1180" alt="image" src="https://user-images.githubusercontent.com/3258579/146674432-8800c643-3b85-4647-8c9f-b718a5869192.png">

## Code

This is the content of the table written in a markdown file:

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
## Property
>Note: please pay special attention to the [indentation]() of the `properties` and `submodules`
`name`: **RowMultiColumns**

`cols`:
* the value of this property is an integer from `1` to `12`, which represents the number of columns contained by the table across the webpage width.

`widths`:
* this property represents the width of each column by an integer. The addition of all the columns widths values MUST be equal to `12`, which is the maximum number of columns that a `container` can display.

`modules`:
* this property doesn't have any value, it is used to [indent]() to the right the following `properties`:

  * `name`:
    * this represents the name of the [`module`]()

  * `title`:
    * the value of this `property` will be used to display at the top of the column
    * the value will be displayed in `bold`

  * `subtitle`:
    * the value of this `property` will be displayed in `italic` below the title

  * `image`:
    * each column will have an `icon` displayed on top of the `title`
    * the `icon` is stored externally, out side of the repository in XXX
    * in this case the value of the `image` is a `string` which name represents an `icon` in the above reference

*Submodule 1*
  * This indicates that one of the existing [`module`]() can be inserted inside of the `RowMultiColumns` as a column.
  * See content [indentation]()

*Submodule n*
  * A [`module`]() MUST be inserted for each defined column 
  * See content [indentation]()

## F.A.Q

