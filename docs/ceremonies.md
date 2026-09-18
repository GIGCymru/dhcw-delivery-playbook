# Ceremonies

Sprint ceremonies give the team a structured rhythm for planning, coordination, and reflection. They are how a self-organising team governs its own work.

DHCW teams run on a two-week increment cadence. All ceremonies below are calibrated to this rhythm. It is worth planning these meetings for the same day as a dedicated office day to increase opportunities for collaboration and contact, and not to allocate sprint effort to those days.

Teams on different cadences should adapt timing proportionally, while preserving the intent of each ceremony.

## Sprint planning

**Timing:** The week in advance of sprint start, 1–2 hours.

The team agrees a sprint goal and commits to a sprint backlog. The product owner presents the top-priority backlog items that meet the Definition of Ready. Engineers and test engineers confirm their available capacity and pull stories into the sprint until full. Planned work may include training, continuous improvement tasks, and spikes alongside user stories.

The sprint backlog, once agreed, is owned by the team. No work is added or removed without the team agreeing a replan.

Once the team knows why the sprint matters and which stories it is taking on, it works out how. For each story, engineers and test engineers talk through the approach and break the work into sub-tasks in Azure DevOps (ADO) small enough to finish in a day or so. This plan is made by the people doing the work. Nobody hands it to them.

The plan does not need to be perfect or complete at planning. It is a starting picture that the team updates every day as it learns more. Breaking the work down this early surfaces hidden complexity while there is still time to do something about it, and it gives everyone a shared view of what done looks like for the sprint.

## Daily standup

**Timing:** Every working day, 15 minutes maximum.

The standup keeps the team moving towards the sprint goal. It is a chance for the team to look at its own progress and decide, together, what to do today. It is the team's own working conversation.

With the sprint goal and the ADO sprint board in view, the team looks at where the work stands against the goal and agrees a plan for the day. Where is work flowing? Where is it stuck? What is the most useful thing each person can pick up next to move the goal forward? The delivery manager facilitates and notes blockers, but the conversation belongs to the team. Blockers raised here should be resolved the same day where possible.

The three questions many teams use (what I finished, what I am doing, what is in my way) are a good way in. Keep the focus on the sprint goal and the plan for the day, so the standup stays a working conversation rather than a round of reporting.

## Sprint review

**Timing:** Last day of the sprint, 45–60 minutes.

The team demonstrates working software built during the sprint to stakeholders and each other. Demonstrations are live, in a staging environment, against real software. Stakeholder feedback is captured in the backlog, and the team reviews progress towards the product goal with its stakeholders.

!!! info "DHCW show-and-tells"
    DHCW teams are encouraged to run open show-and-tells to anyone in NHS Wales or wider who might be interested, in addition to internal sprint reviews. These create transparency across the organisation and share learning. Teams working on Vaccinations and Choose Pharmacy have established this practice. If you're not sure how to set one up, speak to your delivery manager.

## Sprint retrospective

**Timing:** Last day of the sprint, 1 hour.

The team inspects its own process, relationships, and tools to keep improving. The retrospective should be a psychologically safe space where people can be honest about what isn't working. Miro works well for remote teams. Actions from the retrospective are prioritised and planned into the next sprint.

Retrospectives that consistently produce the same actions are a signal that something systemic needs to change.

## Backlog refinement

**Timing:** At least once per sprint, approximately 1 hour. More sessions may be needed to maintain a two-to-three sprint runway of refined work.

The business analyst and product owner bring prepared tickets to the team. The team reviews the requirements, asks questions, and exercises the right to reject any ticket that is too large, too vague, or doesn't meet the Definition of Ready. If a ticket passes, the team estimates it together. ADO is updated with any additional detail, the estimate, and the ticket is moved to ready for development.

Refinement is collaborative. A ticket that only the BA and PO understand at the end of refinement has not been refined.

!!! note "Learn more"
    [You can find out more about backlog refinement here.](https://www.mountaingoatsoftware.com/agile/product-backlog-refinement-grooming)

## Sprint health

### Stable sprints

A sprint is a time-boxed effort towards a sprint goal. Once the sprint backlog is agreed, scope changes require the team to agree a replan. Mid-sprint additions break flow, invalidate capacity planning, and increase the risk that the Definition of Ready is skipped. When a high-priority change cannot wait, the product owner initiates a short replanning session with the team.

### Sprint goals

Every sprint should have a sprint goal: a short statement that explains why this increment of work matters. Make it clear, understandable, and **focused on value** to be delivered. When technical problems arise mid-sprint, the sprint goal is the guide for trade-off decisions. It gives the team shared purpose beyond a list of tickets. Every sprint goal should point at the current product goal.

### Sustainable delivery

We aim for a pace that can be maintained indefinitely. The delivery manager monitors team capacity and ensures the team plans to what it can actually finish. Burnout, technical debt, and high defect rates are all signals that the team is moving at an unsustainable pace.

### Finishing work

The team's aim is to complete everything committed in the sprint backlog. Where that isn't possible, the team prioritises based on the sprint goal and ranks remaining work accordingly. Three stories fully done is better than five stories that are ninety per cent complete. Start finishing; stop starting.

Where multiple team members can help move a story to done, they should do so. Getting work across the line takes precedence over picking up new stories at the end of a sprint.

### Cancelling a sprint

Now and then, the reason for a sprint disappears. A major priority shifts, a service incident changes everything, or the sprint goal simply stops making sense. When that happens, it is better to stop the sprint than to keep working towards a goal that no longer matters.

Only the product owner can cancel a sprint, because only the product owner owns the value the sprint was meant to deliver. Cancelling is rare, and it is disruptive, so it is a deliberate decision made with the team. When a sprint is cancelled, the team reviews any completed work, returns unfinished items to the backlog, and starts a fresh sprint with new planning.
