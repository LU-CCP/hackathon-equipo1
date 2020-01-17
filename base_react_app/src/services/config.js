const TIMEOUTS = {
  GLOBAL: 20e3
};

const config = {
  baseURL: null,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphYW05MSIsInBhc3N3b3JkIjoiYTE5a2RfQDE1UnFvXSQ3IiwiaWF0IjoxNTc4OTUwMzE3LCJleHAiOjE1Nzg5NTM5MTd9.9-ZYn9uP17lOjesl-Fgxtxn19USUBBkijkh5xIWbrDA'
  },
  timeout: TIMEOUTS.GLOBAL
};

export { TIMEOUTS };

export default config;
