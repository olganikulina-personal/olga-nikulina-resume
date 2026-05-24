---
title: "the dallas incident"
subtitle: "a low-stakes bug, a high-stakes UAT, one bruce willis"
callNumber: "t-04"
publishedAt: 2026-05-24
draft: false
---

This is a true story about staging environments, account managers, best practices, and Bruce Willis.

[placeholder — the actual essay is short and you (the human) are going to write the final version, but here's a sketch]

I was testing an external API — the one that lets clients set product images programmatically. There was a bug. The bug was that no matter which product you targeted, the API would set the image on every product in the catalog. One image. All products. A bulk operation disguised as a targeted one.

The bug was on staging. I logged it, moved on, didn't think it was urgent. Staging is staging. Staging is *for* this.

What I did not know — what nobody told me — was that an account manager was, at that moment, running a UAT with a real client *on staging*. Against best practice. Against, frankly, the entire reason we have staging in the first place. But it was happening. The client was poking around their portal, looking at their products, evaluating whether to renew.

And then I ran my test.

Their entire product catalog became Bruce Willis. Specifically: Bruce Willis as Korben Dallas in *The Fifth Element*. The pixelated, mid-resolution, late-90s movie still that, for reasons I no longer remember, was the image I'd been using as test input. Hundreds of products. Every category. Every variant.

The account manager called me directly. Not Slack. Phone.

[placeholder — what happened next. The lessons, the laughs, the part where the client allegedly thought it was a feature. The thing I learned about test inputs. The thing I learned about staging.]

The moral, if there is one: choose your test images carefully. Choose your testing windows more carefully. And if you ever get to pick the absurd image that ruins someone's day, may yours be as good as mine was.

*multipass.*
