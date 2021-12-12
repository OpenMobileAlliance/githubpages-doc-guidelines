---
title: Row Modules
description: ''
position: 50
category: 'Components'
---

## RowButtonGrid
This module is used to insert a column that contains bubles or buttons that contains text.
 <table>
 <thead>
    <th>Position 1</th>
    <th>Position 2</th>
    <th>Position 3</th>
 </thead>
 <tbody>
 <tr>
    <td>`name`</td>
    <td></td>
    <td></td>
 </tr>
 <tr>
    <td>`description`</td>
    <td></td>
    <td></td>
 </tr>
 <tr>
    <td>`pagination`</td>
    <td></td>
    <td></td>
 </tr>
 <tr>
    <td>`filter`</td>
    <td></td>
    <td></td>
 </tr>
 <tr>
    <td>`columns`</td>
    <td>`key`</td>
    <td></td>
 </tr>
 <tr>
    <td></td>
    <td>label</td>
    <td></td>
 </tr>
 <tr>
    <td></td>
    <td>`sortable`</td>
    <td></td>
 </tr>
 <tr>
    <td>items</td>
    <td>title</td>
    <td>title</td>
 </tr>
 <tr>
    <td></td>
    <td>type</td>
    <td>title</td>
 </tr>
 <tr>
    <td></td>
    <td>published</td>
    <td>title</td>
 </tr>
 <tr>
    <td></td>
    <td>download</td>
    <td>icon</td>
 </tr>
 <tr>
    <td></td>
    <td></td>
    <td>url</td>
 </tr>
 <tr>
    <td></td>
    <td></td>
    <td>target</td>
 </tr>
 <tbody>
 </table>

### Description
`name`

`cols`
### Attributes
`title`

`submtitle`

`image`

`items`

#### Items
The following items are dented to the left of the attribute `items`:

`title`

`subtitle`

`status`

`url`

`target`

## RowDynamicTable
### Description
This module inserts a table with multiple columns, with pagination, and filtering.
`name`

`description`

`pagination`

`filter`
It is composed of one or more attributes

### `columns`
This attribute is a wraper that contains the following attributes:

* `key`

* `label`

* `sortable`

### `items`

* `title`

   `title`

* `type`

   * `title`

* `published`

   * `title`

* `download`

   * `icon`
   * `url`
   * `target`

## RowImage

## RowImageText

## RowMultiColumns

## RowNewList

## RowTags

## RowSeparator

## RowText

## RowTextImage