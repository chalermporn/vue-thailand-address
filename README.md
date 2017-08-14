# 🇹🇭 Vue Thailand Address

ตัวช่วยกรอกที่อยู่ของไทย สำหรับ [Vue](https://vuejs.org/) (ปราศจาก jQuery 🎉)

## 📛 ป้าย

[![license](https://img.shields.io/github/license/gluons/vue-thailand-address.svg?style=flat-square)](./LICENSE)
[![vue 2](https://img.shields.io/badge/vue-2-42b983.svg?style=flat-square)](https://vuejs.org)
[![npm](https://img.shields.io/npm/v/vue-thailand-address.svg?style=flat-square)](https://www.npmjs.com/package/vue-thailand-address)
[![npm](https://img.shields.io/npm/dt/vue-thailand-address.svg?style=flat-square)](https://www.npmjs.com/package/vue-thailand-address)
[![BCH compliance](https://bettercodehub.com/edge/badge/gluons/vue-thailand-address?style=flat-square&branch=master)](https://bettercodehub.com/)
[![Dependency Status](https://dependencyci.com/github/gluons/vue-thailand-address/badge?style=flat-square)](https://dependencyci.com/github/gluons/vue-thailand-address)
[![Travis branch](https://img.shields.io/travis/gluons/vue-thailand-address/master.svg?style=flat-square)](https://travis-ci.org/gluons/vue-thailand-address)
[![TSLint](https://img.shields.io/badge/TSLint-gluons-15757B.svg?style=flat-square)](https://github.com/gluons/tslint-config-gluons)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://github.com/carloscuesta/gitmoji)

## ⚙️ การติดตั้ง

**ด้วย [NPM](https://www.npmjs.com/):**

```bash
npm install vue-thailand-address
```

**ด้วย [Yarn](https://yarnpkg.com/):**

```bash
yarn add vue-thailand-address
```

## 🛂 วิธีใช้

### ใน Node

```javascript
import Vue from 'vue';
import VueThailandAddress from 'vue-thailand-address';

// เพิ่ม stylesheet ของ Vue Thailand Address เข้าไป
import 'vue-thailand-address/dist/vue-thailand-address.css';

// ใช้ Plugin
Vue.use(VueThailandAddress);
```

```html
<template>
	<div id="app">
		<address-form></address-form>
	</div>
</template>
```

### บน Browser

สามารถเรียกใช้ได้ผ่าน [unpkg CDN](https://unpkg.com)

#### CSS

- **Unminified:** https://unpkg.com/vue-thailand-address/dist/vue-thailand-address.css
- **Minified:** https://unpkg.com/vue-thailand-address/dist/vue-thailand-address.min.css

#### JS

- **Unminified:**
  - **Database:** https://unpkg.com/vue-thailand-address/dist/db.js
  - **Main Plugin:** https://unpkg.com/vue-thailand-address/dist/vue-thailand-address.js
- **Minified:**
  - **Database:** https://unpkg.com/vue-thailand-address/dist/db.min.js
  - **Main Plugin:** https://unpkg.com/vue-thailand-address

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>

	<!-- Vue Thailand Address stylesheet -->
	<link rel="stylesheet" href="https://unpkg.com/vue-thailand-address/dist/vue-thailand-address.min.css">

	<!-- Vue -->
	<script src="https://unpkg.com/vue/dist/vue.min.js"></script>

	<!-- Vue Thailand Address package -->
	<script src="https://unpkg.com/vue-thailand-address/dist/db.min.js"></script>
	<script src="https://unpkg.com/vue-thailand-address"></script>
</head>
<body>
	<div id="app">
		<!-- Vue Thailand Address component -->
		<address-form></address-form>
	</div>
	<script>
	let app = new Vue({
		el: '#app'
	});
	</script>
</body>
</html>
```

## 🗂 ชนิดของไฟล์ในโฟลเดอร์ `dist`

- **`vue-thailand-address.css` (Unminified) และ `vue-thailand-address.min.css` (Minified):** ไฟล์ stylesheet
- **`db.json`:** ไฟล์ฐานข้อมูล (นำมาจาก [earthchie/jquery.Thailand.js's `db.json`](https://github.com/earthchie/jquery.Thailand.js/blob/master/jquery.Thailand.js/database/db.json))
- **`vue-thailand-address.common.js`:** สำหรับใช้กับ CommonJS/Node
- **`vue-thailand-address.esm.js`:** สำหรับใช้กับ ES module
- **`db.js` (Unminified) และ `db.min.js` (Minified):** เป็นไฟล์ฐานข้อมูลสำหรับใช้บน Browser
- **`vue-thailand-address.js` (Unminified) และ `vue-thailand-address.min.js` (Minified):** เป็นไฟล์ Vue plugin สำหรับใช้บน Browser
