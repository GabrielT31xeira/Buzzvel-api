# Tutorial

- Criar o arquivo .env na raiz do projeto colocar o conteudo do .env.example dentro dele.
- Rodar o `docker compose up`
- Dentro do container do laravel rodar `chmod -R 777 storage`.
- Dentro do container do laravel rodar `composer install && npm install`.
- Dentro do container do laravel rodar `php artisan key:generate`.
- Dentro do container do laravel rodar para criar o banco de dados `php artisan migrate`.
- Visite a url `localhost:8083/` parar verificar se o laravel está rodando.
- Visite a url `localhost:3001/` parar visualizar o frontend.
