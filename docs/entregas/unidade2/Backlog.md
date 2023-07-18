# Backlog

## Introdução

Nesta seção será dividido o Backlog a ser trabalhado nas sprints do projeto. Ele estará dividido em Temas (T), Épicos (EP) e User Stories (US).

## TEMA 01 Tratamentos

ÉPICO 01 Tratamentos Médicos: (EP01) Eu como usuário quero fazer um registro de todos os meus tratamentos médicos, para saber os remédios vinculados a ele.

_Tabela 01 T01EP01_

|  MVP | EP04 | User Story | Critérios de aceitação |
|------|------|------------|------------------------|
| N/A | US01 | Eu como usuário quero listar os tratamentos registrados, para ter uma melhor visualização sobre eles. |  N/A  |
| N/A | US02 | Eu como usuário quero editar tratamentos, para altera-los ao meu gosto. | N/A |
| N/A | US03 | Eu como usuário quero cadastrar tratamentos com medicamentos vinculados para acompanhá-los ao decorrer do tempo. | N/A |
| N/A | US04 | Eu como usuário quero deletar tratamentos, para manter somente os tratamentos que estou realmente fazendo. fazendo. | N/A |

## TEMA 02 Notificação

Épico 02 Notificações: (EP02) Eu como usuário quero ter a opção de receber uma notificação para tomar meus remédios na hora correta.

_Tabela 02 T02EP02_

|  MVP | EP04 | User Story | Critérios de aceitação |
|------|------|------------|------------------------|
| MVP 1 | US05 | Eu como usuário quero possuir uma notificação vinculado ao horário correto de uso de meu medicamento para me lembrar de tomar o remédio. | - Eu preciso que essa notificação apareça na tela de travamento do meu celular. |
| MVP 2 | US06 | Eu como usuário quero programar a notificação para tocar novamente daqui 5 minutos para eu poder me planejar melhor. | - O usuário deve ter a opção de ativar a notificação para tocar novamente em 5 minutos. <br> - A notificação deve incluir um botão para ativar a repetição da notificação em 5 minutos. <br> - Ao selecionar a opção de repetição, a notificação deve ser programada para tocar novamente exatamente após 5 minutos. <br> - A repetição da notificação em 5 minutos deve funcionar corretamente mesmo se o aplicativo estiver em segundo plano ou o dispositivo estiver bloqueado. |
| MVP 1 | US07 | Eu como usuário quero poder confirmar o uso de um medicamento por uma tela de confirmação gerada pela notificação do remédio para registrar o uso do meu medicamento | - Eu quero ser direcionado a tela de confirmação de uso pela notificação ao clicar. <br> - A notificação deve conter o medicamento que preciso tomar com nome, dosagem, e horário que deveria tomar.<br> - Eu quero que seja subtraído uma dosagem das dosagens que possuo após confirmar o uso. |
| MVP 2 | US08 | Eu como usuário quero visualizar um temporizador em contagem regressiva após confirmar na tela de confirmação para saber quando devo tomar minha próxima dose |- Após confirmar na tela de confirmação para tomar a dose do medicamento, o usuário na tela de meus remédios e remédio dos dia deve ver uma tela que exibe um temporizador em contagem regressiva.<br>- O temporizador deve ser claramente visível para o usuário e exibido de forma intuitiva.<br>- O tempo exibido no temporizador deve corresponder ao intervalo de tempo restante até a próxima dose.<br>- O temporizador deve ser atualizado em tempo real, mostrando a contagem regressiva de forma precisa e consistente.<br>- O sistema deve considerar eventuais atrasos ou adiantamentos na administração da dose e ajustar o temporizador de acordo.|
| MVP 2 | US20 | Eu como usuário quero enviar uma mensagem programada para uma pessoa quando tiver poucas dosagens disponíveis para solicitar novos medicamentos antes de acabar. | - O usuário deve ter a opção de programar o envio de uma mensagem para uma pessoa específica quando tiver poucas dosagens de um medicamento disponíveis<br>- O usuário deve poder selecionar a pessoa para quem a mensagem será enviada<br>- O sistema deve fornecer uma opção para personalizar o conteúdo da mensagem, incluindo informações relevantes, como o nome do medicamento, a quantidade restante e a solicitação para obter uma nova receita<br>- O usuário deve ter a opção de revisar a mensagem antes do envio<br>- O sistema deve enviar a mensagem por meio do método de comunicação especificado (por exemplo, SMS, e-mail, aplicativo de mensagens) para a pessoa selecionada<br>- O sistema deve fornecer um feedback claro em caso de erros ou problemas durante o processo de programação ou envio da mensagem |

## TEMA 03 Medicamentos

Épico 03 remédios: (EP03) Eu como usuário quero registrar todos os remédios que eu estou tomando para saber quais devo tomar depois.

_Tabela 03 T03EP03_

|  MVP  | EP04 | User Story | Critérios de aceitação |
|-------|------|------------|------------------------|
| MVP 1 | US09 | Eu como usuário quero cadastrar meus medicamentos para consultá-los depois. | - Cada medicamento deve ter nome, quantidade de conteúdo por dosagem, unidade de medida da dosagem (comprimidos, ml…), periodicidade da dosagem, quantidade total de conteúdo do remédio, observações, horário de começo do alarme.<br> - O Sistema não pode aceitar a adição de remedio com a dosagem sem ser preenchida ou com o valor 0. <br>- O Sistema não pode aceitar a adição de remedio com a quantidade sem ser preenchida. |
| MVP 1 | US10 | Eu como usuário quero ver uma lista de medicamentos que devo tomar no dia atual, para me planejar antecipadamente. |- Eu quero que essa lista seja atualizada às 00:00.<br>- Essa lista deve conter o nome e o horário que eu tenho que tomar cada medicamento no dia.|
| MVP 1 | US11 | Eu como usuário quero ver uma lista com todos os meus medicamentos cadastrados para consultar em outro momento. | - Cada medicamento na lista deve ter nome, quantidade de conteúdo por dosagem, periodicidade da dosagem, temporizador com contagem regressiva para próximo alarme. <br> - Eu quero visualizar a lista em ordem alfabética. <br> - Eu quero visualizar a barra de progresso com as doses que ainda faltam para o remédio no dia.|
| MVP 2 | US12 | Eu como usuário quero editar medicamentos, para altera-los ao meu gosto. | - O usuário deve ter a opção de editar medicamentos existentes. <br> - A funcionalidade de edição deve estar facilmente acessível e visível para o usuário. <br> - O usuário deve ser capaz de editar informações básicas do medicamento, como nome, dosagem e horários de administração. <br> - O sistema deve permitir ao usuário adicionar informações adicionais relevantes, como notas, instruções especiais ou restrições. <br> - O usuário deve ser capaz de salvar as alterações feitas no medicamento. <br> - As alterações feitas nos medicamentos devem ser refletidas imediatamente em todas as partes do aplicativo onde os medicamentos são exibidos. <br> - O sistema deve garantir a consistência e validade dos dados inseridos pelo usuário ao editar os medicamentos. |
| MVP 1 | US13 | Eu como usuário quero deletar medicamentos, para manter somente  os que estou realmente usando | - Eu quero ter a opção de confirmar a deleção.<br>- Eu quero que a lista de medicamentos seja atualizada assim que for deletado um ítem. |
| N/A | US14 | Eu como usuário quero poder filtrar os medicamentos que tomo por dia de uso para me planejar antecipadamente. | N/A |
| MVP 2 | US15 | Eu como usuário quero buscar os medicamentos por nome para saber quando devo tomá-los. | - O usuário deve ter a opção de realizar uma busca por nome de medicamento. <br>- A funcionalidade de busca por nome deve ser facilmente acessível e visível para o usuário.<br>- O usuário deve ser capaz de inserir o nome do medicamento na barra de busca.<br>- O sistema deve retornar os resultados da busca de forma precisa e relevante, exibindo os medicamentos que correspondem ao nome pesquisado.<br>- Os resultados da busca devem incluir informações relevantes sobre os medicamentos, como nome, dosagem e etc.<br>- O sistema deve permitir que o usuário clique em um medicamento nos resultados da busca para visualizar mais detalhes sobre ele.<br>- Caso nenhum medicamento corresponda ao nome pesquisado, o sistema deve fornecer um feedback claro ao usuário, informando que nenhum resultado foi encontrado. |
| MVP 1 | US16 | Eu como usuário quero registrar o uso do meu medicamento por meio de uma tela de confirmação para manter um registro dos remédios que tomei. | - Eu quero que essa tela de confirmação seja acessada pelo app. <br>- Eu quero poder confirmar o uso do medicamento a qualquer momento depois do horário de tomar. <br>- A tela de confirmação deve conter o medicamento que preciso tomar com nome, dosagem, e horário que deveria tomar. <br>- Eu quero que seja subtraído uma dosagem das dosagens que possuo após confirmar o uso. <br>|
| MVP 2 | US17 | Eu como usuário quero receber uma notificação quando possuir apenas 3 dosagens para pedir para o médico uma nova receita. | - Quando o número de dosagens restantes atingir 3, o usuário deve receber uma notificação. <br> - A notificação deve ser exibida de forma clara e visível para o usuário. <br> - A notificação deve incluir informações relevantes, como o medicamento em questão e a quantidade restante. <br> - O usuário deve receber a notificação em um momento adequado, depois de tomar a 4 dose. <br> - A notificação deve ser persistente até que o usuário a acesse ou a marque como lida. <br> - O usuário deve receber um feedback visual ou sonoro quando a notificação for recebida. <br> - A contagem de dosagens deve ser precisa, levando em consideração as dosagens corretamente consumidas e excluindo quaisquer dosagens descartadas. |

## TEMA 04 Histórico

Épico 04 registro: Eu como usuário quero ver um registro dos remédios que tomei desde que baixei o APP para lembrar os remédios que já tomei.

_Tabela 04 T04EP04_

|  MVP  | EP04 | User Story | Critérios de aceitação |
|-------|------|------------|------------------------|
| MVP 2 | US18 | Eu como usuário quero um registro com nome e data de todos os remédios que tomei desde que baixei o APP para poder ter acesso a essas informações futuramente. | - O sistema deve registrar automaticamente o nome e a data de cada remédio tomado pelo usuário desde o momento em que o aplicativo foi baixado.<br>- O registro dos remédios tomados deve ser armazenado de forma segura e persistente no sistema, permitindo o acesso futuro às informações.<br>- O usuário deve ter a opção de visualizar o registro completo dos remédios tomados.<br>- O registro deve exibir as informações relevantes de cada remédio tomado, incluindo o nome do medicamento e a data em que foi tomado.<br>- O sistema deve manter a integridade do registro, garantindo que as informações registradas não sejam perdidas ou corrompidas. |
| MVP 2 | US19 | Eu como usuário quero gerar um arquivo com o registro de nome e data de todos os remédios que tomei desde que baixei o APP para poder baixar esse relatório. | - O usuário deve ter a opção de gerar um arquivo de relatório com o registro completo dos remédios tomados desde o momento em que o aplicativo foi baixado.<br>- O formato do arquivo de relatório deve ser compatível e adequado para download.<br>- O relatório gerado deve incluir o nome e a data de cada remédio tomado, organizados de forma clara e legível.<br>- O relatório gerado deve refletir as informações mais atualizadas do registro de remédios tomados no momento em que o relatório é gerado.<br>- O arquivo de relatório gerado deve ser disponibilizado para download imediato e estar acessível ao usuário de forma conveniente. |
| MVP 1 | US21 | Eu como usuário quero visualizar o registro de todos os remédios que tomei  no dia para poder ter o controle do uso dos meus medicamentos. |- Eu quero poder diferenciar visualmente (pela coloração) os remédios que eu tomei dos que eu não tomei.<br>- Eu quero ver o horário que tomei o remédio.|

## MVP 1

O MVP 1 consistirá das User Sotries:

 1. US11: Eu como usuário quero ver uma lista com todos os meus medicamentos cadastrados para consultar em outro momento. 
 2. US13: Eu como usuário quero deletar medicamentos, para manter somente os tratamentos que estou realmente fazendo. 
 3. US07: Eu como usuário quero poder confirmar o uso de um medicamento por uma tela de confirmação gerada pela notificação do remédio para registrar o uso do meu medicamento.
 4. US09: Eu como usuário quero cadastrar meus medicamentos para consultá-los depois.
 5. US16: Eu como usuário quero registrar o uso do meu medicamento por meio de uma tela de confirmação para manter um registro dos remédios que tomei.
 6. US21: Eu como usuário quero visualizar o registro de todos os remédios que tomei  no dia para poder ter o controle do uso dos meus medicamentos.
 7. US10: Eu como usuário quero ver uma lista de medicamentos que devo tomar no dia atual, para me planejar antecipadamente.
 8. US05: Eu como usuário quero possuir uma notificação vinculado ao horário correto de uso de meu medicamento para me lembrar de tomar o remédio.

## MVP 2

O MVP 2 consistirá das User Stories:

 1. US06: Eu como usuário quero programar a notificação para tocar novamente daqui 5 minutos para eu poder me planejar melhor.
 2. US17: Eu como usuário quero receber uma notificação quando possuir apenas 3 dosagens para pedir para o médico uma nova receita.
 3. US08: Eu como usuário quero visualizar um temporizador em contagem regressiva após confirmar na tela de confirmação para saber quando devo tomar minha próxima dose.
 4. US15: Eu como usuário quero buscar os medicamentos por nome para saber quando devo tomá-los.
 5. US20: Eu como usuário quero enviar uma mensagem programada para uma pessoa quando tiver poucas dosagens disponíveis para solicitar novos medicamentos antes de acabar.
 6. US18: Eu como usuário quero um registro com nome e data de todos os remédios que tomei desde que baixei o APP para poder ter acesso a essas informações futuramente.
 7. US19: Eu como usuário quero gerar um arquivo com o registro de nome e data de todos os remédios que tomei desde que baixei o APP para poder baixar esse relatório.
 8. US12: Eu como usuário quero editar medicamentos, para altera-los ao meu gosto.

## DoR & DoD

 O DoR (Definition of Ready // Definição de Pronto) e o DoD ((Definition of Done // Definição de Feito)) definem o que é estar pronto para desenvolvimento, e o que é estar feito para a equipe do projeto. Sendo assim, abaixo será apresentado o DoR e o DoD para a equipe.

## DoR

 Para iniciar o desenvolvimento de cada US é necessário que ela cumpra alguns requisitos, sendo eles:

 - O seu protótipo está feito e claro compreendido para toda equipe.
 - A US está pronta quando foi refinada e todos seus aspectos são conhecidos pela equipe.
 - Os seus critérios de aceitação são claros compreendidos para toda equipe. 

## DoD

Para uma US ser considerada concluída, é necessário que ela cumpra alguns requisitos, sendo eles:

 - Cumprir com todos os critérios de aceitação.
 - Estar completamente funcional para o usuário.
 - Passar em testes de usabilidade no emulador.

## Histórico de Revisão

| Data     | Versão | Descrição          | Autor                 |
| -------- | ------ | ------------------ | --------------------- |
| 17/05/23 | 1.0    | Criação do arquivo | Rodrigo               |
| 25/05/23 | 1.1    | Alteração Requisitos| Rodrigo              |
| 18/06/23 | 1.2    | Inclusão critérios | Rodrigo               |
| 18/06/23 | 1.2.1  | inclusão DoD e DoR | Rodrigo               |

