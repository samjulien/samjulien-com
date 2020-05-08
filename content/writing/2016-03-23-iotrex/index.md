---
title: "IoTReX: Developing a New Platform for Hardware with Observables"
slug: iotrex
date: 2016-03-24T01:43:11.000Z
date_updated: 2017-05-23T21:44:40.000Z
published: true
banner: './images/trex.jpg'
tags: 
- Tech
---

*Some of my neighbors keep plastic dinosaurs on display in their yard (because Portland). I was starting to type out a title for this and realized that with the combination of IoT and RxJS it would just be irresponsible of me not to title it IoTReX. Plus, look at that symmetry, it's beautiful.*

Back in [January](http://www.samjulien.com/crafting/), I wrote that I realized reactive programming would pair really well with IoT when I first got the Makey Makey. The more I tinkered with my Arduino Uno, the more this was confirmed, so a couple of weeks ago I decided to dig deeper. I figured out how to flash my Arduino with the Firmata firmware, then set up a simple [johnny-five](https://github.com/rwaldron/johnny-five) node application. I included RxJS, spun up my own observable, and used a timeout to (very primitively) make an LED blink.

That was my starting point (I hadn't realized yet that johnny-five had a built in blink function). I recently saw Pete Hodgson give a talk using his library called [Marbelous](https://github.com/moredip/marbelous), which uses d3 to visualize observables in the style of the famous [RxMarbles](http://rxmarbles.com/) diagram. It seemed like it would be cool to make that happen with readings from an Arduino, but first I needed a way to run those libraries and send the data to Marbelous. That's when I remembered Rachel White's [talk from Node Interactive](https://www.youtube.com/watch?v=cEIYSOxDiqE) on the amazing automated cat feeder she calls Robokitty. In that project, Rachel uses HapiJS and socket.io to send data to johnny-five and control a servo. So, I built from that, made a few changes, and added RxJS and Marbelous to the mix. Then, I made a simple circuit with a photoresistor (fancy word for light sensor) on the Arduino.

Conveniently, RxJS has a method to read from streams like those of socket.io right out of the box. Reading from the Arduino on the client side and visualizing with Marbelous is as simple as:

```javascript
source$ = Rx.Observable.fromEvent(socket, 'photoData')
  .distinctUntilChanged();
source$.visualize('Photoresistor Data');
```

That `distinctUntilChanged()` is on there to filter out duplicate readings since the stream is continuous. From there, you can use any of Rx's methods to manipulate the data in real time, like map, flatMap, filter, or scan. There are hundreds of uses for this, but the most fun to prototype is with music. I found an abandoned but quite sophisticated audio library called [Timbre.js](http://mohayonao.github.io/timbre.js/) and put it to work. Timbre generates tones, everything from simple sin waves to complex synthesis. I added a second light sensor and changed the frequency of two tone generators as the client subscribes to the light sensor data. The result was [this video](https://www.youtube.com/watch?v=klLaLh0M-ME) of my homemade theremin. 

Granted, this little theremin isn't exactly earth-shattering. But it's not the thing itself that excites me, it's the fact that this is the simplest possible prototype. Think about what else could be accomplished if any piece of this became more sophisticated, like if you:

- Added a pressure sensor to control something else like volume or a low pass filter
- Triggered samples instead of synthesizers
- Made the synthesis more complex
- Added complexity to the server by allowing multiple people to send in their readings and control different pieces of the composition
- Built out the client side with Angular 2 or React for a really slick user experience
- Allowed the client and server to write back to the board
- Added a wi-fi shield to the Arduino to make this whole process wireless

It's these last two that are the real kickers, because now you're talking real-time, wireless ability to read from and write to devices with a very simple setup and painless syntax - no C needed. And while music is a fun application of this, the applications for industry and agriculture, as well as social justice, are plentiful and dizzying. Irrigation controlled wirelessly by moisture readings with a snazzy visualization dashboard? Done. A distress system for victims of human trafficking disguised as a pocket mirror that includes real-time tracking of GPS data fed straight to people who can help? Done. 

To me, what makes this combination so powerful is the **ease and elegance of reading and manipulating the microcontroller data with RxJS**.  There are sensors that read just about anything, from pressure to GPS coordinates to temperature, and most of them are very inexpensive. The combination of johnny-five, socket.io, and RxJS allows for harnessing that data, visualizing it, reading it, and running calculations on it all in real time. 

That sounded like an infomercial sales pitch. It wasn't (and I don't get paid by anyone mentioned above). But this kind of open source hardware and software combination opens a wide area of innovation to theoretically anyone, and that is incredibly exciting. You don't need to be an electrical engineer, you don't necessarily need to be in a particular location or spend a lot of money. You don't even need to learn a low-level language like C. I'm really hopeful that, coupled with the right education initiatives, these types of open tech combinations make STEM careers more accessible to underrepresented groups all over the world. I think this will lead to more homegrown social entrepreneurship within these groups and less of the western-colonialism-style of bringing tech to places like the third world.

I'm working on putting together a presentable, friendly example of the johnny-five/socket.io/RxJS combo (which I'm affectionately naming johnny-sox). I'll update this post with a link to the repo when it's up.

Until then, let me know what you think.

Cheers,
Sam
