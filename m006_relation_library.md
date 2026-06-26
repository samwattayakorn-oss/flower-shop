# =====================================================
# M006_Relation_Library
# Relation Library
# คลังความสัมพันธ์ของโมดูล
# =====================================================

## Purpose
เก็บความสัมพันธ์ทั้งหมดของระบบ
เพื่อให้ทุกโมดูลสามารถเชื่อมโยงกันได้
โดยไม่ขึ้นกับตำแหน่งไฟล์

---

## Relation Types

### Parent
โมดูลหลักที่เรียกใช้งานโมดูลอื่น

ตัวอย่าง

Module Library
 ├── Identity
 ├── Brand
 ├── Search

---

### Child

โมดูลที่ถูกเรียกใช้งาน

---

### Dependency

โมดูลที่ต้องมี
จึงสามารถทำงานได้

ตัวอย่าง

Product
ต้องใช้

Identity

Brand

Meaning

Relation

---

### Reference

ใช้อ้างอิงข้อมูลร่วมกัน

---

### Input Relation

ข้อมูลที่รับเข้ามา

---

### Output Relation

ข้อมูลที่ส่งออก

---

### Data Flow

Input

↓

Meaning

↓

Relation

↓

Process

↓

Output

---

### Relation Level

Level 1

Core

Level 2

Library

Level 3

Module

Level 4

Component

Level 5

Data

---

## Relation Principle

ทุกความสัมพันธ์ต้องระบุ

Source

Target

Purpose

Condition

Version

---

Version

1.0
