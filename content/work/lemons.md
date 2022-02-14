---
title: Lemons Telemetry
description: 'DIY telemetry system for amature race cars'
heroClass: 'bg-center'
order: 55
images: 
  - path: 'lemons/gps-arduino.jpg'
    alt: 'Telemetry hardware consisting of an arduino, GPS unit, and RF tranciever'
  - path: 'lemons/bicycle-test-rig.jpg'
    alt: 'Testing the telemetry sending and receiving by mounting on a bicycle and going for a ride in the park'
  - path: 'lemons/bicycle-test-data.jpg'
    alt: 'Rest data recorded in real time via a laptop in my car while on the bike ride with the GPS hardware'
  - path: 'lemons/gingerman-map.jpg'
    alt: 'A high-res map created of the racetrack for rendering position and knowing when our car was in the pit area or when to count a lap'
  - path: 'lemons/maypole-antenna.jpg'
    alt: A maypole rig in the back of a friend's truck to help improve reception of the telemetry signal on the back side of the track
  - path: 'lemons/the-car.jpg'
    alt: 'The U-Stall race car which competed in Lemons and carried our telemetry unit'
---

I created telemetry system for a Lemons racecar with Arduino that allowed us to monitor basic vehicle performance and lap position from the pit during a race. 

<image-carousel :images="images"></image-carousel>

I used short range radios and GPS to relay vehicle position locally, and created a visualization that included lap count, lap times, and vehicle position on the race track by modeling the race track and in GeoJSON. The system was able to help us understand when the vehicle was coming in to the pit accurately, showed total lap count per unit time, and provided lap times in close agreement with official timing. 

Geofencing and geospatial analysis was used to identify high precision lap times even with a low GPS update frequency. Here's the pit view in action:

<iframe width="100%" height="480" src="https://www.youtube.com/embed/cc2h_wEy-vc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This was a fun project that illuminated many of the physical limitations with telemetry like, range, physical signal barriers, and bandwidth/payload tradeoffs. 