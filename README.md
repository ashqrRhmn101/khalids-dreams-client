# Khalid’s Dreams — README

## 🚀 **Live demo:** [https://khalids-dreams-1099.vercel.app/](https://khalids-dreams-1099.vercel.app/)

## 🚀 **Live API / Base URL**

```
https://khalids-dreams-server.vercel.app/

---

## Project Overview

Khalid’s Dreams is an e-commerce-style Next.js application (App Router) for listing and managing product items (honey, ghee, snacks, etc.).
It includes server-side product fetching, admin product creation, authentication (Firebase / custom), and clean responsive UI built with Tailwind CSS.

**Purpose:** a small production-ready storefront to demo full-stack Next.js features: App Router, API routes, MongoDB integration, protected routes, and client forms.

---

## Key Features

- Server-rendered product listing (`app/Products/allproducts/page.jsx`)
- Create/Add product form (client component) with validation
- Protected routes (PrivateRoute) for admin pages
- API Routes that proxy/serve MongoDB data (`/api/products`, `/api/products/[id]`)
- Clean responsive UI with Tailwind CSS
- Uses cookies for auth persistence (`cookies-next`)
- Ready for Vercel deployment (live link above)

---

## Tech Stack

- **Frontend / Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS / DaisyUI (optional)
- **Backend / DB:** Node.js + Express (local) or Next.js API routes + MongoDB (Mongoose)
- **Auth:** Firebase Authentication (or custom JWT)
- **HTTP client:** Axios / fetch
- **Forms:** React Hook Form
- **Notifications:** SweetAlert2
- **Cookies:** cookies-next

---

## Repo Structure (example)

```
app/
  ├─ api/
  │   └─ products/route.js
  ├─ Products/
  │   └─ allproducts/page.jsx
  ├─ Auth/
  │   ├─ login/page.jsx
  │   └─ register/page.jsx
  └─ layout.js
lib/
  └─ mongodb.js
models/
  └─ Product.js
components/
  ├─ PrivateRoute.jsx
  └─ ProductCard.jsx
contexts/
  └─ authContext.js
```

---

## Environment Variables

Create a `.env.local` at project root and add:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/mydb?retryWrites=true&w=majority
NEXT_PUBLIC_FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_PROJECT_ID=...
FIREBASE_APP_ID=...
# any other secrets you use
```

> **Important:** Do not commit `.env.local` to git.

---

## Local Development

1. Clone the repo

```bash
git clone <your-repo-url>
cd <repo-folder>
```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Start backend (if you run a separate Express API & MongoDB)

```bash
cd server
npm install
npm run dev   # or your start script
```

4. Start Next.js dev server

```bash
cd <repo-root>
npm run dev
# open http://localhost:3000
```

---

## API Examples

- `GET /api/products` — fetch all products
- `GET /api/products/:id` — fetch single product
- `POST https://khalids-dreams-server.vercel.app/products` — save product (used by AddProduct client form)

If you use Next.js API routes, mirror external endpoints to `/api/products`.

---

## Deploy to Vercel

1. Push your repo to GitHub.
2. Login to Vercel → Import Project → Select GitHub repo.
3. Set Environment Variables in Vercel dashboard (same as `.env.local`).
4. Deploy. The app will be available at `https://<your-project>.vercel.app` (live link above).

---

## Tips & Notes

- Client components must **not** be `async`. Keep `async` fetches in Server Components or API routes.
- When fetching from internal API routes inside a Server Component use:

```js
await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
  cache: "no-store",
});
```

- For images hosted externally, add allowed domains in `next.config.js`:

```js
module.exports = {
  images: {
    domains: ["i.ibb.co", "your-image-domain.com"],
  },
};
```

- Convert numeric form fields to numbers before saving (price, stock) or validate on server.

---

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: add ..."`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

Please keep commits atomic and add a short description of changes in PR.

---

## License

This project is released under the **MIT License**. See `LICENSE` for details.

---

## Contact

**Owner / Maintainer:** Khalid’s Dreams
**Live site:** [https://khalids-dreams-1099.vercel.app/](https://khalids-dreams-1099.vercel.app/)
If you want, share your GitHub repo URL and I’ll add:

- badges (build, vercel, license)
- example screenshots (or screenshot files)
- exact install/run commands tailored to your repo

---

If you want, I can:

- produce a `README.md` file ready-to-paste (I already formatted it),
- add badges (build/test, license),
- translate this README into Bangla, or
- customize the Sections (Screenshots, Troubleshooting, Known Issues).
