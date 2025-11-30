# Blockchain Developer Portfolio

A minimal, responsive single-page scrolling portfolio built with Next.js (pages router), React, and Tailwind CSS, focused on blockchain development.

## Features

- **Single Scrolling Landing Page**: One continuous page with 4 sections: Home (hero + about merged), Experience, Projects, and Contact
- **Sticky Navigation**: Sticky header with smooth-scroll anchor links and active section highlighting
- **AR Badge**: Initials badge in top-right corner linking to home section
- **Home Section**: Hero section with rotating background elements (left and right), merged About section with bio and skills
- **Experience Section**: Professional experience timeline
- **Projects Section**: Grid layout with blockchain project cards, "Show More" functionality (displays first 4, then reveals rest)
- **Contact Section**: Two-column layout with contact cards (left) and Formspree-integrated form (right), using react-icons for social links
- **Resume Link**: Navbar Resume link opens `/public/resume.pdf` in a new tab
- **Responsive Design**: Mobile, tablet, and desktop optimized with consistent horizontal padding (`px-6 sm:px-10 lg:px-24`)
- **Color Scheme**: Neutral/off-white gradient background with soft purple and blue accents
- **Accessibility**: Semantic markup, keyboard navigation, reduced-motion support (respects `prefers-reduced-motion`)
- **SEO**: Basic meta tags and Open Graph support

## Tech Stack

- **Next.js** (Pages Router)
- **React** 18
- **Tailwind CSS** v3+
- **TypeScript**
- **react-icons** (for social media icons)
- **Formspree** (for contact form)

## Getting Started

### Prerequisites

- Node.js 18.17.0+ and npm (or yarn)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure placeholders (see Configuration section below)

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Configuration & Placeholders

### ⚠️ Important: Replace Placeholders

This project includes several placeholders that need to be replaced with actual values:

#### 1. Contact Form (Formspree)

The contact form uses Formspree for email delivery. To set it up:

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your form ID (it looks like `xvgkqyzw`)
3. Open `pages/index.tsx`
4. Find the line: `'https://formspree.io/f/<PLACEHOLDER_ID>'`
5. Replace `<PLACEHOLDER_ID>` with your actual Formspree form ID
6. Save the file

Example:
```typescript
const response = await fetch('https://formspree.io/f/xvgkqyzw', {
  // ...
})
```

#### 2. Resume PDF

Replace `public/resume.pdf` with your actual resume PDF file. The Resume link in the navbar will open it in a new tab with the browser's PDF viewer.

#### 3. Discord Invite Link

1. Open `pages/index.tsx`
2. Find the Discord link in the Contact section
3. Replace `https://discord.gg/REPLACE_INVITE` with your actual Discord invite link or profile link
4. The Discord username `q_abdur.rahman` is displayed as a tooltip

#### 4. GitHub Repository Links

All project GitHub links are placeholders. To update them:

1. Open `data/projects.js`
2. Find each project's `github` field
3. Replace `https://github.com/placeholder/[project-name]` with your actual repository URLs

Example:
```javascript
{
  title: 'EquiBlock — ETHOnline 2025',
  // ...
  github: 'https://github.com/yourusername/equiblock', // Replace this
}
```

## Project Structure

```
portfolio/
├── components/          # React components
│   ├── FadeInSection.tsx
│   ├── Header.tsx
│   └── Layout.tsx
├── data/               # Data files (edit these to update content)
│   └── projects.js     # Project data - EDIT THIS FILE to update projects
├── pages/              # Next.js pages
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx       # Single scrolling page with all sections
├── public/             # Static assets
│   └── resume.pdf      # Resume PDF (replace with your own)
├── styles/             # Global styles
│   └── globals.css
└── package.json
```

**Note**: The Footer component has been removed. Navigation is handled entirely by the sticky header.

## Customization

### Editing Project Content

**To update projects, edit `/data/projects.js`** - This is the central file for all project information.

The file exports a `projects` array with the following structure:
```javascript
{
  title: 'Project Name',
  subtitle: 'Optional subtitle',
  short: 'Short description',
  details: 'Detailed description',
  skills: ['Skill1', 'Skill2', ...],
  github: 'https://github.com/...',
  optional: false, // Set to true for optional projects (like Summer of Science)
}
```

### Editing Experience

Edit `pages/index.tsx` in the Experience section to update work history. The `experiences` array contains:
```javascript
{
  title: 'Job Title',
  company: 'Company Name',
  period: 'Date Range',
  description: 'Full description text',
}
```

### Update Contact Information

Edit `pages/index.tsx` in the Contact section to update:
- Email: `abdurrahman.iitb@gmail.com`
- Telegram: `@Q_Abdur_Rahman` (link: `https://t.me/Q_Abdur_Rahman`)
- Location: `Mumbai, India`
- Social media links (GitHub, LinkedIn, Discord, X)

### Update Home/About Section

Edit `pages/index.tsx` in the Home section to update:
- Hero title and subtitle
- About bio text
- Skills list

### Styling

All styling is done with Tailwind CSS. Customize colors, spacing, and animations in `tailwind.config.js`. The site uses:
- Neutral/off-white gradient background (`bg-gradient-to-b from-[#f7f8fb] to-white`)
- Purple and blue accent colors
- Consistent horizontal padding: `px-6 sm:px-10 lg:px-24`

## Animations

The portfolio includes subtle animations that respect `prefers-reduced-motion`:
1. **Rotating ring SVG elements** in the hero section (left and right, low opacity, slow 20s rotation)
2. **Fade-in animation** for sections on scroll

Both animations automatically disable when users have `prefers-reduced-motion` enabled.

## Navigation

The sticky header includes:
- **Abdur Rahman** (brand name, links to home)
- **Home**: Smooth scrolls to `#home` section
- **Experience**: Smooth scrolls to `#experience` section
- **Projects**: Smooth scrolls to `#projects` section
- **Resume**: Opens `/resume.pdf` in a new tab (`target="_blank" rel="noopener"`)
- **Contact**: Smooth scrolls to `#contact` section
- **AR Badge**: Initials badge in top-right that links to `#home`

Active section highlighting is automatically updated based on scroll position using IntersectionObserver.

## Sections

### Home (`#home`)
- Hero section with title and subtitle
- Rotating background elements (left and right)
- Merged About section with bio and skills

### Experience (`#experience`)
- Professional experience timeline
- Each entry includes title, company, period, and description

### Projects (`#projects`)
- Grid layout of project cards
- **"Show More" functionality**: Displays first 4 projects, then a button to reveal the rest
- Each card shows title, subtitle, short description, skill badges, and GitHub link
- Optional projects (like Summer of Science) are displayed in a separate "Additional Projects" section
- All project data is managed in `data/projects.js`

### Contact (`#contact`)
- Two-column layout: contact cards on left (max-width constrained to `max-w-md`), form on right
- Contact cards include:
  - Email (mailto link)
  - Telegram (`@Q_Abdur_Rahman` with link to `https://t.me/Q_Abdur_Rahman`)
  - Location (Mumbai, India)
  - Social icons: GitHub, LinkedIn, Discord, X (Twitter)
- Formspree-integrated contact form with:
  - Client-side validation (required fields, email format)
  - Inline success/error messages
  - Tighter form spacing (reduced gap between placeholder and input line)
  - Accessible labels and ARIA attributes

## Placeholder Summary

Before deploying, make sure to replace:

1. ✅ **Formspree ID**: `pages/index.tsx` → `'https://formspree.io/f/<PLACEHOLDER_ID>'`
2. ✅ **Resume PDF**: Replace `public/resume.pdf` with your actual resume
3. ✅ **Discord Invite**: `pages/index.tsx` → `'https://discord.gg/REPLACE_INVITE'`
4. ✅ **GitHub Repo Links**: `data/projects.js` → All `github` fields with placeholder URLs

## License

MIT
