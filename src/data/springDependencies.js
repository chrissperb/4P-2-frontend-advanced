export const SPRING_DEPENDENCIES = [
  {
    id: 'web',
    initializrId: 'web',
    name: 'Spring Web',
    category: 'web',
    group: 'org.springframework.boot',
    artifact: 'spring-boot-starter-web',
    description: {
      'en-US': 'Build web applications, RESTful APIs, and MVC with Apache Tomcat as default embedded container.',
      'pt-BR': 'Construa aplicações web, APIs RESTful e MVC com Apache Tomcat como servidor embutido padrão.'
    },
    rationale: {
      'en-US': 'Required for HTTP endpoints, REST controllers, request mapping, and JSON serialization.',
      'pt-BR': 'Necessário para endpoints HTTP, controllers REST, mapeamento de requisições e serialização JSON.'
    },
    keywords: ['rest', 'api', 'http', 'controller', 'endpoint', 'json', 'mvc', 'web', 'servlet', 'crud', 'backend', 'rotas', 'servicos'],
    recommendedFor: ['REST API', 'Web Service', 'CRUD']
  },
  {
    id: 'webflux',
    initializrId: 'webflux',
    name: 'Spring Reactive Web (WebFlux)',
    category: 'web',
    group: 'org.springframework.boot',
    artifact: 'spring-boot-starter-webflux',
    description: {
      'en-US': 'Build reactive, non-blocking web applications with Netty server and Project Reactor.',
      'pt-BR': 'Construa aplicações web reativas e não bloqueantes com servidor Netty e Project Reactor.'
    },
    rationale: {
      'en-US': 'Used when high-concurrency non-blocking I/O or reactive streaming is required.',
      'pt-BR': 'Usado para alta concorrência, I/O não-bloqueante e streaming reativo de dados.'
    },
    keywords: ['reactive', 'webflux', 'non-blocking', 'netty', 'reactor', 'streaming', 'async', 'reativo', 'assincrono', 'concorrencia'],
    recommendedFor: ['Reactive API', 'Streaming Backend']
  },
  {
    id: 'data-jpa',
    initializrId: 'data-jpa',
    name: 'Spring Data JPA',
    category: 'database',
    group: 'org.springframework.boot',
    artifact: 'spring-boot-starter-data-jpa',
    description: {
      'en-US': 'Persist data in SQL stores with Java Persistence API using Spring Data and Hibernate.',
      'pt-BR': 'Persistência de dados em bancos SQL usando JPA com Spring Data e Hibernate ORM.'
    },
    rationale: {
      'en-US': 'Provides ORM repositories, entity management, and automatic query generation for SQL databases.',
      'pt-BR': 'Fornece repositórios ORM, gerenciamento de entidades e geração automática de consultas SQL.'
    },
    keywords: ['sql', 'database', 'jpa', 'hibernate', 'orm', 'entity', 'repository', 'postgres', 'mysql', 'crud', 'persist', 'table', 'relational', 'banco', 'entidade', 'relacional', 'tabelas'],
    recommendedFor: ['SQL Persistence', 'Relational DB', 'ORM']
  },
  {
    id: 'postgresql',
    initializrId: 'postgresql',
    name: 'PostgreSQL Driver',
    category: 'database',
    group: 'org.postgresql',
    artifact: 'postgresql',
    scope: 'runtime',
    description: {
      'en-US': 'JDBC and R2DBC driver for PostgreSQL database communication.',
      'pt-BR': 'Driver JDBC e R2DBC para conexão com banco de dados PostgreSQL.'
    },
    rationale: {
      'en-US': 'Enables Spring Data JPA or JDBC to connect to PostgreSQL instances.',
      'pt-BR': 'Permite ao Spring Data JPA ou JDBC conectar a instâncias do PostgreSQL.'
    },
    keywords: ['postgres', 'postgresql', 'psql', 'pg'],
    recommendedFor: ['PostgreSQL DB']
  },
  {
    id: 'mysql',
    initializrId: 'mysql',
    name: 'MySQL Driver',
    category: 'database',
    group: 'com.mysql',
    artifact: 'mysql-connector-j',
    scope: 'runtime',
    description: {
      'en-US': 'MySQL JDBC Type 4 driver for connecting to MySQL servers.',
      'pt-BR': 'Driver MySQL JDBC Type 4 para conexão com servidores MySQL.'
    },
    rationale: {
      'en-US': 'Required to establish JDBC database connections to MySQL.',
      'pt-BR': 'Necessário para estabelecer conexões de banco de dados JDBC com o MySQL.'
    },
    keywords: ['mysql', 'mariadb'],
    recommendedFor: ['MySQL DB']
  },
  {
    id: 'h2',
    initializrId: 'h2',
    name: 'H2 Database',
    category: 'database',
    group: 'com.h2database',
    artifact: 'h2',
    scope: 'runtime',
    description: {
      'en-US': 'Fast in-memory database supporting JDBC API and embedded / server modes.',
      'pt-BR': 'Banco de dados em memória rápido que suporta JDBC e modos embutido / servidor.'
    },
    rationale: {
      'en-US': 'Great for rapid prototyping, integration tests, and local dev without external database setups.',
      'pt-BR': 'Excelente para prototipagem rápida, testes de integração e desenvolvimento local sem configurar banco externo.'
    },
    keywords: ['h2', 'in-memory', 'embedded', 'testing', 'mock database', 'prototype', 'memoria', 'testes'],
    recommendedFor: ['Local Prototyping', 'Tests']
  },
  {
    id: 'data-redis',
    initializrId: 'data-redis',
    name: 'Spring Data Redis',
    category: 'database',
    group: 'org.springframework.boot',
    artifact: 'spring-boot-starter-data-redis',
    description: {
      'en-US': 'Access Redis key-value stores for caching, session management, and pub/sub.',
      'pt-BR': 'Acesso a armazenamento chave-valor Redis para cache, gerenciamento de sessões e pub/sub.'
    },
    rationale: {
      'en-US': 'Ideal for caching high-frequency queries, rate limiting, distributed session storage.',
      'pt-BR': 'Ideal para cache de consultas frequentes, controle de taxa (rate limit) e sessões distribuídas.'
    },
    keywords: ['redis', 'cache', 'caching', 'key-value', 'session', 'rate limit', 'pubsub', 'sessao'],
    recommendedFor: ['Distributed Cache', 'Session Store']
  },
  {
    id: 'data-mongodb',
    initializrId: 'data-mongodb',
    name: 'Spring Data MongoDB',
    category: 'database',
    group: 'org.springframework.boot',
    artifact: 'spring-boot-starter-data-mongodb',
    description: {
      'en-US': 'Document-based persistence store using MongoDB with Spring Data abstractions.',
      'pt-BR': 'Armazenamento de persistência baseado em documentos usando MongoDB com abstrações Spring Data.'
    },
    rationale: {
      'en-US': 'Used for schema-less, document-oriented NoSQL persistence.',
      'pt-BR': 'Utilizado para persistência NoSQL orientada a documentos com esquema flexível.'
    },
    keywords: ['mongodb', 'mongo', 'nosql', 'document', 'bson', 'documentos'],
    recommendedFor: ['Document NoSQL DB']
  },
  {
    id: 'security',
    initializrId: 'security',
    name: 'Spring Security',
    category: 'security',
    group: 'org.springframework.boot',
    artifact: 'spring-boot-starter-security',
    description: {
      'en-US': 'Highly customizable authentication and access-control framework for Spring applications.',
      'pt-BR': 'Framework altamente customizável de autenticação e controle de acesso para aplicações Spring.'
    },
    rationale: {
      'en-US': 'Protects REST endpoints, enforces role-based access control (RBAC), and manages authentication filters.',
      'pt-BR': 'Protege endpoints REST, aplica controle de acesso baseado em papéis (RBAC) e filtros de segurança.'
    },
    keywords: ['security', 'auth', 'authentication', 'authorization', 'login', 'password', 'bcrypt', 'rbac', 'protect', 'permission', 'jwt', 'seguranca', 'autenticacao', 'autorizacao', 'senha', 'permissoes'],
    recommendedFor: ['Endpoint Security', 'Auth & RBAC']
  },
  {
    id: 'oauth2-resource-server',
    initializrId: 'oauth2-resource-server',
    name: 'OAuth2 Resource Server',
    category: 'security',
    group: 'org.springframework.boot',
    artifact: 'spring-boot-starter-oauth2-resource-server',
    description: {
      'en-US': 'Spring Security support for protecting APIs using OAuth 2.0 Bearer Tokens (JWT).',
      'pt-BR': 'Suporte do Spring Security para proteger APIs usando Tokens Bearer OAuth 2.0 (JWT).'
    },
    rationale: {
      'en-US': 'Validates incoming JWTs from identity providers like Keycloak, Auth0, Okta, or AWS Cognito.',
      'pt-BR': 'Valida JWTs de provedores de identidade como Keycloak, Auth0, Okta ou AWS Cognito.'
    },
    keywords: ['jwt', 'oauth', 'oauth2', 'bearer', 'token', 'keycloak', 'auth0', 'sso', 'cognito', 'tokens'],
    recommendedFor: ['JWT Validation', 'OAuth2 Tokens']
  },
  {
    id: 'validation',
    initializrId: 'validation',
    name: 'Validation (Hibernate Validator)',
    category: 'core',
    group: 'org.springframework.boot',
    artifact: 'spring-boot-starter-validation',
    description: {
      'en-US': 'Bean Validation with Hibernate Validator standard annotations (@NotNull, @Size, @Email).',
      'pt-BR': 'Bean Validation com anotações padrão do Hibernate Validator (@NotNull, @Size, @Email).'
    },
    rationale: {
      'en-US': 'Validates DTO payloads and request bodies before business logic executes.',
      'pt-BR': 'Valida payloads de DTOs e corpo de requisições antes da execução das regras de negócio.'
    },
    keywords: ['validation', 'validate', 'valid', 'notnull', 'dto', 'input validation', 'constraints', 'sanitize', 'validacao', 'validar'],
    recommendedFor: ['DTO Input Validation']
  },
  {
    id: 'lombok',
    initializrId: 'lombok',
    name: 'Lombok',
    category: 'tools',
    group: 'org.projectlombok',
    artifact: 'lombok',
    scope: 'optional',
    description: {
      'en-US': 'Java annotation library that reduces boilerplate code like getters, setters, constructors, and builders.',
      'pt-BR': 'Biblioteca de anotações Java que reduz código repetitivo como getters, setters, construtores e builders.'
    },
    rationale: {
      'en-US': 'Reduces Java verbosity by auto-generating boilerplate at compile time.',
      'pt-BR': 'Reduz a verbosidade do Java gerando código boilerplate automaticamente em tempo de compilação.'
    },
    keywords: ['lombok', 'getter', 'setter', 'builder', 'boilerplate', 'pojo', 'dto', 'clean code', 'construtor'],
    recommendedFor: ['Boilerplate Reduction']
  },
  {
    id: 'actuator',
    initializrId: 'actuator',
    name: 'Spring Boot Actuator',
    category: 'ops',
    group: 'org.springframework.boot',
    artifact: 'spring-boot-starter-actuator',
    description: {
      'en-US': 'Production-ready features like health checks, metrics, auditing, and Prometheus integration.',
      'pt-BR': 'Recursos para produção como verificação de integridade (health checks), métricas e Prometheus.'
    },
    rationale: {
      'en-US': 'Crucial for Kubernetes readiness/liveness probes, health endpoints, and Prometheus metrics.',
      'pt-BR': 'Essencial para probes do Kubernetes (readiness/liveness), endpoints de saúde e métricas Prometheus.'
    },
    keywords: ['actuator', 'health', 'metrics', 'monitoring', 'prometheus', 'production', 'k8s', 'kubernetes', 'observability', 'telemetry', 'metricas', 'monitoramento', 'saude', 'observabilidade'],
    recommendedFor: ['Health Checks', 'Production Metrics']
  },
  {
    id: 'devtools',
    initializrId: 'devtools',
    name: 'Spring Boot DevTools',
    category: 'tools',
    group: 'org.springframework.boot',
    artifact: 'spring-boot-devtools',
    scope: 'runtime',
    description: {
      'en-US': 'Fast application restarts, live reload, and development-specific configurations.',
      'pt-BR': 'Reinicializações rápidas de aplicação, live reload e configurações de ambiente de desenvolvimento.'
    },
    rationale: {
      'en-US': 'Speeds up local developer inner loop with instant class reloading.',
      'pt-BR': 'Acelera o ciclo de desenvolvimento local com recarregamento instantâneo de classes alteradas.'
    },
    keywords: ['devtools', 'live reload', 'hot reload', 'restart', 'developer experience', 'dx', 'recarregamento'],
    recommendedFor: ['Fast Dev Restarts']
  },
  {
    id: 'kafka',
    initializrId: 'kafka',
    name: 'Spring for Apache Kafka',
    category: 'messaging',
    group: 'org.springframework.kafka',
    artifact: 'spring-kafka',
    description: {
      'en-US': 'High-throughput distributed event streaming and message publishing/consuming.',
      'pt-BR': 'Streaming de eventos distribuídos de alto rendimento e publicação/consumo de mensagens.'
    },
    rationale: {
      'en-US': 'Enables asynchronous event-driven architectures and message queues with Apache Kafka.',
      'pt-BR': 'Permite arquiteturas orientadas a eventos assíncronos e filas de mensagens com Apache Kafka.'
    },
    keywords: ['kafka', 'event', 'messaging', 'queue', 'stream', 'pubsub', 'producer', 'consumer', 'broker', 'async', 'mensageria', 'eventos', 'fila', 'mensagens'],
    recommendedFor: ['Event Streaming', 'Kafka Queues']
  },
  {
    id: 'amqp',
    initializrId: 'amqp',
    name: 'Spring for RabbitMQ (AMQP)',
    category: 'messaging',
    group: 'org.springframework.boot',
    artifact: 'spring-boot-starter-amqp',
    description: {
      'en-US': 'Advanced Message Queuing Protocol support using RabbitMQ.',
      'pt-BR': 'Suporte ao protocolo AMQP (Advanced Message Queuing Protocol) usando RabbitMQ.'
    },
    rationale: {
      'en-US': 'Reliable asynchronous message passing, task worker queues, and retry mechanisms.',
      'pt-BR': 'Troca confiável de mensagens assíncronas, filas de processamento e políticas de retentativa.'
    },
    keywords: ['rabbitmq', 'amqp', 'queue', 'broker', 'worker', 'message', 'mensageria', 'filas'],
    recommendedFor: ['RabbitMQ Message Broker']
  },
  {
    id: 'flyway',
    initializrId: 'flyway',
    name: 'Flyway Migration',
    category: 'database',
    group: 'org.flywaydb',
    artifact: 'flyway-core',
    description: {
      'en-US': 'Version control for relational databases, executing versioned SQL migration scripts automatically.',
      'pt-BR': 'Controle de versão para bancos de dados relacionais, executando scripts de migração SQL automáticos.'
    },
    rationale: {
      'en-US': 'Guarantees reliable, automated database schema versioning across dev and production environments.',
      'pt-BR': 'Garante versionamento de esquema de banco de dados automatizado e seguro entre ambientes.'
    },
    keywords: ['flyway', 'migration', 'schema', 'versioning', 'database migration', 'ddl', 'migracao', 'migracoes', 'versao'],
    recommendedFor: ['DB Schema Versioning']
  },
  {
    id: 'springdoc',
    initializrId: '',
    name: 'SpringDoc OpenAPI (Swagger UI)',
    category: 'web',
    group: 'org.springdoc',
    artifact: 'springdoc-openapi-starter-webmvc-ui',
    version: '2.8.5',
    description: {
      'en-US': 'Automatic OpenAPI 3 documentation and interactive Swagger UI dashboard for REST APIs.',
      'pt-BR': 'Documentação automática OpenAPI 3 e painel interativo Swagger UI para APIs REST.'
    },
    rationale: {
      'en-US': 'Generates interactive API documentation, request testing sandbox, and OpenAPI schema.',
      'pt-BR': 'Gera documentação interativa da API, sandbox de testes de requisições e esquema OpenAPI.'
    },
    keywords: ['swagger', 'openapi', 'docs', 'documentation', 'api docs', 'interactive ui', 'contract', 'documentacao'],
    recommendedFor: ['API Documentation & Swagger UI']
  },
  {
    id: 'websocket',
    initializrId: 'websocket',
    name: 'Spring WebSocket',
    category: 'web',
    group: 'org.springframework.boot',
    artifact: 'spring-boot-starter-websocket',
    description: {
      'en-US': 'Build bi-directional, full-duplex interactive messaging applications using WebSockets and STOMP.',
      'pt-BR': 'Construa aplicações interativas e bidirecionais full-duplex usando WebSockets e protocolo STOMP.'
    },
    rationale: {
      'en-US': 'Powers real-time chat, live notifications, collaborative editing, and dashboard push feeds.',
      'pt-BR': 'Alimenta chats em tempo real, notificações ao vivo, edição colaborativa e dashboards push.'
    },
    keywords: ['websocket', 'chat', 'realtime', 'real-time', 'stomp', 'live', 'duplex', 'push notification', 'broadcast', 'tempo real', 'notificacoes', 'conversa'],
    recommendedFor: ['Real-time Chat', 'Live Updates']
  },
  {
    id: 'spring-ai',
    initializrId: 'spring-ai-openai',
    name: 'Spring AI (OpenAI / Ollama)',
    category: 'ai',
    group: 'org.springframework.ai',
    artifact: 'spring-ai-openai-spring-boot-starter',
    version: '1.0.0-M6',
    description: {
      'en-US': 'Unified AI abstractions for LLMs, prompt management, function calling, and vector databases.',
      'pt-BR': 'Abstrações unificadas de IA para LLMs, gerenciamento de prompts, chamadas de função e bancos vetoriais.'
    },
    rationale: {
      'en-US': 'Easily integrate Generative AI models, chatbots, embeddings, and RAG pipelines into Spring Boot.',
      'pt-BR': 'Integração direta de modelos de IA generativa, chatbots, embeddings e fluxos RAG no Spring Boot.'
    },
    keywords: ['ai', 'llm', 'chatgpt', 'openai', 'ollama', 'gemini', 'rag', 'embeddings', 'chatbot', 'vector', 'agent', 'prompt', 'ia', 'inteligencia artificial', 'vetores'],
    recommendedFor: ['LLM & AI Integration', 'RAG Chatbots']
  }
];

export const PRESETS = [
  {
    id: 'rest-sql',
    title: {
      'en-US': 'REST API + PostgreSQL + JPA',
      'pt-BR': 'API REST + PostgreSQL + JPA'
    },
    description: {
      'en-US': 'Standard enterprise CRUD REST backend with relational database persistence.',
      'pt-BR': 'Backend CRUD empresarial padrão com persistência em banco relacional.'
    },
    prompt: {
      'en-US': 'I want to build a secure REST API with PostgreSQL, Hibernate JPA, DTO validation, and Swagger UI documentation',
      'pt-BR': 'Quero construir uma API REST segura com PostgreSQL, Hibernate JPA, validação de DTOs e documentação Swagger UI'
    }
  },
  {
    id: 'jwt-auth',
    title: {
      'en-US': 'JWT Auth & User Security',
      'pt-BR': 'Autenticação JWT e Segurança'
    },
    description: {
      'en-US': 'Microservice secured with Spring Security, OAuth2 Resource Server, and BCrypt.',
      'pt-BR': 'Microsserviço protegido com Spring Security, OAuth2 Resource Server e BCrypt.'
    },
    prompt: {
      'en-US': 'Build an authentication service with Spring Security, JWT token validation, user login, and PostgreSQL',
      'pt-BR': 'Criar serviço de autenticação com Spring Security, validação de tokens JWT, login de usuários e PostgreSQL'
    }
  },
  {
    id: 'event-kafka',
    title: {
      'en-US': 'Event-Driven Kafka Architecture',
      'pt-BR': 'Arquitetura Orientada a Eventos (Kafka)'
    },
    description: {
      'en-US': 'High-throughput async event publisher and consumer with metrics.',
      'pt-BR': 'Produtor e consumidor assíncrono de eventos com métricas de observabilidade.'
    },
    prompt: {
      'en-US': 'Create an event-driven microservice using Apache Kafka messaging, Redis cache, and Actuator monitoring',
      'pt-BR': 'Criar microsserviço orientado a eventos com Apache Kafka, cache Redis e monitoramento com Actuator'
    }
  },
  {
    id: 'realtime-chat',
    title: {
      'en-US': 'Real-time Chat & WebSockets',
      'pt-BR': 'Chat em Tempo Real & WebSockets'
    },
    description: {
      'en-US': 'Full-duplex chat server with WebSockets, Redis pub/sub, and PostgreSQL history.',
      'pt-BR': 'Servidor de chat bidirecional com WebSockets, pub/sub Redis e histórico PostgreSQL.'
    },
    prompt: {
      'en-US': 'Real-time chat application with WebSockets, STOMP protocol, Redis caching, and PostgreSQL',
      'pt-BR': 'Aplicação de chat em tempo real com WebSockets, protocolo STOMP, cache Redis e PostgreSQL'
    }
  },
  {
    id: 'spring-ai-bot',
    title: {
      'en-US': 'Generative AI & LLM Assistant',
      'pt-BR': 'Assistente IA Generativa & LLM'
    },
    description: {
      'en-US': 'AI chatbot with Spring AI, vector embeddings, and REST endpoints.',
      'pt-BR': 'Chatbot com Spring AI, embeddings vetoriais e endpoints REST.'
    },
    prompt: {
      'en-US': 'Build an AI chatbot with Spring AI, OpenAI LLM, REST API endpoints, and Actuator observability',
      'pt-BR': 'Construir um chatbot com Spring AI, LLM OpenAI, endpoints de API REST e observabilidade Actuator'
    }
  }
];

export const CATEGORIES = [
  { id: 'all', labels: { 'en-US': 'All Dependencies', 'pt-BR': 'Todas Dependências' } },
  { id: 'web', labels: { 'en-US': 'Web & API', 'pt-BR': 'Web e APIs' } },
  { id: 'database', labels: { 'en-US': 'Database & Cache', 'pt-BR': 'Bancos & Cache' } },
  { id: 'security', labels: { 'en-US': 'Security & Auth', 'pt-BR': 'Segurança & Auth' } },
  { id: 'messaging', labels: { 'en-US': 'Messaging & Events', 'pt-BR': 'Mensageria & Eventos' } },
  { id: 'ops', labels: { 'en-US': 'Ops & Monitoring', 'pt-BR': 'Ops & Monitoramento' } },
  { id: 'tools', labels: { 'en-US': 'Developer Tools', 'pt-BR': 'Ferramentas Dev' } },
  { id: 'ai', labels: { 'en-US': 'Artificial Intelligence', 'pt-BR': 'Inteligência Artificial' } }
];

export function matchDependencies(query) {
  if (!query || !query.trim()) {
    return ['web', 'lombok', 'devtools'];
  }

  const cleanQuery = query.toLowerCase().replace(/[^a-z0-9áàâãéèêíïóôõöúçñ\s-]/g, ' ');
  const tokens = cleanQuery.split(/\s+/).filter((t) => t.length > 1);

  const scored = SPRING_DEPENDENCIES.map((dep) => {
    let score = 0;

    dep.keywords.forEach((kw) => {
      if (cleanQuery.includes(kw.toLowerCase())) {
        score += 3;
      }
    });

    tokens.forEach((tok) => {
      if (dep.name.toLowerCase().includes(tok)) {
        score += 2;
      }
      if (
        (dep.description['en-US'] && dep.description['en-US'].toLowerCase().includes(tok)) ||
        (dep.description['pt-BR'] && dep.description['pt-BR'].toLowerCase().includes(tok))
      ) {
        score += 1;
      }
    });

    // Intent rules
    if ((cleanQuery.includes('rest') || cleanQuery.includes('api') || cleanQuery.includes('crud')) && dep.id === 'web') {
      score += 5;
    }
    if ((cleanQuery.includes('jwt') || cleanQuery.includes('token')) && dep.id === 'oauth2-resource-server') {
      score += 4;
    }
    if ((cleanQuery.includes('postgres') || cleanQuery.includes('postgresql')) && dep.id === 'postgresql') {
      score += 5;
    }
    if (cleanQuery.includes('mysql') && dep.id === 'mysql') {
      score += 5;
    }
    if ((cleanQuery.includes('cache') || cleanQuery.includes('session') || cleanQuery.includes('sess')) && dep.id === 'data-redis') {
      score += 4;
    }
    if ((cleanQuery.includes('swagger') || cleanQuery.includes('doc')) && dep.id === 'springdoc') {
      score += 5;
    }
    if ((cleanQuery.includes('chat') || cleanQuery.includes('realtime') || cleanQuery.includes('tempo real') || cleanQuery.includes('socket')) && dep.id === 'websocket') {
      score += 5;
    }
    if ((cleanQuery.includes('ai') || cleanQuery.includes('ia') || cleanQuery.includes('llm') || cleanQuery.includes('bot') || cleanQuery.includes('openai') || cleanQuery.includes('gemini')) && dep.id === 'spring-ai') {
      score += 6;
    }

    return { id: dep.id, score };
  });

  const matched = scored.filter((s) => s.score > 0).sort((a, b) => b.score - a.score);

  if (matched.length === 0) {
    return ['web', 'lombok'];
  }

  const matchedIds = matched.map((m) => m.id);
  if (matchedIds.includes('web') && !matchedIds.includes('lombok') && cleanQuery.length > 5) {
    matchedIds.push('lombok');
  }

  return matchedIds;
}
