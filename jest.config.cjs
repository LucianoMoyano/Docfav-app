module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/test"],
  testMatch: ["**/__tests__/**/*.+(js|jsx)", "**/?(*.)+(spec|test).+(js|jsx)"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.css$": "babel-jest",
    "^.+\\.css$": "jest-css-modules-transform",
  },
  testPathIgnorePatterns: ["/node_modules/", "/utils/"],
  transformIgnorePatterns: [
    "/node_modules/",
    "/App.css", // Asegúrate de que la ruta coincida con la ubicación real del archivo
  ],
  testEnvironment: "jsdom",

  //testEnvironment: "jest-environment-jsdom",
};
