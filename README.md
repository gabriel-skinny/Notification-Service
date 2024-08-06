# Notification-Service

Micro-serviço de notificação desenvolvido durante o curso Ignite-Lab4.0 da RocketSeat com as melhores praticas de desenvolvimento e as ultimas tecnologias do mercado. Cria uma notificação para um usuário, salva no banco e fornece todas as operações necessarias para manipular essa notificação: leitura, deleção, listagem, contagem e etc; pronto para ser integrado em qualquer sistema.

## Tecnologias

Nestjs -> Prisma -> Sqlite

## Conceitos usados no desenvolvimento

- TDD (Test-Drive-Development)
- DDD (Domain-Driven-Design)
- SOLID
- Entreprie-Patterns

## Funcionalidades

- Criação de Notificação
- Contagem de Notificações
- Listagem de Notificações
- Leitura de Notificação
- Marcar como não lida a Notificação
- Cancelamento de Notificação

# Estudo

### Arquiteturas de Deploy:

Monolito: Hospedagem de uma code base com todos as funcionalidades da aplicação

Micro-Servico: Fragmentação da aplicação em funcionalidades especificas

Maior problema do Micro-Serviço: A sua comunição interna

Mudanças estruturais no código em uma arquitetura de micro-serviços:

- Modo de intercomunicação entre os micro-serviços
- Isolar as dependencias das funcionalidades/aplicações
- Isolar os bancos de dados de cada aplicação
- Manter duplicidade no dados no banco dados para garantir o isolamento

### Nestjs

Framework para nodejs que, diferentemente dos mais famosos como express e Hapi, traz opinião na forma que você cria sua apliação: define uma estrutura previa que deve ser seguida.

Beneficios:

- Minimiza as escolhas na decisão de libs, usando as padrões do Nestjs.
- É otimo para times que precisam de velocidade e produtividade.
- Aplica os principios do SOLID
- Possui Decoretors

### Conceitos de design contidos no NestJs

Decoretor pattern: Acopla uma funcionalidade em um método ja existente sem altera-lo internamente
Inversao de Dependencia: As dependencias de uma classe são recebidas pelo constructor
Injeção de Dependencia Automática: Resolve todas as dependencias de uma classe de forma automática

### Principios de Design System

- Pensar como fariamos nossa aplicação sem banco de dados: começar pelas entidades
- O Banco de dados não deve interferir em nenhuma regra de negocio, ele deve servir somente para persistir dados
- Pensar nos testes ao desenvolver as entidades
- Sempre tratar os dados entre camadas: uma entidade da camada de Infra não deve ser conhecida na camada da Aplicação

### Conteitos de Design

- Value-Object: Uma classe que representa um parametro de uma entitidade, abstraindo sua lógica da entitdade principal
- Single Responsability: As classes precisam ter apenas uma responsabilidade (Use-Cases)
- Repository-Pattern: A camada que faz a intermediação da nossa aplicação para a camada de persistência de dados
- In Memory Database: Fazer um stub que simula uma persistencia local para conseguirmos testar sem o uso real de um banco de dados
- Mappers: Função que transformam dados. Muito utilizado em arquitetura de camadas que possuem entidades repetidas entre si.
- Data-Transfer-Object(DTO): Objeto que garante a consistência dos dados recebidos
- Factory: Função que abstrai a criação de varios objetos, retornando ele pronto para ser utilizado
- View-Model: Um mapper usado no controller que representa o retorno do servidor ao cliente.

### Ordem de Desenvolvimento

- Pensar no Design System
- Criar as Entidades do código
- Criar os Use-Cases
- Testar as Entidades e os Use-Cases
- Criar os Repositories
- Implementar a infraEstrutura(Banco de Dados, Integrações)
- Criar os controllers

### Artigos Recomendados:

- Pattern In Memory Database - Martin Fowler( https://www.bing.com/search?pglt=513&q=in+memory+data+base+martin+fowler&cvid=94b4ae1559494724832d707c0c11b03d&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQABhA0gEINDQ5MmowajGoAgCwAgA&FORM=ANNTA1&PC=SMTS )
- Guia de Micro-Serviços Martin Fowler (https://martinfowler.com/microservices/)
