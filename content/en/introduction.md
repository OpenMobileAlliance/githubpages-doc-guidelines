---
title: Introduction
description: ''
position: 1
category: 'GETTING STARTED'
---
## Overview
These pages provide you with all the information that you need to maintain and create new pages for DMSE/IPSO website.
The content of OMA LwM2M website is stored in this GitHub repository, [oma_github_pages](https://github.com/OpenMobileAlliance/oma_github_pages) and the web pages are rendered by GitHub as GitHub pages in [lwm2m.openmobilealliance.org](https://lwm2m.openmobilealliance.org/).

## Website Structure
The image below describes the website structure for [lwm2m.openmobilealliance.org](https://lwm2m.openmobilealliance.org/).

<figure class="text-center">
      <img src="./images/website-structure.svg" alt="Website Structure ">
      <figcaption>Website Structure</figcaption>
</figure>
<img width="531" alt="image" src="https://user-images.githubusercontent.com/3258579/145750055-3a5f9f74-345c-4ab2-8981-9770a4f87857.png">

**Navigation**

The content of this block contains a clicable `logo`, the `menus` and `submenus`.

**Body**

The main placeholder for the body is the `page`. 
A `page` is formed by `modules` that are stacked one on top of each other. Each `module` contains a particular constructor, such as: `image`, `text`, `imageText`, `textImage` `table`, etc. It is also possible to embed modules inside of modules.


**Footer**

The `footer` contains OMA copyright statement and its `social media` icons.

In the next section [Structure](structure.md#structure) you can see how each of these components is structured.

## Examples of `modules`
### `RowText`
![image](https://user-images.githubusercontent.com/3258579/145778038-172fbe9e-2110-4172-8f16-bdeec4a6892b.png)

### `RowImage`
![image](https://user-images.githubusercontent.com/3258579/145778546-157daccd-93f9-4585-9b8b-5ccc18dfcb20.png)


### `RowTextImage`
![image](https://user-images.githubusercontent.com/3258579/145778334-d235d93c-737e-4f6d-902f-dddf1ba33898.png)

### `RowMultiColumns`
![image](https://user-images.githubusercontent.com/3258579/145780952-be30c2b1-78b5-4f59-b9cd-efc834042a06.png)



### Two `modules` combined
![image](https://user-images.githubusercontent.com/3258579/145780447-0ce1ec15-3ece-4674-937e-7b7f648cafe2.png)

This example combines two `modules`: `RowTextImage` and `RowMultiColumns` which contains inside other two `modules`: `RowNewList` and `RowButtonGrid`