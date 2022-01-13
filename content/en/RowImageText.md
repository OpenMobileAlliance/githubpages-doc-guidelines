---
title: RowImageText
description: ''
position: 140
category: 'MODULES'
---
## Overview
This module is similar to `RowTextImage` with the difference that the `image` goes on the left-hand side and the `text` on the right-hand side. The width inside of the `container` taken by the `image` is controlled by the property `cols`. The value of this property goes from `0` to `12` columns. The bigger of the number of columns the more space will be dedicated to the `image` and the difference to `12` will be dedicated to the `text`.

## Display

This is how `RowImageText` is rendered in a webpage:

<img width="1134" alt="image" src="https://user-images.githubusercontent.com/3258579/146674517-2a11b964-10d9-49c2-a396-74857f35cd47.png">

## Use
This table desribes what `RowImageText` is and how to use it.

<table>
<thead>
      <tr>
            <th>Name</th>
            <th>Description</th>
      </tr>
</thead>
<tbody>
      <tr>
            <td><b>RowImageText</b></td>
            <td>
                  <ul>
                        <li>This module is represented as a row, with an `image` on the left-hand side and `text` on the right-hand side</li>
                        <li>The space taken by the `image` on the left-hand side is controlled by the property <i>cols</i>. This property can take a value from 0 to 12. The higher the value the more space is allocated to the `image` and less to the `text` </li>
                  </ul>
            </td>
      </tr>
</tbody>
</table>

## Code

This is an [example](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md) a `RowImageText` module written in a markdown file:

```md
  -
    name: RowImageText
    cols: 3
    image: images/dmse.png
    status: second #second-wide (extend the width of the image), "second" provides a background color to the text or empty
    text: | 
      ##### **Device Management & Service Enablement Working Group**

      *Home to the widely deployed Internet of Things (IoT) protocol, LightweightM2M (LwM2M), the Device Management & Service Enablement Working Group (DMSE WG) specifies protocols and mechanisms to achieve the management of mobile devices, services access and software on connected devices across networks.*
      
      Since 2002, the DMSE WG has released a suite of specifications which includes 20+ mobile service enabler specifications and more than 60 Management Objects providing simple, reliable and cost-effective ways to deploy new applications and services while minimizing the risk. The most market diffused of the Management Objects is certainly the Firmware Update Management Object (FUMO) with **deployments in the billions of devices**. An additional 20+ Management Objects have been defined by other standards organizations, which cooperate with OMA SpecWorks to avoid fragmentation and duplication. DMSE technologies easily manage converged and multi-mode devices on any network, including devices that do not have a SIM card, as well as resource-constrained devices. Explore the OMA [DMSE](https://technical.openmobilealliance.org/index.html)and [LwM2M](https://openmobilealliance.github.io/dmse-documentation/) specifications.
```

## Properties
### Structure
These are the properties that controls the content on this module:
```yml
-  # always start with a `-`
  name:
  cols:
  image:
  status:
  text:
```

### Description
`name`: **RowImageText**

`cols`: 
* the value of this property is an integer between **0** to **12** that represents the columns or space allocated to the `image` content
* the larger the number the more space will be dedicated to the `image` and less space to the `text` content

`image`: 
* as in the `RowImage`module, it represents the location of the image, by the fault all the images MUST be place inside of the folder `static/images/`

`status`: 
* as in the `RowImage` module, it is an optional property
* if it is set to `border-image` value, it trims off the content of the `image` that fall outside of the window defined by the `border-image`

`text`:
* as in the `RowText` module, this property contains the markdown text to be displayed by the container
* if more than one line of text is needed, then insert the special charter `|`, this will allow multiple lines of Markdown text

## F.A.Q
