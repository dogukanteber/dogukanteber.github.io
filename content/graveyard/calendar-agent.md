---
title: "Calendar Agent"
type: "page"
---

**Status:** Killed

### The Idea

Meeting scheduling in our company was pretty manual and annoying. Everyone was typing their availability over email when a meeting needed to be scheduled.

I decided to automate this process by having a background agent that reads our Gmail threads, schedules meetings, sends invites automatically with a single click in the Gmail interface.

### What Went Wrong

As always, before talking to anyone, I immediately started building the MVP. I built the agent using a local SLM and optimized it for meeting scheduling. On top of that, I built a Slack bot because communication is scattered through both Gmail and Slack.

Upon forcing a couple of my colleagues to use it, I realized that this problem was solved many times by different people. We already had Google Calendar and it makes meeting scheduling very easy with a few clicks and merging other people's calendars. 

Our issue was not knowing how to keep our calendars up-to-date and use the existing solutions properly. We didn't need an AI-washed solution. We needed to follow fundamental principles when working as a remote team.

### Lessons Learned

- Before building anything, do research to see if the problem you are trying to solve is solved by others. Do not reinvent the wheel. The best solutions are the ones that do not require writing code.
