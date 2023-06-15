# VISÃO DO PRODUTO E PROJETO

## Historico de revisão

| Data     | Versão | Descrição          | Autor                 |
| -------- | ------ | ------------------ | --------------------- |
| 24/04/23 | 1.0    | Criação do arquivo | Júlio, Luan e Rodrigo |
| 25/04/23 | 1.1    | Correção unidade 1 |                       |

## 1. VISÃO GERAL DO PRODUTO

### 1.1. Problema

Nosso projeto visa resolver problemas relacionados a má gestão do uso de medicamentos, com base em nossas pesquisas feitas, a indústria farmacêutica tem tido uma crescente nos últimos anos referente a fabricação de remédios mesmo com o crescimento populacional tendendo se estabilizar, ou seja, esse aumento dos medicamentos vendidos nos mostra que as pessoas estão consumindo mais remédios periodicamente, e muitas delas se esquecem de tomá-los no horário ou dosagem correta, outro fator agravante são que alguns usuários de remédios não se esquecem da última vez que tomaram o remédio.

![Ishikawa](assets/../../../assets/Ishikawa.jpeg)

## 1.2. Declaração de Posição do Produto

**1. Qual é o produto que você se propõe a desenvolver?**

Uma aplicação mobile para controle de horário e dosagem de medicamentos, com alertas nos horários da medicação e registro de todas as vezes tomadas, e esse registro pode ser compartilhado e acompanhado, pretendemos também trazer algumas informações úteis sobre essa medicação.

**2. O que torna este produto diferente dos seus concorrentes?**

Pretendemos registrar todos os remédios e os dias que foram tomados em um banco de dados, onde o usuário e outras pessoas podem ter acesso, como médicos, familiares e etc, trazendo uma transparência e acompanhamento maior para esse usuário.

**3. Quem são os usuários-alvo e clientes do produto?**

Usuários recorrentes de medicamentos.

**4. Por que os clientes deveriam utilizar / comprar este produto?**

Pois ele vai poder ter registrado todos os dias e horários que deve tomar o remédio e também poderá enviar esses registros para outras pessoas acompanharem seus registros.

| Para          | Usuários de medicamentos e Acompanhantes de usuários de medicamentos.                                                                                                                                                                                                                                                                    |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Quem          | Possui dificuldades com o controle de seus medicamentos e o uso correto deles.                                                                                                                                                                                                                                                           |
| O MedicaCerto | é um Aplicativo.                                                                                                                                                                                                                                                                                                                         |
| Que           | Auxilia com: Uso do medicamento correto, Horário correto do uso dos medicamentos, Dosagem correta dos medicamentos, Não esquecimento dos medicamentos usados pelo usuário, Não esquecimento do uso periódico dos medicamentos e Acompanhamento de profissionais ou familiares do uso de medicamento pelos usuários cadastrados.          |
| Ao contrário  | Dos aplicativos: [Medisafe](https://play.google.com/store/apps/details?id=com.medisafe.android.client&hl=pt_BR&gl=US), [Pill Reminder](https://play.google.com/store/apps/details?id=com.medisafe.android.client&hl=pt_BR&gl=US) e [Dosecast](https://play.google.com/store/apps/details?id=com.montunosoftware.dosecast&hl=pt_BR&gl=US) |
| Nosso produto | Aborda as diversas causas de problemas com o uso de medicamentos procurando melhorar e/ou facilitar cada uma delas, além de trazer a possibilidade do paciente disponibilizar os dados do consumo dos seus medicamentos para acompanhantes e demais pessoas interessadas.                                                                |

### 1.3 Objetivo do Produto

O objetivo principal do produto será fornecer um meio para as pessoas que precisam tomar alguma medicação periodicamente, sejam lembradas de tomar a medicação no horário correto. Além disso, o projeto também têm alguns objetivos secundários, como:

- Guardar um registro dos remédios que o usuário tomou dentro de um período de tempo.
- Ter um auxílio com relação às dosagens dos medicamentos, para as pessoas que não sabem.

### 1.4 Tecnologias a Serem Utilizadas

- React Native
- NodeJS
- Docker

## 2. VISÃO GERAL DO PROJETO

### 2.1. Organização do Projeto

_Tabela de Organização da Equipe_

| Papel                            | Atribuições                        | Responsável | Participantes |
| -------------------------------- | ---------------------------------- | ----------- | -------- |
| Equipe1: Desenvolvedor Backend   | Garantir percistência de dados     | Rodrigo     | Carlos, Mateus |
| Equipe 2: Desenvolvedor Frontend | Desenvolver UI                     | Júlio       | Luan, Mateus |
| Product Owner                    | Garantir interesses do cliente     | Luan        | X |
| Scrum Master                     | Garantir o uso do scrum            | Júlio       | X |
| Designer de Interface do Usuário | Desenvolver protótipos visuais     | Luan        | Júlio, Mateus |
| Engenheiros de Requisitos        | Garantir atulização dos requisitos | Carlos      | Rodrigo | 
| Cliente                          | Definir o valor de negócio         | Mariana     | X |

### 2.2. Planejamento das Fases e/ou Iterações do Projeto

**UNIDADE 2:** Definição do Backlog, Definição das US, Definição do MVP e Protótipo de Alta Fidelidade:

| Sprint   | Produto (Entrega)                               | Data Início | Data Fim |
| -------- | ----------------------------------------------- | ----------- | -------- |
| sprint 1 | Elicitação de requisitos e Definição do Backlog | 03/05/23    | 10/05/23 |
| sprint 2 | Equipe 1: Alterações do Backlog, Definição de US (User Story Mapping) e Definição de MVP <br/> Equipe 2: Protótipo de Alta Fidelidade.                                             | 10/05/22    | 17/05/23 |
| sprint 3 | Refinamento e Configuração de Ambiente          | 17/05/23    | 23/05/23 |

**UNIDADE 3:** MVP 1:

| Sprint   | Produto (Entrega)                         | Data Início | Data Fim |
| -------- | ----------------------------------------- | ----------- | -------- |
| sprint 4 | Organização das Sprints e Confuguração de ambiente | 24/05/23 | 31/05/23 |
| sprint 5 | Desenvolvimento: US07, US09 & US11        | 31/05/23 | 07/06/23 |
| sprint 6 | Desenvolvimento: US13, US05 & US10        | 07/06/23 | 14/06/23 |
| sprint 7 | Desenvolvimento: US16 & US21; Integrações finais | 14/06/23 | 20/06/23 |

**UNIDADE 4:** MVP 2:

| Sprint    | Produto (Entrega)                         | Data Início | Data Fim |
| --------- | ----------------------------------------- | ----------- | -------- |
| sprint 8  | Organização das Sprints e Desenvolvimento | 24/05/23 | 31/05/23 |
| sprint 9  | Desenvolvimento                           | 31/05/23 | 07/06/23 |
| sprint 10 | Desenvolvimento                           | 07/06/23 | 14/06/23 |
| sprint 11 | Desenvolvimento                           | 14/06/23 | 20/06/23 |

### 2.3. Matriz de Comunicação

A equipe deverá ter uma comunicação periódica como evidenciado na tabela:

| Descrição | Área/ Envolvidos | Periodicidade | Produtos Gerados |
| -------------------- | ------------------------- | --------------------- | ---------------- |
| Deily Meeting        | Equipe do Projeto         | Diário                | - Relatório das atividades feitas no dia por cada um dos membros |
| Sprint Panning       | Equipe do Projeto         | Semanal (Toda Quarta) | - Sprint Backlog                   |
| Sprint Retrospective | Equipe Projeto e monitora | Semanal (Toda Quarta) | - Lista do que pode ser melhorado  |
| Sprint Review        | Equipe do projeto         | Semanal (Toda Quarta) | - Entregas feitas durante a sprint |

### 2.4. Gerenciamento de Riscos

| Possível risco                      | Causa                                                                                     | Prevenção de risco                                                                     | Correção                                                              |
| ----------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Saída de membro do projeto          | Trancamento de disciplina, afastamento por motivos de saúde e entre outros                | Contato contínuo com os membros da equipe, verificando a saúde e desenvolvimento deles | Reatribuição das atividades entre os demais membros                   |
| Comunicação Ineficiente com Cliente | Falta de disponibilidade do cliente                                                       | Verificação semanal do tempo de resposta do cliente                                    | Redefinição do escopo e planejamento, além da escolha de novo cliente |
| Alteração do escopo                 | Definição de um escopo muito grande se tornando a sua execução inviável                   | Não subestimar a quantidade de funcionalidades que podem ser entregues em um ciclo     | Revisão do backlog e do planejamento dos ciclos                       |
| Baixo comprometimento da equipe     | Baixo rendimento dos membros nas entregas ao longo do projeto                             | Manter um alinhamento de todos os membros com as demandas das atividades realizadas    | Reatribuição das atividades entre os demais membros                   |
| Planejamento ruim                   | Planejamento com definição de datas não condizentes com o contexto da equipe e do projeto | Alinhamento da equipe com os prazos estabelecidos durante todo o contexto do projeto   | Revisão do backlog e do planejamento dos ciclos                       |

### 2.5. Critérios de Replanejamento

O projeto deverá ser replanejado em caso de:

- O projeto deverá ser replanejado em caso de:
- Escopo de projeto muito grande ou muito curto para o tempo da disciplina.
- Saída ou não participação de um ou mais membros da equipe.
- Alteração no escopo ou objetivos do projeto.
- Atraso acumulado de alguma parte do ciclo de desenvolvimento.

Em caso de haver alteração no plano do projeto, a equipe deverá:

- Reavaliar os requisitos.
- Revisar os ciclos de desenvolvimento.
- Reavaliar o cronograma.
- Realocar as tarefas.

## 3. PROCESSOS ESCOLHIDOS

### 3.1. PROCESSOS DE ENGENHARIA DE SOFTWARE

Nosso projeto tem um prazo curto e fixo para entrega, e ainda não temos todos os requisitos do produto definidos. Para lidar com essas incertezas e aproveitar a disponibilidade do cliente, escolhemos adotar a abordagem de desenvolvimento ScrumXP. Essa metodologia ágil nos permite ser flexíveis e realizar atividades simultâneas, o que ajuda a adiantar nosso trabalho. Com o ScrumXP, teremos um ciclo de vida ágil e poderemos receber feedback constante do cliente para melhorar o produto. Isso traz mais transparência e controle, gerando confiança no cliente. Como temos um prazo curto e ainda não conhecemos todos os requisitos, as revisões e planejamentos de sprint serão fundamentais para refinamos os requisitos a cada sprint, aproveitando ao máximo a disponibilidade do cliente.

### 3.2. PROCESSO DE ENGENHARIA DE REQUISITOS

Levando em conta que o processo de desenvolvimento escolhido foi ágil, também fizemos a escolha do Processo de Engenharia de Requisitos participativo. Isso porque o processo participativo prevê uma relação próxima e constante com o cliente e um fluxo de trabalho formado por iterações contínuas na qual a equipe de desenvolvimento realiza pequenas atividades que são validadas pelo cliente. Esse comportamento do processo participativo interage muito bem com o processo ágil por terem os mesmos princípios. Com isso, tendo como referência Sommerville, que diz que o processo de escolha de requisitos deve passar por um estudo de viabilidade, levantamento e análise, pela documentação e validação, todos esses processos terão a participação direta do cliente.

## 4. ATIVIDADES

### 4.1. Atividade 1 - Requisitos

| Atividade                 | Método                            | Ferramenta    | Entrega                                                                                           |
| ------------------------- | --------------------------------- | ------------- | ------------------------------------------------------------------------------------------------- |
| Elicitação e Descoberta   | Entrevista                        | Discord       | Conversa da equipe com o cliente buscando extrair informações para a definição dos requisitos.    |
| Análise e Consenso        | Reunião                           | Discord       | Conciliar desenvolvedor com cliente em relação aos requisitos para o projeto.                     |
| Declaração                | Histórias de usuários             | Github e Miro | Comunicação clara e com linguagem natural de uma forma a deixar claro os requisitos estabelecidos |
| Organização e Atualização | Product Backlog                   | Kanban (Miro) | Manter uma organização e observar o estado de cada requisito.                                     |
| Representação             | Protótipo                         | Figma         | Apresentação visual de alta e baixa fidelidade dos requisitos simulando a sua aplicação final.    |
| Verificação e Validação   | Revisão e Inspeção dos requisitos | Google Docs   | Confirmação de que os requisitos corretos foram feitos da maneira correta                         |

### 4.2. Atividade 2 - Design

| Atividade            | Método                        | Ferramenta    | Entrega                                          |
| -------------------- | ----------------------------- | ------------- | ------------------------------------------------ |
| Interface de usuário | Protótipo de Baixa fidelidade | Papel e Lápis | Protótipo para entendimento inicial da aplicação |
| Interface de usuário | Protótipo de Alta fidelidade  | Figma         | Protótipo das interfaces do aplicativo           |

### 4.3. Atividade 3 - Construção

| Atividade                          | Método               | Ferramenta | Entrega                                                              |
| ---------------------------------- | -------------------- | ---------- | -------------------------------------------------------------------- |
| Implementação do MVP1 e MVP2       | Programação em pares |            | Desenvolvimento das entregas da aplicação                            |
| Validação do produto com o cliente | Reunião              | Discord    | Validar se as entregas realizadas pela equipe atendem aos requisitos |

### 4.4. Atividade 4 - Teste

| Atividade                                 | Método         | Ferramenta | Entrega                                                           |
| ----------------------------------------- | -------------- | ---------- | ----------------------------------------------------------------- |
| Teste das unidades e métodos da aplicação | Teste unitário | VsCode     | Identificação e correção de erros no desenvolvimento da aplicação |

## 5. LIÇÕES APRENDIDAS

### 5.1. Unidade 1

Na Unidade 1 tivemos contato com o que é realmente a Engenharia de Requisitos. Tivemos um maior entendimento do papel dos requisitos no projeto e como eles devem ser trabalhados durante todo o processo, com todas as suas atividades fixas e as suas diferentes abordagens, dependendo do contexto do projeto.

## 6 REFERÊNCIAS BIBLIOGRÁFICAS

Uso de medicamentos de forma incorreta: <a href="http://www.conselho.saude.gov.br/ultimas_noticias/2005/medicamentos.htm">http://www.conselho.saude.gov.br/ultimas_noticias/2005/medicamentos.htm</a>
