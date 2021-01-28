# Quickstart

1. `git clone https://github.com/NucsuM/rails-react-interaction.git`
2. `docker-compose build`
3. `docker-compose up`
4. `docker exec -it rri-app bash`
5. `#1 bundle exec rails s -b 0.0.0.0 -p 3000`
6. open in browser -> http://192.168.99.100:30000/photos/query_placeholder
7. open `docker exec -it rri-app bash` in a new shell
8. `#2 cd ui && npm run build`
9. visit http://192.168.99.100:30000/photos/ and click on fetch data
