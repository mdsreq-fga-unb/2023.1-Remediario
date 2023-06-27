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

#### 1.8.1. Critério de Aceitação: Essa lista deve conter o nome e o horário que eu tenho que tomar cada medicamento no dia.

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
