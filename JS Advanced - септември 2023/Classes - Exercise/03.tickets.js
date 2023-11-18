function tickets(array, str) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  let allTickets = [];

  for (const line of array) {
    let [destination, price, available] = line.split("|");
    let CurrentTicket = new Ticket(destination, Number(price), available);

    allTickets.push(CurrentTicket);
  }

  const sortedAllTickets = allTickets.sort((a, b) => {
    return typeof a[str] === "number"
      ? a[str] - b[str]
      : a[str].localeCompare(b[str]);
  });

  return sortedAllTickets;
}

console.log(
  tickets(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);
