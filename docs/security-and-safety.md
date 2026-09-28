# Keeping services secure and safe

We build services that hold some of the most sensitive information there is: people's health records. We also build services that clinicians use to make decisions about care. That places two heavy duties on every team. Keep people's data safe and private. Make sure the service is safe to use clinically. Both are things we design in and keep working at, all the way through.

The [Definitions of Ready and Done](definition-of-ready-and-done.md#cross-cutting-controls) chapter lists security, privacy, and clinical safety as controls a team can't waive. This chapter is about how we meet them.

## Secure by design

Security works best when it's part of how we build, from the first design decision onwards. Bolting it on at the end leaves holes and slows everyone down.

Secure by design at DHCW means:

- Think about security while you shape the architecture, when design decisions are cheap to change. Where could this go wrong, and what would it cost the user if it did?
- Follow the principle of least privilege. People and systems get the access they need to do the job, and no more.
- Protect data in transit and at rest, and manage secrets and keys properly.
- Keep dependencies patched and watch for known vulnerabilities, as part of normal delivery.
- Build in logging and monitoring so you can see what's happening and spot when something's wrong (see [Running a reliable service](running-a-reliable-service.md)).

## Threat modelling

The practical way to design securely is to think like someone trying to break in. Threat modelling is a team sitting down and asking a few plain questions about a service or a change:

- What are we protecting, and who might want it?
- How could someone get to it or misuse it?
- What's the damage if they do?
- What are we going to do about the most serious risks?

You don't need a heavy process. A whiteboard, the right people, and an hour's clear thinking will surface most of what matters. Do it early, do it again when the design changes significantly, and write down what you decide.

## Privacy by design and the DPIA

Privacy is designed in the same way security is. We collect the minimum personal data we need, we're clear with people about what we hold and why, and we don't keep it longer than we should.

For most of what we build, a **Data Protection Impact Assessment (DPIA)** makes this real. A DPIA is a structured look at what personal data a service uses, what could go wrong for people, and how we reduce that risk. It's a legal requirement when processing is likely to be high risk, which handling health data usually is. Start it early, because it can shape the design and because the review takes time. Work with the information governance team, and treat the DPIA as a live document that keeps pace with the service.

## Information governance

Information governance is the set of rules and agreements that let us use health data lawfully and safely: the legal basis for processing, data sharing agreements, retention, and the roles of data controller and processor. From the outside it can look like paperwork. Its real job is to let a clinician trust the data in front of them, and to let a patient trust us with theirs.

Bring information governance colleagues in early. Some approvals and agreements have long lead times, and a service that's built before the governance is sorted can end up waiting to go live.

## Clinical safety

Many DHCW services are health IT systems that clinicians rely on to make decisions, and getting them wrong can harm a patient. Clinical safety is how we manage that risk. Two standards apply:

- **DCB0129** covers the manufacturer of a health IT system, which is us when we build one.
- **DCB0160** covers the organisation deploying and using it.

Meeting them is real work that runs through the whole build. A named, trained **clinical safety officer** leads it. The team keeps a clinical safety case and a hazard log: a living record of what could go wrong for a patient, how likely and how serious it is, and what we've done to reduce the risk. You build the hazard log as you design and change the service, and you keep it current in live. When a change could affect patient safety, you assess it before it ships.

## Ethics throughout

Point 11 of the Digital Service Standard for Wales asks teams to consider ethics alongside privacy and security. Privacy and security have named processes above; ethics needs the same habit. When a change is significant, ask who benefits, who could be left out or harmed, and how the change looks to the people with the least power in the service. Doteveryone's Consequence Scanning is a light way to run that conversation, and it fits inside refinement or planning.

!!! warning "Safety and security carry on after go-live"
    None of this finishes at go-live. Threats change, services change, and the hazard picture changes with them. Keep the threat model, the DPIA, and the clinical safety case alive for as long as the service runs.
