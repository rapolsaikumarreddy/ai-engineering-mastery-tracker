window.ROADMAP = {
  title: 'AI Engineering Mastery', weeklyHours: 17,
  roles: ['Applied AI Engineer','AI Platform Engineer','LLMOps Engineer'],
  phases: [
    {name:'Software Engineering Foundations',range:[1,6],role:'Applied AI',project:'Incident API',gate:'Ship a tested FastAPI + PostgreSQL incident service with CI, authentication basics and reproducible Docker setup.',topics:[
      ['Python without tutorials','Functions, collections, loops, file I/O, JSON, error handling','Write a cloud-inventory parser from scratch','https://cs50.harvard.edu/python/'],
      ['Professional Python','Modules, environments, type hints, dataclasses, logging, CLI design','Package and test a cloud inventory CLI','https://docs.python.org/3/tutorial/'],
      ['HTTP and automated tests','HTTP methods, status codes, httpx, pytest, mocking, retries','Build a resilient API client with tests','https://docs.pytest.org/'],
      ['FastAPI fundamentals','Pydantic, routes, dependency injection, validation, error responses','Build incident CRUD endpoints','https://fastapi.tiangolo.com/tutorial/'],
      ['SQL and persistence','SQL joins, PostgreSQL, schema design, SQLAlchemy, migrations','Persist incidents and timeline events','https://www.postgresql.org/docs/current/tutorial.html'],
      ['Backend quality gate','Docker Compose, secrets, auth concepts, integration tests, GitHub Actions','Publish Incident API v1 with CI and architecture notes','https://docs.docker.com/compose/']
    ]},
    {name:'Applied AI and RAG',range:[7,12],role:'Applied AI',project:'Enterprise Runbook RAG',gate:'Demonstrate grounded answers with source citations, a 40-question evaluation set, documented failure analysis and an improvement over baseline.',topics:[
      ['LLM API engineering','Tokens, context, structured output, validation, timeouts, retry budgets','Add incident summarization with mocked tests','https://platform.openai.com/docs/overview'],
      ['Embeddings and retrieval','Vector similarity, chunking, document metadata, ingestion','Index a small set of real or synthetic runbooks','https://huggingface.co/learn/llm-course/'],
      ['RAG end to end','Retrieval, prompt assembly, grounding, source attribution','Build a citation-aware runbook Q&A API','https://docs.llamaindex.ai/'],
      ['Search quality','BM25, hybrid retrieval, filters, reranking, chunk experiments','Compare three retrieval strategies','https://www.sbert.net/'],
      ['Evaluation fundamentals','Golden datasets, recall@k, groundedness, latency, cost','Create 40 test questions and baseline report','https://docs.ragas.io/'],
      ['RAG quality gate','Failure taxonomy, prompt injection basics, access boundaries','Ship RAG v1 with evaluations and README','https://owasp.org/www-project-top-10-for-large-language-model-applications/']
    ]},
    {name:'Agents and Reliable Workflows',range:[13,18],role:'Applied AI',project:'Read-only Incident Investigator',gate:'Run 20 realistic incident scenarios; report correct evidence gathering, failure modes, tool permission tests and human approval boundaries.',topics:[
      ['Tool calling','Schemas, tool validation, bounded execution, idempotency','Create read-only diagnostic tools over fixture data','https://platform.openai.com/docs/guides/function-calling'],
      ['Stateful workflows','State machines, deterministic orchestration, LangGraph basics','Build a multi-step investigation graph','https://docs.langchain.com/oss/python/langgraph/overview'],
      ['Kubernetes evidence collection','Read-only Kubernetes API, events, logs, least privilege','Collect simulated cluster diagnostics safely','https://kubernetes.io/docs/reference/using-api/'],
      ['MCP fundamentals','MCP tools, protocol boundaries, validation, authorization','Expose one read-only diagnostic tool via MCP','https://modelcontextprotocol.io/introduction'],
      ['Agent reliability','Timeouts, retries, loop limits, traceability, human approval','Add budget limits and explicit escalation paths','https://docs.langchain.com/langsmith/observability'],
      ['Agent quality gate','Scenario-based evaluation, security, evidence-backed explanations','Ship investigator v1 with 20 scenario results','https://owasp.org/www-project-top-10-for-large-language-model-applications/']
    ]},
    {name:'AI Platform and Deployment',range:[19,24],role:'AI Platform',project:'Deployable AI Services',gate:'Deploy a reproducible AI service with CI/CD, least privilege, tracing, rollback documentation and a measured latency/cost baseline.',topics:[
      ['Cloud AI services','Compare managed inference offerings, IAM, networking, budgets','Deploy LLM integration on one chosen cloud','https://docs.aws.amazon.com/bedrock/'],
      ['Containerized AI workloads','Container security, health probes, config, resource sizing','Containerize and deploy the RAG API','https://kubernetes.io/docs/concepts/workloads/'],
      ['Infrastructure as code','Terraform modules, environment separation, secrets','Provision a minimal staging environment','https://developer.hashicorp.com/terraform/tutorials'],
      ['CI/CD and release controls','Build/test/deploy workflows, migrations, rollback plans','Automate staging deployment and smoke tests','https://docs.github.com/en/actions'],
      ['Telemetry and cost','OpenTelemetry traces, metrics, logs, token/cost dashboards','Measure p50/p95 latency and per-request cost','https://opentelemetry.io/docs/'],
      ['Platform quality gate','Reliability testing, deployment playbooks, runbooks','Publish deployment diagrams and SLO report','https://sre.google/sre-book/table-of-contents/']
    ]},
    {name:'Production LLMOps and Security',range:[25,30],role:'LLMOps',project:'AI Quality and Release Platform',gate:'A deliberately degraded model/prompt must fail automated evaluation; demonstrate traceability, incident response and access controls.',topics:[
      ['Evaluation in CI','Versioned datasets, reproducible evals, regression thresholds','Create automated RAG regression checks','https://docs.langchain.com/langsmith/evaluation'],
      ['Prompt/model lifecycle','Model routing, versioning, experiments, rollbacks','Build versioned configuration and release records','https://mlflow.org/docs/latest/'],
      ['Security hardening','Prompt injection, data leakage, RBAC, secret scanning','Threat-model and test the complete system','https://genai.owasp.org/'],
      ['Resilience engineering','Load testing, timeouts, rate limits, circuit breakers','Run fault injection and load tests','https://locust.io/'],
      ['Operational excellence','SLOs, error budgets, runbooks, cost alerts, on-call handoff','Create service dashboards and response playbooks','https://sre.google/workbook/table-of-contents/'],
      ['LLMOps quality gate','Evaluation gates, incident drill, recovery, postmortem','Release quality pipeline with evidence report','https://docs.github.com/en/actions']
    ]},
    {name:'Advanced Applied AI and Hiring',range:[31,36],role:'Applied AI',project:'Integrated AI Engineering Capstone',gate:'Present a fully working system, architectural decision record, benchmarks, security review, live demo and two mock interviews.',topics:[
      ['Architecture and trade-offs','Multi-tenancy, queues, caching, consistency, data retention','Write an architecture decision record','https://github.com/joelparkerhenderson/architecture-decision-record'],
      ['Inference economics','Batching, caching, context optimization, model selection','Compare accuracy, latency and cost of two models','https://huggingface.co/docs/transformers/'],
      ['End-to-end capstone','Integrate backend, RAG, agent, platform and evaluation','Build a unified incident intelligence service','https://12factor.net/'],
      ['Portfolio and communication','Demo video, READMEs, diagrams, case studies','Publish four clear project case studies','https://docs.github.com/en/repositories'],
      ['Technical interviews','Python, SQL, API design, RAG and AI system design','Complete timed coding and architecture mocks','https://www.pramp.com/'],
      ['Core graduation gate','Independent build challenge and review of weak areas','Deliver a capstone demo and targeted UK/EU CV','https://github.com/']
    ]},
    {name:'Advanced Specialization (Optional)',range:[37,52],role:'Advanced',project:'Open-source AI Systems Specialization',gate:'Publish a reproducible deep-dive benchmark or open-source contribution with transparent methods and limitations.',topics:[
      ['Transformer internals','Attention, tokenization, training objective, architecture','Implement and explain a minimal attention module','https://github.com/karpathy/nanoGPT'],
      ['PyTorch foundations','Autograd, tensors, datasets, optimization','Train a small neural network and debug gradients','https://pytorch.org/tutorials/'],
      ['Fine-tuning basics','SFT, PEFT, LoRA, dataset quality','Fine-tune a small open model on safe synthetic data','https://huggingface.co/docs/peft/'],
      ['Fine-tuning evaluation','Data leakage, holdouts, quality and cost comparison','Compare fine-tuned and prompted baselines','https://huggingface.co/docs/evaluate/'],
      ['Model serving fundamentals','vLLM, KV cache, throughput and latency','Serve a small open model and benchmark it','https://docs.vllm.ai/'],
      ['Serving optimization','Batching, quantization, memory, concurrency','Produce a latency/throughput benchmark','https://docs.vllm.ai/'],
      ['Kubernetes model serving','KServe concepts, autoscaling, health and rollouts','Deploy a model serving workload in a sandbox','https://kserve.github.io/website/'],
      ['GPU infrastructure','GPU scheduling, device plugins, cost and capacity','Document GPU serving architecture and cost','https://kubernetes.io/docs/tasks/manage-gpus/scheduling-gpus/'],
      ['Advanced retrieval','Query decomposition, multi-stage retrieval, rerankers','Run a controlled retrieval ablation study','https://www.sbert.net/'],
      ['Advanced agent evaluation','Adversarial tests, multi-step benchmarks, tool abuse','Create a safety and reliability benchmark suite','https://genai.owasp.org/'],
      ['Distributed systems','Queues, backpressure, consistency, failure domains','Design a scalable inference gateway','https://sre.google/sre-book/table-of-contents/'],
      ['Open-source contribution I','Find an issue, reproduce it, add tests','Submit a focused PR to an AI tooling project','https://goodfirstissue.dev/'],
      ['Open-source contribution II','Code review, documentation, maintainer communication','Respond to review or publish a standalone package','https://opensource.guide/how-to-contribute/'],
      ['Research literacy','Read papers, question benchmarks, reproduce findings','Write a reproducibility report','https://paperswithcode.com/'],
      ['Expert case study','Technical writing, measurements, architecture decisions','Publish a detailed public engineering case study','https://github.com/'],
      ['Advanced graduation','Peer feedback, mock interviews, future learning plan','Publish specialization demo and next 6-month plan','https://github.com/']
    ]}
  ]
};
window.WEEKS = window.ROADMAP.phases.flatMap((phase,pi)=>phase.topics.map((t,i)=>({number:phase.range[0]+i,phase:pi,title:t[0],learn:t[1],deliverable:t[2],url:t[3],role:phase.role,project:phase.project,advanced:pi===6,gate:(i===phase.topics.length-1?phase.gate:null)})));
