function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  const textarea = document.querySelector("#inputs textarea");
  const restaurantNameRef = document.querySelector("#bestRestaurant p");
  const workerListRef = document.querySelector("#workers p");

  function onClick() {
    let info = JSON.parse(textarea.value);

    let res = {};

    for (const restaurantInfo of info) {
      let [restaurantName, workersAsString] = restaurantInfo.split(" - ");
      let workers = prepareWorkers(workersAsString);

      if (!res.hasOwnProperty(restaurantName)) {
        res[restaurantName] = {
          avgSalary: calcAvgSalary(workers),
          bestSalary: calcBestSalary(workers),
          workers: workers, // [{}]
        };
      } else {
        res[restaurantName].workers = concatWorkers(
          res[restaurantName].workers,
          workers
        );
        res[restaurantName].avgSalary = calcAvgSalary(
          res[restaurantName].workers
        );
        res[restaurantName].bestSalary = calcBestSalary(
          res[restaurantName].workers
        );
      }
    }

    let sortRestaurant = Object.entries(res).sort(
      (a, b) => b[1].avgSalary - a[1].avgSalary
    );
    let bestRest = sortRestaurant[0];

    let workersAsText = "";
    bestRest[1].workers.sort(sortWorkers).forEach((element) => {
      workersAsText += `Name: ${element.name} With Salary: ${element.salary} `;
      return;
    });

    restaurantNameRef.textContent = `Name: ${bestRest[0]} Average Salary: ${bestRest[1].avgSalary.toFixed(2)} Best Salary: ${bestRest[1].bestSalary.toFixed(2)}`;
    workerListRef.textContent = workersAsText;
  }

  function prepareWorkers(workersAsString) {
    let res = [];
    let arr = workersAsString.split(", ");
    arr.forEach((e) => {
      let [name, salary] = e.split(" ");
      salary = Number(salary);
      res.push({ name, salary });
    });

    return res;
  }

  function sortWorkers(workerA, workerB) {
    return workerB.salary - workerA.salary;
  }

  function concatWorkers(oldWorkers, newWorkers) {
    return oldWorkers.concat(newWorkers);
  }

  function calcBestSalary(workers) {
    let bestSalary = 0;
    workers.forEach((worker) => {
      if (worker.salary > bestSalary) {
        bestSalary = worker.salary;
        return;
      }
    });
    return bestSalary;
  }

  function calcAvgSalary(workers) {
    let sum = 0;
    workers.forEach((worker) => {
      return (sum += worker.salary);
    });
    return sum / workers.length;
  }
}
