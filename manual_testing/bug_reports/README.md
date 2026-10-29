# Sweet Shop | Exploratory Testing & Bug Reports

## Overview

This project documents an exploratory testing session performed on the [Sweet Shop](https://sweetshop.netlify.app/index.html) web application, focusing on identifying functional defects, usability issues, and potential improvements in the shopping experience.

The goal was to investigate application behavior, reproduce issues, evaluate their impact, and document findings through structured Bug Reports supported by video evidence.

## Testing Scope

The exploratory testing focused on:

- **Shopping Basket:** Product quantity management and item removal.
- **Quantity Validation:** Application behavior when adding unusually large quantities of products.
- **Checkout Flow:** Navigation and data preservation during checkout.
- **Error Handling:** User feedback when an operation fails.

## Reported Findings

| ID | Finding | Severity | Classification |
|---|---|---|---|
| SS-001 | Missing quantity selector in shopping basket | Moderate | UX Improvement |
| SS-002 | No apparent limit on product quantities | Minor | Potential Issue |
| SS-003 | Checkout fails and basket information is lost | Critical | Functional Bug |
| SS-004 | No error message displayed when checkout fails | Major | Error Handling Issue |

**Note:** SS-001 is documented as a usability improvement, while SS-002 is a potential issue requiring further validation. SS-003 and SS-004 describe related problems observed during the checkout flow.

## Test Environment

| Property | Value |
|---|---|
| Application | Sweet Shop |
| Operating System | Windows 11 |
| Testing Approach | Exploratory Testing |
| Evidence | Screen recordings |

## Documentation

- [View Bug Reports (PDF)](./Sweet_Shop_Bug_Reports_Excel.pdf)
- [Download Bug Reports (Excel)](./Sweet_Shop_Bug_Reports_Excel.xlsx)

Each report contains reproduction steps, expected and actual results, severity assessments, and links to video evidence.

## Skills Demonstrated

- Exploratory Testing
- Functional Testing
- Usability Testing
- Bug Reporting
- Defect Reproduction
- Severity Assessment
- Evidence Collection
- Error Handling Analysis

---

*Created as part of practical Quality Assurance training and portfolio development.*