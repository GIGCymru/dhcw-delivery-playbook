# Accessibility and inclusion

We build services for everyone in Wales. That includes people who use a screen reader, people who can't use a mouse, people with low vision, people who find reading hard, people on old devices and slow connections, and people who would rather not use a computer at all. A service that works for some of these people and not others is only half built.

Accessibility and Welsh language are already set out as controls a team can't waive (see [Definitions of Ready and Done](definition-of-ready-and-done.md#cross-cutting-controls)). This chapter explains what meeting them well looks like in practice.

## Design for everyone from the start

Accessibility is a design activity that runs from the first sketch. Retrofitting it at the end is slow, expensive, and tends to leave gaps. When you design for the people who find things hardest, you usually build something better for everyone.

In practice, that means:

- Involve people with access needs in research and testing, so you learn from real use.
- Use the DHCW design system and component library, which bake in accessible patterns, keyboard support, and sensible colour contrast.
- Write in plain language with a clear structure, so content works when it's read aloud, magnified, or translated.
- Check as you go, with automated tools and manual testing, including a keyboard and a screen reader.

## Meet WCAG 2.2 AA

Our baseline standard is [WCAG 2.2 level AA](https://www.w3.org/TR/WCAG22/). Every user-facing interface is expected to meet it, and it belongs in the Definition of Done for every team.

Meeting the standard is a whole-team job. Designers build accessible patterns, engineers implement them properly, content designers keep language clear, and testers check the result with real assistive technology. Automated checks catch some issues. Many of the ones that matter most, like whether a screen reader announces a form error in a way that makes sense, need a person to test them. The [GOV.UK guide to understanding WCAG](https://www.gov.uk/service-manual/helping-people-to-use-your-service/understanding-wcag) gives a practical summary.

## Publish an accessibility statement

Every public-facing service needs an accessibility statement. It tells people how accessible the service is, what to do if they hit a barrier, and how to get help or an alternative. It's a legal requirement for public sector services, and a plain courtesy to users. Follow [GOV.UK guidance on publishing an accessibility statement](https://www.gov.uk/guidance/make-your-website-or-app-accessible-and-publish-an-accessibility-statement#publish-your-accessibility-statement) and keep it current: if part of the service isn't fully accessible yet, say so, and say what you're doing about it.

## Support people who don't use digital

Some people can't use a digital service on their own, whatever we do to the design. They might have no device, no connection, no confidence, or a need that digital can't meet on the day. Assisted digital is how we make sure those people still get the outcome.

That means designing a supported route with the same care as the digital one: a phone line, a person at a desk, a paper option, or help from someone else, so nobody is shut out by how they access the service. When you map the whole journey (see [Designing the whole service](whole-service-design.md)), mark the assisted route and test it too.

## Welsh language is part of inclusion

For many people in Wales, Welsh is the language they think, speak, and receive care in. Offering a service in Welsh is a duty under the Welsh Language Standards and the [DHCW Welsh Language Scheme](https://dhcw.nhs.wales/about-us/welsh-language/files/dhcw-welsh-language-scheme-2025-27/), and a matter of equity. A Welsh speaker should get a service that is as complete and as good as the English one. We design in both languages from the outset, so the Welsh experience is shaped as the service is built.

The content designer role (see [Team roles](team-roles.md)) helps make sure content works equally well in both languages from day one.
