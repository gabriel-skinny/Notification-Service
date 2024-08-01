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
 
Nestjs Traz opinião na forma que você cria sua apliação, ele define uma estrutura previa.
Beneficios: 
- Minimiza as escolhas na decisão de libs, usando as padrões do Nestjs. Ela é otima para times que precisam de velocidade e produtividade.
- Aplica os principios do SOLID
- Possue Decoretors

## Conceitos do NestJs
Decoretor: Acopla uma funcionalidade em um método
Inversao de Dependencia: As dependencias de uma classe são recebidas pelo constructor
Injeção de Dependencia: Resolve todas as dependencias de uma classe de forma automática