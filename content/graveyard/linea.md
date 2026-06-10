---
title: "linea"
type: "page"
---

**Status:** Failed

### The Idea

Had one too many bad haircut and decided to build a hair style try-on app for males, mostly for myself -- a mobile app wrapper around a vision model.

I tried a couple of existing solutions, didn't like the results. Decided to build my own by using better models and changing the angle from B2C to B2B, barbers.

### What Went Wrong

I could have built a dumb prototype, responsive web app, could have gone to barbers to get their opinions but instead I jumped straight into the code and started building the app.

Plumbing, ie. UI, backend, database, deployment etc., took 98% of my time than the actual core feature. I started talking to barbers online and they said they wouldn't buy this type of product because the inaccuracies in AI-generated images. It was very difficult to sell to barbers even when I tried to shoulder most of the cost initially.

I pivoted back to B2C but couldn't come up with a scalable business model as people tend to stick with a single haircut style for years. I did the math in my head and the churn was way too high.

On top of it, market was already satured. The amount of work I would put in to get some traction and make money didn't seem plausible in my head. So, I decided to kill it.

I still needed to solve my own problem, though. Since the actual value is the vision model and the rest is just plumbing, I replaced the entire app with a single skill folder that includes reference images, my preferences etc. It works with all major providers.

### Lessons Learned

- Market research, market research, market research!
- If a software product is mostly a plumbing around a third-party LLM call, do not bother building it. It will most likely become obsolete or has become obsolete but you haven't realized it yet.
