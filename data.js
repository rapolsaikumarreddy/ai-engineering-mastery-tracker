window.ROADMAP = {
  "title": "AI Engineering Mastery",
  "weeklyHours": 13,
  "roles": [
    "Applied AI Engineer",
    "AI Platform Engineer",
    "LLMOps Engineer"
  ],
  "phases": [
    {
      "name": "Software & Python Foundations",
      "range": [
        1,
        4
      ],
      "role": "Applied AI",
      "project": "Incident API",
      "gate": "Ship a tested FastAPI + PostgreSQL incident service with CI, authentication basics and a reproducible Docker setup.",
      "topics": [
        [
          "Python fundamentals refresher",
          "Functions, collections, typing, dataclasses, packaging, pytest, mocking",
          "Build and test a cloud-inventory CLI",
          "https://docs.python.org/3/tutorial/"
        ],
        [
          "FastAPI, Pydantic and resilient clients",
          "Pydantic models, routes, validation, error responses; httpx, timeouts, retries, backoff",
          "Build incident CRUD endpoints with a resilient upstream client",
          "https://fastapi.tiangolo.com/tutorial/"
        ],
        [
          "SQL and persistence",
          "SQL joins, PostgreSQL, schema design, SQLAlchemy, migrations",
          "Persist incidents and timeline events",
          "https://www.postgresql.org/docs/current/tutorial.html"
        ],
        [
          "Backend quality gate",
          "Docker Compose, secrets, auth basics, integration tests, GitHub Actions",
          "Publish Incident API v1 with CI and architecture notes",
          "https://docs.docker.com/compose/"
        ]
      ]
    },
    {
      "name": "Applied AI and RAG",
      "range": [
        5,
        11
      ],
      "role": "Applied AI",
      "project": "Enterprise Runbook RAG",
      "gate": "Demonstrate grounded answers with source citations, a 40-question evaluation set, a calibrated judge, documented failure analysis and a measured improvement over baseline.",
      "topics": [
        [
          "LLM API engineering",
          "Tokens, context, structured output, validation, timeouts, retry budgets",
          "Add incident summarization with mocked tests",
          "https://www.oreilly.com/library/view/ai-engineering/9781098166298/"
        ],
        [
          "Embeddings and retrieval",
          "Vector similarity, chunking, document metadata, ingestion",
          "Index a small set of real or synthetic runbooks",
          "https://huggingface.co/learn/llm-course/"
        ],
        [
          "RAG end to end",
          "Retrieval, prompt assembly, grounding, source attribution",
          "Build a citation-aware runbook Q&A API",
          "https://docs.llamaindex.ai/"
        ],
        [
          "Search quality",
          "BM25, hybrid retrieval, filters, reranking, chunk experiments",
          "Compare three retrieval strategies",
          "https://www.sbert.net/"
        ],
        [
          "Evaluation fundamentals",
          "Golden datasets, recall@k, groundedness, latency, cost",
          "Create 40 test questions and a baseline report",
          "https://docs.ragas.io/"
        ],
        [
          "LLM-as-judge",
          "Judge design, rubric prompts, calibration, judge–human agreement, groundedness scoring",
          "Build a calibrated judge and measure its agreement",
          "https://hamel.dev/blog/posts/evals/"
        ],
        [
          "RAG quality gate",
          "Failure taxonomy, prompt injection basics, access boundaries",
          "Ship RAG v1 with evaluations and README",
          "https://genai.owasp.org/llm-top-10/"
        ]
      ]
    },
    {
      "name": "Agents and Reliable Workflows",
      "range": [
        12,
        17
      ],
      "role": "Applied AI",
      "project": "Read-only Incident Investigator",
      "gate": "Run 20 realistic incident scenarios; report correct evidence gathering, failure modes, tool-permission tests and human-approval boundaries.",
      "topics": [
        [
          "Agent design and tool calling",
          "Agent loop, tool schemas, validation, bounded execution, idempotency",
          "Create read-only diagnostic tools over fixture data",
          "https://www.anthropic.com/engineering/building-effective-agents"
        ],
        [
          "Stateful workflows",
          "State machines, deterministic orchestration, LangGraph basics",
          "Build a multi-step investigation graph",
          "https://docs.langchain.com/oss/python/langgraph/overview"
        ],
        [
          "Kubernetes evidence collection",
          "Read-only Kubernetes API, events, logs, least privilege",
          "Collect simulated cluster diagnostics safely",
          "https://kubernetes.io/docs/reference/using-api/"
        ],
        [
          "MCP fundamentals",
          "MCP tools, protocol boundaries, validation, authorization",
          "Expose one read-only diagnostic tool via MCP",
          "https://modelcontextprotocol.io/introduction"
        ],
        [
          "Agent reliability",
          "Timeouts, retries, loop limits, traceability, human approval",
          "Add budget limits and explicit escalation paths",
          "https://docs.langchain.com/langsmith/observability"
        ],
        [
          "Agent quality gate",
          "Scenario-based evaluation, security, evidence-backed explanations",
          "Ship investigator v1 with 20 scenario results",
          "https://genai.owasp.org/llm-top-10/"
        ]
      ]
    },
    {
      "name": "AI Platform and Deployment",
      "range": [
        18,
        23
      ],
      "role": "AI Platform",
      "project": "Deployable AI Services",
      "gate": "Deploy a reproducible AI service with CI/CD, least privilege, tracing, rollback documentation and a measured latency/cost baseline.",
      "topics": [
        [
          "Cloud AI services",
          "Compare managed inference offerings, IAM, networking, budgets",
          "Deploy LLM integration on one chosen cloud",
          "https://docs.aws.amazon.com/bedrock/"
        ],
        [
          "Containerized AI workloads",
          "Container security, health probes, config, resource sizing",
          "Containerize and deploy the RAG API",
          "https://kubernetes.io/docs/concepts/workloads/"
        ],
        [
          "Infrastructure as code",
          "Terraform modules, environment separation, secrets",
          "Provision a minimal staging environment",
          "https://developer.hashicorp.com/terraform/tutorials"
        ],
        [
          "CI/CD and release controls",
          "Build/test/deploy workflows, migrations, rollback plans",
          "Automate staging deployment and smoke tests",
          "https://docs.github.com/en/actions"
        ],
        [
          "Telemetry and cost",
          "OpenTelemetry traces, metrics, logs, token/cost dashboards",
          "Measure p50/p95 latency and per-request cost",
          "https://opentelemetry.io/docs/"
        ],
        [
          "Platform quality gate",
          "Reliability testing, deployment playbooks, runbooks",
          "Publish deployment diagrams and an SLO report",
          "https://sre.google/sre-book/table-of-contents/"
        ]
      ]
    },
    {
      "name": "Production LLMOps and Security",
      "range": [
        24,
        29
      ],
      "role": "LLMOps",
      "project": "AI Quality and Release Platform",
      "gate": "A deliberately degraded model/prompt must fail automated evaluation; demonstrate traceability, incident response and access controls.",
      "topics": [
        [
          "Evaluation in CI",
          "Versioned datasets, reproducible evals, regression thresholds",
          "Create automated RAG regression checks",
          "https://docs.langchain.com/langsmith/evaluation"
        ],
        [
          "Prompt/model lifecycle",
          "Model routing, versioning, experiments, rollbacks",
          "Build versioned configuration and release records",
          "https://mlflow.org/docs/latest/"
        ],
        [
          "Security hardening",
          "Prompt injection, data leakage, RBAC, secret scanning",
          "Threat-model and test the complete system",
          "https://genai.owasp.org/"
        ],
        [
          "Resilience engineering",
          "Load testing, timeouts, rate limits, circuit breakers",
          "Run fault injection and load tests",
          "https://locust.io/"
        ],
        [
          "Operational excellence",
          "SLOs, error budgets, runbooks, cost alerts, on-call handoff",
          "Create service dashboards and response playbooks",
          "https://sre.google/workbook/table-of-contents/"
        ],
        [
          "LLMOps quality gate",
          "Evaluation gates, incident drill, recovery, postmortem",
          "Release quality pipeline with an evidence report",
          "https://docs.github.com/en/actions"
        ]
      ]
    },
    {
      "name": "Advanced Applied AI and Hiring",
      "range": [
        30,
        35
      ],
      "role": "Applied AI",
      "project": "Integrated AI Engineering Capstone",
      "gate": "Present a fully working system, an architecture decision record, benchmarks, a security review, a live demo and two mock interviews.",
      "topics": [
        [
          "Architecture and trade-offs",
          "Multi-tenancy, queues, caching, consistency, data retention",
          "Write an architecture decision record",
          "https://github.com/joelparkerhenderson/architecture-decision-record"
        ],
        [
          "Inference economics",
          "Batching, caching, context optimization, model selection",
          "Compare accuracy, latency and cost of two models",
          "https://huggingface.co/docs/transformers/"
        ],
        [
          "End-to-end capstone",
          "Integrate backend, RAG, agent, platform and evaluation",
          "Build a unified incident intelligence service",
          "https://12factor.net/"
        ],
        [
          "Portfolio and communication",
          "Demo video, READMEs, diagrams, case studies",
          "Publish four clear project case studies",
          "https://docs.github.com/en/repositories"
        ],
        [
          "Technical interviews",
          "Python, SQL, API design, RAG and AI system design",
          "Complete timed coding and architecture mocks",
          "https://www.tryexponent.com/practice"
        ],
        [
          "Core graduation gate",
          "Independent build challenge and review of weak areas",
          "Deliver a capstone demo and a targeted CV",
          "https://github.com/"
        ]
      ]
    },
    {
      "name": "AI Systems Depth (core for platform engineers)",
      "range": [
        36,
        44
      ],
      "role": "AI Systems",
      "project": "Model Serving & Fine-tuning",
      "gate": "Serve, optimize and deploy an open model with a measured latency/throughput/cost benchmark, and a fine-tune compared against a prompted baseline with no data leakage.",
      "topics": [
        [
          "Transformer internals",
          "Attention, tokenization, training objective, architecture",
          "Implement and explain a minimal attention module",
          "https://karpathy.ai/zero-to-hero.html"
        ],
        [
          "PyTorch foundations",
          "Autograd, tensors, datasets, optimization",
          "Train a small neural network and debug gradients",
          "https://karpathy.ai/zero-to-hero.html"
        ],
        [
          "Fine-tuning: SFT and LoRA",
          "SFT, PEFT, LoRA, dataset quality",
          "Fine-tune a small open model on safe synthetic data",
          "https://huggingface.co/docs/peft/"
        ],
        [
          "Preference tuning (DPO)",
          "Preference data, DPO, reward signals, when to prefer it over SFT",
          "Apply DPO and compare it to your SFT run",
          "https://huggingface.co/docs/trl/"
        ],
        [
          "Fine-tuning evaluation",
          "Data leakage, holdouts, quality and cost comparison",
          "Compare fine-tuned and prompted baselines",
          "https://huggingface.co/docs/evaluate/"
        ],
        [
          "Model serving fundamentals",
          "vLLM, KV cache, throughput and latency",
          "Serve a small open model and benchmark it",
          "https://docs.vllm.ai/"
        ],
        [
          "Serving optimization",
          "Batching, quantization, memory, concurrency",
          "Produce a latency/throughput benchmark",
          "https://docs.vllm.ai/"
        ],
        [
          "Kubernetes model serving",
          "KServe concepts, autoscaling, health and rollouts",
          "Deploy a model serving workload in a sandbox",
          "https://kserve.github.io/website/"
        ],
        [
          "GPU infrastructure",
          "GPU scheduling, device plugins, cost and capacity",
          "Document GPU serving architecture and cost",
          "https://kubernetes.io/docs/tasks/manage-gpus/scheduling-gpus/"
        ]
      ]
    },
    {
      "name": "Specialization and Open Source (optional)",
      "range": [
        45,
        52
      ],
      "role": "Advanced",
      "project": "Open-source AI Systems Specialization",
      "gate": "Publish a reproducible deep-dive benchmark or open-source contribution with transparent methods and limitations.",
      "topics": [
        [
          "Advanced retrieval",
          "Query decomposition, multi-stage retrieval, rerankers",
          "Run a controlled retrieval ablation study",
          "https://www.sbert.net/"
        ],
        [
          "Advanced agent evaluation",
          "Adversarial tests, multi-step benchmarks, tool abuse",
          "Create a safety and reliability benchmark suite",
          "https://genai.owasp.org/"
        ],
        [
          "Distributed systems",
          "Queues, backpressure, consistency, failure domains",
          "Design a scalable inference gateway",
          "https://sre.google/sre-book/table-of-contents/"
        ],
        [
          "Open-source contribution I",
          "Find an issue, reproduce it, add tests",
          "Submit a focused PR to an AI tooling project",
          "https://goodfirstissue.dev/"
        ],
        [
          "Open-source contribution II",
          "Code review, documentation, maintainer communication",
          "Respond to review or publish a standalone package",
          "https://opensource.guide/how-to-contribute/"
        ],
        [
          "Research literacy",
          "Read papers, question benchmarks, reproduce findings",
          "Write a reproducibility report",
          "https://paperswithcode.com/"
        ],
        [
          "Expert case study",
          "Technical writing, measurements, architecture decisions",
          "Publish a detailed public engineering case study",
          "https://github.com/"
        ],
        [
          "Advanced graduation",
          "Peer feedback, mock interviews, future learning plan",
          "Publish a specialization demo and a 6-month plan",
          "https://github.com/"
        ]
      ]
    }
  ]
};
window.WEEKS = window.ROADMAP.phases.flatMap((phase,pi)=>phase.topics.map((t,i)=>({number:phase.range[0]+i,phase:pi,title:t[0],learn:t[1],deliverable:t[2],url:t[3],role:phase.role,project:phase.project,advanced:pi===7,gate:(i===phase.topics.length-1?phase.gate:null)})));
