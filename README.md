# 🌐 Agency Web

website link - https://agency-web-application-three.vercel.app/

A modern **Next.js** agency website built with **TypeScript**, **TailwindCSS**, and **shadcn/ui**.  
This project also integrates with a **real API** to fetch dynamic content.

---

## ✨ Features

- ⚡ **Next.js 13+ App Router** with TypeScript  
- 🎨 **TailwindCSS** for styling  
- 🧩 **shadcn/ui** components (accessible, customizable, modern)  
- 🌗 **Dark mode support** with theme toggle  
- 📱 **Fully responsive design**  
- 🔗 **Dynamic API integration** (fetching real data)  
- 🛠️ **Reusable UI components** (Navbar, Footer, Cards, Sections, etc.)  
- 🚀 SEO friendly with metadata & Open Graph setup  

---

## 📂 Project Structure

agency-web/
├── app/ # Next.js App Router pages
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Homepage
│ └── ...
├── components/ # Reusable UI components
│ ├── layout/ # Navbar, Footer, SubscribeSection
│ ├── ui/ # shadcn components
│ └── ...
├── lib/ # API helpers
├── public/ # Static assets (icon.ico, images, etc.)
├── styles/ # Global styles
├── package.json
└── README.md

yaml
Copy code

---

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/agency-web.git
   cd agency-web
Install dependencies

bash
Copy code
npm install
# or
yarn install
Set up environment variables
Create a .env.local file in the root directory and add your API credentials:

env
Copy code
NEXT_PUBLIC_API_URL=https://api.example.com
Run the development server

bash
Copy code
npm run dev
