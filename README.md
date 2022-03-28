# PWA Jamstack Starter Kit with Cesium
classic front-end = static HTML, hydrated via API
classic back-end = Server/API
 
# Features 02.01.2022 stable <a href="https://cloud-atlas.app" target="_blank">LIVE DEMO</a> (Google login only)

## - Progressive Web App
A !website! which runs like a full installed application on any browser ergo any device, can be installed like an app, and is able to get uploaded to all three stores.

And all from the same codebase which is HTML, CSS, JS, React and Material-UI
<br>

## - Cesium Globe
A digital twin of the real world. Exactly like Google Earth but open-source, with a hugh potential for literally everything.
And I repeat myself saying: "why didn't Google ever did it?"
<br><br><br>

# Looking to build a new [Progressive Web App](https://web.dev/progressive-web-apps/) and not sure where to get started?

This is what you are looking for! The PWA-SPA-LOGIN-MAINSCREEN-MENU-Starter-Kit with [Cesium](https://cesium.com/platform/cesiumjs/) integration includes everything you need to start building a production ready PWA with location-based services and follows all best practices.

If you already have an app/website check out [pwabuilder.com](https://pwabuilder.com) They provide all tools to get your existing repo on the PWA track. Don't forget to check out their blog. These guys from Microsoft and Google definitely know what they are doing, staying always on the most modern, future proof stack.
<br>

# Why PWA? Deep insight into the realm of PWA - The future of the internet and apps
Progressive Web Apps - PWA Roadshow: https://youtu.be/z2JgN6Ae-Bo

This repository will run for 10$ a month on 200 fast CDN servers worldwide, with estimated 2 billion API requests included. (more under DEPLOYMENT AND PACKAGING) ...and you will need a tile-server or tile API provider on the long term (the actual API key is for evaluation only)
<br>

# WHY THE NON-COMMERCIAL LICENSE MODEL?
World Peace Engine Labs's existing and upcoming companies, apps, publishings, products, projects, and code, are always licensed by the World Peace Engine Labs License,
to provide the maximum freedom of usage, but restricted to non-profit purposes only.

The World Peace Engine Labs license consists of two well-known licenses. The MIT license is altered, restricted to non-profit purposes only.
https://github.com/worldpeaceenginelabs/PWA-SPA-LOGIN-MAINSCREEN-MENU-Starter-Kit/blob/main/LICENSE.txt
+ Creative Commons - Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
+ MIT License (altered to non-profit version)

# THIS IS A modified HARDFORK OF PWA BUILDER
(now React and Material UI - dropping the original lit and FAST libraries)

PWA Builder is an awesome project, a collaboration of a handful Microsoft and Google developers, providing a great entree for building a PWA.

You can check anytime how many PWA points your actual app/page has on (https://www.pwabuilder.com/)

+ Twitter PWA 190 points
+ Google Maps PWA 180 points
+ PWA-SPA-LOGIN-MAINSCREEN-MENU-Starter-Kit (this repository) 160 points
+ PWABuilder will show you how to improve this score up to or above Twitter's score, because the missing points of this repo are only related to stuff that you will set anyway as soon as your project goes into production.

...so this is a good repository to start with ;)

PWABuilder.com is an awesome page providing all resources, for drag and drop & copy and paste a manifest or service worker scripts and many well explained snippets for additional native app like features.
 
# YOU WILL GET

- A 100 on [Lighthouse](https://developers.google.com/web/tools/lighthouse/), giving you a great starting point for performance and accessibility.
- Includes the [PWABuilder pwa-install component](https://github.com/pwa-builder/pwa-install#pwa-install) for an app store like PWA install experience.
- [Workbox](https://developers.google.com/web/tools/workbox/) for service workers along with the [PWABuilder pwa-update component](https://github.com/pwa-builder/pwa-update#pwa-update) to give your PWA a great offline experience.
- Includes [PWABuilder pwa-auth](https://github.com/pwa-builder/pwa-auth) web component. This component lets your users sign-in/sign-up using their Google, Apple, or Facebook account. Your app receives their email address, name, and profile picture. (replaced with a not web component solution)
- Includes a blank mainscreen with a map and a blank menu with an open/close animation.
- Includes a Cesium globe for location based services.

Everything's ready to your demand...

# GETTING STARTED

### Supported Browsers

- Edge
- Chrome
- Firefox
- Safari

### Prequisites

You will need the following things properly installed on your computer.

* [Node.js](http://nodejs.org/) (with NPM)
* [NPM](https://www.npmjs.com/get-npm)

You should also be familiar with [TypeScript](https://www.typescriptlang.org/) which we use for this project. This helps give you more guidance as you code from [intellisense](https://code.visualstudio.com/docs/editor/intellisense) when using [VSCode](https://code.visualstudio.com/).

### Recommended Development setup

We recommend the following tools for your dev setup:

* Editor: [VSCode](https://code.visualstudio.com/)
* Terminal: [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal-preview/9n0dx20hk701?activetab=pivot:overviewtab) or [hyper](https://hyper.is/)

### Development

Run `npm install` and then run `npm run dev`, the starter should open in your default browser. From here you can start developing, your changes will be rebuilt and reloaded in the browser as you develop.

### Building for Production

Run `npm run build`, the `dist/` folder will contain your built PWA. The production build will also generate a pre-caching service worker using [Workbox](https://developers.google.com/web/tools/workbox/modules/workbox-precaching).

# DEPLOYMENT AND PACKAGING

### Front-end Deployment

Once your PWA is ready to deploy you can deploy/host it anywhere.

I recommend Cloudflare.com (0€ Basic plan, unlimited pages, unlimited bandwidth and 500 deploys a month)

Your static, but from the API fed dynamic app, will be deployed to 200 servers worldwide, loading your app in an average of 1.8 sec in every corner around the globe.
From Metropole to jungle village...

Your API is pretty much the only bottleneck!
But that's awesome, since we've eliminated every other administrational burden, with just dropping our app to Cloudflare.

Cloudflare is able to catch spikes in traffic with ease.
Without Cloudflare, you would have to pay server traffic every time a user visits your app/page or downloads or updates the app.

If the free tier of most as-a-service/api providers is used up, many developers regret some of their decisions due to the complexity of the huge amount of connected environments that developers in the pre-Jamstack time were facing.

Now it's reduced to only a front-end in the framework/language you prefer, and an API back-end that is also replaceable.

### Back-end Deployment (centralized server)

IF YOU DONT NEED ANY DATABASE
Simply store your Websites/Apps sourcecodes on Github. Github serves to Cloudflare's ultra fast CDN's. Lightspeed fast, the lowest vulnerabilities, easy to maintain, for zero cost.

IF YOU NEED A DATABASE

First Option:
CockroachDB - Undestructible, self scaling, easy payment concept on demand and simple concept if you take a plan.
Get 5GB a lifetime for free!

Second option:
I recommend Digitalocean's STRAPI Basic Droplet: 2 CPU, 2 GB RAM, 2 Terabyte traffic included (est. 2 billion API requests) for 10$ a month.
Another Terabyte comes for another cheap 10$. (est. 1 billion API requests)

If you need more power, there is a Linux VServer with insane 10 CPU, 48 GB RAM, 800 GB SSD, unlimited traffic for 20€ a month at [Strato](https://www.strato.de/server/linux-vserver/)

From there, if you are growing bigger and bigger, your one and only task is "only" scaling your API server.

That's it. API scaling will become an issue when your business is so big that you actually have the funds to solve the problem.
All the other stuff, thats usually connected with running an app or even a platform, is done.

You can focus on design and code and nothing else. (...and API server scaling...)

JAMStack rocks!!! Cheers.

# OTHER FEATURES

### Packaging

Many app stores, including the Microsoft Store and the Google Play Store support PWAs. To package your PWA for deployment to these app stores head back to https://pwabuilder.com/, put in your URL and hit `Build My PWA`.

### Dual Screen support

The default layout of this starter is dual screen friendly. We do this [here](https://github.com/pwa-builder/pwa-starter/blob/master/src/script/pages/app-home.ts#L41) by using the [CSS Spanning API](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/master/Foldables/explainer.md#proposal-css-primitives-for-building-dual-screen-layouts) to adjust the layout when the app is spanned on a dual screen device. As you start to build your PWA you can use these CSS features to ensure that your PWA looks good in all of the [dual screen postures](https://docs.microsoft.com/en-us/dual-screen/introduction#dual-screen-overview). For more info on developing PWAs for dual screen devices you can check out the [Microsoft docs here](https://docs.microsoft.com/en-us/dual-screen/cross-platform/#build-web-experiences).
