# Weekday UI

![GitHub last commit](https://img.shields.io/github/last-commit/Omi1804/weekdayPortal)
![GitHub issues](https://img.shields.io/github/issues/Omi1804/weekdayPortal)
![GitHub stars](https://img.shields.io/github/stars/Omi1804/weekdayPortal)
![GitHub forks](https://img.shields.io/github/forks/Omi1804/weekdayPortal)
![License](https://img.shields.io/badge/license-MIT-green)

A dynamic and user-friendly dashboard utilizing the Weekday API to showcase job listings and company details. Designed for ease of use and seamless integration, this project is perfect for those looking to manage or explore job opportunities effectively.

[![Watch the video](https://drive.google.com/file/d/1DEz5eC1X3tpuj5ofJzAz9b5aFhIkWOop/view?usp=drive_link)](https://drive.google.com/file/d/1XsK6l0mXzvgXfpcpX7ggKX7_U_m_MFWN/view?usp=drive_link)

## Table of Contents

- [Installation](#installation)
- [How to Run?](#how-to-run)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up the Weekday UI on your local machine, follow these steps:

```bash
git clone https://github.com/Omi1804/weekdayPortal.git
cd weekdayPortal
```

## Dependencies

Install the necessary dependencies to get your development environment running:

```bash
npm install

#or alternatively with yarn, pnpm, or bun

yarn install
pnpm install
bun install
```

## How to Run?

Launch the development server by running:

```bash
npm run dev
# or with other package managers
yarn dev
pnpm dev
bun dev
```

Access the UI by navigating to http://localhost:5173/ in your web browser.

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

## Contributing

We welcome contributions to the Weekday UI! Please read through our contributing guidelines to learn how you can contribute to this project. Guidelines include instructions on how to file issues, set up your development environment, and submit pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

```bash
This `README.md` is fully formatted to use in your GitHub repository, providing detailed instructions, a breakdown of file structure, and information on contributing to your project.
```
