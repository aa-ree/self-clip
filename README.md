# **`<self-clip>`** element
### A icon customzation allows you to play with.

I was watching web component recently, learning about `<template>`, shadow DOM, Custom Elements, HTML imports. I decided create a web component, but not using any polyfills.
So, `<self-clip>` is rarely supported, it's able to run in which had implemented import attribute and registerElement function.

## Usage

To use it, simply `npm install selfclip`.
### 1. Import to your html:
```html
<link rel="import" href="selfclip/self-clip.html">
```

### 2. Use self-clip wherever you want:
```html
<self-clip></self-clip>
```

### 3. Set `data-` attributes, you can generate [online](https://reehoiyan.github.io/self-clip/) or checkout these usable options:

* data-background: color (Hex)
* data-hair: color (Hex)
* data-cloth: color (Hex)
* data-eyes: color (Hex)
- data-config (- MUST -)
  - hair
    - length
       - long
       - short
    - bang
       - left
       - right
       - none
  - sense
    - eyes
       - big
       - small
    - mouth
       - joy
       - shy
  - accessory
    - none
    - glass
    - earrings

### Note: It is always need `data-config`.
### Then, you are good to go!

### Example
```html
<self-clip data-background="#80B88C" data-hair="#000000" data-cloth="#A0DBDF" data-eyes="#000000"
 		   data-config='{ "hair": { "length": "long", "bang": "left" },
 			              "sense": { "eyes": "big", "mouth": "joy" },
 			              "accessory": "none" }'>
</self-clip>
```
![Image of self-clip example]
(https://reehoiyan.github.io/self-clip/assets/icons.png)