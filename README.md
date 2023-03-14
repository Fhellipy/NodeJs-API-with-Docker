# NodeJs_API

## Executar o Projeto

      1°- yarn ou npm/pnpm install
      2°- yarn dev ou npm/pnpm run dev
## Docker Config
* Configurar e inicializa o container de postgres através do docker

      sudo docker run --name pg -e POSTGRES_USER=<user> -e POSTGRES_PASSWORD=<password> -p 5432:5432 -d postgres

* Inicializa o postgres - Sempre que a máquina for inicializada

      sudo docker start pg

* Listar os containers

      Em execução: sudo docker ps

      Não executado: sudo docker ps -a

* Apagar imagem da máquina - Passo a passo

       1°- Para a execução do container: sudo docker stop pg
       2°- Apaga o container: sudo docker container rm pg
       3°- Apaga a imagem: sudo docker rmi postgres

## Criar Database

    1°- Executar o container do postgres de maneira interativa e acessar o bash: sudo docker exec -it pg bash
    2°- Logue no postgres: psql -U <nome do usuário cadastrado>
    3°- Execute o sql do arquivo src/database/schema.sql no terminal do projeto