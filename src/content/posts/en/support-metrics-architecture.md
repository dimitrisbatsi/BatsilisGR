---
title: "I rebuilt our support metrics architecture three times. Here's why."
seoTitle: "I rebuilt our metrics architecture three times"
description: "From Power BI on top of an API, to an ETL, to Analysis Services and finally a Python data warehouse: what broke at each stage and what I would do differently today."
pubDate: 2026-10-19
readingTime: "7 min read"
draft: false
---

Management of a support department asked for something simple to state: to know where the team's time goes. Answering it properly took three rebuilds of the data architecture. Each one had a specific cause, and none of them was a matter of taste.

I am writing the path down because I see the same mistakes in companies of every size, especially when someone connects Power BI straight to the ERP or the ticketing system and expects it to "just work".

### What management asked for

The list grew as managers saw what was possible:

- service time per consultant,
- time per subject area and per time type,
- which quarter of each year had the most traffic,
- how much time went to the call centre and how much to second- and third-level support,
- time per customer, per partner and per project, with detailed account views,
- SLAs, investigation speed and resolution approaches.

Mostly on a monthly basis. It sounds like one more report. In practice it is a data model with many dimensions and years of history.

[![The evolution of the metrics architecture in four stages](/images/articles/metrics-architecture-en.svg)](/images/articles/metrics-architecture-en.svg)

### Stage 1: Power BI directly on the API

The first version was the obvious one. Power BI pulled data from the old issue tracker's API through Power Query, and every calculation happened inside the report.

With a few months of data it worked. The problem was that we did not have a few months: we had history going back to 2011 and roughly a million records, growing with the company. A refresh took around ten minutes, Power Query kept collapsing, and the API could not keep up with the volume of requests.

**The lesson:** Power BI is a presentation and modelling tool. When you also make it responsible for extracting data from an API, you give it work it was not designed for.

### Stage 2: A .NET ETL into our own database

The next step was to move extraction out of the report. I wrote an ETL in .NET MVC that collected the data from the issue tracker and stored it in our own SQL database. Power BI now read from the database instead of the API.

The API stopped being the problem. The report, however, stayed slow. Data landed in the database raw, and on every refresh Power BI re-ran all the measures and specialised calculations live, across millions of rows.

**The lesson:** moving data is not the same as modelling it. I had solved access, not computation.

### Stage 3: Analysis Services

The fix was to move the calculations where they belong: into a semantic model in SQL Server Analysis Services. The model holds the relationships, hierarchies and measures, processes the data once, and the Power BI reports simply query it.

For users, reports became reports again: they opened and answered, instead of waiting for the whole history to be recomputed. For me, the metrics logic now lived in one place instead of being scattered across every report.

It had a cost too: one more layer of infrastructure to maintain, and modelling skills that a simple dashboard does not require.

### The change that undid it all: moving to Jira

Shortly after the architecture settled, the support team moved from the old system to Jira. New workflows, different fields, different request logic. The model I had built was tied to the old source's schema, so it did not carry over.

Instead of patching it, I rebuilt it with a different goal: not only Jira, but **all of our sources in one database**. The new pipeline is written in Python, because it is very efficient at this kind of work and integrates naturally with the internal support platform built in Streamlit, which now also manages the ETL itself. The old Power BI setup was retired.

### What I would do differently today

Starting from scratch, I would keep the ETL as an **independent service** (for example a .NET Web API, which stands out for reliability) and manage it from a separate interface with proper security and permission levels.

The broader principle is that **the data model should not depend on the source system**. Systems change: ERPs, CRMs, issue trackers. If the metrics layer speaks its own stable language, changing a source means rewriting only the extraction, not everything downstream.

### What the team gained

A clear picture of the support budget: where the time goes, per customer, partner and project. And something no dashboard shows: when a partner or customer disputes how much time was spent, the answer is data, not an estimate. That eventually became a selling point as well.

### If you are considering Power BI on top of your ERP

Four questions before you start, so you do not have to build it three times:

1. **How much history will you analyse?** If it is years and hundreds of thousands of records, design an intermediate storage layer from day one instead of connecting straight to the source.
2. **Where will the calculations run?** If the answer is "inside the report", every new report will rewrite and re-run the same logic.
3. **What happens when the source system changes?** A source-independent data layer costs a little more up front and far less on the day of the change.
4. **Who will maintain it?** The most elegant architecture is not worth it if nobody on the team can support it.

The right architecture for a small business is rarely the most complex one. It is the one that survives the next few years of data volume and the next system change.
