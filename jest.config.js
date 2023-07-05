module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/*.spec.(ts|js)"],
  testEnvironment: "node",
  moduleNameMapper: {
    "^@controllers/(.*)$": "<rootDir>/src/controllers/$1",
    "^@entities/(.*)$": "<rootDir>/src/entities/$1",
    "^@helpers/(.*)$": "<rootDir>/src/helpers/$1",
    "^@routes/(.*)$": "<rootDir>/src/routes/$1",
    "^@services/(.*)$": "<rootDir>/src/services/$1",
    "^@validators/(.*)$": "<rootDir>/src/validators/$1",
    "^@traits/(.*)$": "<rootDir>/src/traits/$1",
    "^@constants/(.*)$": "<rootDir>/src/constants/$1",
  },
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["./src/**"],
  coveragePathIgnorePatterns: [
    "./src/databases",
    "./src/app.*",
    "./src/server.*",
    "swaggerOptions.ts",
  ],
  coverageThreshold: {
    global: {
      functions: 80,
      statements: 80,
    },
  },
};
