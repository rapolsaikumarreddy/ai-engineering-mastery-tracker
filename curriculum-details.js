/* Detailed week tasks; no change to saved progress schema. */
window.WEEK_DETAILS = {
  "1": {
    "learnTask": "Refresher only. Skim what you know; focus time on type hints, dataclasses, packaging/entry points, and pytest + mocking. Reproduce one example from memory rather than finishing a whole course.",
    "practice": "Filter cloud resources by region, count resource types, parse malformed JSON safely; add type hints and a small CLI.",
    "build": "Write a typed, packaged cloud-inventory CLI from scratch",
    "validate": "Fresh install succeeds; mypy (or equivalent) passes; 8 pytest cases including malformed-JSON and mocked-IO; outputs match hand-calculated totals.",
    "reflect": "Which Python feature did you have to look up, and can you now explain it without notes?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Python tutorial (targeted sections)",
        "url": "https://docs.python.org/3/tutorial/"
      },
      {
        "title": "pytest docs",
        "url": "https://docs.pytest.org/"
      }
    ]
  },
  "2": {
    "learnTask": "Study only: Pydantic validation, FastAPI routes and dependency injection, error responses; httpx with timeouts, retries and exponential backoff. You already know HTTP semantics — spend the time on validation and retry budgets.",
    "practice": "Implement create/read/update/delete routes with validation; call a flaky upstream and test 429/500/timeout with mocked responses and backoff.",
    "build": "Incident CRUD API plus a resilient client module",
    "validate": "At least 10 endpoint tests (valid, invalid payload, missing id) pass; client tests cover success, 429, 500 and timeout with no real network in CI.",
    "reflect": "Which failure mode did your retry policy make worse rather than better?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "FastAPI tutorial",
        "url": "https://fastapi.tiangolo.com/tutorial/"
      },
      {
        "title": "HTTPX docs",
        "url": "https://www.python-httpx.org/"
      }
    ]
  },
  "3": {
    "learnTask": "Study only: joins and aggregations, schema design for incident/event tables, SQLAlchemy models, and migrations with indexes.",
    "practice": "Write joins and aggregations; design incident/event tables; add a migration and a query index.",
    "build": "Persist incidents and timeline events behind the API",
    "validate": "Migrations run from an empty DB; referential integrity holds; 5 SQL assertions pass.",
    "reflect": "Which schema choice would break at ten times the data?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "PostgreSQL tutorial",
        "url": "https://www.postgresql.org/docs/current/tutorial.html"
      },
      {
        "title": "SQLAlchemy ORM",
        "url": "https://docs.sqlalchemy.org/en/20/orm/"
      }
    ]
  },
  "4": {
    "learnTask": "Mostly your day job — move fast. Confirm clean Compose startup, secrets handling, a health endpoint, integration tests, and a CI lint/test workflow.",
    "practice": "Add API integration tests, a health endpoint, and CI lint/test steps; exercise a fresh local setup end to end.",
    "build": "Publish Incident API v1 with CI and an architecture note",
    "validate": "Clean Docker Compose startup; CI green; README reproduces API and database tests on a fresh machine.",
    "reflect": "What was hardest to reproduce on a clean environment?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Docker Compose docs",
        "url": "https://docs.docker.com/compose/"
      },
      {
        "title": "GitHub Actions docs",
        "url": "https://docs.github.com/en/actions"
      }
    ]
  },
  "5": {
    "learnTask": "Study only: tokens and context windows, structured/JSON output with schema validation, timeouts and retry budgets. Start Chip Huyen ch. 1–3 as the spine for this phase.",
    "practice": "Compare two prompts on ten synthetic incidents; validate structured JSON; retry only transient errors.",
    "build": "Add incident summarization to the API, with mocked tests",
    "validate": "All 10 cases produce schema-valid outputs; cost and failure handling reported.",
    "reflect": "Which 'prompt failure' was actually an API or validation problem?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Anthropic / OpenAI API docs",
        "url": "https://platform.openai.com/docs/overview"
      },
      {
        "title": "AI Engineering (Chip Huyen) — applied spine",
        "url": "https://www.oreilly.com/library/view/ai-engineering/9781098166298/"
      }
    ]
  },
  "6": {
    "learnTask": "Study only: embeddings and vector similarity, chunking strategies, document metadata, and an ingestion pipeline.",
    "practice": "Chunk runbooks two ways; inspect metadata; compare nearest neighbours for five queries.",
    "build": "Ingest and index 10+ runbooks",
    "validate": "Ingest 10+ documents; show chunk counts and five relevant/irrelevant search examples.",
    "reflect": "Where did chunk boundaries lose important context?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "HF LLM course (retrieval units)",
        "url": "https://huggingface.co/learn/llm-course/"
      },
      {
        "title": "AI Engineering (Chip Huyen) — applied spine",
        "url": "https://www.oreilly.com/library/view/ai-engineering/9781098166298/"
      }
    ]
  },
  "7": {
    "learnTask": "Study only: retrieval + prompt assembly, grounding, and source attribution. Keep retrieval and generation as separate, testable functions.",
    "practice": "Write retrieval and answer-generation separately; test missing sources and empty results.",
    "build": "Citation-aware runbook Q&A endpoint",
    "validate": "Answers cite only retrieved sources; a 10-question smoke test includes 2 unanswerable cases handled correctly.",
    "reflect": "When did retrieval fail versus generation fail?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "LlamaIndex docs",
        "url": "https://docs.llamaindex.ai/"
      },
      {
        "title": "AI Engineering (Chip Huyen) — applied spine",
        "url": "https://www.oreilly.com/library/view/ai-engineering/9781098166298/"
      }
    ]
  },
  "8": {
    "learnTask": "Study only: BM25 vs dense retrieval, hybrid search with filters, and rerankers.",
    "practice": "Implement BM25 and dense retrieval; compare top-five results; rerank a sample query set.",
    "build": "Measured comparison of three retrieval strategies",
    "validate": "Report recall@5 for three strategies on 15+ labeled queries and explain the winner.",
    "reflect": "Which retrieval improvement helped, and which was unnecessary?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Sentence-Transformers / rerankers",
        "url": "https://www.sbert.net/"
      },
      {
        "title": "AI Engineering (Chip Huyen) — applied spine",
        "url": "https://www.oreilly.com/library/view/ai-engineering/9781098166298/"
      }
    ]
  },
  "9": {
    "learnTask": "Study only: building golden datasets, recall@k, groundedness, and latency/cost measurement. Read Hamel's evals post before you start.",
    "practice": "Author forty answerable/unanswerable questions; label relevant chunks; score recall@5.",
    "build": "40-question evaluation set + baseline report",
    "validate": "Forty-question dataset checked into the repo; baseline recall and answer correctness reported.",
    "reflect": "What did your evaluation dataset miss?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Ragas docs",
        "url": "https://docs.ragas.io/"
      },
      {
        "title": "Your AI product needs evals (Hamel Husain)",
        "url": "https://hamel.dev/blog/posts/evals/"
      }
    ]
  },
  "10": {
    "learnTask": "NEW. Study only: designing a rubric-based LLM judge, calibrating it, and measuring agreement with your own labels. This is the skill that makes every later eval gate trustworthy.",
    "practice": "Hand-label 50 outputs; write a judge prompt; measure agreement; inspect every disagreement.",
    "build": "A calibrated LLM judge for your RAG answers",
    "validate": "50+ hand-labeled outputs; judge agreement ≥80%; rubric and the disagreement cases documented.",
    "reflect": "Where does your judge systematically disagree with you, and why?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Your AI product needs evals (Hamel Husain)",
        "url": "https://hamel.dev/blog/posts/evals/"
      },
      {
        "title": "Ragas: LLM-based metrics",
        "url": "https://docs.ragas.io/"
      }
    ]
  },
  "11": {
    "learnTask": "Study only: a failure taxonomy, prompt-injection basics, and access boundaries for retrieved content.",
    "practice": "Test malicious runbook instructions and unauthorized documents; add refusal and source checks.",
    "build": "Ship RAG v1 with the eval suite, judge and README",
    "validate": "No unauthorized sources returned in 10 security cases; failure taxonomy and judge scores published.",
    "reflect": "Which trust boundary was easiest to overlook?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "OWASP Top 10 for LLM Apps",
        "url": "https://genai.owasp.org/llm-top-10/"
      },
      {
        "title": "Your AI product needs evals (Hamel Husain)",
        "url": "https://hamel.dev/blog/posts/evals/"
      }
    ]
  },
  "12": {
    "learnTask": "Read Anthropic's 'Building Effective Agents' first, then study tool schemas, argument validation, bounded execution and idempotency. Build the loop once by hand before any framework.",
    "practice": "Define tool schemas for event lookup and log search; reject unknown parameters and excessive requests.",
    "build": "Read-only diagnostic tools over fixture data, driven by a hand-written loop",
    "validate": "Invalid tool args rejected; read-only tests pass; tool-call count capped.",
    "reflect": "Which tool must never be writable, and why?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Building Effective Agents (Anthropic)",
        "url": "https://www.anthropic.com/engineering/building-effective-agents"
      },
      {
        "title": "Function calling guide",
        "url": "https://platform.openai.com/docs/guides/function-calling"
      }
    ]
  },
  "13": {
    "learnTask": "Study only: modelling a workflow as a state machine, deterministic orchestration, and LangGraph basics — now that you've built a loop by hand.",
    "practice": "Create a graph with investigate, verify and escalate branches; simulate timeout and tool failure.",
    "build": "A multi-step investigation graph",
    "validate": "Graph tests cover happy path, timeout, missing evidence and escalation.",
    "reflect": "Which workflow step should stay deterministic rather than model-driven?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "LangGraph docs",
        "url": "https://docs.langchain.com/oss/python/langgraph/overview"
      },
      {
        "title": "Building Effective Agents (Anthropic)",
        "url": "https://www.anthropic.com/engineering/building-effective-agents"
      }
    ]
  },
  "14": {
    "learnTask": "Your home turf — go quickly. Confirm read-only API access patterns, event/log parsing, and a service account with no write verbs.",
    "practice": "Use Kubernetes fixtures; parse pod conditions, events and log excerpts with no write permissions.",
    "build": "A safe, read-only cluster-diagnostics collector",
    "validate": "Fixtures reproduce at least 5 incident classes; the service account has no write verbs.",
    "reflect": "What evidence was ambiguous, and how did you handle the uncertainty?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Kubernetes API reference",
        "url": "https://kubernetes.io/docs/reference/using-api/"
      },
      {
        "title": "RBAC: least privilege",
        "url": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
      }
    ]
  },
  "15": {
    "learnTask": "Study only: MCP tools, protocol boundaries, argument validation and authorization.",
    "practice": "Implement a local MCP server with one read-only tool; validate arguments and permission boundaries.",
    "build": "A read-only diagnostic tool exposed over MCP",
    "validate": "The MCP tool returns validated data; unknown tool and bad input rejected in tests.",
    "reflect": "What does MCP simplify, and what security burden remains yours?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Model Context Protocol",
        "url": "https://modelcontextprotocol.io/introduction"
      },
      {
        "title": "Function calling guide",
        "url": "https://platform.openai.com/docs/guides/function-calling"
      }
    ]
  },
  "16": {
    "learnTask": "Study only: tool-call caps, cancellation, retries, tracing, and a human-approval checkpoint.",
    "practice": "Add tool-call caps, cancellation, retries and an approval gate; inspect traces.",
    "build": "Budget limits and explicit escalation paths for the investigator",
    "validate": "Loop terminates under budget; failure path and approval gate covered by tests.",
    "reflect": "When should the agent stop and ask a human?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "LangSmith observability",
        "url": "https://docs.langchain.com/langsmith/observability"
      },
      {
        "title": "Building Effective Agents (Anthropic)",
        "url": "https://www.anthropic.com/engineering/building-effective-agents"
      }
    ]
  },
  "17": {
    "learnTask": "Study only: scenario-based evaluation, agent security, and evidence-backed explanations. Reuse your judge from Phase 2.",
    "practice": "Label twenty incident scenarios; compare agent findings to evidence; track false claims.",
    "build": "Ship investigator v1 with a 20-scenario evaluation",
    "validate": "20-case report includes evidence correctness, latency and an unsafe-action count.",
    "reflect": "Which failures were unsupported guesses rather than tool errors?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "OWASP Top 10 for LLM Apps",
        "url": "https://genai.owasp.org/llm-top-10/"
      },
      {
        "title": "LangSmith evaluation",
        "url": "https://docs.langchain.com/langsmith/evaluation"
      }
    ]
  },
  "18": {
    "learnTask": "Study only: comparing managed inference (Bedrock/Azure AI/Vertex) on auth, region, price and API compatibility.",
    "practice": "Compare three providers on auth, region, price and compatibility; scope IAM tightly.",
    "build": "LLM integration deployed on one chosen cloud",
    "validate": "One provider integrated; IAM scoped; monthly cost estimate and a fallback documented.",
    "reflect": "What would change if the cloud vendor changed?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "AWS Bedrock docs",
        "url": "https://docs.aws.amazon.com/bedrock/"
      },
      {
        "title": "AI Engineering (Chip Huyen) — applied spine",
        "url": "https://www.oreilly.com/library/view/ai-engineering/9781098166298/"
      }
    ]
  },
  "19": {
    "learnTask": "Day-job adjacent — move fast. Confirm image hardening, health probes, config, and CPU/memory sizing for an LLM workload.",
    "practice": "Write a Dockerfile and health checks; run with CPU/memory limits and failure probes.",
    "build": "Containerized, health-checked RAG API",
    "validate": "Image builds cleanly; health check works; limits and startup behaviour documented.",
    "reflect": "Which container issue would only appear in production?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Kubernetes workloads",
        "url": "https://kubernetes.io/docs/concepts/workloads/"
      },
      {
        "title": "Container security (NIST 800-190)",
        "url": "https://csrc.nist.gov/pubs/sp/800/190/final"
      }
    ]
  },
  "20": {
    "learnTask": "Study only the parts new to your setup: module structure, environment separation, and secret handling.",
    "practice": "Define staging variables and minimal resources; read plans for unexpected changes.",
    "build": "A minimal, reviewed staging environment",
    "validate": "terraform validate succeeds; plan reviewed; no secrets in committed files.",
    "reflect": "Which IaC choice could cause accidental spend?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Terraform tutorials",
        "url": "https://developer.hashicorp.com/terraform/tutorials"
      },
      {
        "title": "Kubernetes workloads",
        "url": "https://kubernetes.io/docs/concepts/workloads/"
      }
    ]
  },
  "21": {
    "learnTask": "Your strength — focus on what's model-specific: gating deploys on evals, migration safety, and rehearsed rollback.",
    "practice": "Build a release workflow with unit tests, smoke tests and a documented rollback rehearsal.",
    "build": "Automated staging deploy with smoke tests and rollback",
    "validate": "CI runs tests; staged release and rollback rehearsal documented with timestamps.",
    "reflect": "What would make your rollback unsafe?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "GitHub Actions docs",
        "url": "https://docs.github.com/en/actions"
      },
      {
        "title": "Tekton docs",
        "url": "https://tekton.dev/docs/"
      }
    ]
  },
  "22": {
    "learnTask": "Study only: OpenTelemetry spans for LLM and retrieval calls, and token/cost dashboards.",
    "practice": "Instrument request spans, model latency and token use; compute p50/p95 and cost per request.",
    "build": "Latency and per-request cost dashboard",
    "validate": "Traces cover model and retrieval spans; p50/p95 and cost measured over 30 requests.",
    "reflect": "Which metric revealed a slow step you hadn't suspected?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "OpenTelemetry docs",
        "url": "https://opentelemetry.io/docs/"
      },
      {
        "title": "Langfuse docs",
        "url": "https://langfuse.com/docs"
      }
    ]
  },
  "23": {
    "learnTask": "Study only: defining an SLO and error budget, and writing a recovery runbook.",
    "practice": "Define an SLO; simulate a failed rollout; document diagnosis, recovery and remaining risks.",
    "build": "Deployment diagrams and an SLO report",
    "validate": "Runbook enables recovery from a simulated failure; SLO and error budget documented.",
    "reflect": "What is the biggest reliability risk you have not yet tested?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Google SRE Book",
        "url": "https://sre.google/sre-book/table-of-contents/"
      },
      {
        "title": "OpenTelemetry docs",
        "url": "https://opentelemetry.io/docs/"
      }
    ]
  },
  "24": {
    "learnTask": "Study only: versioning eval datasets, reproducible runs, and regression thresholds. This is where your Tekton/Argo background pays off directly.",
    "practice": "Create a versioned eval set; introduce a bad prompt; confirm the CI gate fails on it.",
    "build": "Automated RAG regression checks in your pipeline",
    "validate": "A good prompt passes and a degraded prompt fails CI against the same frozen dataset.",
    "reflect": "What regression did your evaluation catch that a human review might have missed?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "LangSmith evaluation",
        "url": "https://docs.langchain.com/langsmith/evaluation"
      },
      {
        "title": "Your AI product needs evals (Hamel Husain)",
        "url": "https://hamel.dev/blog/posts/evals/"
      }
    ]
  },
  "25": {
    "learnTask": "Study only: model/prompt versioning, experiment tracking, and rollback records.",
    "practice": "Compare model/prompt versions on fixed fixtures; record reproducible release metadata.",
    "build": "Versioned config and release records",
    "validate": "Every release reproducible from versioned config; a comparison report saved.",
    "reflect": "How would you explain a model rollback to stakeholders?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "MLflow docs",
        "url": "https://mlflow.org/docs/latest/"
      },
      {
        "title": "LangSmith evaluation",
        "url": "https://docs.langchain.com/langsmith/evaluation"
      }
    ]
  },
  "26": {
    "learnTask": "Study only: a practical threat model — prompt injection, data leakage, RBAC, and secret scanning.",
    "practice": "Write a threat model; test prompt injection, secret leakage and unauthorized data access.",
    "build": "A threat model with a passing security test suite",
    "validate": "At least 12 security tests pass; threat model includes mitigations and residual risks.",
    "reflect": "Which security control has the weakest evidence behind it?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "OWASP GenAI security",
        "url": "https://genai.owasp.org/"
      },
      {
        "title": "Simon Willison on prompt injection",
        "url": "https://simonwillison.net/tags/prompt-injection/"
      }
    ]
  },
  "27": {
    "learnTask": "Study only: load testing, timeouts, rate limits, and circuit breakers for LLM dependencies.",
    "practice": "Inject timeouts and rate limits; measure graceful degradation under load.",
    "build": "Fault-injection and load-test results",
    "validate": "Load-test report has p95, error rate and graceful-degradation evidence.",
    "reflect": "Which dependency failed first under load?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Locust docs",
        "url": "https://locust.io/"
      },
      {
        "title": "Google SRE Book",
        "url": "https://sre.google/sre-book/table-of-contents/"
      }
    ]
  },
  "28": {
    "learnTask": "Study only: SLOs and error budgets, runbooks, cost alerts, and on-call handover.",
    "practice": "Create dashboards and alerts and an incident runbook; rehearse an on-call handover.",
    "build": "Service dashboards and response playbooks",
    "validate": "Dashboards and alerts fire on synthetic incidents; runbook has an owner and thresholds.",
    "reflect": "Would another on-call engineer understand your runbook unaided?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Google SRE Workbook",
        "url": "https://sre.google/workbook/table-of-contents/"
      },
      {
        "title": "Langfuse docs",
        "url": "https://langfuse.com/docs"
      }
    ]
  },
  "29": {
    "learnTask": "Study only: wiring eval gates into release, running an incident drill, and writing a blameless postmortem.",
    "practice": "Replay a regression and an incident drill; verify automated rollback; write a postmortem.",
    "build": "A release quality pipeline with an evidence report",
    "validate": "Regression blocked by the gate; incident-drill evidence and a blameless postmortem published.",
    "reflect": "Which prevention measure is worth implementing first?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "GitHub Actions docs",
        "url": "https://docs.github.com/en/actions"
      },
      {
        "title": "Google SRE Workbook",
        "url": "https://sre.google/workbook/table-of-contents/"
      }
    ]
  },
  "30": {
    "learnTask": "Study only: the trade-offs behind multi-tenancy, queues vs synchronous APIs, caching/invalidation, and data retention.",
    "practice": "Compare queue vs synchronous, tenant isolation, and cache invalidation in three ADRs.",
    "build": "Three architecture decision records",
    "validate": "Each ADR includes alternatives, risks and an explicit decision rationale.",
    "reflect": "Which trade-off was hardest to commit to?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "ADR templates",
        "url": "https://github.com/joelparkerhenderson/architecture-decision-record"
      },
      {
        "title": "AI Engineering (Chip Huyen) — applied spine",
        "url": "https://www.oreilly.com/library/view/ai-engineering/9781098166298/"
      }
    ]
  },
  "31": {
    "learnTask": "Study only: batching, caching, context optimization, and choosing a model on a quality/cost basis.",
    "practice": "Benchmark two models and caching strategies on a fixed quality set; chart cost/latency.",
    "build": "A model comparison on accuracy, latency and cost",
    "validate": "Benchmark includes quality, p95 latency and estimated cost on a fixed dataset.",
    "reflect": "When is the cheaper model actually worse value?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Transformers docs",
        "url": "https://huggingface.co/docs/transformers/"
      },
      {
        "title": "AI Engineering (Chip Huyen) — applied spine",
        "url": "https://www.oreilly.com/library/view/ai-engineering/9781098166298/"
      }
    ]
  },
  "32": {
    "learnTask": "Integration week — little new study. Wire backend, retrieval, agent and evaluation together with documented interfaces.",
    "practice": "Integrate the components with documented interfaces and end-to-end tests.",
    "build": "A unified incident-intelligence service",
    "validate": "A clean-room integration test runs; no manual DB edits needed; interfaces documented.",
    "reflect": "Which integration boundary caused the most bugs?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "The Twelve-Factor App",
        "url": "https://12factor.net/"
      },
      {
        "title": "AI Engineering (Chip Huyen) — applied spine",
        "url": "https://www.oreilly.com/library/view/ai-engineering/9781098166298/"
      }
    ]
  },
  "33": {
    "learnTask": "Study only: writing a README and case study someone else can follow, and a short demo script.",
    "practice": "Create architecture diagrams and a demo script; have a peer follow your setup steps.",
    "build": "Four project case studies",
    "validate": "Another person follows the README unaided; demo and diagrams explain the limitations.",
    "reflect": "What part of the setup confused your reviewer?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "GitHub repositories docs",
        "url": "https://docs.github.com/en/repositories"
      },
      {
        "title": "AI Engineering (Chip Huyen) — applied spine",
        "url": "https://www.oreilly.com/library/view/ai-engineering/9781098166298/"
      }
    ]
  },
  "34": {
    "learnTask": "Study only: timed Python/SQL, and explaining a RAG/agent design and its failure modes aloud.",
    "practice": "Solve Python/SQL under time limits; explain a RAG design and its failure cases aloud.",
    "build": "Two timed coding sessions and two architecture mocks",
    "validate": "All four scored against a rubric; weakest answers noted for redo.",
    "reflect": "Which interview answer lacked concrete evidence?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Pramp mock interviews",
        "url": "https://www.pramp.com/"
      },
      {
        "title": "AI Engineering (Chip Huyen) — applied spine",
        "url": "https://www.oreilly.com/library/view/ai-engineering/9781098166298/"
      }
    ]
  },
  "35": {
    "learnTask": "No new material. Run a clean-room deployment and demo; review a skills-gap checklist against target job descriptions.",
    "practice": "Run a fresh deployment and demo; review a gap checklist against real job postings.",
    "build": "A capstone demo and a targeted CV",
    "validate": "Fresh deployment works; portfolio has four case studies and a targeted CV.",
    "reflect": "What gap most affects your readiness for the roles you want?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "GitHub",
        "url": "https://github.com/"
      },
      {
        "title": "AI Engineering (Chip Huyen) — applied spine",
        "url": "https://www.oreilly.com/library/view/ai-engineering/9781098166298/"
      }
    ]
  },
  "36": {
    "learnTask": "Not optional for you. When an agent or fine-tune misbehaves, this is the knowledge that lets you debug rather than guess. Study attention, tokenization and the training objective; implement scaled dot-product attention.",
    "practice": "Implement scaled dot-product attention with a shape test and a numerical sanity check.",
    "build": "A minimal attention module you can explain",
    "validate": "Attention tensor shapes and softmax properties validated with automated tests.",
    "reflect": "What did implementing attention reveal that API use hides?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "nanoGPT (Karpathy)",
        "url": "https://github.com/karpathy/nanoGPT"
      },
      {
        "title": "Zero to Hero (Karpathy)",
        "url": "https://karpathy.ai/zero-to-hero.html"
      }
    ]
  },
  "37": {
    "learnTask": "Study only: autograd, tensors, datasets and the training loop — enough to train and debug a small model.",
    "practice": "Train a tiny classifier; plot loss; check gradients and overfitting on a small dataset.",
    "build": "A small trained network with a debugged training loop",
    "validate": "Baseline beats chance on a holdout; learning curve and seed documented.",
    "reflect": "What caused your training instability?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "PyTorch tutorials",
        "url": "https://pytorch.org/tutorials/"
      },
      {
        "title": "Zero to Hero (Karpathy)",
        "url": "https://karpathy.ai/zero-to-hero.html"
      }
    ]
  },
  "38": {
    "learnTask": "Study only: supervised fine-tuning, PEFT/LoRA, and dataset quality.",
    "practice": "Prepare synthetic examples; run LoRA on a small model within a fixed budget.",
    "build": "A LoRA fine-tune of a small open model",
    "validate": "Fine-tune completes within budget; config, data provenance and checkpoint recorded.",
    "reflect": "When is fine-tuning worse than retrieval or prompting?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "HF PEFT docs",
        "url": "https://huggingface.co/docs/peft/"
      },
      {
        "title": "TRL: SFT and DPO (Hugging Face)",
        "url": "https://huggingface.co/docs/trl/"
      }
    ]
  },
  "39": {
    "learnTask": "NEW. Study only: preference data, DPO, and when preference tuning beats plain SFT.",
    "practice": "Build a small preference dataset; run DPO; compare against the SFT checkpoint on held-out examples.",
    "build": "A DPO run compared against the SFT baseline",
    "validate": "DPO and SFT compared on the same held-out set; the trade-off reported honestly.",
    "reflect": "Did preference tuning actually help, or just change the style?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "TRL: SFT and DPO (Hugging Face)",
        "url": "https://huggingface.co/docs/trl/"
      },
      {
        "title": "HF PEFT docs",
        "url": "https://huggingface.co/docs/peft/"
      }
    ]
  },
  "40": {
    "learnTask": "Study only: avoiding data leakage, proper holdouts, and comparing fine-tuned vs prompted on quality and cost.",
    "practice": "Split datasets by source; check leakage; compare SFT/DPO to prompting on held-out examples.",
    "build": "A leakage-free fine-tuned vs prompted comparison",
    "validate": "No leakage across splits; held-out comparison includes confidence limits.",
    "reflect": "How confident are you that the gains generalize?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "HF Evaluate",
        "url": "https://huggingface.co/docs/evaluate/"
      },
      {
        "title": "Your AI product needs evals (Hamel Husain)",
        "url": "https://hamel.dev/blog/posts/evals/"
      }
    ]
  },
  "41": {
    "learnTask": "Core to your edge. Study vLLM, the KV cache, and how to measure first-token latency and throughput.",
    "practice": "Serve a small model; measure first-token latency and requests per second.",
    "build": "A served model with a throughput/latency benchmark",
    "validate": "Latency and throughput measured across 3 concurrency levels, with hardware noted.",
    "reflect": "Which serving bottleneck dominates your workload?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "vLLM docs",
        "url": "https://docs.vllm.ai/"
      },
      {
        "title": "PagedAttention paper",
        "url": "https://arxiv.org/abs/2309.06180"
      }
    ]
  },
  "42": {
    "learnTask": "Study only: continuous batching, quantization, memory, and concurrency trade-offs.",
    "practice": "Compare batch sizes and quantization; log memory, quality, throughput and tail latency.",
    "build": "A quantized vs full-precision serving benchmark",
    "validate": "Benchmark records throughput, p95, memory and quality impact.",
    "reflect": "Which optimization sacrificed too much quality?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "vLLM docs",
        "url": "https://docs.vllm.ai/"
      },
      {
        "title": "PagedAttention paper",
        "url": "https://arxiv.org/abs/2309.06180"
      }
    ]
  },
  "43": {
    "learnTask": "Your home turf applied to models. Study KServe InferenceService, autoscaling, probes and rollouts.",
    "practice": "Deploy a sandbox serving endpoint; test probes, autoscaling assumptions and rollout.",
    "build": "A KServe-deployed model in a sandbox",
    "validate": "Sandbox endpoint deploys; probe failure and rollout behaviour demonstrated.",
    "reflect": "What would change for a production model rollout?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "KServe docs",
        "url": "https://kserve.github.io/website/"
      },
      {
        "title": "vLLM docs",
        "url": "https://docs.vllm.ai/"
      }
    ]
  },
  "44": {
    "learnTask": "Study only: GPU scheduling on Kubernetes, device plugins, and capacity/cost planning.",
    "practice": "Draft a GPU capacity and scheduling plan; compute hourly and per-million-token cost.",
    "build": "A GPU serving architecture and cost worksheet",
    "validate": "Capacity worksheet includes utilization assumptions and failure scenarios.",
    "reflect": "Which GPU assumption is most uncertain?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Kubernetes: scheduling GPUs",
        "url": "https://kubernetes.io/docs/tasks/manage-gpus/scheduling-gpus/"
      },
      {
        "title": "KServe docs",
        "url": "https://kserve.github.io/website/"
      }
    ]
  },
  "45": {
    "learnTask": "Study only: query rewriting/decomposition, multi-stage retrieval, and rerankers.",
    "practice": "Compare query rewriting, decomposition and reranking on a fixed evaluation set.",
    "build": "A controlled retrieval ablation study",
    "validate": "Ablation compares at least 3 strategies on 30 labeled queries.",
    "reflect": "What did the ablation disprove?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Sentence-Transformers",
        "url": "https://www.sbert.net/"
      },
      {
        "title": "AI Engineering (Chip Huyen) — applied spine",
        "url": "https://www.oreilly.com/library/view/ai-engineering/9781098166298/"
      }
    ]
  },
  "46": {
    "learnTask": "Study only: adversarial testing, multi-step benchmarks, and tool-abuse scenarios.",
    "practice": "Write adversarial tool-call scenarios; score boundary violations and unsupported claims.",
    "build": "A safety and reliability benchmark suite",
    "validate": "Adversarial suite has 20 cases; boundary violations and mitigations reported.",
    "reflect": "Which adversarial case should become a permanent regression test?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "OWASP GenAI security",
        "url": "https://genai.owasp.org/"
      },
      {
        "title": "Simon Willison on prompt injection",
        "url": "https://simonwillison.net/tags/prompt-injection/"
      }
    ]
  },
  "47": {
    "learnTask": "Study only: queues, backpressure, consistency, and failure domains for an inference gateway.",
    "practice": "Model queue depth, backpressure and retries; simulate downstream saturation.",
    "build": "A scalable inference gateway design",
    "validate": "Load simulation shows bounded queues and a recovery path after saturation.",
    "reflect": "Where does backpressure belong in your architecture?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Google SRE Book",
        "url": "https://sre.google/sre-book/table-of-contents/"
      },
      {
        "title": "vLLM docs",
        "url": "https://docs.vllm.ai/"
      }
    ]
  },
  "48": {
    "learnTask": "No course. Find a small bug in an AI tool you use; reproduce it; add a failing test; propose a minimal patch.",
    "practice": "Reproduce a small open-source bug; add a failing test and a minimal patch.",
    "build": "A focused PR to an AI tooling project",
    "validate": "The PR or issue references a reproducible bug, a test and a minimal change.",
    "reflect": "What feedback did the maintainer give?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Good First Issue",
        "url": "https://goodfirstissue.dev/"
      },
      {
        "title": "How to contribute",
        "url": "https://opensource.guide/how-to-contribute/"
      }
    ]
  },
  "49": {
    "learnTask": "No course. Address maintainer feedback, or publish a tested, documented utility of your own.",
    "practice": "Address review feedback or publish a reusable utility with examples.",
    "build": "A merged change or a published package",
    "validate": "A peer-reviewed change or a standalone package with tests and user docs.",
    "reflect": "What would make your utility easier to adopt?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "How to contribute",
        "url": "https://opensource.guide/how-to-contribute/"
      },
      {
        "title": "Good First Issue",
        "url": "https://goodfirstissue.dev/"
      }
    ]
  },
  "50": {
    "learnTask": "Study only: reading a paper critically and reproducing one small result.",
    "practice": "Reproduce one published experiment on a small dataset; document deviations.",
    "build": "A reproducibility report",
    "validate": "Report covers setup, seed, metric variance and deviations from the paper.",
    "reflect": "Which paper claim was hardest to reproduce?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Papers with Code",
        "url": "https://paperswithcode.com/"
      },
      {
        "title": "Hugging Face Papers",
        "url": "https://huggingface.co/papers"
      }
    ]
  },
  "51": {
    "learnTask": "No course. Write a case study with diagrams, methods, metrics and negative results.",
    "practice": "Write a case study with diagrams, methods, metrics and negative results.",
    "build": "A public engineering case study",
    "validate": "Includes source, reproducible commands and at least 2 limitations.",
    "reflect": "What negative result deserves more attention?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "GitHub",
        "url": "https://github.com/"
      },
      {
        "title": "Hugging Face Papers",
        "url": "https://huggingface.co/papers"
      }
    ]
  },
  "52": {
    "learnTask": "No course. Run a peer review and timed demo; set your next six months of growth.",
    "practice": "Run a peer review and timed demo; identify the next six months of technical growth.",
    "build": "A specialization demo and a next-6-month plan",
    "validate": "Final review includes a live demo, measurable results and a prioritized plan.",
    "reflect": "Which specialty will you deepen next, and why?",
    "time": {
      "learn": 3,
      "practice": 3,
      "build": 4,
      "validate": 2,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "GitHub",
        "url": "https://github.com/"
      },
      {
        "title": "Hugging Face Papers",
        "url": "https://huggingface.co/papers"
      }
    ]
  }
};
