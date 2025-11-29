# Blockchain Developer Portfolio

A minimal, responsive single-page scrolling portfolio built with Next.js (pages router), React, and Tailwind CSS, focused on blockchain development.

## Features

- **Single Scrolling Landing Page**: One continuous page with 4 sections: Home (hero + about merged), Experience, Projects, and Contact
- **Sticky Navigation**: Sticky header with smooth-scroll anchor links and active section highlighting
- **AR Badge**: Initials badge in top-right corner linking to home section
- **Home Section**: Hero section with rotating background elements (left and right), merged About section with bio and skills
- **Experience Section**: Chronological timeline of roles and internships
- **Projects Section**: Grid layout with blockchain project cards
- **Contact Section**: Two-column layout with contact cards (left) and Formspree-integrated form (right), using react-icons for social links
- **Resume Link**: Navbar Resume link opens `/public/resume.pdf` in a new tab
- **Responsive Design**: Mobile, tablet, and desktop optimized with consistent horizontal padding (`px-6 sm:px-10 lg:px-24`)
- **Color Scheme**: Off-white/neutral background with soft purple and blue accents
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

2. Configure Formspree (see Configuration section below)

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

## Configuration

### Contact Form (Formspree)

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

The form will now send emails to the address you configured in Formspree.

## Project Structure

```
portfolio/
├── components/          # React components
│   ├── FadeInSection.tsx
│   ├── Header.tsx
│   └── Layout.tsx
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

### Replace Resume PDF

Replace `public/resume.pdf` with your actual resume PDF file. The Resume link in the navbar will open it in a new tab.

### Update Contact Information

Edit `pages/index.tsx` in the Contact section to update:
- Email: `abdurrahman.iitb@gmail.com`
- Phone: `+91 9999999999`
- Location: `Mumbai, India`
- Social media links (GitHub, LinkedIn, Instagram, X)

### Update Content

Edit `pages/index.tsx` to update:
- **Home Section**: Hero content and About section with bio and skills
- **Experience Section**: Work history timeline
- **Projects Section**: Project cards with descriptions, tech tags, and links
- **Contact Section**: Contact cards and form

### Styling

All styling is done with Tailwind CSS. Customize colors, spacing, and animations in `tailwind.config.js`. The site uses:
- Off-white/neutral background (`bg-neutral-50`)
- Purple and blue accent colors
- Consistent horizontal padding: `px-6 sm:px-10 lg:px-24`

## Animations

The portfolio includes subtle animations that respect `prefers-reduced-motion`:
1. **Rotating ring SVG elements** in the hero section (left and right, low opacity, slow rotation)
2. **Fade-in animation** for sections on scroll

Both animations automatically disable when users have `prefers-reduced-motion` enabled.

## Navigation

The sticky header includes:
- **Home**: Smooth scrolls to `#home` section
- **Experience**: Smooth scrolls to `#experience` section
- **Projects**: Smooth scrolls to `#projects` section
- **Resume**: Opens `/resume.pdf` in a new tab (`target="_blank" rel="noopener"`)
- **Contact**: Smooth scrolls to `#contact` section
- **AR Badge**: Initials badge in top-right that links to `#home`

Active section highlighting is automatically updated based on scroll position.

## Sections

### Home (`#home`)
- Hero section with title and subtitle
- Rotating background elements (left and right)
- Merged About section with bio and skills

### Experience (`#experience`)
- Chronological timeline of work experience
- Each entry includes title, company, period, and bullet points

### Projects (`#projects`)
- Grid layout of project cards
- Each card shows title, description, tech tags, and links

### Contact (`#contact`)
- Two-column layout: contact cards on left (max-width constrained), form on right
- Contact cards include email, phone, location, and social icons (using react-icons)
- Formspree-integrated contact form with inline success/error messages
- Tighter form spacing (reduced gap between placeholder and input line)

## License

MIT
