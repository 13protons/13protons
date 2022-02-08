---
title: NGI Emulator
description: The developer experience for building apps in General Motors' vehicles
featured: true
---

While working at General Motors I was on a team tasked with creating an emulator for in-vehicle app development. The goal was to create something similar to the XCode device simulator, or Android Emulator, but without an ability to use device images from real vehicles. We had an API spec, and the notion that we'd need to simulate in-vehicle CAN Bus activity, debug apps running on cars, simulate real world network latency, and keep up with evolving screen size sizes.

My role was to spec out the architecture, choose technologies, and built the first prototype. I ended up being the lead developer on the project as the team grew, and helping to produce over 20 apps that are still available in Chevy, Cadillac, GMC and Buick vehicles today. 

The technical challenges for this project were vast. We were able to profile the system running on real vehicles and it turns out the system we wanted to emulate actually ran apps as sandboxed webpages running in a specific (locked and old) version of Webkit. The API we were meant to expose proxied over 200 vehicle signals, and added a few of it's own. When embarking on this project the internal state of app development was very shaky - apps took a very long time to build, had very low parity between development environments and real vehicles, and were raising safety and quality concerns. 

What we ended up building was an Electron based desktop app that could run applications from their source code in a browser environment that very closely matched the one developers would see in production. We were able to tune or modify browser APIs to match the quirks of the system, and I developed a web socket server that was a very faithful analog for the vehicle CAN network. I created interfaces for triggering signals on that bus so that apps could do thinks like react to road speed and passenger presence. 

This project unlocked lots of creativity and allowed developers working in the in-vehicle app space to become much more productive. We ended up building in a suite of tools that handled app bundling and installing onto test vehicles. We created a system that allowed for sandboxed development over Wi-fi on whitelisted production vehicles, so that 3rd parties could test their ideas by simply picking up a loaner vehicle from a dealership without any special hardware. We even hosted hackathons, participate in others, and created an arcade game that could be driven with real vehicles!

During the course of creating the NGI Emulator and it's related tools I made great friends, learned all about the finer points Node.js, Electron, realtime messaging, Vue, and many other related technologies. I also learned about the way documentation and tool quality affects developer perception and adoption, about the limits and boundaries of technology compared to product development, and product-market fit. I learned about the dynamics of earning and maintaining sponsorship for a technically challenging project inside a large organization. 

<iframe src='https://players.brightcove.net/1050888044001/ByziG8mfx_default/index.html?videoId=5438328173001' allowfullscreen frameborder=0></iframe>