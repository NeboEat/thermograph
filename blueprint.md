# Blueprint: Thermografie-Check Webseite

## 1. Project Overview

**Purpose:** A professional, single-page informational website for "Thermografie-Check," a service specializing in thermographic inspections of residential buildings to identify heat loss.

**Target Audience:** Homeowners in the Düsseldorf, Aachen, Köln, and Bonn region who are planning renovations, experiencing issues like drafts, or want an initial assessment of their property's energy efficiency.

**Core Goal:** To generate qualified customer inquiries by clearly presenting the service, its value, its limitations, and providing clear contact options. The site aims to build trust through transparency, professionalism, and a regional focus.

---

## 2. Implemented Features & Design

This section outlines the current state of the application.

### 2.1. Visual Design & Layout

*   **Structure:** A single-page application (SPA) with a clear, linear flow.
*   **Layout:** Modern, card-based design using CSS for a clean and organized look. The layout is responsive and mobile-friendly.
*   **Color Palette:** A professional and trustworthy color scheme is used.
*   **Typography:** Clear, legible fonts with a strong hierarchy to guide the user's attention.
*   **Iconography:** Subtle use of icons (e.g., location pin, email envelope) to improve scannability and visual appeal.
*   **Branding:** The brand name **"Thermografie-Check"** is consistently used in the header and as the main headline to establish a strong, unified identity.

### 2.2. Core Sections & Content

1.  **Header:** Sticky navigation bar featuring the brand name **"Thermografie-Check"** and clear links to all key sections.
2.  **Hero Section:**
    *   **Headline (`<h1>`):** **"Thermografie-Check"** is the primary headline, clearly establishing the brand.
    *   **Sub-headline:** A direct value proposition: "Wir zeigen Ihnen, wo Ihr Haus Wärme verliert." This follows the headline to explain the service's core benefit.
    *   **Regional Focus:** A prominent "Service-Region" badge clearly defines the operational area (Düsseldorf, Aachen, Köln, Bonn).
    *   **Trust Badges:** Highlights key value propositions: "Regional & Unabhängig," "Schnell," and "Transparent."
3.  **Pricing Panel:** A quick-glance pricing summary card.
4.  **Example Images Section:** A portfolio of thermographic images.
5.  **Leistung (Services):** A clear "Included" vs. "Not Included" comparison.
6.  **Ablauf (Process):** A step-by-step guide on how the inspection is conducted.
7.  **Preise (Pricing):** A detailed breakdown of standard pricing and optional add-ons.
8.  **FAQ Section:** An accordion-style FAQ to proactively answer common questions.
9.  **Kontakt (Contact):** Direct contact information and a fully functional, automated contact form using **Formspree**.
10. **Rechtlicher Hinweis & Impressum:** Legally required sections with professional, left-aligned formatting for readability.
11. **Footer:** Contains copyright information and quick links.

### 2.3. Technical Implementation

*   **Frontend:** Built with modern, framework-less HTML5, CSS3, and JavaScript (ES6+).
*   **Structure:** All files are organized in the `public/` directory.
*   **Deployment:** The `firebase.json` and `.firebaserc` files are configured for easy deployment to Firebase Hosting.
*   **Contact Form:** Integrated with **Formspree** for reliable, serverless email forwarding.

---

## 3. Project History: Tasks Completed

This section documents the development process.

*   **[Done] Step 1: Initial Setup & Content:** Created the initial HTML structure, CSS styling, and content for all sections.
*   **[Done] Step 2: Add Contact Info & Regional Targeting:** Embedded the provided email, phone number, and service region throughout the site.
*   **[Done] Step 3: Implement Automated Email Form:** Replaced the `mailto:` link with a functional HTML form integrated with Formspree.
*   **[Done] Step 4: Resolve Preview & Deployment Issues:** Configured `firebase.json` and `.firebaserc` to fix preview and deployment errors.
*   **[Done] Step 5: Update Impressum to Kleinunternehmer:** Added the user's name, address, and the required VAT notice for a sole proprietor.
*   **[Done] Step 6: Refine Legal Section Formatting:** Corrected the alignment of the "Impressum" and "Rechtlicher Hinweis" sections for a professional look.
*   **[Done] Step 7: Finalize Branding and Headline Hierarchy:**
    *   Established **"Thermografie-Check"** as the consistent brand identifier in the header, the main `<h1>` headline, and the page title.
    *   Refined the sub-headline to be a direct value proposition that supports the main brand message.
*   **[Done] Step 8: Create and Maintain Project Blueprint:** Created and continuously updated this `blueprint.md` file to document the project's features and development process.
