# Cougar Electric Inc. Website

## Project Overview

The Cougar Electric Inc. website is a modern, responsive business website built to showcase the company's electrical services, professionalism, and brand identity.

The homepage is designed around four primary sections:

### Navigation Bar

A responsive navigation system that includes:

* Services dropdown
* Service Areas dropdown
* Resources dropdown
* About Us link
* Centered Cougar Electric logo
* Click-to-call phone button
* Mobile hamburger menu

The navigation adapts across desktop, tablet, and mobile screen sizes while maintaining the company's branding.

---

### Hero Section

The hero section serves as the primary landing experience for visitors.

Features include:

* Full-width branded hero image
* Dark gradient overlay for readability
* Company slogan:

    * *Powering Solutions. Building Futures.*
* Main headline:

    * *Reliable Electrical Solutions for Homes & Businesses*
* Supporting company description
* Primary and secondary call-to-action buttons

The goal of this section is to immediately communicate professionalism, trust, and service offerings.

---

### Trust Bar

The trust bar highlights key company strengths using custom-designed icons and messaging.

Current trust indicators:

* Licensed & Insured
* Quality Workmanship
* Fast Response
* Customer Focused

Each item contains a custom Cougar Electric themed icon, title, and supporting description.

---

### Services Section

The services section displays the company's primary service offerings through responsive service cards.

Current services include:

* Panel Upgrades
* EV Charger Installation
* Commercial Electrical
* Lighting Solutions
* Troubleshooting & Repairs

Each service card contains:

* Custom service icon
* Service title
* Brief service description

The layout automatically adjusts for desktop, tablet, and mobile devices.

---

## Design Goals

The website is being developed with the following objectives:

* Professional contractor-focused branding
* Modern responsive design
* Fast performance
* Mobile-first usability
* Clear calls-to-action
* Future SEO optimization
* Strong lead generation

The visual style uses Cougar Electric's gold, white, and black color palette throughout the interface.

---

# Repository Structure

```text
src/
│
├── assets/
│   ├── logo.png
│   ├── hero.png
│   │
│   ├── Trustbar_Images/
│   │   ├── shield.png
│   │   ├── lightning_bolt.png
│   │   ├── clock.png
│   │   └── customer.png
│   │
│   └── Service_Images/
│       ├── electrical_panel.png
│       ├── ev_charger.png
│       ├── building.png
│       ├── lightbulb.png
│       └── screwdriver.png
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── TrustBar.jsx
│   └── Services.jsx
│
├── pages/
│   └── Home.jsx
│
├── styles/
│   ├── Navbar.css
│   ├── Hero.css
│   ├── TrustBar.css
│   ├── Services.css
│   └── index.css
│
├── App.jsx
└── main.jsx
```

---

## Component Responsibilities

### Navbar.jsx

Handles site navigation, dropdown menus, mobile navigation behavior, logo placement, and phone call actions.

### Hero.jsx

Renders the homepage hero image, messaging, and primary call-to-action buttons.

### TrustBar.jsx

Displays company trust indicators and supporting business credentials.

### Services.jsx

Displays service offerings using responsive card layouts.

### Home.jsx

Combines all homepage sections into a single page.

### App.jsx

Serves as the application's root component.

### main.jsx

Application entry point responsible for rendering React and loading Bootstrap.

---

## Current Status

The project currently includes:

* Responsive navigation
* Hero section
* Trust bar
* Services section
* Custom branding assets
* Mobile responsiveness
* Bootstrap integration
* Custom icon system

The homepage foundation is complete and ready for future expansion into additional sections and pages.
