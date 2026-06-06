---
title: "the novelty tax"
subtitle: "what every new thing costs you, paid quietly"
callNumber: "t-02"
publishedAt: 2026-05-24
draft: false
---

If you spend any time browsing the tech sector's equivalent of a high-street catalog—GitHub, tech blogs, or the enthusiastic corners of social media—you will notice that every new framework, tool, and architectural pattern is marketed with the breathless zeal of a late-night infomercial. They promise to cure your insomnia, clear your acne, and make your data pipelines run twice as fast.

But as with everything in life, there's a catch. Every piece of new tech comes with two costs: the sticker price and the tax.

The sticker price is what you read in the glowing README file. It’s the breezy fifteen-minute tutorial that makes you feel like an absolute deity. The tax, however, is everything else. And the tax, I've learned to my immense sorrow, compounds.

A new framework means a brand-new mental model for the poor souls who didn't get a vote in picking it. It means entirely novel and creative failure modes for whoever is on the 2:00 AM on-call rotation. It means edge cases that the documentation completely ignores, endless debates about which folder should house the config file, and a perpetual stream of "Wait, how do we do X here again?" messages clogging up the team chat. Oddly, none of this ever shows up in the initial technical bake-off.

I should clarify that I'm not anti-new. New is how we discover what is possible and it's how a team avoids total intellectual atrophy. But after a decade and change in the trenches, I’ve learned to stop looking at the demo and start asking a brutally practical question: What does this thing cost the team the year after we adopt it? Not the migration cost, but the dull, grinding, six-months-from-now reality.

I once worked with an incredibly bright developer who became hopelessly, dangerously obsessed with Functional Programming. We were working on a perfectly standard React and TypeScript application, built on an entirely conventional, idiomatic codebase. Out of absolutely nowhere, this man decided to start jerry-rigging pure functional programming principles into every nook and cranny of the system. He didn't do it because the architecture demanded it, he did it simply because he liked the way it felt.

The result was a crowning achievement of unintentional malice. In theory, Functional Programming has wonderful merits. In practice, when stuffed into a mature, conventional codebase, it meant that reading a single feature required drilling down through an infinite matryoshka of functions, passing variables through a labyrinth of pipelines that resembled an exploded plumbing diagram. It added a staggering amount of cognitive load. To fix a simple bug, you had to perform an Olympic-level feat of mental gymnastics just to switch into his personal programming context.

We eventually had to untangle it, a process not unlike picking apart a massive knot of wet yarn. It was a stark reminder of the tax.

For the record, I'm acutely aware you can't avoid the tax entirely. But you can at least make sure you aren't buying a sports car when all your team really needs is a sensible pair of Hokas (RIP Allbirds).
