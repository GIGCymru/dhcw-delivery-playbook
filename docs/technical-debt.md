# Technical debt

Technical debt is the implied cost of future rework created when we choose a solution that is quick or convenient now over one that would be better for the longer term. Like financial debt, a small amount can be a sensible investment that lets us deliver value sooner. Left unmanaged, the interest compounds: changes take longer, defects become more frequent, and the team's confidence in the system erodes.

Some debt is taken on deliberately, for example to hit a delivery milestone or to validate an idea before investing further. Some accumulates over time as requirements change, dependencies age, or our understanding of the problem improves. Both kinds are normal. What matters is that we recognise debt, record it, and manage it as a conscious choice rather than an accident.

## What counts as technical debt

Technical debt covers anything that makes the system harder to change, operate, or reason about than it needs to be. Common examples include:

- **Code and design:** duplicated logic, missing or brittle tests, workarounds left in place after a deadline, or a design that no longer fits the problem
- **Dependencies:** libraries, frameworks, or runtimes that are out of date or approaching end of life
- **Infrastructure:** manual deployment steps, gaps in monitoring, or environments that drift apart
- **Documentation:** missing or outdated runbooks, architecture notes, or onboarding material

Not every imperfection is debt worth tracking. Record the items that carry a real cost, either because they slow the team down today or because they represent a risk we will have to pay down later.

!!! tip "Tech Debt Definition"
    See the Technical Design Authority (TDA) agreed definition of [Technical Debt](https://gigcymru.github.io/architecture/design-authority/dhcw/technical-debt/).

## How we manage technical debt

Every debt item is captured as a ticket in Azure DevOps so that it is visible, estimable, and can be prioritised alongside other work. When we take on debt deliberately, we note the reason and the intended payback so the decision is transparent to the whole team.

- **Make it explicit:** raise a ticket as soon as debt is identified, whether it is created intentionally or discovered during delivery
- **Describe the impact:** capture what the debt costs the team now and the risk of leaving it unaddressed, so it can be prioritised on evidence rather than instinct
- **Prioritise openly:** the product owner and the team weigh debt against feature work at refinement and sprint planning
- **Pay it down steadily:** pay debt down in small, regular steps rather than waiting for a large remediation project that rarely arrives

!!! info "Debt is a whole-team responsibility"
    Deciding how much debt to carry, and when to pay it down, is a conversation between the product owner and the delivery team. Engineers surface the technical cost and risk; the product owner weighs that against user and business priorities. The balance is agreed together.

## How much capacity to spend

Teams set their own balance between new features and paying down debt, based on the health of their system and the priorities in front of them. As a guide, we suggest reserving around 15 to 25% of sprint capacity for technical debt and engineering health.

This is an advisory budget. A mature, stable service may need less. A system carrying significant risk, or one being prepared for a major change, may need more for a period. The point of the guide is to make paying down debt a deliberate, recurring part of every sprint rather than something that is only addressed once it becomes a crisis.

!!! note "Treat the budget as a floor to protect"
    The 15 to 25% guide exists to protect time for engineering health when feature pressure is high. If your team consistently needs more, that is a useful signal to discuss with your product owner and stakeholders.

## Making debt visible across the organisation

Every technical debt item is tagged **Tech Debt** in Azure DevOps. Consistent tagging lets each team see how much debt it is carrying and paying down, and lets us understand the level of investment in engineering health across DHCW. This visibility helps us support teams that are carrying a heavy load and share what works.

For how tags are applied to work items, see [Tagging user stories and epics](backlog-structure.md) on the Backlog structure page.
