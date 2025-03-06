# amigo-secreto

Juego creado para elegir el amigo secreto, aqui realicé 3 agregados adicionales para que sólo se puedan ingresar string y no deja agregar ni números o caráracteres especiales, este agregado va en la página del index.html en la etiqueta input 

<input type="text" onkeypress="return ' áéíóúabcdefghijklmnñopqrstuvwxyz'.includes(event.key)" id="amigo" class="input-name" placeholder="Escribe un nombre">

![image](https://github.com/user-attachments/assets/470f4072-3eb8-47aa-b80d-f310ffd43889)

además en la página del app.js donde va escrito el código en javascript, agregue un código en donde verifica que los nombres no se repitan usando el includes

![image](https://github.com/user-attachments/assets/6cfa331e-4392-4ce8-9532-e02e29777b99)

finalmente agregue un último código en donde obliga al usuario que se agreguen más de 3 amigos a la lista.

![image](https://github.com/user-attachments/assets/40d48d1e-eed9-4e0a-95b8-938945665527)

