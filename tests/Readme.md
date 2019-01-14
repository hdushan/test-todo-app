# Airtasker Quality Tech Challenge

## To run automated tests

### Follow these instructions to run tests using `docker-compose` & `docker`

#### Step 1: Start the app

`docker-compose up --build`

#### Step 1: Start the tests

On another terminal, run the below command:
`docker-compose run server npm run test`

The tests run headless using chrome that comes installed in the `selenium` container. To see the browser real-time, use a vnc viewer to connect to `localhost:5900` (The selenium container runs a vnc server at this port).

### Alternatively, to run tests locally on your own browser, without using `docker-compose` & `docker`

#### Step 1: Chrome

Have Chrome installed on your machine.

#### Step 2: Start App

One one terminal, start the app, using the below instructions:

```bash
brew install node
brew install mongodb
brew services start mongodb
npm install
npm run build
ENVIRONMENT=development npm run start # Note, the test setup will fail if ENVIRONMENT is not set to development
```

#### Step 3: Start local selenium server

On another terminal,

1. Run the command `./node_modules/.bin/selenium-standalone install` to install the selenium drivers
2. Run the command `./node_modules/.bin/selenium-standalone start` to start up the selenium server

#### Step 4: Start the tests

`APP_URL=http://localhost:4000 SELENIUM_HOST=localhost npm run test`