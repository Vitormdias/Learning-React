# Exemplo simples de Redux

* Actions
  * Definições das ações que irei disparar com tipo e valor

* Reducers
  * Irão resolver as ações

* Fluxo 
  * App renderiza o CashContainer onde fica a lógica e após isso conecta o container 
    com o componente Form, la as ações são disparadas e tratadas pelo reducer que gera
    um novo estado de acordo com a ação e então com a mudança de estado o componente é
    renderizado novamente