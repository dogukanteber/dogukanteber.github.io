---
title: auth-gateway
description: An authentication gateway that unlocks multi-tenancy in Cortex, built during my LFX Mentorship internship.
status: live
hideStatus: true
context: LFX Mentorship (Linux Foundation)
repo: https://github.com/cortexproject/auth-gateway
date: 2023-05-01 # TODO: real date
---

auth-gateway is an authentication gateway for [Cortex](https://github.com/cortexproject/cortex), the multi-tenant, long-term storage for Prometheus.

Cortex supports multi-tenancy, but it leaves tenant authentication to you. Most teams ended up hand-rolling an NGINX reverse proxy for it, which is fiddly to set up and limited. auth-gateway replaces that with a small Go service. You declare your tenants in a simple config, and it authenticates each request and routes it to the right Cortex backend.

## The Internship

I built it during a three-month internship through the Linux Foundation's LFX Mentorship program. My mentor was [Friedrich Gonzalez](https://www.linkedin.com/in/friedrichgonzalez/), a Cortex maintainer and Cloud Operations Software Engineer at Adobe. He broke the project into small, well-scoped tasks so I could ship from the first week, and his reviews shaped how I write and structure code to this day.

It was also my first time building in the open. I wrote a [design proposal](https://github.com/cortexproject/cortex/pull/5209) for the Cortex maintainers, worked through their review, and joined the community's calls and discussions. I learned how open-source decisions actually get made: in public threads, through consensus, with people across time zones. I also learned to get feedback from users before building features nobody asked for. I picked up Go along the way and stayed on as the project's maintainer after the program ended.

I wrote about the full experience in [A Transformative Journey: My Experience as an LFX Mentee](/notes/lfx-mentorship/).
