up:
	docker-compose -f docker-compose.prod.yml up -d --build

collect_static:
	docker-compose -f docker-compose.prod.yml exec -T web python manage.py collectstatic --no-input --clear

migrate:
	docker-compose -f docker-compose.prod.yml exec -T web python manage.py migrate --noinput

down:
	docker-compose -f docker-compose.prod.yml down --remove-orphans

show_logs:
	docker-compose logs
