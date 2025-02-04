
Start todo application
1) git clone git@github.com:eropche/todo-app.git
2) Create a .env file inside the backend/ directory and add the following:
   
  APP_NAME=TodoApp
  APP_ENV=local
  APP_KEY=
  APP_DEBUG=true
  APP_URL=http://localhost:8000
  
  CACHE_DRIVER=redis
  SESSION_DRIVER=redis
  QUEUE_CONNECTION=sync
  
  REDIS_HOST=redis
  REDIS_PORT=6379
  REDIS_CLIENT=phpredis

3) docker exec -it todo_backend php artisan key:generate
4) docker-compose up --build
  This will start:
  Backend (Laravel) at http://localhost:8000
  Frontend (React) at http://localhost:5173
  Redis for caching

6) Open http://localhost:5173 for start using App
