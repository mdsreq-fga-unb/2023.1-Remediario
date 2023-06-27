# Behavior Driven Development
## Histórico de Revisão
| Data | Versão | Descrição | Autor(es) |
|------|--------|-----------|-----------|
| 27/06/2023 | 1.0 | Primeira versão do BDD | Mateus de Almeida |

## 1. BDD
### 1.1. **User Story: Eu como usuário quero cadastrar meus medicamentos para consultá-los depois.**

#### 1.1.1. Critério de Aceitação: Cada medicamento deve ter nome, quantidade de conteúdo por dosagem, unidade de medida da dosagem (comprimidos, ml…), periodicidade da dosagem, quantidade total de conteúdo do remédio, observações, horário de começo do alarme.

CASO VÁLIDO:

    Cenário - Cadastrar medicamento com sucesso
        1. Dado que o usuário está na tela de cadastro de medicamento
        2. Quando o usuário preenche todos os campos corretamente
        3. Então o sistema cadastra o medicamento com nome, quantidade de conteúdo por dosagem, unidade de medida da dosagem, periodicidade da dosagem, quantidade total de conteúdo do remédio, observações e horário de começo do alarme


#### 1.1.2. Critério de Aceitação: Eu quero que após cadastrar, a lista de medicamentos seja atualizada imediatamente.

CASO VÁLIDO:

    Cenário - Atualizar lista de medicamentos após cadastro
        1. Dado que o usuário cadastrou um novo medicamento
        2. Quando o usuário finaliza o cadastro
        3. Então o sistema atualiza a lista de medicamentos exibida na tela


### 1.2. **User Story: Eu como usuário quero ver uma lista com todos os meus medicamentos cadastrados para consultar em outro momento.**

#### 1.2.1. Critério de Aceitação: Cada medicamento na lista deve ter nome, quantidade de conteúdo por dosagem, periodicidade da dosagem, temporizador com contagem regressiva para próximo alarme

CASO VÁLIDO:

    Cenário - Exibir lista de medicamentos com informações relevantes
        1. Dado que o usuário está na tela da lista de medicamentos
        2. Quando o usuário visualiza a lista de medicamentos
        3. Então o sistema exibe cada medicamento com nome, quantidade de conteúdo por dosagem, periodicidade da dosagem e um temporizador com contagem regressiva para o próximo alarme


#### 1.2.2. Eu quero visualizar a barra de progresso com as doses que ainda faltam para o remédio no dia.

CASO VÁLIDO:

    Cenário - Exibir barra de progresso das doses faltantes do medicamento do dia
        1. Dado que o usuário está na tela da lista de medicamentos
        2. Quando o usuário visualiza um medicamento da lista
        3. Então o sistema exibe uma barra de progresso indicando as doses que ainda faltam para o medicamento no dia


### 1.3. **User Story: Eu como usuário quero deletar medicamentos, para manter somente os tratamentos que estou realmente fazendo.**

#### 1.3.1. Critério de Aceitação: Eu quero ter a opção de confirmar a deleção.

CASO VÁLIDO:

    Cenário - Confirmar a deleção de um medicamento
        1. Dado que o usuário está na tela da lista de medicamentos
        2. Quando o usuário seleciona a opção de deletar um medicamento e o usuário confirma a deleção
        3. Então o sistema remove o medicamento da lista


#### 1.3.2. Critério de Aceitação: Eu quero que a lista de medicamentos seja atualizada assim que eu deletar.

CASO VÁLIDO:

    Cenário - Atualizar lista de medicamentos após a deleção
        1. Dado que o usuário está na tela da lista de medicamentos e a lista de medicamentos possui um medicamento a ser deletado
        2. Quando o usuário confirma a deleção desse medicamento
        3. Então o sistema remove o medicamento da lista e atualiza a lista de medicamentos exibida na tela


### 1.4. **User Story: Eu como usuário quero poder confirmar o uso de um medicamento por uma tela de confirmação gerada pela notificação do remédio para registrar o uso do meu medicamento.**

#### 1.4.1. Critério de Aceitação: Eu quero poder confirmar o uso a partir da tela de bloqueio do celular.

CASO VÁLIDO:

    Cenário - Confirmar uso a partir da tela de bloqueio do celular
        1. Dado que o celular está bloqueado
        2. Quando o usuário recebe uma notificação de medicamento na tela de bloqueio
        3. Então o usuário pode confirmar o uso do medicamento diretamente da tela de bloqueio do celular

#### 1.4.2. Critério de Aceitação: A notificação deve conter o medicamento que preciso tomar com nome, dosagem, e horário que deveria tomar.

CASO VÁLIDO:

    Cenário - Exibir informações do medicamento na notificação
        1. Dado que o usuário recebe uma notificação de medicamento
        2. Quando o usuário visualiza a notificação
        3. Então a notificação exibe o nome, a dosagem e o horário do medicamento que o usuário precisa tomar


#### 1.4.3. Critério de Aceitação: Eu quero que seja subtraído uma dosagem das dosagens que possuo após confirmar o uso.

CASO VÁLIDO:

    Cenário - Subtrair uma dosagem após confirmar o uso do medicamento
        1. Dado que o usuário confirmou o uso de um medicamento pela notificação
        2. Quando o sistema registra o uso do medicamento
        3. Então o sistema subtrai uma dosagem das dosagens disponíveis para o medicamento registrado


### 1.5. **User Story: Eu como usuário quero possuir uma notificação vinculado ao horário correto de uso de meu medicamento para me lembrar de tomar o remédio.**

#### 1.5.1. Critério de Aceitação: Eu preciso que essa notificação apareça na tela de travamento do meu celular.

CASO VÁLIDO:

    Cenário - Mostrar notificação na tela de travamento do celular
        1. Dado que o celular está bloqueado
        2. Quando chegar o horário correto de uso de um medicamento
        3. Então o sistema mostra uma notificação na tela de travamento do celular vinculada ao horário correto de uso do medicamento


### 1.6. **User Story: Eu como usuário quero registrar o uso do meu medicamento por meio de uma tela de confirmação para manter um registro dos remédios que tomei.**

#### 1.6.1. Critério de Aceitação: Eu quero que essa tela de confirmação seja acessada pelo app.

CASO VÁLIDO:

    Cenário - Acessar a tela de confirmação pelo app
        1. Dado que o usuário está no aplicativo
        2. Quando o usuário acessa a tela de confirmação
        3. Então o sistema exibe a tela de confirmação para registrar o uso do medicamento

#### 1.6.2. Critério de Aceitação: Eu quero poder confirmar o uso do medicamento a qualquer momento depois do horário de tomar.

CASO VÁLIDO:

    Cenário - Confirmar o uso do medicamento após o horário de tomar
        1. Dado que o usuário está na tela de confirmação
        2. Quando o usuário confirma o uso do medicamento
        3. Então o sistema registra o uso do medicamento mesmo após o horário programado

#### 1.6.3. Critério de Aceitação: A tela de confirmação deve conter o medicamento que preciso tomar com nome, dosagem, e horário que deveria tomar.

CASO VÁLIDO:

    Cenário - Exibir informações do medicamento na tela de confirmação
        1. Dado que o usuário está na tela de confirmação
        2. Quando o usuário visualiza a tela de confirmação
        3. Então o sistema exibe o nome, a dosagem e o horário do medicamento que o usuário precisa tomar

#### 1.6.4. Critério de Aceitação: Eu quero que seja subtraído uma dosagem das dosagens que possuo após confirmar o uso.

CASO VÁLIDO:

    Cenário - Subtrair uma dosagem após confirmar o uso do medicamento
        1. Dado que o usuário está na tela de confirmação
        2. Quando o usuário confirma o uso do medicamento
        3. Então o sistema subtrai uma dosagem das dosagens disponíveis para o medicamento

### 1.7. **User Story: Eu como usuário quero visualizar o registro de todos os remédios que tomei no dia para poder ter o controle do uso dos meus medicamentos.**

#### 1.7.1. Critério de Aceitação: Eu quero poder diferenciar visualmente (pela coloração) os remédios que eu tomei dos que eu não tomei.

CASO VÁLIDO:

    Cenário - Visualizar registro de remédios tomados no dia
        1. Dado que o usuário está na tela de registro de remédios
        2. Quando o usuário visualiza o registro dos remédios tomados no dia
        3. Então o sistema exibe a lista de remédios com diferenciação visual entre os tomados e os não tomados

#### 1.7.2. Critério de Aceitação: Eu quero ver o horário que tomei o remédio.

CASO VÁLIDO:

    Cenário - Visualizar horário de tomada do remédio
        1. Dado que o usuário está na tela de registro de remédios
        2. Quando o usuário visualiza o registro de um remédio específico
        3. Então o sistema exibe o horário em que o remédio foi tomado

### 1.8. **User Story: Eu como usuário quero ver uma lista de medicamentos que devo tomar no dia atual, para me planejar antecipadamente.**

#### 1.8.1. Critério de Aceitação: Eu quero que essa lista seja atualizada às 00:00.

CASO VÁLIDO:

    Cenário - Atualizar lista de medicamentos diariamente
        1. Dado que o dia atual é um novo dia
        2. Quando o relógio marca 00:00
        3. Então o sistema atualiza a lista de medicamentos para o dia atual

#### 1.8.2. Critério de Aceitação: Essa lista deve conter o nome e o horário que eu tenho que tomar cada medicamento no dia.

CASO VÁLIDO:

    Cenário - Exibir lista de medicamentos do dia atual
        1. Dado que o usuário está na tela de visualização de medicamentos do dia
        2. Quando o usuário acessa a lista de medicamentos do dia atual
        3. Então o sistema exibe uma lista com o nome e o horário de cada medicamento a ser tomado no dia

### 1.9. **User Story: Eu como usuário quero programar a notificação para tocar novamente daqui 5 minutos para eu poder me planejar melhor.**

#### 1.9.1. Critério de Aceitação: O usuário deve ter a opção de ativar a notificação para tocar novamente em 5 minutos.

CASO VÁLIDO:

    Cenário - Opção de repetição da notificação em 5 minutos
        1. Dado que o usuário está na tela de confirmação do uso do medicamento
        2. Quando o usuário visualiza as opções da notificação
        3. Então o sistema exibe a opção de ativar a repetição em 5 minutos


#### 1.9.2. Critério de Aceitação: A tela de confirmação deve incluir um botão para ativar a repetição da notificação em 5 minutos.

CASO VÁLIDO:

    Cenário - Botão para ativar repetição da notificação em 5 minutos
        1. Dado que o usuário está na tela de confirmação do uso do medicamento
        2. Quando o usuário visualiza a tela de confirmação
        3. Então o sistema exibe um botão para ativar a repetição da notificação em 5 minutos


#### 1.9.3. Ao selecionar a opção de repetição, a notificação deve ser programada para tocar novamente exatamente após 5 minutos.

CASO VÁLIDO:

    Cenário - Programação da repetição da notificação em 5 minutos
        1. Dado que o usuário selecionou a opção de repetição em 5 minutos
        2. Quando o sistema recebe a confirmação da repetição
        3. Então o sistema programa a notificação para tocar novamente exatamente após 5 minutos


#### 1.9.4. A repetição da notificação em 5 minutos deve funcionar corretamente mesmo se o aplicativo estiver em segundo plano ou o dispositivo estiver bloqueado.

CASO VÁLIDO:

    Cenário - Repetição da notificação em 5 minutos em segundo plano ou dispositivo bloqueado
        1. Dado que o usuário ativou a repetição da notificação em 5 minutos
        2. Quando o aplicativo estiver em segundo plano ou o dispositivo estiver bloqueado
        3. Então o sistema deve garantir que a notificação seja repetida corretamente após 5 minutos

### 1.10. **User Story: Eu como usuário quero receber uma notificação e um alerta quando possuir apenas 3 dosagens para pedir para o médico uma nova receita.**

#### 1.10.1. Critério de Aceitação: Quando o número de dosagens restantes atingir 3, o usuário deve receber uma notificação.

CASO VÁLIDO:

    Cenário - Notificação quando restarem 3 dosagens
        1. Dado que o usuário possui um medicamento cadastrado e o número de dosagens restantes é igual a 3
        2. Quando o usuário estiver na tela principal do aplicativo
        3. Então o sistema deve exibir uma notificação informando ao usuário que restam apenas 3 dosagens


#### 1.10.2. Critério de Aceitação: A notificação deve ser exibida de forma clara e visível para o usuário.

CASO VÁLIDO:

    Cenário - Exibição clara e visível da notificação
        1. Dado que o usuário recebeu uma notificação informando sobre as 3 dosagens restantes
        2. Quando o usuário visualizar a notificação
        3. Então a notificação deve ser exibida de forma clara e visível, sem ser obstruída por outros elementos da interface
 

#### 1.10.3. Critério de Aceitação:  A notificação deve incluir informações relevantes, como o medicamento em questão e a quantidade restante.

CASO VÁLIDO:

    Cenário - Informações relevantes na notificação
        1. Dado que o usuário recebeu uma notificação informando sobre as 3 dosagens restantes do medicamento A
        2. Quando o usuário visualizar a notificação
        3. Então a notificação deve exibir o nome do medicamento (A) e a quantidade restante (3 dosagens)
 

#### 1.10.4. Critério de Aceitação: O usuário deve receber a notificação em um momento adequado, depois de tomar a 4 dose.

CASO VÁLIDO:

    Cenário - Momento adequado para recebimento da notificação
        1. Dado que o usuário tomou a 4ª dose do medicamento
        2. Quando o usuário estiver na tela principal do aplicativo
        3. Então o sistema deve exibir uma notificação informando ao usuário que restam apenas 3 dosagens


#### 1.10.5. Critério de Aceitação: A notificação deve ser persistente até que o usuário a acesse ou a marque como lida.

CASO VÁLIDO:

    Cenário - Persistência da notificação até que seja acessada ou marcada como lida
        1. Dado que o usuário recebeu uma notificação informando sobre as 3 dosagens restantes
        2. Quando o usuário visualizar a notificação
        3. Então a notificação deve permanecer visível até que o usuário a acesse ou a marque como lida


#### 1.10.6. Critério de Aceitação: O usuário deve receber um feedback visual ou sonoro quando a notificação for recebida.

CASO VÁLIDO:

    Cenário - Feedback visual ou sonoro ao receber a notificação
        1. Dado que o usuário recebeu uma notificação informando sobre as 3 dosagens restantes
        2. Quando o usuário visualizar a notificação
        3. Então o sistema deve fornecer um feedback visual ou sonoro para indicar ao usuário que a notificação foi recebida


#### 1.10.7. Critério de Aceitação: A contagem de dosagens deve ser precisa, levando em consideração as dosagens corretamente consumidas e excluindo quaisquer dosagens descartadas.

CASO VÁLIDO:

    Cenário - Precisão na contagem de dosagens
        1. Dado que o usuário possui um medicamento cadastrado com uma certa quantidade de dosagens
        2. Quando o sistema calcular a quantidade restante de dosagens
        3. Então o sistema deve exibir o valor correto de dosagens restantes

### 1.11. **User Story: Eu como usuário quero visualizar um temporizador em contagem regressiva após confirmar na tela de confirmação para saber quando devo tomar minha próxima dose**

#### 1.11.1. Critério de Aceitação: Após confirmar na tela de confirmação para tomar a dose do medicamento, o usuário na tela de meus remédios e remédio dos dia deve ver uma tela que exibe um temporizador em contagem regressiva.

CASO VÁLIDO:

    Cenário - Exibição do temporizador após confirmação para tomar a dose
        1. Dado que o usuário confirmou a tomada da dose na tela de confirmação
        2. Quando o usuário estiver na tela "Meus Remédios" ou "Remédios do Dia"
        3. Então o sistema deve exibir um temporizador em contagem regressiva para a próxima dose do medicamento


#### 1.11.2. Critério de Aceitação: O temporizador deve ser claramente visível para o usuário e exibido de forma intuitiva.

CASO VÁLIDO:

    Cenário - Visibilidade e exibição intuitiva do temporizador
        1 .Dado que o usuário está visualizando o temporizador em contagem regressiva
        2. Quando o usuário olhar para a tela
        3. Então o temporizador deve ser claramente visível e exibido de forma intuitiva, sem confundir ou obstruir a informação


#### 1.11.3. Critério de Aceitação: O tempo exibido no temporizador deve corresponder ao intervalo de tempo restante até a próxima dose.

CASO VÁLIDO:

    Cenário - Tempo correspondente ao intervalo de tempo restante no temporizador
        1. Dado que o usuário tem uma próxima dose programada para daqui a 2 horas
        2. Quando o usuário visualizar o temporizador
        3. Então o tempo exibido no temporizador deve ser de 2 horas, contando regressivamente até a próxima dose


#### 1.11.4. Critério de Aceitação: O temporizador deve ser atualizado em tempo real, mostrando a contagem regressiva de forma precisa e consistente.

CASO VÁLIDO:

    Cenário - Atualização em tempo real do temporizador
        1. Dado que o usuário está visualizando o temporizador em contagem regressiva
        2. Quando o tempo decorrido desde a visualização do temporizador aumentar
        3. Então o temporizador deve ser atualizado em tempo real, mostrando a contagem regressiva de forma precisa e consistente
 

#### 1.11.5. Critério de Aceitação: O sistema deve considerar eventuais atrasos ou adiantamentos na administração da dose e ajustar o temporizador de acordo.

CASO VÁLIDO:

    Cenário - Ajuste do temporizador para acomodar atrasos ou adiantamentos na administração da dose
        1. Dado que o usuário possui uma próxima dose programada para daqui a 4 horas
        2. E o usuário adianta a administração da dose em 30 minutos
        Quando o usuário visualizar o temporizador
        3. Então o tempo exibido no temporizador deve ser de 3 horas e 30 minutos, considerando o adiantamento na administração da dose


### 1.12. **User Story: Eu como usuário quero buscar os medicamentos por nome para saber quando devo tomá-los.**

#### 1.12.1. Critério de Aceitação:  O usuário deve ter a opção de realizar uma busca por nome de medicamento.

CASO VÁLIDO:

    Cenário - Opção de busca por nome de medicamento
        1. Dado que o usuário está na tela de busca
        2. Quando o usuário selecionar a opção de busca por nome de medicamento
        3. Então o sistema deve disponibilizar um campo de busca para o usuário inserir o nome do medicamento desejado


#### 1.12.2. Critério de Aceitação: A funcionalidade de busca por nome deve ser facilmente acessível e visível para o usuário.

CASO VÁLIDO:

    Cenário - Acessibilidade e visibilidade da funcionalidade de busca por nome
        1. Dado que o usuário está na tela principal do aplicativo
        2. Quando o usuário procurar pela funcionalidade de busca por nome
        3. Então a funcionalidade de busca por nome deve ser facilmente acessível e visível, seja por um ícone de busca ou outro elemento claramente identificável


#### 1.12.3. Critério de Aceitação: O usuário deve ser capaz de inserir o nome do medicamento na barra de busca.

CASO VÁLIDO:

    Cenário - Inserção do nome do medicamento na barra de busca
        1. Dado que o usuário está na tela de busca por nome de medicamento
        2. Quando o usuário digitar o nome do medicamento desejado na barra de busca
        3. Então o sistema deve permitir a inserção do nome do medicamento na barra de busca


#### 1.12.4. Critério de Aceitação: O sistema deve retornar os resultados da busca de forma precisa e relevante, exibindo os medicamentos que correspondem ao nome pesquisado.

CASO VÁLIDO:

    Cenário - Resultados precisos e relevantes da busca por nome de medicamento
        1. Dado que o usuário inseriu o nome de um medicamento na barra de busca
        2. Quando o usuário iniciar a busca
        3. Então o sistema deve retornar os resultados da busca de forma precisa e relevante, exibindo os medicamentos que correspondem ao nome pesquisado


#### 1.12.5. Critério de Aceitação: Os resultados da busca devem incluir informações relevantes sobre os medicamentos, como nome, dosagem e etc.

CASO VÁLIDO:

    Cenário - Informações relevantes nos resultados da busca por nome de medicamento
        1. Dado que o usuário realizou uma busca por nome de medicamento
        2. Quando o sistema retornar os resultados da busca
        3. Então os resultados da busca devem incluir informações relevantes sobre os medicamentos, como nome, dosagem, etc.


#### 1.12.6. Critério de Aceitação: O sistema deve permitir que o usuário clique em um medicamento nos resultados da busca para visualizar mais detalhes sobre ele.
CASO VÁLIDO:

    Cenário - Visualização de detalhes de um medicamento nos resultados da busca
        1. Dado que o usuário realizou uma busca por nome de medicamento
        2. Quando o sistema retornar os resultados da busca e o usuário selecionar um medicamento nos resultados
        3. Então o sistema deve permitir que o usuário clique em um medicamento nos resultados da busca para visualizar mais detalhes sobre ele


#### 1.12.7. Critério de Aceitação:  Caso nenhum medicamento corresponda ao nome pesquisado, o sistema deve fornecer um feedback claro ao usuário, informando que nenhum resultado foi encontrado.

CASO VÁLIDO:

    Cenário - Feedback de nenhum resultado encontrado na busca por nome de medicamento
        1. Dado que o usuário realizou uma busca por nome de medicamento e nenhum medicamento corresponde ao nome pesquisado
        2. Quando o sistema retornar os resultados da busca
        3. Então o sistema deve fornecer um feedback claro ao usuário, informando que nenhum resultado foi encontrado

### 1.13. **User Story: Eu como usuário quero enviar uma mensagem programada para uma pessoa quando tiver poucas dosagens disponíveis para solicitar novos medicamentos antes de acabar.**

#### 1.13.1. Critério de Aceitação: O usuário deve ter a opção de programar o envio de uma mensagem para uma pessoa específica quando tiver poucas dosagens de um medicamento disponíveis

CASO VÁLIDO:

    Cenário - Opção de programar o envio de mensagem com poucas dosagens
        1. Dado que o usuário está com poucas dosagens de um medicamento disponíveis
        2. Quando o usuário selecionar a opção de programar o envio de uma mensagem
        3. Então o sistema deve fornecer a opção para programar o envio de uma mensagem para uma pessoa específica


#### 1.13.2. Critério de Aceitação: O usuário deve poder selecionar a pessoa para quem a mensagem será enviada  

CASO VÁLIDO:

    Cenário - Seleção da pessoa para quem a mensagem será enviada
        1. Dado que o usuário está programando o envio de uma mensagem
        2. Quando o usuário selecionar a pessoa para quem a mensagem será enviada
        3. Então o sistema deve permitir que o usuário selecione a pessoa desejada


#### 1.13.3. Critério de Aceitação: O sistema deve fornecer uma opção para personalizar o conteúdo da mensagem, incluindo informações relevantes, como o nome do medicamento, a quantidade restante e a solicitação para obter uma nova receita

CASO VÁLIDO:

    Cenário - Personalização do conteúdo da mensagem com informações relevantes
        1. Dado que o usuário está programando o envio de uma mensagem
        2. Quando o usuário selecionar a opção de personalizar o conteúdo da mensagem
        3. Então o sistema deve fornecer uma opção para personalizar o conteúdo da mensagem, incluindo informações relevantes, como o nome do medicamento, a quantidade restante e a solicitação para obter uma nova receita


#### 1.13.4. Critério de Aceitação: O usuário deve ter a opção de revisar a mensagem antes do envio

CASO VÁLIDO:

    Cenário - Opção de revisar a mensagem antes do envio
        1. Dado que o usuário personalizou o conteúdo da mensagem
        2. Quando o usuário revisar a mensagem antes do envio
        3. Então o sistema deve permitir que o usuário revise a mensagem antes de confirmar o envio


#### 1.13.5. Critério de Aceitação: O sistema deve enviar a mensagem por meio do método de comunicação especificado (por exemplo, SMS, e-mail, aplicativo de mensagens) para a pessoa selecionada

CASO VÁLIDO:

    Cenário - Envio da mensagem para a pessoa selecionada
        1. Dado que o usuário revisou a mensagem e confirmou o envio
        2. Quando o sistema enviar a mensagem por meio do método de comunicação especificado
        3. Então o sistema deve enviar a mensagem para a pessoa selecionada


#### 1.13.6. Critério de Aceitação: O sistema deve fornecer um feedback claro em caso de erros ou problemas durante o processo de programação ou envio da mensagem

CASO VÁLIDO:

    Cenário - Feedback claro em caso de erros ou problemas no envio da mensagem
        1. Dado que ocorreu um erro ou problema durante o processo de programação ou envio da mensagem
        2. Quando o sistema identificar o erro ou problema
        3. Então o sistema deve fornecer um feedback claro ao usuário, informando o ocorrido

### 1.14. **User Story: Eu como usuário quero um registro com nome e data de todos os remédios que tomei desde que baixei o APP para poder ter acesso a essas informações futuramente.**

#### 1.14.1. Critério de Aceitação: O sistema deve registrar automaticamente o nome e a data de cada remédio tomado pelo usuário desde o momento em que o aplicativo foi baixado.

CASO VÁLIDO:

    Cenário - Registro automático de remédios tomados
        1. Dado que o usuário tomou um remédio
        2. Quando o sistema registrar automaticamente o nome e a data do remédio tomado
        3. Então o sistema deve armazenar essas informações de forma segura e persistente 

#### 1.14.2. Critério de Aceitação: O registro dos remédios tomados deve ser armazenado de forma segura e persistente no sistema, permitindo o acesso futuro às informações.

CASO VÁLIDO:

    Cenário - Acesso futuro ao registro dos remédios tomados
        1. Dado que o usuário deseja acessar o registro dos remédios tomados
        2. Quando o usuário solicitar o acesso ao registro
        3. Então o sistema deve fornecer o registro completo dos remédios tomados desde que o aplicativo foi baixado


#### 1.14.3. Critério de Aceitação: O usuário deve ter a opção de visualizar o registro completo dos remédios tomados.

CASO VÁLIDO:

    Cenário - Opção de visualizar o registro completo dos remédios tomados
        1. Dado que o usuário deseja visualizar o registro completo dos remédios tomados
        2. Quando o usuário selecionar a opção de visualizar o registro
        3 .Então o sistema deve exibir o registro completo dos remédios tomados
 

#### 1.14.4. Critério de Aceitação: O registro deve exibir as informações relevantes de cada remédio tomado, incluindo o nome do medicamento e a data em que foi tomado.

CASO VÁLIDO:

    Cenário - Exibição das informações relevantes no registro de remédios tomados
        1. Dado que o usuário está visualizando o registro dos remédios tomados
        2. Quando o usuário acessar o registro
        3. Então o sistema deve exibir as informações relevantes de cada remédio tomado, incluindo o nome do medicamento e a data em que foi tomado
 

#### 1.14.5. Critério de Aceitação: O sistema deve manter a integridade do registro, garantindo que as informações registradas não sejam perdidas ou corrompidas.

CASO VÁLIDO:

    Cenário - Manter a integridade do registro de remédios tomados
        1. Dado que o sistema registrou os remédios tomados
        2. Quando o sistema armazenar as informações
        3. Então o sistema deve garantir a integridade do registro, evitando perda ou corrupção das informações registradas


#### 1.14.6. Critério de Aceitação: O sistema deve separar os remédios tomados em relação a cada mês de cada ano.

CASO VÁLIDO:

    Cenário - Separação dos remédios tomados por mês e ano
        1. Dado que o usuário deseja visualizar o registro dos remédios tomados
        2. Quando o sistema exibir o registro
        3. Então o sistema deve separar os remédios tomados em relação a cada mês de cada ano
 
### 1.15. **User Story: Eu como usuário quero gerar um arquivo com o registro de nome e data de todos os remédios que tomei desde que baixei o APP para poder baixar esse relatório.**

#### 1.15.1. Critério de Aceitação: O usuário deve ter a opção de gerar um arquivo de relatório com o registro completo dos remédios tomados desde o momento em que o aplicativo foi baixado.

CASO VÁLIDO:

    Cenário - Opção para gerar arquivo de relatório de remédios tomados
        1. Dado que o usuário deseja gerar um relatório dos remédios tomados
        2. Quando o usuário selecionar a opção de gerar o relatório
        3. Então o sistema deve gerar um arquivo de relatório com o registro completo dos remédios tomados desde o momento em que o aplicativo foi baixado


#### 1.15.2. Critério de Aceitação: O formato do arquivo de relatório deve ser compatível e adequado para download.

CASO VÁLIDO:

    Cenário - Formato adequado para download do arquivo de relatório
        1. Dado que o sistema gerou o arquivo de relatório
        2. Quando o usuário solicitar o download do arquivo
        3. Então o sistema deve fornecer o arquivo de relatório em um formato compatível e adequado para download
 

#### 1.15.3. Critério de Aceitação: O relatório gerado deve incluir o nome e a data de cada remédio tomado, organizados de forma clara e legível.

CASO VÁLIDO:

    Cenário - Conteúdo claro e legível no arquivo de relatório
        1. Dado que o sistema gerou o arquivo de relatório
        2. Quando o usuário abrir o arquivo de relatório
        3. Então o relatório deve incluir o nome e a data de cada remédio tomado, organizados de forma clara e legível
 

#### 1.15.4. Critério de Aceitação: O relatório gerado deve refletir as informações mais atualizadas do registro de remédios tomados no momento em que o relatório é gerado.

CASO VÁLIDO:

    Cenário - Informações atualizadas no arquivo de relatório
        1. Dado que o sistema gerou o arquivo de relatório
        2. Quando o usuário abrir o arquivo de relatório
        3. Então o relatório deve refletir as informações mais atualizadas do registro de remédios tomados no momento em que o relatório é gerado


#### 1.15.5. Critério de Aceitação:  O arquivo de relatório gerado deve ser disponibilizado para download imediato e estar acessível ao usuário de forma conveniente.

CASO VÁLIDO:

    Cenário - Download imediato do arquivo de relatório
        1. Dado que o sistema gerou o arquivo de relatório
        2. Quando o usuário solicitar o download do arquivo
        3. Então o arquivo de relatório deve estar disponível para download imediato e ser acessível ao usuário de forma conveniente

### 1.16. **User Story: Eu como usuário quero editar medicamentos, para altera-los ao meu gosto.**

#### 1.16.1. Critério de Aceitação: O usuário deve ter a opção de editar medicamentos existentes.

CASO VÁLIDO:

    Cenário - Opção para editar medicamentos existentes
        1. Dado que o usuário deseja editar um medicamento existente
        2. Quando o usuário selecionar a opção de edição do medicamento
        3. Então o sistema deve permitir que o usuário faça as alterações necessárias no medicamento


#### 1.16.2. Critério de Aceitação: A funcionalidade de edição deve estar facilmente acessível e visível para o usuário.

CASO VÁLIDO:

    Cenário - Acessibilidade da funcionalidade de edição de medicamento
        1. Dado que o usuário está visualizando um medicamento
        2. Quando o usuário procurar pela opção de edição do medicamento
        3. Então a funcionalidade de edição deve estar facilmente acessível e visível para o usuário

#### 1.16.3. Critério de Aceitação: O usuário deve ser capaz de editar informações básicas do medicamento, como nome, dosagem e horários de administração.

CASO VÁLIDO:

    Cenário - Edição de informações básicas do medicamento
        1. Dado que o usuário está editando um medicamento
        2. Quando o usuário fizer alterações nas informações básicas do medicamento, como nome, dosagem e horários de administração
        3. Então o sistema deve permitir que o usuário salve as alterações feitas
 

#### 1.16.4. Critério de Aceitação: O sistema deve permitir ao usuário adicionar informações adicionais relevantes, como notas, instruções especiais ou restrições.

CASO VÁLIDO:

    Cenário - Adição de informações adicionais ao medicamento
        1. Dado que o usuário está editando um medicamento
        2. Quando o usuário adicionar informações adicionais relevantes, como notas, instruções especiais ou restrições
        3. Então o sistema deve permitir que o usuário salve as alterações feitas


#### 1.16.5. Critério de Aceitação: O usuário deve ser capaz de salvar as alterações feitas no medicamento.

CASO VÁLIDO:

    Cenário - Salvamento das alterações feitas no medicamento
        1. Dado que o usuário fez alterações em um medicamento
        2. Quando o usuário selecionar a opção de salvar as alterações
        3. Então o sistema deve atualizar as informações do medicamento com as alterações feitas
 

#### 1.16.6. Critério de Aceitação: As alterações feitas nos medicamentos devem ser refletidas imediatamente em todas as partes do aplicativo onde os medicamentos são exibidos.

CASO VÁLIDO:

    Cenário - Refletindo alterações nos medicamentos em todas as partes do aplicativo
        1. Dado que o usuário fez alterações em um medicamento
        2. Quando o usuário salvar as alterações feitas
        3. Então as alterações devem ser refletidas imediatamente em todas as partes do aplicativo onde os medicamentos são exibidos


#### 1.16.7. Critério de Aceitação: O sistema deve garantir a consistência e validade dos dados inseridos pelo usuário ao editar os medicamentos.

CASO VÁLIDO:

    Cenário - Garantia de consistência e validade dos dados ao editar medicamentos
        1. Dado que o usuário está editando um medicamento
        2. Quando o usuário fizer alterações nos dados do medicamento
        3. Então o sistema deve validar e garantir a consistência dos dados inseridos pelo usuário


