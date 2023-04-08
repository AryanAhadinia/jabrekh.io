up:
	docker-compose -f docker-compose.prod.yml up -d --build

migrate:
	docker-compose -f docker-compose.prod.yml exec web python manage.py migrate --noinput

collectstatic:
	docker-compose -f docker-compose.prod.yml exec web python manage.py collectstatic --no-input --clear

down:
	docker-compose -f docker-compose.prod.yml down -v --remove-orphans

show_logs:
	docker-compose logs
