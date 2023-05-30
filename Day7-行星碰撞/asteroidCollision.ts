function asteroidCollision(asteroids: number[]): number[] {
  let cnt = asteroids.length;
  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i - 1] > 0 && asteroids[i] < 0) {
      if (Math.abs(asteroids[i - 1]) == Math.abs(asteroids[i])) {
        asteroids.splice(i - 1, 2);
      } else if (
        Math.abs(asteroids[i - 1]) > Math.abs(Math.abs(asteroids[i]))
      ) {
        asteroids.splice(i, 1);
      } else {
        asteroids.splice(i - 1, 1);
      }
    }
  }
  return cnt == asteroids.length ? asteroids : asteroidCollision(asteroids);
}
console.log(asteroidCollision([10, 2, -5]));
