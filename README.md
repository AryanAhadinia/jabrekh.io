# jabrekh.io

## Deploying

### Pre-requisites

- Docker
- Docker Compose

### Development

#### Pre-deployment for Development

```bash
chmod +x backend/entrypoint.sh
```

#### Deployment for Development

```bash
docker-compose up -d --build
docker-compose exec web python manage.py migrate
```

To rebase the database, you can flush database by running `docker-compose exec web python manage.py flush --no-input` and then run `docker-compose exec web python manage.py migrate` to create new tables.

```bash
docker-compose exec web python manage.py flush --no-input
docker-compose exec web python manage.py migrate
```

#### Server Shutdown for Development

```bash
docker-compose down -v --remove-orphans
```

### Production

#### Pre-deployment for Production

```bash
chmod +x backend/entrypoint.prod.sh
```

#### Deployment for Production

```bash
docker-compose -f docker-compose.prod.yml up -d --build
docker-compose -f docker-compose.prod.yml exec web python manage.py collectstatic --no-input --clear
docker-compose -f docker-compose.prod.yml exec web python manage.py migrate --noinput
```

#### Server Shutdown for Production

```bash
docker-compose -f docker-compose.prod.yml down -v --remove-orphans
```

## Contributors

## References

<https://testdriven.io/blog/dockerizing-django-with-postgres-gunicorn-and-nginx/>
<https://towardsdatascience.com/the-easy-python-ci-cd-pipeline-using-docker-compose-and-github-actions-80498f47b341>
