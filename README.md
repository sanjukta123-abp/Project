# Acrylic Art School

A responsive drawing and art-school website built with React, TypeScript, Vite, Bootstrap and React Router. The teacher profile features Sanjukta Patra.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`, or run the linter with `npm run lint`.

## Pages

- Home
- About, including the teacher profile
- Learning
- Online Classes
- Gallery
- Contact
- Registration

The home page follows an art-school landing-page structure: photographic hero, studio introduction, image-led course cards, online classes for international students, school internal and board exam support, guided school art project support, teacher feature, gallery preview, testimonial slider and weekend schedule/location callout. The class page covers pastel drawing, step-by-step drawing, oil painting, pencil and pen sketching, acrylic painting, and handcraft. Classes are presented for kids, teens and adults, from beginner to advanced levels. Hand-drawn SVG accents, animated colour splashes, animated sketch strokes, image hover effects and scroll reveals across page sections and content respect reduced-motion preferences.

Facebook, Instagram and YouTube icons currently use inactive `#!` placeholders. Replace those URLs in `socialLinks` in `src/App.tsx` with the school's public profile links before launch.

The sticky navigation highlights Online Classes and links to a dedicated international-class information page. A built-in automated chat offers preset information and direct call/WhatsApp actions for **+91 90517 69135**. It is not a human-monitored live-chat service and does not send messages automatically.

The registration form separates offline and online class choices. The home-page testimonial slider currently contains clearly labeled sample copy; replace it with genuine student or parent feedback before publishing.

The hero and gallery use locally bundled, high-resolution art-reference photos from Unsplash. They are illustrative references, not student artwork. Source images: [paintbrushes](https://images.unsplash.com/photo-1513364776144-60967b0f800f), [abstract acrylic](https://images.unsplash.com/photo-1541961017774-22349e4a1262), [gallery wall](https://images.unsplash.com/photo-1513519245088-0e12902e5a38), [mural](https://images.unsplash.com/photo-1547891654-e66ed7ebb968), [craft materials](https://images.unsplash.com/photo-1452860606245-08befc0ff44b), and [colour study](https://images.unsplash.com/photo-1549490349-8643362247b5). See the [Unsplash License](https://unsplash.com/license).

The main branch is in Bansdroni, Garia. Weekend classes run Saturday 9:00–10:30 AM and Sunday 10:00–11:30 AM.

## Registration notifications

The registration form collects the artist's name and age, guardian name, phone and WhatsApp numbers, email, location, class interest and message. It opens WhatsApp with a pre-filled enquiry for **+91 90517 69135**. The visitor must review and send the message in WhatsApp. Email notifications are not configured; a destination inbox and email delivery service or backend endpoint are needed before submissions can be sent by email.

Student artwork and testimonials are illustrative sample content. Replace them with approved artwork and genuine feedback before publishing.
