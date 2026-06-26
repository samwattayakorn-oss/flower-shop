=====================================================

M024_Tracking_Module

Tracking Module

โมดูลติดตามสถานะ

=====================================================

Module ID

M024

Module Name

Tracking Module

Purpose

ติดตามสถานะสินค้าและคำสั่งซื้อจนสิ้นสุดกระบวนการ

Meaning

Tracking คือ การติดตามการเปลี่ยนแปลงของสถานะอย่างต่อเนื่อง

Interpretation

Order Tracking

Shipping Tracking

Payment Tracking

Supplier Tracking

System Tracking

Condition

ต้องมี Order ID

ต้องมี Tracking ID

ต้องมีสถานะล่าสุด

Relation

M020

M021

M022

M023

Example

Pending

Confirmed

Packing

Shipping

Out for Delivery

Delivered

Completed

Cancelled

Returned

Input

Order Information

Shipping Information

Tracking Number

Process

Receive Status

Update Status

Record Timeline

Notify Member

Output

Current Status

Tracking Timeline

Notification

Dependency

M020

M021

M022

M023

M005

M006

M007

M008

Version

1.0
