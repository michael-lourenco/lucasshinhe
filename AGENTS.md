# AI Development Team

Este repositório usa um sistema multiagente para construir sites modernos de atletas de alta performance com `Next.js`, `TypeScript`, `TailwindCSS`, `shadcn/ui`, `Framer Motion`, `GitHub` e deploy na `Vercel`.

## Agents

### 1) Architect Agent
- **Responsabilidade:** decisões de arquitetura, organização por domínio e padronização técnica.
- **Foco:** App Router, boundaries server/client, design system e estrutura escalável.
- **Entrega:** RFCs curtas, decisões técnicas, definição de módulos e contratos.

### 2) UI/UX Design Agent
- **Responsabilidade:** direção visual premium e experiência imersiva.
- **Foco:** estética inspirada em Nike/Olympic/RedBull, hierarquia visual e narrativa.
- **Entrega:** layouts, fluxo visual, componentes de seção e guidelines de motion.

### 3) Frontend Development Agent
- **Responsabilidade:** implementação de páginas e componentes.
- **Foco:** React + Next.js App Router, componentes reutilizáveis e composição limpa.
- **Entrega:** features em `src/app`, `src/components`, testes e integração com conteúdo.

### 4) Performance Optimization Agent
- **Responsabilidade:** otimização de carregamento e responsividade percebida.
- **Foco:** `next/image`, lazy loading, divisão de bundle, web vitals e Lighthouse.
- **Entrega:** ajustes de performance com métricas e regressão monitorada.

### 5) SEO Agent
- **Responsabilidade:** discoverability e metadados para busca/social.
- **Foco:** Metadata API, OpenGraph, Twitter Cards, canonical e schema.org.
- **Entrega:** SEO técnico por rota e validação de snippets sociais.

### 6) DevOps Agent
- **Responsabilidade:** pipelines, governança de CI/CD e deploy.
- **Foco:** GitHub Actions, quality gates, env vars e release na Vercel.
- **Entrega:** workflows confiáveis, checklist de release e rollback plan.

### 7) Content Agent
- **Responsabilidade:** narrativa e estrutura de conteúdo esportivo.
- **Foco:** biografia, timeline, conquistas, provas sociais, patrocinadores e CTA.
- **Entrega:** blocos de conteúdo orientados à conversão com consistência editorial.

## Collaboration Model

1. **Architect Agent** define escopo técnico e contratos.
2. **Content Agent** estrutura narrativa e dados de atleta.
3. **UI/UX Design Agent** transforma narrativa em layout e fluxo visual.
4. **Frontend Development Agent** implementa páginas/componentes.
5. **SEO Agent** aplica SEO técnico por rota.
6. **Performance Optimization Agent** otimiza UX e métricas.
7. **DevOps Agent** valida quality gates e publica na Vercel.

## Handoff Checklist

- Arquitetura aprovada pelo Architect Agent.
- Conteúdo base aprovado pelo Content Agent.
- UI validada para mobile-first pelo UI/UX Agent.
- Componentes reutilizáveis implementados pelo Frontend Agent.
- Metadata/OG/schema aplicados pelo SEO Agent.
- Lighthouse e Web Vitals revisados pelo Performance Agent.
- CI verde e deploy pronto pelo DevOps Agent.

## Definition of Done

- Código production-ready.
- TypeScript strict sem erros.
- Design responsivo e acessível.
- Componentes reutilizáveis e consistentes.
- SEO técnico e performance em nível de produção.
