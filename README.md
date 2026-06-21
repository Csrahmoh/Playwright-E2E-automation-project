# 🧪 Playwright E-Commerce Test Automation Framework

## 📌 Project Overview

This project is a complete End-to-End (E2E) Test Automation Framework developed using **Playwright** for the SauceDemo E-Commerce application.

The framework validates critical business workflows including:

- User Authentication
- Product Browsing
- Cart Management
- Checkout Process
- Form Validation
- Negative Scenarios
- Cross-Browser Compatibility

The solution follows the **Page Object Model (POM)** design pattern to ensure maintainability, scalability, and code reusability.

---

## 🚀 Tech Stack

| Technology | Purpose |
|------------|----------|
| Playwright | Test Automation Framework |
| JavaScript | Programming Language |
| Node.js | Runtime Environment |
| GitHub Actions | CI/CD Pipeline |
| HTML Reports | Test Reporting |
| JSON Reports | Test Results Export |

---

## 📂 Project Structure

```text
playwright-ecommerce-tests
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── fixtures/
│   └── users.js
│
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── ProductsPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── tests/
│   ├── smoke/
│   ├── e2e/
│   └── regression/
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## 🏗 Framework Design

The framework is built using the **Page Object Model (POM)** pattern.

### Benefits

- Clean and maintainable code
- Separation between UI actions and test logic
- Reusable components
- Easier scalability
- Reduced duplication

---

## ✅ Test Coverage

### Smoke Testing

| Test Case | Description |
|------------|------------|
| TC-001 | Valid Login |
| TC-002 | Locked User Validation |
| TC-003 | Invalid Credentials |
| TC-004 | Empty Username |
| TC-005 | Empty Password |
| TC-006 | Empty Credentials |
| TC-007 | Logout Functionality |

---

### End-to-End Testing

Complete purchase workflow:

```text
Login
   ↓
Browse Products
   ↓
Add Product To Cart
   ↓
Cart Review
   ↓
Checkout
   ↓
Customer Information
   ↓
Order Confirmation
```

---

### Regression Testing

Validation scenarios include:

- Required Field Validation
- Checkout Error Handling
- Negative User Journeys
- Business Rule Verification

---

## 🌐 Cross-Browser Execution

The framework executes on:

- Chromium
- Firefox
- WebKit (Safari)
- Mobile Chrome (Pixel 5)

This ensures application consistency across multiple browsers and devices.

---

## 📊 Reporting

Playwright automatically generates:

- HTML Reports
- JSON Reports
- Screenshots on Failure
- Video Recording
- Trace Files

View report:

```bash
npm run report
```

---

## ⚙️ CI/CD Integration

GitHub Actions automatically performs:

- Dependency Installation
- Browser Installation
- Test Execution
- Artifact Upload
- Report Publishing

Workflow Trigger:

```yaml
on:
  push:
  pull_request:
```

---

## 🔧 Installation

Clone repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## ▶️ Execute Tests

Run Smoke Tests:

```bash
npm run test:smoke
```

Run E2E Tests:

```bash
npm run test:e2e
```

Run Regression Tests:

```bash
npm run test:regression
```

Run Complete Suite:

```bash
npm test
```

---

## 🎯 Key Features

✔ Page Object Model Architecture

✔ Cross-Browser Testing

✔ Mobile Emulation

✔ HTML & JSON Reporting

✔ Screenshot Capture

✔ Video Recording

✔ Trace Collection

✔ CI/CD Integration

✔ Scalable Test Design

✔ Automated Regression Coverage

---

## 📈 Expected Results

- Successful Login Validation
- Stable Checkout Flow Verification
- Business Rule Validation
- Cross-Browser Consistency
- Automated Execution via GitHub Actions

---

## 👩‍💻 Author

**Rahaf Mohammed Almohammadi**

QA Automation Engineer

Playwright | JavaScript | API Testing | Test Automation | CI/CD

---

## ⭐ Repository Purpose

This repository demonstrates practical experience in:

- Test Automation Framework Development
- End-to-End Testing
- Cross-Browser Validation
- Continuous Integration
- Software Quality Assurance Best Practices
