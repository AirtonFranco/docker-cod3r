//Anotações
//docker container --help (se tiver alguma duvida de algum comando)
//docker image --help
//docker volume --help

//_____________________________
//Rodando minha primeira imagem

//docker container run hello-world
//docker container run debian bash --version (criando imagem do debian)

//_____________________________
//Verificando containes

//docker container ps (verifica quais os containes estao ativos)
//docker container ps -a (lista todos os containes criados e historico de execução)
//docker container run --rm debian bash --version(executa o container e remove da lista de historico)
//docker container run -it debian bash (entrando no terminal do container que foicriado, no caso o debian)
//touch curso-docker.txt (criando um arquivo dentro do container. Obs: tem que executar o terminal do container)
//ls curso-docker.txt (verifica se de fato o arquivo foi criado)
//exit para sair do terminal do container
//docker images (lista as imagens que já foram clonadas)
//docker 
//docker container exec ex-daemon-basic uname -or (informa em qual sitema esta o container)

//OBS: tudo que executarmos em modo run sempre ira criar um novo container

//_____________________________
//Reutilizando containers

//docker container run --name mydeb -it debian bash (nomeando container - em mydeb é onde vc coloca o nome do container)
//docker container ls (faz uma lista dos containers ativos)
//docker container ls -a (lista todos os containes idepedente do status)
//docker container start -ai mydeb (esse comando da um start em um container e entra no terminal)
//docker container stop 2bbaae74ddcf (para um container, porem ele continua existindo - 2bbaae74ddcf (é o id do container))
//docker cotainer pause 2bbaae74ddcf (pausa o container, mas nao encerra)
//docker container rm 2bbaae74ddcf (remove um container)
//docker container restart nomecontainer (ele reinicia o container)

//_____________________________

//docker container run -p 8080:80 nginx (aqui estamos criando um container na posta 8080 com a imagem do nginx)

//de um cd ..  na pasta do seu projeto e rode esse comando para criar a imagem d nginx em seu projeto
//-v (mapeando o volume), $(pwd) (pasta do projeto), /note-found:user/share/nginx/html nginx (criando a imagem do ngx no caminho especifico do projeto)
//porem esse exemplo é para mostrar um erro, pois ele esta apontando para uma pasta que nao existe
//docker container run -p 8080:80 -v $(pwd)/note-found:user/share/nginx/html nginx 

//Entendedno o container nginx - duvidas assistir https://www.youtube.com/watch?v=icBhOyDT8lM
// /usr/share/nginx/html nginx (diretorio nginx)
// $(pwd)/html (diretorio do teu projeto) Obs. No windows o comando pwd não funciona, terá que colocar o caminho completo
//Criando a estrtura do projeto conforme a aula mapear diretorios docker, ele mapea o documento exato do projeto
//docker container run -p 8080:80 -v $(pwd)/html:/usr/share/nginx/html nginx 

//_____________________________
//Modo daemon - modo em que o container fica executando em background
//ou seja, vc execulta o docker e deixa ele rodando em background em quanto vc trabalha em sua aplicação

//metodo mais adequado de criar o nginx, metodo em background
//docker container run -d --name ex-daemon-basic -p 8080:80 -v "caminho completo do diretorio":/usr/share/nginx/html nginx

//_____________________________
//Volumes - São conexãoes entre o projeto e container

//docker container volume ls (lista todos os volumes ativos)

