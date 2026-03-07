# Lucas Shinhe - Site de Captação (TDD First)

Projeto em `Next.js` para apresentar o atleta Lucas Shinhe Lourenço e converter visitantes em apoiadores por doação e patrocínio.

## Stack

- `Next.js` (App Router)
- `TypeScript`
- `Vitest` + `Testing Library` (unitário e integração)
- `Playwright` (E2E)
- `GitHub Actions` (quality gate)
- Deploy alvo: `Vercel`

## Regra principal de desenvolvimento

Todo desenvolvimento segue **RED -> GREEN -> REFACTOR**:

1. Escrever teste que falha.
2. Implementar o mínimo para passar.
3. Refatorar com segurança.
4. Subir PR apenas com suíte verde.

## Scripts

```bash
npm run dev              # desenvolvimento local
npm run lint             # lint
npm run typecheck        # checagem de tipos
npm run test:unit        # testes unitários
npm run test:integration # testes de integração
npm run test             # unit + integração
npm run test:e2e         # testes e2e
npm run test:all         # suíte completa
npm run ci               # lint + typecheck + test + build
```

## Estrutura de testes

- `tests/unit`: componentes e regras de domínio
- `tests/integration`: routes/server-side behavior
- `tests/e2e`: fluxos críticos do usuário

## Test Plan v1 (base técnica)

### Cenário 1 - Proposta principal na home
- **Given:** visitante acessa a home
- **When:** a página carrega
- **Then:** nome do atleta e mensagem de missão aparecem com CTAs principais

### Cenário 2 - Interesse em patrocínio (API)
- **Given:** payload inválido
- **When:** POST em `/api/sponsorship-interest`
- **Then:** resposta 400 com erros por campo

### Cenário 3 - Interesse em patrocínio (sucesso)
- **Given:** payload válido
- **When:** POST em `/api/sponsorship-interest`
- **Then:** resposta 201 confirmando recebimento do lead

### Cenário 4 - Jornada E2E inicial
- **Given:** aplicação em execução
- **When:** visitante abre `/`
- **Then:** CTAs de doação e patrocínio estão visíveis e corretos

## CI Quality Gate

O pipeline em `.github/workflows/ci.yml` executa:

1. Lint
2. Typecheck
3. Testes unitários + integração
4. Build
5. E2E smoke

Sem isso verde, não há merge para produção.
