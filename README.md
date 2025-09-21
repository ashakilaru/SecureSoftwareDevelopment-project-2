# JavaScript Security Project

This repository demonstrates common JavaScript security vulnerabilities (XSS and unsafe eval usage) 
and provides mitigations.

## Folder Overview

- `vulnerable/` – vulnerable examples.
- `fixed/` – secure/fixed examples.
- `utils/` – helper utilities.
- `csp/` – CSP header examples.
- `libraries/` – DOMPurify HTML sanitizer example.

## Run Instructions

```bash
# Install dependencies
npm install

# Run vulnerable server
node vulnerable/vulnerable-server.js

# Run fixed server
node fixed/fixed-server.js
