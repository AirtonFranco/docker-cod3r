//CAPITULO - DEIXANDO DE SER APENAS UM USUARIO

//PASTA primeiro-build / Dockerfile
//FROM nginx:latest (imagem que está se baseando)
//RUN echo '<h1>Hello World !</h1>' > /usr/share/nginx/html/index.html (caminho do ngix, onde ele vai ler a mensagem)

//Caminhe até a pasta do arquivo e rode o comando a baixo

//-t (esta pedindo pra informar um nome para essa imagem)
//ex-simple-build (é o novo nome da imagem - pode ser o nome que vc quiser para sua imagem)
// . (o espaço ponto no final significa que vc quer rodar na pasta atual, na qual vc caminhou no terminal)

//ande até a pasat onde esta o dockerfile, lá estara setado a imagem que vc quer espelhar
//docker image build -t ex-simple-build . (criando nossa imagem)
//docker container run -p 80:80 ex-simple-build (conectando a imagem com o container)

//criando nossa imagem com argumento
//caminhe até a pasta do arquivo
//defina a imagem no arquivo, neste caso será o debian
//execute: 
//docker image -t novoNomeDaImagem . (criando a imagem)
//docker image ls (verifica se a imagem foi criada)
//docker container run nomeDaImagem -c 'echo $S3_BUCKET' (conectando a imagem ao container, echo $S3_BUCKET - é o argunmento que esta no arquivo)
