---
title: Observables Resources
slug: observables-resources
date: 2015-11-03
date_updated: 2020-08-07
banner: './images/everything-is-a-stream-dog.jpg'
published: true
tags:
- Tech
---

*That image comes from [this deck by Rob Wormald](https://slides.com/robwormald/everything-is-a-stream).*

At the end of September, I watched [Rob Wormald](https://twitter.com/robwormald) give a talk on observables and RxJS entitled, "Everything is a Stream." This talk, along with some advice Rob's given me on an Angular Slack channel, sent me down a rabbit hole of learning about observables, reactive programming, and RxJS. I thought I'd share some of the resources I've found on the subject so you can do less scouring the internet and more learning.

The TL;DR on observables is basically that events can be thought of as streams that can be captured in arrays (mouse-clicks, for example), and those streams of events can then be modified in real time using array functions like filter, map, and reduce. This pairs especially nicely with ES6 due to the addition of iterables, lambda syntax for anonymous functions (that's .NET-speak for "fat arrows"), and a few new array functions. And, unlike promises, observables can be cancelled. 

This matters as an Angular developer because in Angular 2, Http (the equivalent of $http in ng1) will return an observable, not a promise. Here are a few resources I've found to be helpful in understanding these concepts:

- [Rob's slides](http://slides.com/robwormald/everything-is-a-stream#/) from his talk. The video isn't yet available.
- [The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754) by Andre Staltz. This is where you should start, and Rob references this article quite a few times in his talk.
- [Egghead.io's Intro to Reactive Programming](https://egghead.io/series/introduction-to-reactive-programming), also by Andre Staltz. Much of this series requires a Pro subscription, but hey, Egghead is great.
- [Reactive Programming with RxJS](https://pragprog.com/book/smreactjs/reactive-programming-with-rxjs) by Sergi Mansilla, a Pragmatic Bookshelf book. It's still in beta as of November 2015, but you can buy the beta book at a discount and get access to the complete title when it's released.
- [RxJS with Matthew Podwysocki](https://devchat.tv/js-jabber/182-jsj-rxjs-with-matthew-podwysocki), an episode of JavaScript Jabber. Matthew Podwysocki is a Microsoft veteran who has been working on RxJS for years. He goes into a lot of detail on the history of observables and where he thinks they're going.

Enjoy!