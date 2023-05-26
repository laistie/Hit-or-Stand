# Hit or Stand

## Introdução

​	"Hit or Stand" é um aplicativo que conta cartas, utilizando a contagem Hi-Lo, uma das mais conhecidas entre as técnicas utilizadas no Blackjack. Ela consiste em atribuir um valor específico para cada carta para, então, utilizar o resultado na tomada de decisões do jogador, que conseguirá mensurar aproximadamente suas chances de tirar cartas altas ou baixas do baralho.

_____________________________________________________

## Contagem Hi-Lo

| Cartas | Valores na contagem Hi-Lo |
| :----: | :-----------------------: |
| 2 - 6  |            +1             |
| 7 - 9  |             0             |
| 10 - A |            -1             |

​	Como toda técnica de contagem, a Hi-Lo consiste em atribuir um valor a cada carta e, ao decorrer do jogo, o jogador deve manter uma contagem baseada nos valores das cartas tiradas do deck. Dessa forma, ele pode usar a informação obtida para calcular a verdadeira contagem, que é dada por:

> **TRUE COUNT = RUNNING COUNT / DECKS LEFT**

​	Com base nesse valor, é possível estimar as chances de se obter um Blackjack natural ou um valor bem próximo de 21, já que uma contagem de valor alto implica em um maior número de cartas menores no monte, ou seja, um maior número de cartas altas restantes no deck.

___

## Desenvolvimento do aplicativo

​	O aplicativo foi desenvolvido em _Javascript_ e a principal biblioteca utilizada foi _React Native_, precisando cumprir alguns requisitos básicos para avaliação como projeto final da disciplina de Laboratório de Programação no meu 4º semestre da faculdade:

- A aplicação deve utilizar componentes para entrada de texto (ex.: Input) e botão (ex.: TouchableHighlight). Os componentes não precisam ficar limitados a esses dois, mas esses dois devem ser usados na aplicação em algum momento;
- A aplicação deve demandar o armazenamento e a recuperação de dados no estado do componente raiz (normalmente é o App);
- A aplicação deve definir estilos para os seus componentes, como cor de fundo, tamanho das fontes, bordas, etc;
- A aplicação deve utilizar dois esquemas de navegação: Stack e Bottom Tab;
- A aplicação não pode ser uma simples variação do que já fizemos em atividades em sala de aula (Ex.: uma melhoria no CitiesApp);
- A aplicação deve utilizar pelo menos uma API que foi discutida durante as aulas.