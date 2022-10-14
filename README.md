# Tv Tracker

- localhost:80 (depois de startar no docker)
- http://localhost:80/api-docs/ (swagger)

## Docker

- docker compose up
- .env example:

```
# PORT
PORT = 4200

# DATABASE
DB_USER = samuel
DB_PASSWORD = aktYjvSemRawYBbf
DB_DATABASE = tvTracker

# TOKEN
SECRET_KEY = eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY2NTU4NjQwNCwiaWF0IjoxNjY1NTg2NDA0fQ.-vkd8rc83qgpw_aa8j4AK6Pa2nQXLHyhWJ8Mji8oW3Q

# LOG
LOG_FORMAT = dev
LOG_DIR = ../logs

# CORS
ORIGIN = *
CREDENTIALS = true
```

#Swagger

- http://localhost:80/api-docs/#/users/get_users

# Testes

Somente rodar **npm run test** no terminal.
