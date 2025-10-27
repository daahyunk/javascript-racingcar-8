function initializeCars(carNames) {
  return carNames.map((name) => ({
    name,
    position: 0,
  }));
}

export default initializeCars;
