/* Detailed week tasks; no change to saved progress schema. */
window.WEEK_DETAILS = {
  "1": {
    "learnTask": "Study only the sections needed for: Functions, collections, loops, file I/O, JSON, error handling. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Implement functions to filter cloud resources by region; count resource types; parse malformed JSON safely.",
    "build": "Write a cloud-inventory parser from scratch",
    "validate": "At least 6 pytest cases; malformed JSON exits cleanly; outputs match hand-calculated totals.",
    "reflect": "Which Python operation did you need to look up, and can you now explain it?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://cs50.harvard.edu/python/"
      },
      {
        "title": "Python language reference",
        "url": "https://docs.python.org/3/tutorial/"
      }
    ]
  },
  "2": {
    "learnTask": "Study only the sections needed for: Modules, environments, type hints, dataclasses, logging, CLI design. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Refactor the inventory script into modules; add typed models, logging, CLI flags and configuration defaults.",
    "build": "Package and test a cloud inventory CLI",
    "validate": "Fresh install succeeds; mypy or equivalent type checks run; CLI help and 8 tests pass.",
    "reflect": "What became easier after splitting code into modules?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://docs.python.org/3/tutorial/"
      },
      {
        "title": "Python language reference",
        "url": "https://docs.python.org/3/tutorial/"
      }
    ]
  },
  "3": {
    "learnTask": "Study only the sections needed for: HTTP methods, status codes, httpx, pytest, mocking, retries. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Call a paginated public API; simulate 429/500 responses; test exponential backoff with mocked requests.",
    "build": "Build a resilient API client with tests",
    "validate": "Tests cover success, pagination, 429, 500 and timeout; no real API needed in CI.",
    "reflect": "Which HTTP failure surprised you, and how did your tests expose it?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://docs.pytest.org/"
      },
      {
        "title": "Python language reference",
        "url": "https://docs.python.org/3/tutorial/"
      }
    ]
  },
  "4": {
    "learnTask": "Study only the sections needed for: Pydantic, routes, dependency injection, validation, error responses. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Implement create/read/update/delete routes and validation; test invalid payloads and missing IDs.",
    "build": "Build incident CRUD endpoints",
    "validate": "CRUD API returns expected HTTP codes; at least 10 automated endpoint tests pass.",
    "reflect": "Which endpoint contract would you redesign for a real user?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://fastapi.tiangolo.com/tutorial/"
      },
      {
        "title": "Python language reference",
        "url": "https://docs.python.org/3/tutorial/"
      }
    ]
  },
  "5": {
    "learnTask": "Study only the sections needed for: SQL joins, PostgreSQL, schema design, SQLAlchemy, migrations. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Write joins and aggregations; design incident/event tables; add a migration and query index.",
    "build": "Persist incidents and timeline events",
    "validate": "Migrations run from empty DB; referential integrity holds; 5 SQL assertions pass.",
    "reflect": "What SQL/schema choice would break at ten times the data?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://www.postgresql.org/docs/current/tutorial.html"
      },
      {
        "title": "Python language reference",
        "url": "https://docs.python.org/3/tutorial/"
      }
    ]
  },
  "6": {
    "learnTask": "Study only the sections needed for: Docker Compose, secrets, auth concepts, integration tests, GitHub Actions. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Add API integration tests, a health endpoint and CI lint/test steps; exercise a fresh local setup.",
    "build": "Publish Incident API v1 with CI and architecture notes",
    "validate": "Clean Docker Compose startup; CI green; README reproduces API and database tests.",
    "reflect": "What was hardest to reproduce on a fresh environment?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://docs.docker.com/compose/"
      },
      {
        "title": "Python language reference",
        "url": "https://docs.python.org/3/tutorial/"
      }
    ]
  },
  "7": {
    "learnTask": "Study only the sections needed for: Tokens, context, structured output, validation, timeouts, retry budgets. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Compare two prompts on ten synthetic incidents; validate structured JSON and retry only transient errors.",
    "build": "Add incident summarization with mocked tests",
    "validate": "All 10 cases produce schema-valid outputs; report cost and failure handling.",
    "reflect": "Which prompt failure was actually an API or validation problem?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://platform.openai.com/docs/overview"
      },
      {
        "title": "FastAPI and HTTP reference",
        "url": "https://fastapi.tiangolo.com/tutorial/"
      }
    ]
  },
  "8": {
    "learnTask": "Study only the sections needed for: Vector similarity, chunking, document metadata, ingestion. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Chunk runbooks using two strategies; inspect metadata; compare nearest neighbours for five queries.",
    "build": "Index a small set of real or synthetic runbooks",
    "validate": "Ingest 10+ documents; show chunk counts and five relevant/irrelevant search examples.",
    "reflect": "Where did chunk boundaries lose important context?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://huggingface.co/learn/llm-course/"
      },
      {
        "title": "FastAPI and HTTP reference",
        "url": "https://fastapi.tiangolo.com/tutorial/"
      }
    ]
  },
  "9": {
    "learnTask": "Study only the sections needed for: Retrieval, prompt assembly, grounding, source attribution. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Write retrieval and answer-generation functions separately; test missing sources and empty results.",
    "build": "Build a citation-aware runbook Q&A API",
    "validate": "Answer cites only retrieved sources; 10 question smoke test includes 2 unanswerable cases.",
    "reflect": "When did retrieval fail versus generation fail?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://docs.llamaindex.ai/"
      },
      {
        "title": "FastAPI and HTTP reference",
        "url": "https://fastapi.tiangolo.com/tutorial/"
      }
    ]
  },
  "10": {
    "learnTask": "Study only the sections needed for: BM25, hybrid retrieval, filters, reranking, chunk experiments. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Implement BM25 and dense retrieval; compare top-five results and rerank a sample query set.",
    "build": "Compare three retrieval strategies",
    "validate": "Report recall@5 for three strategies on 15+ labeled queries and explain winners.",
    "reflect": "Which retrieval improvement helped and which was unnecessary?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://www.sbert.net/"
      },
      {
        "title": "FastAPI and HTTP reference",
        "url": "https://fastapi.tiangolo.com/tutorial/"
      }
    ]
  },
  "11": {
    "learnTask": "Study only the sections needed for: Golden datasets, recall@k, groundedness, latency, cost. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Author forty answerable/unanswerable questions; label relevant chunks and score recall@5.",
    "build": "Create 40 test questions and baseline report",
    "validate": "Forty-question dataset checked into repo; baseline recall and answer correctness reported.",
    "reflect": "What did the evaluation dataset miss?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://docs.ragas.io/"
      },
      {
        "title": "FastAPI and HTTP reference",
        "url": "https://fastapi.tiangolo.com/tutorial/"
      }
    ]
  },
  "12": {
    "learnTask": "Study only the sections needed for: Failure taxonomy, prompt injection basics, access boundaries. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Test malicious runbook instructions and unauthorized documents; add refusal and source checks.",
    "build": "Ship RAG v1 with evaluations and README",
    "validate": "No unauthorized sources returned in 10 security cases; publish failure taxonomy.",
    "reflect": "Which trust boundary was easiest to overlook?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
      },
      {
        "title": "FastAPI and HTTP reference",
        "url": "https://fastapi.tiangolo.com/tutorial/"
      }
    ]
  },
  "13": {
    "learnTask": "Study only the sections needed for: Schemas, tool validation, bounded execution, idempotency. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Define tool schemas for event lookup and log search; reject unknown parameters and excessive requests.",
    "build": "Create read-only diagnostic tools over fixture data",
    "validate": "Invalid tool args rejected; read-only tests pass; tool-call count capped.",
    "reflect": "Which tool should never be writable and why?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://platform.openai.com/docs/guides/function-calling"
      },
      {
        "title": "RAG and embeddings reference",
        "url": "https://docs.llamaindex.ai/"
      }
    ]
  },
  "14": {
    "learnTask": "Study only the sections needed for: State machines, deterministic orchestration, LangGraph basics. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Create a graph with investigate, verify and escalate branches; simulate timeout and tool failure.",
    "build": "Build a multi-step investigation graph",
    "validate": "Graph tests cover happy path, timeout, missing evidence and escalation.",
    "reflect": "Which workflow step should remain deterministic?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://docs.langchain.com/oss/python/langgraph/overview"
      },
      {
        "title": "RAG and embeddings reference",
        "url": "https://docs.llamaindex.ai/"
      }
    ]
  },
  "15": {
    "learnTask": "Study only the sections needed for: Read-only Kubernetes API, events, logs, least privilege. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Use Kubernetes fixtures; parse pod conditions, events and log excerpts without cluster write permissions.",
    "build": "Collect simulated cluster diagnostics safely",
    "validate": "Fixtures reproduce at least 5 incident classes; service account has no write verbs.",
    "reflect": "What evidence was ambiguous and how did you handle uncertainty?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://kubernetes.io/docs/reference/using-api/"
      },
      {
        "title": "RAG and embeddings reference",
        "url": "https://docs.llamaindex.ai/"
      }
    ]
  },
  "16": {
    "learnTask": "Study only the sections needed for: MCP tools, protocol boundaries, validation, authorization. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Implement a local MCP server with one read-only tool; validate arguments and permission boundaries.",
    "build": "Expose one read-only diagnostic tool via MCP",
    "validate": "MCP tool returns validated data; unknown tool and bad input rejected in tests.",
    "reflect": "What does MCP simplify, and what security burden remains?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://modelcontextprotocol.io/introduction"
      },
      {
        "title": "RAG and embeddings reference",
        "url": "https://docs.llamaindex.ai/"
      }
    ]
  },
  "17": {
    "learnTask": "Study only the sections needed for: Timeouts, retries, loop limits, traceability, human approval. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Add tool-call caps, cancellation, retries and a human-approval checkpoint; inspect traces.",
    "build": "Add budget limits and explicit escalation paths",
    "validate": "Loop terminates under budget; failure path and approval gate covered by tests.",
    "reflect": "When should the agent stop and ask a human?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://docs.langchain.com/langsmith/observability"
      },
      {
        "title": "RAG and embeddings reference",
        "url": "https://docs.llamaindex.ai/"
      }
    ]
  },
  "18": {
    "learnTask": "Study only the sections needed for: Scenario-based evaluation, security, evidence-backed explanations. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Label twenty incident scenarios; compare agent findings to evidence and track false claims.",
    "build": "Ship investigator v1 with 20 scenario results",
    "validate": "20-case evaluation report includes evidence correctness, latency and unsafe-action count.",
    "reflect": "Which failures were unsupported guesses rather than tool errors?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
      },
      {
        "title": "RAG and embeddings reference",
        "url": "https://docs.llamaindex.ai/"
      }
    ]
  },
  "19": {
    "learnTask": "Study only the sections needed for: Compare managed inference offerings, IAM, networking, budgets. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Compare Bedrock, Azure AI and Vertex AI on auth, region, price and API compatibility.",
    "build": "Deploy LLM integration on one chosen cloud",
    "validate": "One provider integrated; IAM scoped; monthly cost estimate and fallback documented.",
    "reflect": "What would change if the cloud vendor changed?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://docs.aws.amazon.com/bedrock/"
      },
      {
        "title": "LangGraph and agents reference",
        "url": "https://docs.langchain.com/oss/python/langgraph/overview"
      }
    ]
  },
  "20": {
    "learnTask": "Study only the sections needed for: Container security, health probes, config, resource sizing. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Write Dockerfile and health checks; run the service with CPU/memory limits and failure probes.",
    "build": "Containerize and deploy the RAG API",
    "validate": "Image builds cleanly; health check works; limits and startup behavior documented.",
    "reflect": "Which container issue would only appear in production?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://kubernetes.io/docs/concepts/workloads/"
      },
      {
        "title": "LangGraph and agents reference",
        "url": "https://docs.langchain.com/oss/python/langgraph/overview"
      }
    ]
  },
  "21": {
    "learnTask": "Study only the sections needed for: Terraform modules, environment separation, secrets. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Define staging variables and minimal Terraform resources; inspect plans for unexpected changes.",
    "build": "Provision a minimal staging environment",
    "validate": "Terraform validate succeeds; plan reviewed; secrets absent from committed files.",
    "reflect": "Which IaC choice could cause accidental spend?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://developer.hashicorp.com/terraform/tutorials"
      },
      {
        "title": "LangGraph and agents reference",
        "url": "https://docs.langchain.com/oss/python/langgraph/overview"
      }
    ]
  },
  "22": {
    "learnTask": "Study only the sections needed for: Build/test/deploy workflows, migrations, rollback plans. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Build a release workflow with unit tests, smoke tests and a documented rollback rehearsal.",
    "build": "Automate staging deployment and smoke tests",
    "validate": "CI runs tests; staged release and rollback rehearsal documented with timestamps.",
    "reflect": "What would make your rollback unsafe?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://docs.github.com/en/actions"
      },
      {
        "title": "LangGraph and agents reference",
        "url": "https://docs.langchain.com/oss/python/langgraph/overview"
      }
    ]
  },
  "23": {
    "learnTask": "Study only the sections needed for: OpenTelemetry traces, metrics, logs, token/cost dashboards. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Instrument request spans, model latency and token use; calculate p50/p95 and cost per request.",
    "build": "Measure p50/p95 latency and per-request cost",
    "validate": "Traces cover model and retrieval spans; p50/p95 and cost measured over 30 requests.",
    "reflect": "Which metric helped you find a slow step?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://opentelemetry.io/docs/"
      },
      {
        "title": "LangGraph and agents reference",
        "url": "https://docs.langchain.com/oss/python/langgraph/overview"
      }
    ]
  },
  "24": {
    "learnTask": "Study only the sections needed for: Reliability testing, deployment playbooks, runbooks. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Define an SLO; simulate a failed rollout; document diagnosis, recovery and remaining risks.",
    "build": "Publish deployment diagrams and SLO report",
    "validate": "Runbook enables recovery from a simulated failure; SLO and error budget documented.",
    "reflect": "What is the biggest reliability risk you have not tested?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://sre.google/sre-book/table-of-contents/"
      },
      {
        "title": "LangGraph and agents reference",
        "url": "https://docs.langchain.com/oss/python/langgraph/overview"
      }
    ]
  },
  "25": {
    "learnTask": "Study only the sections needed for: Versioned datasets, reproducible evals, regression thresholds. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Create a versioned evaluation dataset; introduce a bad prompt and confirm the CI gate fails.",
    "build": "Create automated RAG regression checks",
    "validate": "Good prompt passes and degraded prompt fails CI using the same frozen dataset.",
    "reflect": "What regression did your evaluation catch?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://docs.langchain.com/langsmith/evaluation"
      },
      {
        "title": "Cloud-native deployment reference",
        "url": "https://kubernetes.io/docs/home/"
      }
    ]
  },
  "26": {
    "learnTask": "Study only the sections needed for: Model routing, versioning, experiments, rollbacks. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Compare model/prompt versions using fixed fixtures; record reproducible release metadata.",
    "build": "Build versioned configuration and release records",
    "validate": "All releases reproducible from versioned config; comparison report saved.",
    "reflect": "How would you explain a model rollback to stakeholders?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://mlflow.org/docs/latest/"
      },
      {
        "title": "Cloud-native deployment reference",
        "url": "https://kubernetes.io/docs/home/"
      }
    ]
  },
  "27": {
    "learnTask": "Study only the sections needed for: Prompt injection, data leakage, RBAC, secret scanning. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Write a threat model; test prompt injection, secret leakage and unauthorized data access.",
    "build": "Threat-model and test the complete system",
    "validate": "At least 12 security tests pass; threat model includes mitigations and residual risks.",
    "reflect": "Which security control has the weakest evidence?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://genai.owasp.org/"
      },
      {
        "title": "Cloud-native deployment reference",
        "url": "https://kubernetes.io/docs/home/"
      }
    ]
  },
  "28": {
    "learnTask": "Study only the sections needed for: Load testing, timeouts, rate limits, circuit breakers. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Inject timeouts and rate limits; measure graceful degradation and load-test results.",
    "build": "Run fault injection and load tests",
    "validate": "Load-test report has p95, error rate and graceful-degradation evidence.",
    "reflect": "Which dependency failed first under load?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://locust.io/"
      },
      {
        "title": "Cloud-native deployment reference",
        "url": "https://kubernetes.io/docs/home/"
      }
    ]
  },
  "29": {
    "learnTask": "Study only the sections needed for: SLOs, error budgets, runbooks, cost alerts, on-call handoff. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Create dashboards, alerts and an incident runbook; rehearse an on-call handover.",
    "build": "Create service dashboards and response playbooks",
    "validate": "Dashboard and alerts work with synthetic incidents; runbook has owner and thresholds.",
    "reflect": "Would another on-call engineer understand your runbook?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://sre.google/workbook/table-of-contents/"
      },
      {
        "title": "Cloud-native deployment reference",
        "url": "https://kubernetes.io/docs/home/"
      }
    ]
  },
  "30": {
    "learnTask": "Study only the sections needed for: Evaluation gates, incident drill, recovery, postmortem. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Replay a regression and incident drill; verify automated rollback and write a postmortem.",
    "build": "Release quality pipeline with evidence report",
    "validate": "Regression blocked; incident drill evidence and blameless postmortem published.",
    "reflect": "Which incident prevention measure is worth implementing first?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://docs.github.com/en/actions"
      },
      {
        "title": "Cloud-native deployment reference",
        "url": "https://kubernetes.io/docs/home/"
      }
    ]
  },
  "31": {
    "learnTask": "Study only the sections needed for: Multi-tenancy, queues, caching, consistency, data retention. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Compare queue vs synchronous API, tenant isolation and cache invalidation in three ADRs.",
    "build": "Write an architecture decision record",
    "validate": "Three ADRs include alternatives, risks, and an explicit decision rationale.",
    "reflect": "Which architectural trade-off was most difficult?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://github.com/joelparkerhenderson/architecture-decision-record"
      },
      {
        "title": "Evaluation and operations reference",
        "url": "https://docs.langchain.com/langsmith/evaluation"
      }
    ]
  },
  "32": {
    "learnTask": "Study only the sections needed for: Batching, caching, context optimization, model selection. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Benchmark two models and caching strategies on a fixed quality set; chart cost/latency tradeoffs.",
    "build": "Compare accuracy, latency and cost of two models",
    "validate": "Benchmark includes quality, p95 latency and estimated cost; dataset fixed.",
    "reflect": "When is the cheaper model actually worse value?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://huggingface.co/docs/transformers/"
      },
      {
        "title": "Evaluation and operations reference",
        "url": "https://docs.langchain.com/langsmith/evaluation"
      }
    ]
  },
  "33": {
    "learnTask": "Study only the sections needed for: Integrate backend, RAG, agent, platform and evaluation. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Integrate backend, retrieval, agent and evaluation with documented interfaces and end-to-end tests.",
    "build": "Build a unified incident intelligence service",
    "validate": "Clean-room integration test runs; no manual DB edits required; interfaces documented.",
    "reflect": "Which integration boundary caused the most bugs?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://12factor.net/"
      },
      {
        "title": "Evaluation and operations reference",
        "url": "https://docs.langchain.com/langsmith/evaluation"
      }
    ]
  },
  "34": {
    "learnTask": "Study only the sections needed for: Demo video, READMEs, diagrams, case studies. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Create architecture diagrams and a demo script; get a peer to follow setup instructions.",
    "build": "Publish four clear project case studies",
    "validate": "Another person can follow README; demo and diagrams explain limitations.",
    "reflect": "What part of the setup confused your reviewer?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://docs.github.com/en/repositories"
      },
      {
        "title": "Evaluation and operations reference",
        "url": "https://docs.langchain.com/langsmith/evaluation"
      }
    ]
  },
  "35": {
    "learnTask": "Study only the sections needed for: Python, SQL, API design, RAG and AI system design. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Solve Python/SQL tasks under time limits; explain an RAG design and its failure cases aloud.",
    "build": "Complete timed coding and architecture mocks",
    "validate": "Two timed coding sessions and two architecture mocks scored against a rubric.",
    "reflect": "Which interview answer lacked concrete evidence?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://www.pramp.com/"
      },
      {
        "title": "Evaluation and operations reference",
        "url": "https://docs.langchain.com/langsmith/evaluation"
      }
    ]
  },
  "36": {
    "learnTask": "Study only the sections needed for: Independent build challenge and review of weak areas. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Run a clean-room deployment and demo; review a skills-gap checklist against job descriptions.",
    "build": "Deliver a capstone demo and targeted UK/EU CV",
    "validate": "Fresh deployment works; portfolio contains four case studies and a targeted CV.",
    "reflect": "What gap most affects your readiness for the target roles?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://github.com/"
      },
      {
        "title": "Evaluation and operations reference",
        "url": "https://docs.langchain.com/langsmith/evaluation"
      }
    ]
  },
  "37": {
    "learnTask": "Study only the sections needed for: Attention, tokenization, training objective, architecture. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Implement scaled dot-product attention with a shape test and a numerical sanity check.",
    "build": "Implement and explain a minimal attention module",
    "validate": "Attention tensor shapes and softmax properties validated with automated tests.",
    "reflect": "What did implementing attention reveal that API use hides?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://github.com/karpathy/nanoGPT"
      },
      {
        "title": "Model and inference reference",
        "url": "https://huggingface.co/docs/transformers/"
      }
    ]
  },
  "38": {
    "learnTask": "Study only the sections needed for: Autograd, tensors, datasets, optimization. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Train a tiny classifier; plot loss; check gradients and overfitting on a small dataset.",
    "build": "Train a small neural network and debug gradients",
    "validate": "Baseline beats chance on holdout; learning curve and seed documented.",
    "reflect": "What caused your training instability?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://pytorch.org/tutorials/"
      },
      {
        "title": "Model and inference reference",
        "url": "https://huggingface.co/docs/transformers/"
      }
    ]
  },
  "39": {
    "learnTask": "Study only the sections needed for: SFT, PEFT, LoRA, dataset quality. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Prepare synthetic training examples; run LoRA on a small model within a fixed budget.",
    "build": "Fine-tune a small open model on safe synthetic data",
    "validate": "Fine-tune completes within budget; config, data provenance and checkpoint recorded.",
    "reflect": "When is fine-tuning worse than retrieval or prompting?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://huggingface.co/docs/peft/"
      },
      {
        "title": "Model and inference reference",
        "url": "https://huggingface.co/docs/transformers/"
      }
    ]
  },
  "40": {
    "learnTask": "Study only the sections needed for: Data leakage, holdouts, quality and cost comparison. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Split datasets by source; check leakage; compare SFT to prompting on held-out examples.",
    "build": "Compare fine-tuned and prompted baselines",
    "validate": "No leakage across splits; held-out comparison includes confidence limits.",
    "reflect": "How confident are you that gains generalize?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://huggingface.co/docs/evaluate/"
      },
      {
        "title": "Model and inference reference",
        "url": "https://huggingface.co/docs/transformers/"
      }
    ]
  },
  "41": {
    "learnTask": "Study only the sections needed for: vLLM, KV cache, throughput and latency. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Serve a small model; measure first-token latency and requests per second.",
    "build": "Serve a small open model and benchmark it",
    "validate": "Latency and throughput measured across 3 concurrency levels with hardware noted.",
    "reflect": "Which serving bottleneck dominates your workload?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://docs.vllm.ai/"
      },
      {
        "title": "Model and inference reference",
        "url": "https://huggingface.co/docs/transformers/"
      }
    ]
  },
  "42": {
    "learnTask": "Study only the sections needed for: Batching, quantization, memory, concurrency. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Compare batch sizes and quantization; log memory, quality, throughput and tail latency.",
    "build": "Produce a latency/throughput benchmark",
    "validate": "Benchmark table records throughput, p95, memory and quality impact.",
    "reflect": "Which optimization sacrificed too much quality?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://docs.vllm.ai/"
      },
      {
        "title": "Model and inference reference",
        "url": "https://huggingface.co/docs/transformers/"
      }
    ]
  },
  "43": {
    "learnTask": "Study only the sections needed for: KServe concepts, autoscaling, health and rollouts. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Deploy a sandbox serving endpoint; test probes, autoscaling assumptions and rollout.",
    "build": "Deploy a model serving workload in a sandbox",
    "validate": "Sandbox endpoint deploys; probe failure and rollout behavior demonstrated.",
    "reflect": "What would change for a production model rollout?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://kserve.github.io/website/"
      },
      {
        "title": "Model and inference reference",
        "url": "https://huggingface.co/docs/transformers/"
      }
    ]
  },
  "44": {
    "learnTask": "Study only the sections needed for: GPU scheduling, device plugins, cost and capacity. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Draft GPU capacity and scheduling plan; calculate hourly and per-million-token cost.",
    "build": "Document GPU serving architecture and cost",
    "validate": "Capacity worksheet includes utilization assumptions and failure scenarios.",
    "reflect": "Which GPU assumption is most uncertain?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://kubernetes.io/docs/tasks/manage-gpus/scheduling-gpus/"
      },
      {
        "title": "Model and inference reference",
        "url": "https://huggingface.co/docs/transformers/"
      }
    ]
  },
  "45": {
    "learnTask": "Study only the sections needed for: Query decomposition, multi-stage retrieval, rerankers. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Compare query rewriting, decomposition and reranking on a fixed evaluation set.",
    "build": "Run a controlled retrieval ablation study",
    "validate": "Ablation report compares at least 3 strategies on 30 labeled queries.",
    "reflect": "What did the ablation disprove?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://www.sbert.net/"
      },
      {
        "title": "Model and inference reference",
        "url": "https://huggingface.co/docs/transformers/"
      }
    ]
  },
  "46": {
    "learnTask": "Study only the sections needed for: Adversarial tests, multi-step benchmarks, tool abuse. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Write adversarial tool-call scenarios; score boundary violations and unsupported claims.",
    "build": "Create a safety and reliability benchmark suite",
    "validate": "Adversarial suite includes 20 cases; boundary violations and mitigations reported.",
    "reflect": "Which adversarial case should become a regression test?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://genai.owasp.org/"
      },
      {
        "title": "Model and inference reference",
        "url": "https://huggingface.co/docs/transformers/"
      }
    ]
  },
  "47": {
    "learnTask": "Study only the sections needed for: Queues, backpressure, consistency, failure domains. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Model queue depth, backpressure and retries; simulate downstream saturation.",
    "build": "Design a scalable inference gateway",
    "validate": "Load simulation shows bounded queues and a recovery path after saturation.",
    "reflect": "Where does backpressure belong in your architecture?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://sre.google/sre-book/table-of-contents/"
      },
      {
        "title": "Model and inference reference",
        "url": "https://huggingface.co/docs/transformers/"
      }
    ]
  },
  "48": {
    "learnTask": "Study only the sections needed for: Find an issue, reproduce it, add tests. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Reproduce a small open-source bug; add a failing test and propose a minimal patch.",
    "build": "Submit a focused PR to an AI tooling project",
    "validate": "PR or issue references a reproducible bug, test and minimal proposed change.",
    "reflect": "What feedback did the maintainer provide?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://goodfirstissue.dev/"
      },
      {
        "title": "Model and inference reference",
        "url": "https://huggingface.co/docs/transformers/"
      }
    ]
  },
  "49": {
    "learnTask": "Study only the sections needed for: Code review, documentation, maintainer communication. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Address maintainer feedback or publish a tested reusable utility with examples.",
    "build": "Respond to review or publish a standalone package",
    "validate": "Peer-reviewed change or standalone package has tests and user documentation.",
    "reflect": "What would make your utility easier to adopt?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://opensource.guide/how-to-contribute/"
      },
      {
        "title": "Model and inference reference",
        "url": "https://huggingface.co/docs/transformers/"
      }
    ]
  },
  "50": {
    "learnTask": "Study only the sections needed for: Read papers, question benchmarks, reproduce findings. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Reproduce one published experiment on a small dataset; document deviations.",
    "build": "Write a reproducibility report",
    "validate": "Reproduction reports setup, seed, metric variance and deviations from paper.",
    "reflect": "Which paper claim was hardest to reproduce?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://paperswithcode.com/"
      },
      {
        "title": "Model and inference reference",
        "url": "https://huggingface.co/docs/transformers/"
      }
    ]
  },
  "51": {
    "learnTask": "Study only the sections needed for: Technical writing, measurements, architecture decisions. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Write a case study with diagrams, methods, metrics and negative results.",
    "build": "Publish a detailed public engineering case study",
    "validate": "Case study includes source, reproducible commands and at least 2 limitations.",
    "reflect": "What negative result deserves more attention?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://github.com/"
      },
      {
        "title": "Model and inference reference",
        "url": "https://huggingface.co/docs/transformers/"
      }
    ]
  },
  "52": {
    "learnTask": "Study only the sections needed for: Peer feedback, mock interviews, future learning plan. Take short notes and reproduce one example from memory; do not attempt to finish an entire course.",
    "practice": "Run a peer review and timed demo; identify next six months of technical growth.",
    "build": "Publish specialization demo and next 6-month plan",
    "validate": "Final review includes live demo, measurable results and prioritized growth plan.",
    "reflect": "Which specialty will you deepen next and why?",
    "time": {
      "learn": 4,
      "practice": 4,
      "build": 6,
      "validate": 3,
      "reflect": 1
    },
    "completion": "Complete the independent build, meet the validation evidence, document one failure/fix, and attach a repository or report link.",
    "resources": [
      {
        "title": "Primary reference / targeted sections",
        "url": "https://github.com/"
      },
      {
        "title": "Model and inference reference",
        "url": "https://huggingface.co/docs/transformers/"
      }
    ]
  }
};
