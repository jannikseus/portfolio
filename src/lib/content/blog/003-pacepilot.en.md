---
title: "PacePilot: Building the Running Coach I Wanted to Have"
description: "A personal project combining my passion for running with software engineering, Strava data and AI-powered coaching."
date: 2026-11-23
readingTime: "5 min read"
tags:
  - Python
  - AI
  - LLM
  - LangGraph
  - Strava
  - Running
---

# PacePilot: Building the Running Coach I Wanted to Have

Running has always been more than just putting one foot in front of the other for me. Whether it's chasing a new personal best, preparing for a race or simply getting out for an easy run, I enjoy the process of improving over time.

But there is one thing I've never been particularly happy with: training plans.

Most plans follow a predefined schedule. They tell you exactly what to run on a particular day, but rarely account for what actually happens along the way. Miss a workout, have an unexpectedly demanding week or make faster progress than anticipated, and suddenly the plan doesn't quite fit anymore.

As a software developer, I started wondering: **Could I build something that makes training plans more personal, adaptive and interactive?**

That idea became PacePilot.

## More than another training tracker

There are already plenty of great applications for tracking running activities. Strava, for example, provides a comprehensive overview of your training history. But tracking what you've done and deciding what you should do next are two different problems.

PacePilot aims to bridge that gap.

By connecting to the Strava API, it imports personal running activities and uses them as the foundation for a more personalized coaching experience.

The project revolves around three main ideas:

- **Understand your training:** Use actual running history rather than generic assumptions.
- **Adapt your plan:** Generate training recommendations that take previous activities and training progress into account.
- **Talk to your coach:** Ask questions, discuss workouts and get explanations through a conversational AI interface.

The goal isn't to replace existing running platforms. It's to build something that turns the data they collect into more meaningful training decisions.

## Meet Miles, your AI running coach

One of the central components of PacePilot is Miles, a conversational running coach.

I didn't want to build another chatbot that simply wraps an LLM in a running-themed interface. A useful coach needs more context than a language model can provide on its own.

Miles combines language models with personal activity data and an external knowledge base containing sports-science concepts and training principles.

This allows users to ask questions such as:

- Why am I doing an easy run after yesterday's workout?
- How should I adjust my training after missing a session?
- What does my recent training volume say about my progress?
- Why would a particular workout make sense for my current training?

The technical foundation uses **LangChain and LangGraph** to orchestrate LLM interactions and structure more complex conversational workflows.

An important design consideration is keeping the responsibilities separate. Application logic and structured training data provide the foundation; the language model makes that information accessible through natural conversation.

In other words, Miles should help explain training decisions, not invent training science.

## The engineering behind it

PacePilot is built primarily in Python. I wanted to keep the architecture relatively lightweight while using technologies that make individual components easy to extend.

| Area | Technology |
|---|---|
| Application interface | Streamlit |
| AI orchestration | LangChain, LangGraph |
| Language models | OpenAI API |
| Activity integration | Strava API |
| Data validation | Pydantic |
| Data modeling | SQLModel |
| Visualization | Plotly |

The Strava integration handles OAuth authentication and activity retrieval. Pydantic provides structured validation, while SQLModel is used for data modeling and persistence.

On the AI side, LangGraph provides a more structured approach to conversational workflows than a simple sequence of prompts and responses.

I particularly enjoyed working at the intersection of these components. Building an AI-powered application isn't just about choosing a model and writing a good prompt. It's about designing the surrounding system: where information comes from, how it is structured, which tools the model can access and how to keep the overall experience predictable.

## What I learned

PacePilot gave me an opportunity to combine two things I genuinely enjoy: running and building software.

It also reinforced a few lessons about developing LLM-based applications:

**Context matters more than clever prompts.** A language model becomes much more useful when it has access to relevant, structured information instead of relying entirely on its pretrained knowledge.

**AI needs boundaries.** Training recommendations should be grounded in actual data and established principles. A convincing answer isn't necessarily a correct one.

**Good products require ordinary engineering.** Authentication, data modeling, API integration and maintainable application architecture remain just as important when AI is involved.

## What's next?

PacePilot is an ongoing project, and there are plenty of things I'd like to explore further.

The biggest challenge is making training recommendations genuinely adaptive and reliable. A training plan should respond to changes in training volume, missed sessions and individual progress without becoming unpredictable.

I'd also like to improve the explainability of recommendations so that users understand not only what they should do, but why.

For me, that's ultimately what makes this project interesting. I didn't start PacePilot because the world needed another running app. I started it because I wanted to experiment with an idea that combines my own interests with technologies I enjoy working with.

And if it eventually helps me become a better runner along the way, even better.

---

**Explore the project:** [PacePilot on GitHub](https://github.com/jannikseus/pacepilot)