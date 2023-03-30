# Tutorial

- Criar o arquivo .env na raiz do projeto colocar o conteudo do .env.example dentro dele.
- Rodar o `docker compose up`
- Entra `docker exec -it <id_container_laravel> /bin/bash`
- Dentro do container do laravel rodar `chmod -R 777 storage`.
- Dentro do container do laravel rodar `composer install`.
- Dentro do container do laravel rodar `php artisan key:generate`.
- Dentro do container do laravel rodar para criar o banco de dados `php artisan migrate`.
- Visite a url `localhost:8083/` parar verificar se o laravel está rodando.
- Visite a url `localhost:3001/` parar visualizar o frontend.
- Video youtube https://www.youtube.com/watch?v=fXEh5sWfgZc
