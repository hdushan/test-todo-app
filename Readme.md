# Airtasker Quality Tech Challenge.

## Install

```
brew install node
brew install mongodb
brew services start mongodb
npm install
```

## Start

```
npm run build
npm start
```

Navigate to http://localhost:4000

## Using Docker Compose

If you prefer to use Docker:
```
docker-compose up --build
```

To stop the docker images:
```
docker stop $(docker ps -q --filter ancestor="quality-tech-challenge_server" --filter ancestor="mongo")
```

Navigate to http://localhost:8080