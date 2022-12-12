## Axios timeout 

Handling axios timeout error seems simple on per request bases however, while running sequence of API requests which are dependent on each other, handling axios timeout must be done in a proper way so the entire API requests sequence does not break.

For the sake of demonstration, this repo have API and Client sub projects. 

### API

API sub project contains three routes i.e. `/api/postData`, `/api/withDelay` and `/api/withoutDelay`.

`/api/postData` and `/api/withDelay` takes random delay time from `1-4` seconds. 


### Client 
Client project implements sequence of backend API calls and handles `timeout` error accordingly by implementing `retry` mechanism.

Axios config on client project includes `timeout=3000` or `3 seconds`.


## How to test code

Clone the project to your machine and install dependencies on each project i.e. /api and /client. 

Start backend API by running `npm run start` inside `/api` and afterwards `npm run start` in `/client`.

## Contribution

If you feel something is missing out here, do not hesitate to contribute. Thanks. 