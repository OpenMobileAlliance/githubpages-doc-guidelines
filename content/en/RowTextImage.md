---
title: RowTextImage
description: ''
position: 130
category: 'MODULES'
---
## Overview
This module allows to insert of a container that covers the width of the webpage a `text` paragraph (Markdown language) on the left-hand side and an `image` on the right-hand side.
The space taken by the `text` is controlled by the property `cols`. The value of `cols` is an integer from 1 to 12. The higher the value, the more space will be dedicated to the `text` part.

## Display

This is how the `RowTextImage` module is rendered in a webpage:

<img width="1124" alt="image" src="https://user-images.githubusercontent.com/3258579/146674537-f07848b0-fed1-4f1a-b84b-aace9a5672f3.png">

## Use
This table describes what the `RowTextImage` module is and how to use it.

<table>
<thead>
      <tr>
            <th>Name</th>
            <th>Description</th>
      </tr>
</thead>
<tbody>
      <tr>
            <td><b>RowTextImage</b></td>
            <td>
                  <ul>
                        <li>This module is used to represent in a row:`text` on the left-hand side and an `image` on the right-hand side.</li>
                        <li>The space taken by the `text` is controlled by the property <i>cols</i>. This property can have a value from 1 to 12. The higher the value the more space is dedicated to the `text` portion</li>
                  </ul>
            </td>
      </tr>
</tbody>
</table>

## Code

This is an example of a `RowTextImage` module written in a markdown file:

```md
  -
    name: RowTextImage
    cols: 9
    image: images/ipso.png
    status: #second-wide
    text: | 
      ##### **IPSO Smart Objects Working Group (IPSO)**
      In December 2017, the IPSO Alliance joined forces with the Open Mobile Alliance. OMA SpecWorks was launched in early 2018 from the two organizations and the IPSO Smart Objects Working Group (IPSO WG) was formed. The IPSO WG is focused on enabling IoT devices to communicate, understand and trust each other with global interoperability based on open standards.

      IPSO WG’s charter is to develop, establish, and create the industry leadership of an “IPSO Platform” that includes the definition and support of Smart Objects with an emphasis on object interoperability on protocol and data layers and of Identity and Privacy technologies. The mission is to create a platform and support system that includes libraries, repositories, design kits, and industry awareness for discovery and interoperability of IoT Smart Objects.

      The IPSO Alliance is not a standards organization, but an alliance that promotes and supports Smart Objects, and manages an IPSO Smart Object Registry that includes libraries, icons and repositories to be used by worldwide standard definition organizations (SDOs), special interest groups (SIGs), open communities and original equipment manufacturers (OEMs). The creation of a fully functional IPSO Smart Object Registry provides an avenue for industry adoption. IPSO has the goal to create Smart Object definitions, instantiations, data models, design models, reference architectures, icons, and brand, which include all the attributes needed to be an integral component of an IoT Smart Object Marketplace.
```

## Properties
### Structure

```yml
-  # always start with a `-`
   name:
   cols:
   image:
   status:
   text:
```
This is an example of a [`RowTextImage`](https://raw.githubusercontent.com/OpenMobileAlliance/oma_github_pages/main/content/index.md) module.

### Description

`name`: **RowTextImage**

`cols`: 
* the value of this property is an integer between **1** to **12** that represents the number of columns taken by the `text` content. The whole row can hold upt to **12** columns.
* the larger the number the more space will be dedicated to the `text` and less to the `image`

`image`: 
* as in the `RowImage`module, it represents the location of the image, by the fault all the images MUST be place inside of the folder `static/images/`

`status`: 
* as in the `RowImage` module, it is an optional property
* if it is set to `border-image`, then it places a window (X,Y) on top of the image and it trims off any image content that falls outside of the window

`text`:
* as in the `RowText` module, this property contains the markdown text to be displayed by the container
* if more than one line of text is needed, then insert the special charter `|`, this will allow multiple lines of Markdown text

## F.A.Q
