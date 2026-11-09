---
title: hairmaxxing
description: An open-source Cursor agent skill that previews men's haircuts on your own photos before you see a barber.
status: live
hideStatus: true
context: AI agents
repo: https://github.com/dogukanteber/skills/tree/main/hairmaxxing
date: 2026-11-04
---

hairmaxxing shows you a few haircuts at a time on your own photos, learns your taste as you react, and ends with the chosen cut from every view to show your barber.

## From App to Skill

Before hairmaxxing skill, I built a hairstyle try-on mobile app. Almost all of my time went into plumbing: the UI, backend, database and deployment. The part that mattered was a single call to an image model. I couldn't find a business in it, so I killed it.

I still wanted the tool for myself. By then, agents could look at photos, ask questions, call image models and keep notes in plain files on their own. So the whole app shrank into a skill folder of instructions and a few scripts that runs inside a chat app.
