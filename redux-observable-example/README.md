# Exemplo simples de Redux Observables

* Ele junta Rxjs com Redux

* Fluxo
  * Quando uma ação é disparada ela passa pelo reducer normalmente e depois disso
    vai para o Epic, o Epic que é um redux middleware, recebe um stream de action$
    caso a ação seja do tipo solicitado, ele então faz a parte assincrona do fluxo
    e dispara outras ações que irão novamente passar pelo reducer e continuar o fluxo
    até o final onde o estado novo será gerado e a tela renderizada novamente