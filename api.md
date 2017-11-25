# 📚 API

## address-form

component ฟอร์มของที่อยู่

### `v-model`

ใช้เป็น `Object` สำหรับเก็บข้อมูลที่อยู่ทั้งหมด

**โครงสร้าง:**
```typescript
{
	subdistrict: string, // ตำบล/แขวง
	district: string, // อำเภอ/เขต
	province: string, // จังหวัด
	zipcode: number // รหัสไปรษณีย์
}
```

### Props

#### subdistrictLabel

**Type:** `String`  
**Default:** `ตำบล/แขวง`

ชื่อที่ใช้อธิบาย input สำหรับกรอก **ตำบล/แขวง**

#### districtLabel

**Type:** `String`  
**Default:** `อำเภอ/เขต`

ชื่อที่ใช้อธิบาย input สำหรับกรอก **อำเภอ/เขต**

#### provinceLabel

**Type:** `String`  
**Default:** `จังหวัด`

ชื่อที่ใช้อธิบาย input สำหรับกรอก **จังหวัด**

#### zipcodeLabel

**Type:** `String`  
**Default:** `รหัสไปรษณีย์`

ชื่อที่ใช้อธิบาย input สำหรับกรอก **รหัสไปรษณีย์**
