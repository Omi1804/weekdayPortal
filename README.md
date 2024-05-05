# Weekday UI

A dashboard made using Weekday's API to display cards about job listings.

## How to run?

To get the server running locally:

1. Clone the repo
   ```bash
   git clone https://github.com/Omi1804/weekdayPortal.git
   cd weekdayPortal
   ```
2. Install the dependencies
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   # or
   bun install
   ```
3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```
4. Open http://localhost:5173/ to view it in the browser.

## File Structure

<strong>-src/components:</strong>

<ol>
<li><strong>CompanyDetails: </strong>Reusable Company Detailed Description to Apply on.</li>
<li><strong>Header: </strong>Reusable Header component To be served as Navbar In future</li>
<li><strong>SearchArea: </strong>All the Searching Components With Card Grid.</li>
<li><strong>SideBar: </strong>Reusable SideBar to be Used to Fill User's Details for Further Use</li>
<li><strong>SubComponents: </strong>Reusable Small Components like Card.tsx or Select input tag.</li>
</ol>
<strong>-src/reduxFiles:</strong>
<ol>
<li><strong>jobSlice.ts: </strong>Contains all the Job fetching and Filtered Job Reducer</li>
<li><strong>userSlice.ts: </strong>Contains all the User Related Data which can be used anywhere in the application</li>
<li><strong>store.ts: </strong>Contains the React Redux Toolkit configurations</li>
