# Engineering practice

Sprint ceremonies describe how we coordinate. Engineering practice describes how we build. The two are inseparable: a team with excellent ceremonies but weak engineering practices will accumulate technical debt and slow down. A team with strong engineering but no coordination will drift from user need.

DHCW's engineering standards are grounded in the 14 Continuous Delivery Markers. The markers below are the quality benchmark for how DHCW teams build and operate software. They are the baseline, not an aspiration.

| Marker | What it means for your team |
| --- | --- |
| **1. Release Capability** | The team can release to production safely at any time, not just at the end of a sprint. |
| **2. Deployment Pipeline** | Every change goes through an automated pipeline: build, test, and deploy. The pipeline is the route to production. |
| **3. Continuous Integration** | Engineers integrate their work to the main branch frequently, at least daily. Long-lived branches are a risk. |
| **4. Trunk-Based Development** | Work from short-lived branches merged to trunk. Feature flags protect incomplete work rather than long-lived feature branches. |
| **5. Small Autonomous Teams** | Teams are small enough to communicate without overhead and empowered to make delivery decisions without waiting for external approval. |
| **6. Informed Decision Making** | Decisions are made by the people closest to the work, using data and evidence, not by hierarchy. |
| **7. Small Steps** | Changes are small and incremental. Large, risky changes are broken into smaller, safer ones. |
| **8. Fast Feedback** | The team gets feedback on changes quickly: from automated tests, from monitoring, and from users. |
| **9. Automated Testing** | Testing is automated at the appropriate levels. Manual testing is exploratory and complementary, not the primary safety net. |
| **10. Version Control** | All code, configuration, and infrastructure is in version control. Nothing exists only on someone's laptop. |
| **11. One Route to Production** | There is one defined path from code to production. Side doors create risk and undermine trust in the pipeline. |
| **12. Traceability** | Every change can be traced back to a ticket, a decision, and a user need. |
| **13. Automated Deployment** | Deployment is automated and repeatable. Human intervention in the deployment process is a risk, not a safety net. |
| **14. Observability** | The team can understand the state of the system in production from the outside. Logging, monitoring, and alerting are not optional. |

!!! tip "Software Engineering Handbook"
    See also DHCW's [Software Engineering Handbook](https://gigcymru.github.io/dhcw-software-engineering-handbook/).

!!! info "AI-assisted engineering"
    DHCW is rolling out GitHub Copilot and other AI tooling to engineering teams. These tools amplify good engineering practice: they do not substitute for it. Teams should ensure solid foundations (version control, automated testing, trunk-based development) before introducing AI tooling. A team with weak practices and AI assistance will produce poor code faster.
