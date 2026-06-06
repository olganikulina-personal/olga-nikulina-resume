---
title: "the dallas incident"
subtitle: "a low-stakes bug, a high-stakes UAT, one bruce willis"
callNumber: "t-04"
publishedAt: 2026-06-01
draft: false
---

There is no feeling quite like the quiet triumph of finding a truly magnificent bug. As a young QA engineer, it's the closest you get to feeling like a Victorian explorer mapping a new continent. You found the crack in the armor! You are a genius!

Until...you realize the continent you just mapped is currently on fire.

Years ago, I was testing a piece of code responsible for pushing images into a product gallery. For reasons that made total sense to me at the time, my default test asset was a high-resolution still from The Fifth Element. Specifically, it was Bruce Willis looking intensely focused in that famous, ribbed, orange tank top, aiming a very large, very sci-fi gun at whoever was looking at the screen.

I ran the test and, in a flash of terrifying efficiency, the system overrode every single product image listing in the entire portal. Every single item on the screen was suddenly, uniformly, Korben Dallas.

I was just leaning back to admire this wall-to-wall Bruce-fest when the atmosphere in the room shifted.

The Product Manager next to me got a call. The voice on the other end was pitched at a frequency usually reserved for dog whistles and maritime disasters. It was an Account Manager, and she was currently in the middle of a live walk-through with a client.

Standard engineering protocol dictates that you never, ever show a client Staging. Staging is where the sausage is made and the machinery is actively spitting grease. For whatever reason, our AM had bypassed the safe environments entirely and ushered her client right into what appeared to be a highly aggressive, heavily armed marketing campaign for 90s sci-fi cinema.


For a few agonizing moments, I was entirely convinced I'd committed a horrible crime. I sat frozen, staring at a sea of orange tank tops, waiting for the axe to fall.

In the end, it was a beautifully low-stakes crisis. The PM calmly instructed her to log out of Staging, use the actual sandbox, and pretend the whole thing had been a strange, localized hallucination. The client, presumably assuming it was some sort of avant-garde Los Angeles tech branding exercise, moved on.

I survived the day and learned two invaluable lessons. First, never underestimate the capacity for someone to use an environment they shouldn't be in. And second, if you're going to accidentally break an entire corporate enterprise, always do it with a sense of cinematic style.
