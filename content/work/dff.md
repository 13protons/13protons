---
title: Driver First Framework
description: 'In vehicle apps built with a declarative API and a focus on safety'
heroClass: bg-center
order: 95
images: 
  - path: 'ngi/dff-init.jpg'
    alt: 'Command line interface for creating a new in-vehicle app with the NGI emulator and Driver First Framework'
  - path: 'ngi/hackathon.jpg'
    alt: Our team sponsored a hackathon at Artist's Asylum in Boston where teams competed to see who could build the most interesting and innnovative in-vehicle apps using our tools
  - path: 'ngi/nyt.jpg'
    alt: 'New York Times app created as part of 20 apps in 20 days'
  - path: 'ngi/podcast.jpg'
    alt: 'Audio player from DFF within the NPR One app running in a vechile that was created as part of 20 apps in 20 days'
  - path: 'ngi/song-detail.jpg'
    alt: 'Audio player detail from DFF documentation website running in our emulator'
---
<StyleLink href="https://developer.gm.com/">GM Developer Site</StyleLink>

The Driver First Framework is a project I led development on while at General Motors focused on building in-vehicle apps that honor strict guidelines for preventing distracted driving. We created a specification for declaratively writing application that would use pre-built and branded UI components. We provided thoughtful hooks for adding customization and novel behavior, and codified what we learned about the company's internal software validation process do reduce the pain of discovering those guidelines only after failing safety and certification gates. 


<image-carousel :images="images"></image-carousel>

The three core elements of the Driver First Framework are the declarative app specification, a UI library for rendering common tasks, and a way of mathematically assessing the cognitive load of an application. 

We chose a JSON specification for applications to allow portability between the (then) current generation of JavaScript powered applications and upcoming Android based system now known by public facing brands such as "The Buick Infotainment System". 

Our declarative specification allowed us to do static analysis on an entire application to identify discrete task path lengths that could then be automatically assessed for driver workload impact. 

Our approach to measuring cognitive load involved creating a model of the application as a weighted directed graph. This allowed us to visualize how users would flow through an application, and we tuned variables such as edge weights to match experimental testing results. 

We went through a process with our safety teams to individually and experimentally verify how cognitively taxing layouts and tasks were with many permutations of content and order of operations. All of these learning were incorporated back into the tool and company policy to help streamline what anyone who's worked in automotive will know can be an arduous certification process. The result was a system that could very accurately predict whether or not a dedicated analysis of a particular application would pass through the safety certification process. 

We shipped this tool as a feature of the NGI Emulator, and validated it through internal development, hackathons, and eventually a big internal push that became known as "20 apps in 20 days". During that push we broke every record we could think of in terms of development speed, app quality, in-vehicle fidelity and required certification work. 
