# Score Counter: Keeping a simple app simple for 870K installs

> I built Score Counter as a side project in 2016. Nine years later, it has 870K installs, 87.2K monthly active users, and a 4.9 rating on Google Play. The design challenge was not adding more. It was protecting the simple flow that made people trust it.

![Five smartphone screens showcasing Score Counter app features: player scores, dice roller, calculator input, and timer](/images/score-counter-hero.png)

| | |
| --- | --- |
| **Role** | Creator, Design & Development |
| **Timeframe** | 2016 – Present |
| **Platform** | Android |
| **Team** | Solo (with community contributors) |

## Context

Score Counter is an Android app for tracking scores during board games, card games, and any group activity that needs counting. It serves everyone from families at game night to tabletop groups and anyone replacing pen and paper.

I built it as a solo side project, without ads or marketing spend. Over time, the app grew through search, recommendations, translations from volunteers, and people using it for things I never planned.

![Side-by-side comparison of Score Counter in 2018 (numbered rows with colored backgrounds and arrow controls) and 2025 (full-bleed player cards with large +/− buttons and named counters)](/images/score-counter-evolution.png)

## Problem

Score Counter looked simple, but simplicity became harder to protect as the app grew. Users kept asking for saved sessions, deeper customization, and game-specific features. Some of those requests were useful, but many would have turned the app into something slower and narrower. The design problem was deciding what not to build.

> How do you keep an app dead-simple when users keep asking for features that sound reasonable on their own?

## Approach

### Protect the three-step flow

The primary flow is sacred: open the app, add counters, start counting. Every feature request gets measured against that loop. If it adds a step or a decision to the core path, it doesn't ship. This single constraint is what kept Score Counter focused while competitors kept adding complexity. It is also why users describe the experience as 'does what it needs to do.'

### Say no when a feature narrows the product

One of the most requested features was the ability to save an active game session and load it later. I said no. Shipping it would have fixed Score Counter conceptually as a board game companion, which is narrower than what it actually is. People use it to count anything, not just board game scores. Adding save/load would also mean extra steps before starting a quick session, breaking the three-step flow for a feature that serves only a subset of users.

![Hand-drawn primary flow diagram: 1. Open, 2. Add Counters, 3. Count](/images/score-counter-flow.png)

### Keep the business model out of the way

No ad placements means the UI earns its keep on usability alone: a clean, fast experience users trust enough to recommend.

### Respect the platform and the community

Material Design conventions, early Android version support, and community-driven localization keep the app native and maintainable.

## Result

- **870K** Installs
- **87.2K** Monthly active users
- **225K** Avg. active devices
- **4.9** Google Play rating

870K installs came through word-of-mouth alone, with no ads and no marketing spend. Volunteers have contributed translations, a developer built a fan web version, and the app still holds a 4.9 rating after nine years. The product lesson is simple: build something people trust enough to recommend.

![Collection of user testimonials: Bounchanh says 'Best score tracker on the planet hands down', Brandon Wong says 'I love the UX. Does what it needs to do', Lou P says 'Where's the 6 star button? That's all you need to know.'](/images/score-counter-testimonials.png)

> One user created a tally called "little spoiled brats" to count every time a child annoyed them: 227 reasons and counting. When you build a tool that does one thing well and stays out of the way, people find uses you never imagined.

![Screenshot grid of real Play Store reviews showing unexpected use cases: scoring camogie matches in Ireland, counting beers, tracking children's annoyances, and keeping track of swearing in front of kids](/images/score-counter-bonus.png)

## Reflection

**What worked:**

- **The constraint stayed easy to explain:** The app has one job, and the three-step flow made it clear which requests belonged and which ones did not.
- **Trust became distribution:** No ads, low friction, and familiar Android patterns made the app easy to recommend.
- **Unexpected uses stayed possible:** Because the app did not become a board-game-only tool, people used it for sports, habits, jokes, and household counting.

**What I'd change:**

- **Document decisions as they happen:** Building Score Counter taught me this the hard way. My ideation process now lives in Figma from day one, and the app has used git version control from the start.
- **Keep a hand on product health:** I now use Crashlytics to monitor app stability and crash patterns. No plans for complex analytics, but enough to make informed decisions about what's working.
- **Follow cross-platform demand signals earlier:** The fan-made web version proved there's demand beyond Android. I explored building an iOS version with AI tools, but SwiftUI code generation wasn't there yet in 2025. The project is on hold while I look for a human iOS developer to collaborate with.

---

[Get it on Google Play →](https://play.google.com/store/apps/details?id=ua.napps.scorekeeper)
