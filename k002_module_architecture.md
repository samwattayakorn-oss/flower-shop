K002_Module_Architecture.md

Module Architecture

====== Purpose ======

กำหนดมาตรฐานของ Module

====== Core Meaning ======

Module คือหน่วยการทำงานที่สามารถแยก พัฒนา ทดสอบ และนำกลับมาใช้ซ้ำได้

====== Principle ======

Module ต้องสามารถทำงานได้อย่างอิสระ

Module ต้องสามารถนำกลับมาใช้ซ้ำได้

Module ต้องมีขอบเขตหน้าที่ชัดเจน

Module ต้องสามารถเชื่อมต่อกับ Module อื่นผ่านมาตรฐานเดียวกัน

====== Structure ======


Definition

↓

Condition

↓

Relation

↓

Input

↓

Process

↓

Output

====== Condition ======

Module ต้องมี Input และ Output ที่ชัดเจน

Module ต้องไม่ขึ้นต่อกันโดยตรงเกินความจำเป็น

Module ต้องสามารถพัฒนา ทดสอบ และปรับปรุงแยกจากกันได้

Module ต้องเป็นไปตามมาตรฐาน UKS

====== Relation ======

Module ถูกประกอบเป็น Page

และถูกควบคุมโดย Module Library

====== Scope ======

อธิบายโครงสร้างของ Module ทุกประเภท

====== Future Expansion ======

รองรับ Module ทุกระบบ

====== Dependency ======

U000_UKS_Core

U001_UKS_Architecture

U002_UKS_Template

K001_Website_Architecture

====== Reference ======

U000

U001

U002

U003

====== Version ======
1.0
