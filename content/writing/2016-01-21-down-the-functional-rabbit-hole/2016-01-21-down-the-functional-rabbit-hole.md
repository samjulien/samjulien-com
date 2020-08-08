---
title: Down the Functional Rabbit Hole
slug: down-the-functional-rabbit-hole
date: 2016-01-21T23:38:05.000Z
date_updated:   2017-05-22T23:03:46.000Z
published: true
tags:
- Tech
---

> One thing I'm discovering is that transforming data is easier to think about than maintaining state.
- [Dave Thomas](http://pragdave.me/blog/2014/10/05/thinking-in-transforms-handling-options/)

A few months back, in the wake of wrapping my head around observables and RxJS (still a work in progress), I spent a bunch of time digging through resources on functional programming. I left this compilation sitting in my drafts folder for a while, but then last night I stumbled upon [this excellent article](http://blog.lambda-it.ch/reactive-data-flow-in-angular-2/) by [Wayne Maurer](https://twitter.com/waynemaurer) on reactive data flow in Angular 2. Maurer expounds on André Staltz's concept of Model-View-Intent (MVI) in a reactive framework. It seems to me that one needs to grasp concepts of functional programming in order to fully understand reactive programming, so, to that end, here are some resources I've found helpful.

## Functional Programming Basics and Overview
These videos and articles focus on broad FP concepts without delving too much into syntax or language-specific implementations.

- [Functional Programming should be your #1 priority for 2015](https://medium.com/@jugoncalves/functional-programming-should-be-your-1-priority-for-2015-47dd4641d6b9) by Ju Gonçalves
- [Introduction to Functional Programming](https://www.youtube.com/watch?v=InWSYTaZPVk) by Kelley Robinson, a 10 minute intro to basic FP concepts.
- [Learning Functional Programming Without Growing a Neckbeard](https://www.youtube.com/watch?v=OOvL6QAxRK4) by Kelsey Innis, really well done presentation using Scala for examples.
- [Functional Thinking](https://www.youtube.com/watch?v=JeK979aqqqc) by Neal Ford in 2012, a bit more advanced and uses Java and Groovy for examples. 

## Functional Languages: Haskell & Elm
Haskell has been around for a long time, but has been swinging back into popularity recently. 

- [Learn You a Haskell for Great Good!](http://learnyouahaskell.com/) by Miran Lipovaca, a classic
- [Haskell Fundamentals Part 1](https://app.pluralsight.com/library/courses/haskell-fundamentals-part1/) by Benson Joeris, via Pluralsight (there's also a Part 2)

Elm is a newcomer to the FP scene and is a JavaScript adaptation based heavily on Haskell.

- [JSJ: Elm with Evan Czaplicki and Richard Feldman](https://devchat.tv/js-jabber/175-jsj-elm-with-evan-czaplicki-and-richard-feldman), an excellent overview of the language
- [Elm: Getting Started](http://elm-lang.org/get-started)
- [Climbing Into Elm](https://www.youtube.com/watch?v=-JlC2Q89yg4) by Murphy Randle
- [My Adventure with Elm](https://www.youtube.com/watch?v=cBVXyxt-9_Q) by [Yan Cui](https://twitter.com/theburningmonk), which references:
- [Controlling Time and Space: understanding the many formulations of FRP](https://www.youtube.com/watch?v=Agu6jipKfYw) by Evan Czaplicki
and 
- [Inventing on Principle](https://www.youtube.com/watch?v=PUv66718DII) by Bret Victor

In the end, my takeaways can be summed up by a few notes I took during Neal Ford's talk. Functional programming stresses:

1. Immutability over state transactions
2. Results over steps
3. Composition over structure
4. Declarative over imperative

And, of course, composition over structure is all the rage these days in the JS world, and Angular 2 is no exception.

I'll leave you with [this tweet](https://twitter.com/mfeathers/status/29581296216) from Michael Feathers:

>OO makes code understandable by encapsulating moving parts. FP makes code understandable by minimizing moving parts.

Happy (side-effect-free) coding!
