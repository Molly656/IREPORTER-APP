# IREPORTER App

## Description
IREPORTER is a web application that allows users to report corruption and public issues.  
Users can create **red-flag** or **intervention records**, add geolocation, and track the status of their reports.  
Admins can update the status of these records, ensuring accountability and transparency.

---

## Features

### User Features
1. Users can create a **red-flag record** (an incident linked to corruption).  
2. Users can create **intervention records** (requests for government agencies to intervene, e.g., repair bad roads, collapsed bridges, flooding, etc.).  
3. Users can **edit** their red-flag or intervention records.  
4. Users can **delete** their red-flag or intervention records.  
5. Users can **add geolocation** (latitude and longitude coordinates) to their red-flag or intervention records.  
6. Users can **change the geolocation** attached to their red-flag or intervention records.  

### Admin Features
1. Admin can change the **status of a record** to:
   - `Under Investigation`
   - `Rejected` (for false claims)
   - `Resolved` (once the claim has been investigated and addressed)

### Optional Features
1. Users receive **real-time SMS notifications** when Admin changes the status of their record.

### Rules / Restrictions
1. A user can only **change the geolocation** of a record if its status is **not yet marked** as `Under Investigation`, `Rejected`, or `Resolved`.  
2. A user can only **edit or delete** a record if its status is **not yet marked** as `Under Investigation`, `Rejected`, or `Resolved`.  
3. **Only the user who created a record** can delete it.

---

## Project Structure
Backend entry: server.ts
Backend routes: routes.ts
Controllers: backend/Controllers/*.ts 
(authController.ts, redFlagsController.ts, interventionsController.ts)
Multer config: multer.ts
DB init script: init.sql
Frontend entry: main.tsx
Frontend API client: api.ts
Frontend pages:
CreateReport.tsx
RedFlags.tsx
Interventions.tsx
Auth.tsx
AdminDashboard.tsx
Shared types: report.ts and types.ts
Local storage helpers: storage.ts

#Running it Locally (dev)
Backend:
Ensure .env set with PORT, DB_*, JWT_SECRET.
Commands (in backend):
Install: npm install
Run dev: npm run dev or npm run start (project-specific script — confirm package.json).
Ensure DB exists and init.sql applied or run the SQL to create tables.
Frontend:
From frontend:
Install: npm install
Run dev: npm run dev (Vite)
Frontend dev port default used in config is 3001 (or 3002 if 3001 busy). Confirm vite.config.ts.
Environment:
Set VITE_API_URL in .env to backend base, e.g.:
VITE_API_URL=http://localhost:3000/api
Quick commands (PowerShell-friendly):
Backend:
cd to backend and:
