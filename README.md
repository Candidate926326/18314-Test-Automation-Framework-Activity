# 18314 Test Automation Framework Activity
Coding Task Submission for Candidate 926326, for Job ID: 18314; Software Developer in Test

**Overview**  
This repository contains a test automation framework developed using Playwright and JavaScript. The framework is designed to automate end-to-end web application testing, providing reliable and repeatable validation of the login functionality of a test website.

**Technology Stack**  
JavaScript  
Playwright  
Node.js  
Visual Studio Code  
GitHub  

**Prerequisites**  
Before running the tests, ensure the following are installed:  
Node.js (latest LTS version recommended)  
npm  
Visual Studio Code  

**Installation**  
Clone the repository:  
git clone https://github.com/Candidate926326/18314-Test-Automation-Framework-Activity.git  
cd 18314-Test-Automation-Framework-Activity  

Install project dependencies:  
npm install  

Install Playwright browsers:  
npx playwright install  

**Running Tests**  
Run all tests:  
npx playwright test  

Run a specific test:  
npx playwright test tests/example.spec.js  

Run tests in headed mode:  
npx playwright test --headed  

**Test Reports**  
Reports are automatically generated after test execution and provide detailed information about test results, failures, screenshots, and execution times.  
Generate and view the HTML report:  
npx playwright show-report  

**Continuous Integration**  
To enable automated test execution on code commits, pull requests, and deployments, the framework can be integrated with CI/CD platforms such as:  
GitHub Actions  
Azure DevOps  
Jenkins  

