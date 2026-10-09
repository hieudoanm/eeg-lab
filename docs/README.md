# NeuroLab Documentation

## Normative Documents (Core)

These 12 documents are the authoritative source for implementation. When implementation and a document disagree, the document wins.

| #   | Document                                                 | Governs                                                |
| --- | -------------------------------------------------------- | ------------------------------------------------------ |
| 01  | [`01-overview.md`](01-overview.md)                       | Product vision and scope                               |
| 02  | [`02-requirements.md`](02-requirements.md)               | Functional/non-functional requirements (`FR-`, `NFR-`) |
| 03  | [`03-user-stories.md`](03-user-stories.md)               | User goals and acceptance scenarios                    |
| 04  | [`04-features.md`](04-features.md)                       | User-visible behaviour                                 |
| 05  | [`05-architecture.md`](05-architecture.md)               | Module boundaries, request lifecycle, tenancy          |
| 06  | [`06-data-model.md`](06-data-model.md)                   | Schema, constraints, state transitions                 |
| 07  | [`07-api-spec.md`](07-api-spec.md)                       | REST contract, status codes, error envelope            |
| 08  | [`08-tech-stack.md`](08-tech-stack.md)                   | Allowed technologies and dependency policy             |
| 09  | [`09-design.md`](09-design.md)                           | UI tokens, layout, states, accessibility               |
| 10  | [`10-testing-strategy.md`](10-testing-strategy.md)       | Test layers, fixtures, acceptance criteria             |
| 11  | [`11-implementation-plan.md`](11-implementation-plan.md) | Phased delivery plan                                   |
| 12  | [`12-deployment.md`](12-deployment.md)                   | Operations and deployment                              |

## Subdirectories

| Directory                          | Purpose                                                                                                     |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [`api/`](api/)                     | OpenAPI spec (`api-spec.yaml`)                                                                              |
| [`database/`](database/)           | Migration scripts, seed data                                                                                |
| [`decisions/`](decisions/)         | Architecture Decision Records (ADRs)                                                                        |
| [`diagrams/`](diagrams/)           | Mermaid diagrams (architecture, data flow, upload, analysis, CI/CD)                                         |
| [`supplementary/`](supplementary/) | Supporting documents (case study, threat model, limitations, costs, backup/recovery, architecture diagrams) |

## Supplementary Documents

| Document                                                                                 | Description                                                                                                                                   |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [`supplementary/architecture-diagrams.md`](supplementary/architecture-diagrams.md)       | Mermaid diagrams: system architecture, request lifecycles, tenant isolation, outbox pattern, job state machine, data model, deployment target |
| [`supplementary/case-study.md`](supplementary/case-study.md)                             | Portfolio case study: problem statement, engineering decisions, technical highlights, challenges, metrics                                     |
| [`supplementary/database-backup-recovery.md`](supplementary/database-backup-recovery.md) | Backup strategies (pg_dump, PITR), recovery procedures, RTO/RPO, monitoring alerts                                                            |
| [`supplementary/infrastructure-costs.md`](supplementary/infrastructure-costs.md)         | GCP cost estimates (dev/prod), optimisation tips, teardown instructions, budget alerts                                                        |
| [`supplementary/known-limitations.md`](supplementary/known-limitations.md)               | Comprehensive limitations tracker across scientific, technical, operational, data model, documentation                                        |
| [`supplementary/threat-model.md`](supplementary/threat-model.md)                         | STRIDE threat model with trust boundaries, attack surface, controls matrix, residual risks                                                    |

## Architecture Decision Records

| ADR                                                   | Title                       | Status   |
| ----------------------------------------------------- | --------------------------- | -------- |
| [0001](decisions/0001-authentication-approach.md)     | Authentication Approach     | Accepted |
| [0002](decisions/0002-studies-datasets-api.md)        | Studies & Datasets API      | Accepted |
| [0003](decisions/0003-upload-validation-strategy.md)  | Upload Validation Strategy  | Accepted |
| [0004](decisions/0004-background-job-architecture.md) | Background Job Architecture | Accepted |
| [0005](decisions/0005-trpc-backend-for-frontend.md)   | tRPC Backend-for-Frontend   | Accepted |
| [0006](decisions/0006-daisyui-component-layer.md)     | daisyUI Component Layer     | Accepted |

---

**Rule**: Implementation must conform to normative documents (01–12). Supplementary documents provide context but are not implementation requirements.
