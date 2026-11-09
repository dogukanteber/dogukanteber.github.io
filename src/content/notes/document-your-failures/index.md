---
title: "Document Your Failures"
# TODO: review hook
description: "Everyone posts their wins. Why I keep a running log and post-mortems for the projects that don't work out."
date: 2026-08-08T09:00:00-04:00
tags: [entrepreneurship]
---

Any time you browse social media, you see the same thing: someone launched their product, someone hit $10K MRR, someone's open-source project crossed 5,000 stars, someone shipped a big feature at work. Everyone is winning.

What you don't see is everything that happened before that post, like the product nobody signed up for, the feature that got rolled back a week after it shipped, or the repo that was abandoned after the first weekend. Those rarely get posted, and the lessons that came with them get lost too.

Nobody wants to share their failures, I get it. But I think we should at least write them down, even if nobody else ever reads them.

## The progress I couldn't see

Building something is hard. Whether it is a SaaS app, an open-source project, or an internal tool at your company, most of the time things don't work. You try something, it fails, you try something else, and that fails too. When the only thing you see online is other people's wins, it is easy to feel like everyone else is moving forward while you are stuck.

A while ago, I started building a language learning app for myself because I didn't like the existing ones. For two weeks, it was all I could think about. I would log off from work and immediately start working on a new feature.

I didn't have a clear plan. I wrote down a vague idea and shaped it along the way. I tried different features, kept the ones that worked, and threw away the ones that didn't. It was a lot of trial and error, and I was fine with that.

What I didn't do was write down what I had tried and what I had thrown away. The only things I could see were the features that survived, and there weren't many of them. After two weeks of working on it every evening, I looked at the app and felt like I hadn't made any progress. Not long after, I stopped working on it.

I had actually tried and ruled out a lot of things, but I had no record of it. If I had written those down, I would have seen how much ground I had covered. I think I would have kept going.

## Two kinds of notes

I now keep two kinds of notes, and they solve different problems.

The first is a **running log** while the project is alive. Every time I try something and drop it, I write one line: what I tried and why it didn't work. This is the note that would have saved my language learning app.

The second is a **post-mortem** when I kill a project. It answers one question: why did I give up, and what would I do differently next time?

## Why it is worth the effort

### You can see the progress you would otherwise miss

Most of building is trying things that don't work. If you don't write those down, you only see the few things that survived.

A running log shows you everything you have been through. On a bad day, you can open it and see that you are not where you were a few weeks ago. You have ruled out ideas and learned what doesn't work. You can't fully control whether a project succeeds, but you can see the effort you put in, and that makes it easier to keep going when the results are not there yet.

### You can spot your own patterns

When something fails, the natural reaction is to move on as fast as possible. The problem is that you also forget why it failed. I was moving so fast that I repeated the same mistakes only a short time later.

It wasn't until I read my post-mortems together that I saw how often it happened. I reinvented the wheel a lot and tried to copy every cool project I saw online. I never sat with an idea. I would drop whatever side project I was working on and jump to the new shiny one. I didn't plan anything either. I would dive straight into writing code, and a couple of days later, the project would end in total failure.

The worst version of this was building for strangers. I would see someone say "it'd be great to have a solution for this problem," and I would immediately start solving it. I didn't try to understand the problem first. I didn't ask whether I could solve it in my free time, or whether it was even worth solving. I worked on it just because a stranger said it would be nice to have.

I used to tell myself my projects were about helping people. Some of them were. But a lot of the time, I was looking for a dopamine rush. A single comment or post was enough for me to start building and feel that excitement.

One failure looks like bad luck. The same failure three times is a pattern. Once I saw the pattern, I could finally fix it.

## How I document a failure

There is no standard template for this. The only test is this: if I read it a couple of weeks later, will I understand what happened and what I learned? If yes, it is enough.

For the running log, I keep a `LOG.md` file in the project and add a line whenever I drop something. For the post-mortem, I create a `POST_MORTEM.md` file and write down the key points: what I tried, why I gave up, and what mistakes I made. Here is a trimmed version of one of mine, from an AI agent I built to clean up my inbox:

```
i was too lazy to clean up my inbox. so instead of cleaning 2000 emails
by hand, i had an ai agent do it for me. ran it locally through ollama bc
i didn't wanna give access to my entire inbox to big tech. it did ok job
classifying the emails as junk but it messed up time to time.

the whole reason i wanted to build this is because i don't want to think
about my inbox. however, building this agent and reviewing its work cost
more time and energy than cleaning up the entire inbox myself. if this was
a repetitive problem, it'd have been fine. however, this isn't the case.

i should be more careful about how often i experience a problem, how much
i'd invest in the solution, and how much time it would save me in the future.
```

It will most likely stay private, so don't worry about writing perfectly. Caveman language is fine.

A few rules I follow:

1. **Write it soon.** If you wait a week, you will forget the details and probably remember a nicer version of the story.
2. **Stick to what happened.** Write down what went wrong, like "I didn't talk to users." Calling yourself names won't help you next time.
3. **Read them together every once in a while.** That is how I noticed my own patterns.

## What changed

It took several failed projects and several post-mortems, but I work differently now. I am much more careful with ideas, whether I see them online or they come to my mind. I sit with an idea before I write any code. I talk to people, online or offline, to see if there is even a demand for it. I search to see whether a solution already exists, and if it does, I ask myself whether it is a good one.

Before, I would have multiple projects going at the same time. Now I have only one, and I focus on finishing it all the way. If I can't, I kill it and write a post-mortem so that I don't waste my time on the same mistakes in the future.

Most of my post-mortems will stay private, but this post is me sharing a few of them, in case you are the one who feels stuck.

I still fail, and I probably always will. But now my failures pile up into something I can learn from.
