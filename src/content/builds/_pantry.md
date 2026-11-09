---
title: pantry
description: An open-source Claude agent skill that tracks the food you have and suggests recipes from it.
status: live
hideStatus: true
context: AI agents
repo: https://github.com/dogukanteber/skills/tree/main/pantry
date: 2026-11-05
---

pantry keeps a rough inventory of your food, suggests recipes from what you already own, deducts ingredients when you cook, and learns your taste from your feedback.

You update it by talking to Claude or sending a photo: "add 3 eggs and 500g spinach", "I'm out of milk", or a picture of your fridge or a receipt. Tracking is deliberately approximate, so it never asks you to weigh anything.

## No Backend

There is no app or database to host. The skill uses Claude's Notion connector as its database, so your pantry, cooking history and preferences live in your own Notion workspace, where you can open and edit them directly.
