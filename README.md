# Conceitos

## Arquiteturas de Deploy:
Monolito: Hospedagem de uma code base com todos as funcionalidades
Micro-Servico: Fragmentação de aplicações em funcionalidades especificas

Maior problema do Micro-Serviço: A sua comunição interna

Mudanças estruturais no código:
 - Modo de intercomunicação entre os micro-serviços
 - Isolar as dependencias das funcionalidades 
 - Isolar os bancos de dados
 - Duplicidade de dados no banco dados para garantir o isolamento

## Nestjs 
Nestjs Traz opinião na forma que você cria sua apliação, ele define uma estrutura previa.
Beneficios: 
- Minimiza as escolhas na decisão de libs, usando as padrões do Nestjs. 
- É otimo para times que precisam de velocidade e produtividade.
- Aplica os principios do SOLID
- Possui Decoretors

### Conceitos do NestJs
Decoretor: Acopla uma funcionalidade em um método
Inversao de Dependencia: As dependencias de uma classe são recebidas pelo constructor
Injeção de Dependencia: Resolve todas as dependencias de uma classe de forma automática


## Principios de Design System
- Pensar como fariamos nossa aplicação sem banco de dados, pelas entidades
- O Banco de dados não deve interferir em nenhuma regra de negocio, ele só deve servir para persistir dados
- Pensar nos testes ao desenvolver as entidades

## Conteitos de DDD
- Value-Object: Uma classe que representa um parametro de uma entitidade, abstraindo sua lógica da entitdade principal

## Conceitos do SOLID
- Single Responsability: As classes precisam ter apenas uma responsabilidade (Use-Cases)


Repository-Pattern: A camada que faz a intermediação da nossa aplicação para a camada de persistência de dados

In Memory Database: Fazer um stub que simula uma persistencia local para conseguirmos testar sem o uso real de um banco de dados

Mappers -> Classes que transformam dados. Muito utilizado em arquitetura de camadas que possuem entidades repetidas entre si.

Factory -> Função que abstrai a criação de varios objetos, retornando ele pronto para ser utilizado

## Ordem de Desenvolvimento
- Pensar no Design System
- Criar as Entidades do código
- Criar os Use-Cases 
- Testar as Entidades e os Use-Cases
- Criar os Repositories
- Implementar a infraEstrutura(Banco de Dados, Integrações)

Artigos Recomendados:
- Pattern In Memory Database - Martin Fowler( https://www.bing.com/search?pglt=513&q=in+memory+data+base+martin+fowler&cvid=94b4ae1559494724832d707c0c11b03d&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQABhA0gEINDQ5MmowajGoAgCwAgA&FORM=ANNTA1&PC=SMTS )
- Guia de Micro-Serviços Martin Fowler (https://martinfowler.com/microservices/)