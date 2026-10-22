---
title: "An Evidence-Based Approach to the AI-Native SDLC"
subtitle: "From faster implementation to more effective software delivery"
callNumber: "t-05"
publishedAt: 2026-10-21T00:00:00-07:00
draft: false
---

We've become remarkably efficient at producing code.

AI tools are now part of my workflow, as they are for many engineers. Tasks that once required boilerplate, documentation searches, or trial and error can move much faster. Agents can suggest implementations, generate tests, and help navigate unfamiliar codebases.

But implementation is only one part of software development. A feature still needs to be understood, specified, tested, reviewed, integrated, and delivered. If implementation speeds up while the rest of the process stays the same, the bottleneck has simply moved.

That is what interests me about the AI-native software development lifecycle (AISDLC): not how much code an agent can produce, but whether AI can improve the work before engineering starts and the verification work that follows.

## The productivity gains are real, but complicated

The research does not support one simple conclusion about AI-assisted development. A [2023 controlled experiment](https://arxiv.org/abs/2302.06590) found that developers using GitHub Copilot completed a programming task **55.8% faster**. A larger [study of 4,867 developers](https://doi.org/10.1287/mnsc.2025.00535) across Microsoft, Accenture, and another Fortune 100 company found a **26.08% increase in completed tasks**, with less-experienced developers generally seeing greater gains.

In a [randomized trial involving 16 experienced developers and 246 tasks](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) in mature open-source repositories, allowing the early-2025 AI tools tested increased completion time by an estimated **19%**. The developers had expected to be 24% faster and still estimated afterward that they had been 20% faster.

The studies examined different tools, environments, and types of work. The useful conclusion is therefore narrower than “AI makes developers faster.” Its impact depends on the person, the codebase, and the overhead involved in checking and incorporating the output. METR's [2026 follow-up](https://metr.org/blog/2026-02-24-uplift-update/) suggested that newer tools may have improved productivity, while also noting that selection effects made the results difficult to interpret.

Generating an implementation and delivering a reliable change are different activities. As implementation gets cheaper, the work around it matters more.

## Start to the left of engineering

In B2B software, a feature request can travel a long way before it reaches an engineer. A customer tells an account manager that something is not working. Customer Success gathers information. Product interprets the request, weighs competing priorities, and turns it into a ticket.

A missing screenshot, unstated assumption, or misunderstood workflow can create days of investigation. AI may generate the implementation faster, but the earlier opportunity is making sure the team understands the problem correctly.

I've been encouraging Account Management and Customer Success to use AI tools more actively, both to speed up their work and to improve the information reaching engineering. That includes assembling customer context, summarizing relevant history, identifying missing reproduction steps, comparing similar reports, and distinguishing a product defect from a training or configuration issue.

I've also been coaching Product on using AI to explore edge cases, reconcile competing requirements, and turn an initial request into something engineers can evaluate. This is not about delegating product decisions to AI. It is about giving the people making those decisions better information.

Research on [interactive, test-driven code generation](https://arxiv.org/abs/2404.10100) suggests that validating expected behavior before implementation can improve correctness. I think the same principle is worth applying further upstream, before a request reaches engineering.

These tools still need appropriate access to customer information, sensible permissions, and workflows that match how people actually work. But if delivery is the goal, it makes little sense to focus only on the person at the end of the process.

## Then look to the right: testing, review, and integration

If AI makes it easier to produce code, the organization may end up with more code to test and review.

Senior engineers are not only checking whether a pull request compiles or follows the style guide. They are considering why a service owns a behavior, whether an edge case violates a business rule, and whether a change creates a maintenance problem later. If AI increases the volume of proposed changes, experienced engineers may reasonably spend more time reviewing them, not less. That is not automatically a productivity failure; the question is whether the additional scrutiny produces better outcomes.

Security makes the gap between plausible code and reliable code even clearer. In a [study of GitHub Copilot](https://doi.org/10.1109/SP46214.2022.9833571), researchers generated 1,689 programs across 89 security-relevant scenarios and found that approximately **40% contained vulnerabilities**.

The study used an early version of Copilot and deliberately focused on security-sensitive scenarios, so it would be inaccurate to apply the result to all modern AI-generated code. It does show that code which looks reasonable is not necessarily safe.

AI can generate tests, but a test that confirms the implementation's own assumptions is not especially useful. Tests need to capture the intended behavior, including cases the implementation overlooked. Automated builds, type checks, security scanning, integration tests, and meaningful regression tests should remain central to the workflow.

There is a longer-term question here, too. If less-experienced engineers spend less time implementing and debugging code themselves, how do they develop the intuition they will eventually need to review it? AI-assisted workflows should create room for learning, not just throughput.

## Your repository needs its own reviewer

A generic AI reviewer can identify suspicious patterns, missing error handling, insecure dependencies, or weak tests. It cannot automatically know why a repository contains unusual code.

It may not know that a field has different meanings in two services because of a migration three years ago, why redundant validation exists, or that an elegant refactor violates an assumption elsewhere in the product.

I've been addressing this by building **repository-specific AI code-review skills**. I'm effectively trying to codify the architectural decisions, business rules, and historical context I've accumulated working in these systems, so that knowledge can inform reviews even when I'm not the person reading the diff.

That requires more than a prompt asking an AI to check for best practices. The reviewer needs architectural boundaries, business invariants, common failure modes, testing expectations, and relevant documentation. Subject-matter experts should build and maintain these skills, because they are the people most likely to understand which details matter and when the architecture has changed.

A review skill can flag a potential violation of a business invariant, but where possible, that invariant should also be enforced by a test. Domain expertise can inform the review; important behavior should ultimately be protected by repeatable, deterministic checks.

This does not replace human review. The goal is to give human reviewers better context and more time to reason about subtle problems, although that result still needs to be measured. AI approval should not be treated as equivalent to human accountability, especially for authentication, sensitive data, critical APIs, or core business logic.

## Change something, then measure what happens

An AI-native SDLC should be treated as a series of hypotheses, not a destination.

If AI-assisted requirement gathering is introduced, does engineering spend less time asking for missing information? Do repository-specific review skills catch defects that generic reviewers miss, or only generate more comments? Do AI-generated tests detect regressions, or simply expand the test suite and CI bill? Does adding agents to multiple stages reduce the time from customer request to production?

The first step is a baseline for time spent waiting for clarification, implementation, review, testing, and release. Changes can then be introduced incrementally and compared against similar work.

For code review, repository-specific skills can be tested against historical pull requests with known defects. The useful measurements are which problems they catch, which they miss, and how much noise they create. Mutation testing can show whether generated tests detect intentionally introduced faults rather than merely producing green checkmarks.

Across the process, I would track rework, escaped defects, review effort, and time to delivery—not just pull requests opened or lines of code generated. Token usage, CI compute, review overhead, and maintenance also matter. An automation that saves ten minutes of coding but creates half an hour of cleanup is not a productivity improvement.

## The actual goal

An AI-native SDLC should not be judged by how little code humans write or how many pull requests an agent can open. The useful measure is how long it takes to move from a real customer problem to a reliable solution.

That means helping Account Management, Customer Success, and Product bring clearer information into engineering; using AI to accelerate implementation without weakening testing; and giving experienced engineers better tools for protecting the systems they understand.

AI has made producing code astonishingly cheap. Understanding what should be built, recognizing when an implementation is wrong, and taking responsibility for what ships are still expensive. Software engineering was never only about writing code, and making code cheaper will not necessarily make delivery faster.

---

## References

1. Peng, S., Kalliamvakou, E., Cihon, P., & Demirer, M. (2023). [*The Impact of AI on Developer Productivity: Evidence from GitHub Copilot*](https://arxiv.org/abs/2302.06590). arXiv.
2. Cui, K. Z., Demirer, M., Jaffe, S., Musolff, L., Peng, S., & Salz, T. (2026). [*The Effects of Generative AI on High-Skilled Work: Evidence from Three Field Experiments with Software Developers*](https://doi.org/10.1287/mnsc.2025.00535). *Management Science*.
3. Becker, J., Rush, N., Barnes, B., & Rein, D. (2025). [*Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity*](https://arxiv.org/abs/2507.09089). METR.
4. METR (2026). [*We Are Changing Our Developer Productivity Experiment Design*](https://metr.org/blog/2026-02-24-uplift-update/). Research update.
5. Pearce, H., Ahmad, B., Tan, B., Dolan-Gavitt, B., & Karri, R. (2022). [*Asleep at the Keyboard? Assessing the Security of GitHub Copilot's Code Contributions*](https://doi.org/10.1109/SP46214.2022.9833571). *IEEE Symposium on Security and Privacy*.
6. Fakhoury, S., Naik, A., Sakkas, G., Chakraborty, S., & Lahiri, S. K. (2024). [*LLM-based Test-driven Interactive Code Generation: User Study and Empirical Evaluation*](https://arxiv.org/abs/2404.10100). arXiv.
