---
title: Lemons Telemetry
description: 'DIY telemetry system for amature race cars'
---

I created telemetry system for a Lemons racecar with Arduino that allowed us to monitor basic vehicle performance and lap position from the pit during a race. 

I used short range radios and GPS to relay vehicle position locally, and created a visualization that included lap count, lap times, and vehicle position on the race track by modeling the race track and in GeoJSON. The system was able to help us understand when the vehicle was coming in to the pit accurately, showed total lap count per unit time, and provided lap times in close agreement with official timing. 

Geofencing and geospatial analysis was used to identify high precision lap times even with a low GPS update frequency. 

This was a fun project that illuminated many of the physical limitations with telemetry like, range, physical signal barriers, and bandwidth/payload tradeoffs. 