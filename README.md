# Blockchain Developer Portfolio

A minimal, responsive 4-page developer portfolio built with Next.js (pages router), React, and Tailwind CSS, focused on blockchain development.

## Features

- **4 Pages**: Home (with About merged), Experience, Projects, Contact
- **Home Page**: Hero section with rotating background element, merged About section with bio and skills
- **Experience Page**: Chronological timeline of roles and internships
- **Projects Page**: Grid layout with blockchain project cards
- **Contact Page**: Full contact form with Formspree integration, contact details, and social links
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Dark Mode Support**: Optional dark mode with pleasant color palette
- **Accessibility**: Semantic markup, keyboard navigation, reduced-motion support
- **SEO**: Basic meta tags and Open Graph support

## Tech Stack

- **Next.js** (Pages Router)
- **React** 18
- **Tailwind CSS** v3+
- **TypeScript**
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
3. Open `pages/contact.tsx`
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
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── Layout.tsx
├── pages/              # Next.js pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx       # Home page (with About merged)
│   ├── experience.tsx  # Experience page
│   ├── projects.tsx    # Projects page
│   └── contact.tsx      # Contact page
├── public/             # Static assets
│   └── resume.pdf      # Resume PDF (replace with your own)
├── styles/             # Global styles
│   └── globals.css
└── package.json
```

## Customization

### Replace Resume PDF

Replace `public/resume.pdf` with your actual resume PDF file.

### Update Contact Information

Edit `pages/contact.tsx` to update:
- Email: `abdurrahman.iitb@gmail.com`
- Phone: `+91 9999999999`
- Location: `Mumbai, India`
- Social media links (GitHub, LinkedIn, Instagram, X)

### Update Content

- **Home**: Edit `pages/index.tsx` for hero content and About section
- **Experience**: Edit `pages/experience.tsx` to add/update work history
- **Projects**: Edit `pages/projects.tsx` to add/update projects

### Styling

All styling is done with Tailwind CSS. Customize colors, spacing, and animations in `tailwind.config.js`.

## Animations

The portfolio includes two subtle animations:
1. **Rotating background element** in the hero section (respects reduced-motion preference)
2. **Fade-in animation** for sections on scroll (respects reduced-motion preference)

Both animations automatically disable when users have `prefers-reduced-motion` enabled.

## Removed Legacy Files

The following legacy HTML/CSS/JS files were removed during migration to Next.js:

- `Portfolio-Website/index.html`
- `Portfolio-Website/portf.html`
- `Portfolio-Website/style.css`
- `Portfolio-Website/clock.js`
- `pages/resume.tsx` (replaced with direct PDF link)

Note: `Portfolio-Website/myphoto.jpg` was preserved in case you want to use it. You can add it to `public/` if needed.

## Pages

### Home (`/`)
- Hero section with rotating background element
- Merged About section with bio and skills
- CTA buttons to Projects, Resume, and Contact

### Experience (`/experience`)
- Chronological timeline of work experience
- Each entry includes title, company, period, and bullet points

### Projects (`/projects`)
- Grid layout of project cards
- Each card shows title, description, tech tags, and links

### Contact (`/contact`)
- Two-column layout: contact info on left, form on right
- Formspree-integrated contact form
- Contact details and social media links
- Resume download link

## License

MIT
