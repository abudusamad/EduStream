# EduStream Online Learning Platform



![demo](.github/README_ASSETS/3d-portfolio.png)

[![ladunjexa](https://custom-icon-badges.demolab.com/badge/made%20by%20-ladunjexa-556bf2?logo=github&logoColor=white&labelColor=101827)](https://github.com/abudusamad)
[![License](https://img.shields.io/github/license/ladunjexa/reactjs18-3d-portfolio?color=dddddd&labelColor=000000)](https://github.com/ladunjexa/reactjs18-3d-portfolio/blob/main/LICENSE)

## 🌐 Live Demo

Explore the live demonstration of the project:
[Edustream online learning platform](https://edustream-learning.vercel.app/)

## 📝 Description

**Edustream** is an online learning platform that allows users to learn and teach online. It is built with React.js, Next.js, and Tailwind CSS. The platform is designed to provide a seamless learning experience for students and teachers. It includes features such as course creation, course management, video streaming, and analytics.

<details><summary><b>Folder Structure</b></summary>

```bash
edustream /
.
├── actions
│   ├── get-analytics.ts
│   ├── get-chapter.ts
│   ├── get-courses.ts
│   ├── get-dashboard.ts
│   ├── get-progress.ts
│   └── stream.ts
├── app
│   ├── api
│   │   ├── courses
│   │   │   ├── [courseId]
│   │   │   │   ├── attachments
│   │   │   │   │   ├── [attachmentId]
│   │   │   │   │   │   └── route.ts
│   │   │   │   │   └── route.ts
│   │   │   │   ├── chapters
│   │   │   │   │   ├── [chapterId]
│   │   │   │   │   │   ├── progress
│   │   │   │   │   │   │   └── route.ts
│   │   │   │   │   │   ├── publish
│   │   │   │   │   │   │   └── route.ts
│   │   │   │   │   │   ├── route.ts
│   │   │   │   │   │   └── unpublish
│   │   │   │   │   │       └── route.tsx
│   │   │   │   │   ├── reorder
│   │   │   │   │   │   └── route.ts
│   │   │   │   │   └── route.ts
│   │   │   │   ├── checkout
│   │   │   │   │   └── route.ts
│   │   │   │   ├── publish
│   │   │   │   │   └── route.ts
│   │   │   │   ├── route.ts
│   │   │   │   └── unpublish
│   │   │   │       └── route.ts
│   │   │   └── route.ts
│   │   ├── uploadthing
│   │   │   ├── core.ts
│   │   │   └── route.ts
│   │   └── webhooks
│   │       ├── clerk
│   │       │   └── route.ts
│   │       └── stripe
│   │           └── route.ts
│   ├── (auth)
│   │   └── (routes)
│   │       ├── sign-in
│   │       │   └── [[...sign-in]]
│   │       │       └── page.tsx
│   │       └── sign-up
│   │           └── [[...sign-up]]
│   │               └── page.tsx
│   ├── (course)
│   │   └── courses
│   │       └── [courseId]
│   │           ├── chapters
│   │           │   └── [chapterId]
│   │           │       ├── _components
│   │           │       │   ├── course-enroll-button.tsx
│   │           │       │   ├── course-progress-button.tsx
│   │           │       │   └── video-player.tsx
│   │           │       └── page.tsx
│   │           ├── _components
│   │           │   ├── course-mobile-sidebar.tsx
│   │           │   ├── course-navbar.tsx
│   │           │   ├── course-sidebar-item.tsx
│   │           │   └── course-sidebar.tsx
│   │           ├── layout.tsx
│   │           └── page.tsx
│   ├── (dashboard)
│   │   ├── _components
│   │   │   ├── logo.tsx
│   │   │   ├── mobile-sidebar.tsx
│   │   │   ├── navbar.tsx
│   │   │   ├── sidebar-items.tsx
│   │   │   ├── sidebar-routes.tsx
│   │   │   └── sidebar.tsx
│   │   ├── layout.tsx
│   │   └── (routes)
│   │       ├── (root)
│   │       │   ├── _components
│   │       │   │   └── info-card.tsx
│   │       │   └── dashboard
│   │       │       └── page.tsx
│   │       ├── search
│   │       │   ├── _components
│   │       │   │   ├── categories.tsx
│   │       │   │   └── category-items.tsx
│   │       │   └── page.tsx
│   │       └── teacher
│   │           ├── analytics
│   │           │   ├── _components
│   │           │   │   ├── chat.tsx
│   │           │   │   └── data-card.tsx
│   │           │   └── page.tsx
│   │           ├── courses
│   │           │   ├── _components
│   │           │   │   ├── columns.tsx
│   │           │   │   └── data-table.tsx
│   │           │   ├── [courseId]
│   │           │   │   ├── chapters
│   │           │   │   │   └── [chapterId]
│   │           │   │   │       ├── _components
│   │           │   │   │       │   ├── chapter-access-form.tsx
│   │           │   │   │       │   ├── chapter-actions.tsx
│   │           │   │   │       │   ├── chapter-description-form.tsx
│   │           │   │   │       │   ├── chapter-title-form.tsx
│   │           │   │   │       │   └── chapter-video-form.tsx
│   │           │   │   │       └── page.tsx
│   │           │   │   ├── _components
│   │           │   │   │   ├── actions.tsx
│   │           │   │   │   ├── attachment-form.tsx
│   │           │   │   │   ├── category-form.tsx
│   │           │   │   │   ├── chapters-form.tsx
│   │           │   │   │   ├── chapters-list.tsx
│   │           │   │   │   ├── course-title.tsx
│   │           │   │   │   ├── description-form.tsx
│   │           │   │   │   ├── image-form.tsx
│   │           │   │   │   └── price-form.tsx
│   │           │   │   └── page.tsx
│   │           │   └── page.tsx
│   │           ├── create
│   │           │   └── page.tsx
│   │           └── layout.tsx
│   ├── globals.css
│   ├── (landing)
│   │   ├── _components
│   │   │   ├── cta-button.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── get-started.tsx
│   │   │   ├── heading.tsx
│   │   │   ├── hero-section.tsx
│   │   │   ├── logo-cloud.tsx
│   │   │   ├── multitenancy.tsx
│   │   │   ├── navbar.tsx
│   │   │   ├── pause-video.tsx
│   │   │   ├── square-patterns.tsx
│   │   │   ├── style
│   │   │   │   ├── logoCloud.css
│   │   │   │   ├── logoCloud.css.map
│   │   │   │   └── logoCloud.scss
│   │   │   └── testimonies.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   └── (streaming)
│       ├── _components
│       │   ├── Alert.tsx
│       │   ├── CallList.tsx
│       │   ├── EndCallButton.tsx
│       │   ├── HomeCard.tsx
│       │   ├── Loader.tsx
│       │   ├── MeetingCard.tsx
│       │   ├── MeetingModal.tsx
│       │   ├── MeetingRoom.tsx
│       │   ├── MeetingSetup.tsx
│       │   ├── MeetingTypeList.tsx
│       │   ├── MobileNavbar.tsx
│       │   ├── navbar.tsx
│       │   └── Sidebar.tsx
│       ├── (home)
│       │   ├── layout.tsx
│       │   ├── personal-room
│       │   │   └── page.tsx
│       │   ├── previous
│       │   │   └── page.tsx
│       │   ├── recordings
│       │   │   └── page.tsx
│       │   ├── stream-home
│       │   │   └── page.tsx
│       │   └── upcoming
│       │       └── page.tsx
│       ├── layout.tsx
│       └── meeting
│           └── [id]
│               └── page.tsx
├── CODE_OF_CONDUCT.md
├── components
│   ├── banner.tsx
│   ├── container.tsx
│   ├── course-card.tsx
│   ├── course-progess.tsx
│   ├── courses-list.tsx
│   ├── editor.tsx
│   ├── file-upload.tsx
│   ├── icon-badge.tsx
│   ├── modals
│   │   └── confirm-modal.tsx
│   ├── navbar-routes.tsx
│   ├── preview.tsx
│   ├── providers
│   │   ├── confetti-provider.tsx
│   │   ├── posthog-proivider.tsx
│   │   ├── StreamClientProvider.tsx
│   │   ├── theme-provider.tsx
│   │   └── toast-provider.tsx
│   ├── rive-animation.tsx
│   ├── search-input.tsx
│   ├── spinner.tsx
│   ├── theme.tsx
│   └── ui
│       ├── alert-dialog.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── checkbox.tsx
│       ├── combobox.tsx
│       ├── command.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── popover.tsx
│       ├── progress.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── skeleton.tsx
│       ├── table.tsx
│       ├── textarea.tsx
│       ├── toaster.tsx
│       ├── toast.tsx
│       └── use-toast.ts
├── components.json
├── config
│   └── site.ts
├── constants
│   └── index.ts
├── hms.md
├── hooks
│   ├── use-confetti-store.ts
│   ├── use-debounce.ts
│   ├── useGetCallById.ts
│   ├── useGetCalls.ts
│   ├── use-is-touch-device.ts
│   ├── use-mobile-sidebar.ts
│   └── use-scroll-top.tsx
├── lib
│   ├── db.ts
│   ├── format.ts
│   ├── stripe.ts
│   ├── teacher.ts
│   ├── uploadthing.ts
│   └── utils.ts
├── LICENSE
├── middleware.ts
├── next.config.js
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.js
├── prisma
│   ├── migrations
│   │   ├── 20240715233643_adding_user_model
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── public
│   ├── animations
│   │   └── pages
│   │       ├── ai
│   │       │   └── scene.splinecode
│   │       ├── branching
│   │       │   └── branching-route.riv
│   │       ├── home
│   │       │   ├── api.riv
│   │       │   ├── clock.riv
│   │       │   ├── dots-stack.riv
│   │       │   └── get-started.riv
│   │       └── pricing
│   │           ├── flip-numbers.riv
│   │           ├── icon-launch.riv
│   │           ├── icon-prototype.riv
│   │           ├── icon-scale.riv
│   │           ├── lights.riv
│   │           └── pricing.riv
│   ├── icons
│   │   ├── add-meeting.svg
│   │   ├── add-personal.svg
│   │   ├── call-ended.svg
│   │   ├── checked.svg
│   │   ├── copy.svg
│   │   ├── hamburger.svg
│   │   ├── Home.svg
│   │   ├── join-meeting.svg
│   │   ├── loading-circle.svg
│   │   ├── logo.svg
│   │   ├── play.svg
│   │   ├── previous.svg
│   │   ├── recordings.svg
│   │   ├── schedule.svg
│   │   ├── share.svg
│   │   ├── three-dots.svg
│   │   ├── upcoming.svg
│   │   ├── Video.svg
│   │   └── yoom-logo.svg
│   ├── images
│   │   ├── avatar-1.jpeg
│   │   ├── avatar-2.jpeg
│   │   ├── avatar-3.png
│   │   ├── avatar-4.png
│   │   ├── avatar-5.png
│   │   ├── creative-work.svg
│   │   ├── falling.svg
│   │   ├── google.svg
│   │   ├── hero-background.png
│   │   └── logos
│   │       ├── brilliant.svg
│   │       ├── bytedance.svg
│   │       ├── joco.svg
│   │       ├── resend.svg
│   │       └── zendesk.svg
│   ├── logo.svg
│   ├── next.svg
│   ├── sign-n.jpg
│   ├── vercel.svg
│   └── videos
│       └── pages
│           ├── cli
│           │   ├── code.mp4
│           │   └── code.webm
│           ├── developer-days
│           │   ├── cactus.mp4
│           │   ├── cactus.webm
│           │   ├── dr-brown.mp4
│           │   ├── dr-brown.webm
│           │   ├── hands-mobile.mp4
│           │   ├── hands-mobile.webm
│           │   ├── hands.mp4
│           │   └── hands.webm
│           └── home
│               ├── ai-loop.mp4
│               ├── ai-loop.webm
│               ├── hero
│               │   ├── branching1.ts
│               │   ├── branching2.ts
│               │   ├── branching3.ts
│               │   ├── branching4.ts
│               │   ├── branching5.ts
│               │   ├── branching.m3u8
│               │   ├── branching.mp4
│               │   ├── scaling0.ts
│               │   ├── scaling1.ts
│               │   ├── scaling2.ts
│               │   ├── scaling3.ts
│               │   ├── scaling.m3u8
│               │   └── scaling.mp4
│               ├── industry
│               │   ├── testimonials0.ts
│               │   ├── testimonials1.ts
│               │   ├── testimonials2.ts
│               │   ├── testimonials3.ts
│               │   ├── testimonials4.ts
│               │   ├── testimonials5.ts
│               │   ├── testimonials6.ts
│               │   ├── testimonials7.ts
│               │   ├── testimonials.m3u8
│               │   └── testimonials.mp4
│               ├── lightning
│               │   ├── active.mp4
│               │   ├── active.webm
│               │   ├── idle.mp4
│               │   ├── idle.webm
│               │   ├── popup.mp4
│               │   └── popup.webm
│               ├── next-gen.mp4
│               ├── next-gen.webm
│               ├── replicas.mp4
│               └── replicas.webm
├── qodana.sarif.json
├── qodana.yaml
├── README.md
├── scripts
│   └── seed.ts
├── SECURITY.md
├── tailwind.config.ts
└── tsconfig.jso
```

</details>

## 📖 Table of Contents

<details><summary>Table of Contents</summary>

- [Live Demo](#-live-demo)
- [Description](#-description)
- [Technologies Used](#-technologies-used)
- [Get Started](#-get-started)
  - [Prerequisites](#-prerequisites)
  - [Installation and Run Locally](#-installation-and-run-locally)
  - [Scripts](#-scripts)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
  - [Deploy to production (manual)](#-deploy-to-production-manual)
  - [Deploy on Vercel (recommended)](#-deploy-on-vercel-recommended)
  - [Deploy on Netlify](#-deploy-on-netlify)
- [Contributing](#-contributing)
  - [Bug / Feature Request](#-bug--feature-request)
- [Acknowledgements](#-acknowledgements)
- [References](#-references)
- [Contact Us](#-contact-us)
- [License](#-license)

</details>

## ✨ Technologies Used

<details><summary><b>EduStream</b> is built using the following technologies:</summary>

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that
  compiles to plain JavaScript.
  development experience for modern web projects.
- [React.js](https://reactjs.org/): React is a free and open-source front-end JavaScript library for
  building user interfaces or UI components.
- [Three.js](https://threejs.org/): Three.js is a cross-browser JavaScript library and application
  programming interface used to create and display animated 3D computer graphics in a web browser
  using WebGL.
- [Framer Motion](https://www.framer.com/motion/): Framer Motion is a production-ready motion
  library for React.
- [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS is a utility-first CSS framework for
  rapidly building custom user interfaces.
- [ESLint](https://eslint.org/): ESLint is a static code analysis tool for identifying problematic
  patterns found in JavaScript code.
- [Prettier](https://prettier.io/): Prettier is an opinionated code formatter.
- [Vercel](https://vercel.com/): Vercel is a cloud platform for frontend developers, providing the
  frameworks, workflows, and infrastructure to build a faster, more personalized Web.

</details><br/>

[![Technologies Used](https://skillicons.dev/icons?i=ts,vite,react,threejs,tailwind,vercel)](https://skillicons.dev)

## 🧰 Get Started

To get this project up and running in your development environment, follow these step-by-step
instructions.

### 📋 Prerequisites

In order to install and run this project locally, you would need to have the following installed on
your local machine.

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm)
- [Git](https://git-scm.com/downloads)

### ⚙️ Installation and Run Locally

**Step 0:**

Note that you can use either `npm` or `yarn` to run the scripts. In this guide, we will use `npm`.
Setup clerk.dev account and get the required credentials to run the app.


**Step 1:**

Download or clone this repo by using the link below:

```bash
git https://github.com/abudusamad/EduStream.git
```

**Step 2:**

Execute the following command in the root directory of the downloaded repo in order to install
dependencies:

```bash
npm install
```

**Step 3:**

Execute the following command in order to run the development server locally:

```bash
npm run dev
```

**Step 4:**

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 📜 Scripts

All scripts are defined in the `package.json` file. Here is a list of all scripts:

| Script             | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`      | Installs dependencies                       |
| `npm run dev`      | Starts local dev server at `localhost:3000` |
| `npm run build`    | Build your production site to `./dist/`     |
| `npm run preview`  | Boot up a local static web server           |
| `npm run lint`     | Run ESLint                                  |
| `npm run ts:check` | Perform type-checking                       |

## 🔒 Environment Variables

Environment variables can be used for configuration. They must be set before running the app.

> [Environment variables](https://en.wikipedia.org/wiki/Environment_variable) are variables that are
> set in the operating system or shell, typically used to configure programs.

**Edustream** uses [EmailJS](https://www.emailjs.com/) as external service. You need
to create an account and get the required credentials to run the app.

Create a `.env` file in the root directory of the project and add the following environment
variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=${CLERK_PUBLISHABLE_KEY}
CLERK_SECRET_KEY=${CLERK_SECRET_KEY}
CLERK_WEBHOOK_SECRET=${CLERK_WEBHOOK_SECRET}
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/search
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/search

DATABASE_URL=${DATABASE_URL}

UPLOADTHING_SECRET=${UPLOADTHING_SECRET}
UPLOADTHING_APP_ID=${UPLOADTHING_APP_ID}

MUX_TOKEN_ID=${MUX_TOKEN_ID}
MUX_TOKEN_SECRET=${MUX_TOKEN_SECRET}

NEXT_PUBLIC_APP_URL=http://localhost:3000


STRIPE_SECRET_KEY=${STRIPE_SECRET_KEY}
STRIPE_WEBHOOK_SECRET=${STRIPE_WEBHOOK_SECRET}
STRIPE_PUBLISHABLE_KEY=${STRIPE_PUBLISHABLE_KEY}


NEXT_PUBLIC_POSTHOG_KEY=${POSTHOG_KEY}

NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_STREAM_API_KEY=${STREAM_API_KEY}
STREAM_SECRET_KEY=${STREAM_SECRET_KEY}
```

## 🚀 Deployment

#### Deploy to production (manual)

You can create an optimized production build with the following command:

```bash
npm run build
```

#### Deploy on Vercel (recommended)

The easiest way to deploy this Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fladunjexa%2Freactjs18-3d-portfolio)

#### Deploy on Netlify

You can also deploy this Next.js app with [Netlify](https://www.netlify.com/).

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ladunjexa/reactjs18-3d-portfolio)

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🔧 Contributing


Contributions are what make the open source community such an amazing place to learn, inspire, and
create. Any contributions you make are **greatly appreciated**.

To fix a bug or enhance an existing module, follow these steps:

1. Fork the repo
2. Create a new branch (`git checkout -b improve-feature`)
3. Make the appropriate changes in the files
4. Commit your changes (`git commit -am 'Improve feature'`)
5. Push to the branch (`git push origin improve-feature`)
6. Create a Pull Request 🎉


## 💎 Acknowledgements

I'd like to express my gratitude to the following people who helped me with this project and made it
possible:

- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Vertical Timeline Component](https://www.npmjs.com/package/react-vertical-timeline-component)
- [React Parallax Tilt](https://www.npmjs.com/package/react-parallax-tilt)
- [Maath](https://www.npmjs.com/package/maath)
- [EmailJS](https://www.emailjs.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Vercel](https://vercel.com/)
- [Next.js](https://nextjs.org/)
- [clerk.dev](https://clerk.dev/)
- [Stripe](https://stripe.com/)
- [PostHog](https://posthog.com/)
- [Stream](https://getstream.io/)
- [UploadThing](https://uploadthingy.com/)
- [Prisma](https://www.prisma.io/)
- [muxData](https://mux.com/)

<!-- 
## 📞 Contact Us

[![Telegram](https://img.shields.io/badge/Telegram-@ladunjexa-2CA5E0?style=social&logo=telegram&logoColor=000000)](https://t.me/ladunjexa)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ladunjexa-blue?style=flat&logo=linkedin&logoColor=b0c0c0&labelColor=363D44)](https://www.linkedin.com/in/lironabutbul)
[![Instagram](https://img.shields.io/badge/Instagram-ladunjexa-grey?style=flat&logo=instagram&logoColor=b0c0c0&labelColor=8134af)](https://www.instagram.com/ladunjexa)
[![Discord](https://img.shields.io/badge/Discord-ladunjexa-7289da?style=flat&logo=discord&logoColor=b0c0c0&labelColor=2c2f33)](https://discord.com/users/827996364331810816) -->


