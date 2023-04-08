# jabrekh.io

## Deploying

### Pre-requisites

- Docker
- Docker Compose

### Development

#### Environment Variables

Make sure you have create and filled a `.env.dev` file with the following variables:

```bash
DEBUG=1
SECRET_KEY=
DJANGO_ALLOWED_HOSTS=localhost 127.0.0.1 [::1]
SQL_ENGINE=django.db.backends.postgresql
SQL_DATABASE=
SQL_USER=
SQL_PASSWORD=
SQL_HOST=db
SQL_PORT=5432
DATABASE=postgres
```

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

Make sure you have create and filled a `.env.prod` file with the following variables:

```bash
DEBUG=0
SECRET_KEY=
DJANGO_ALLOWED_HOSTS=localhost 127.0.0.1 [::1]
SQL_ENGINE=django.db.backends.postgresql
SQL_DATABASE=
SQL_USER=
SQL_PASSWORD=
SQL_HOST=db
SQL_PORT=5432
DATABASE=postgres
```

Also, make sure you have created a `.env.prod.db` file with the following variables same as the ones in `.env.prod`:

```bash
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
```

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
