class FlightBookingSystem {
  constructor(agencyName) {
    this.agencyName = agencyName;
    this.flights = [];
    this.bookings = [];
    this.bookingsCount = 0;
  }

  addFlight(flightNumber, destination, departureTime, price) {
    const existingFlight = this.flights.find(
      (flight) => flight.flightNumber === flightNumber
    );
    if (existingFlight) {
      return `Flight ${flightNumber} to ${destination} is already available.`;
    }

    this.flights.push({ flightNumber, destination, departureTime, price });
    return `Flight ${flightNumber} to ${destination} has been added to the system.`;
  }

  bookFlight(passengerName, flightNumber) {
    const flight = this.flights.find(
      (flight) => flight.flightNumber === flightNumber
    );
    if (!flight) {
      return `Flight ${flightNumber} is not available for booking.`;
    }

    this.bookings.push({ passengerName, flightNumber });
    this.bookingsCount++;
    return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
  }

  cancelBooking(passengerName, flightNumber) {
    const bookingIndex = this.bookings.findIndex(
      (booking) =>
        booking.passengerName === passengerName &&
        booking.flightNumber === flightNumber
    );
    if (bookingIndex === -1) {
      throw new Error(
        `Booking for passenger ${passengerName} on flight ${flightNumber} not found.`
      );
    }

    this.bookings.splice(bookingIndex, 1);
    this.bookingsCount--;
    return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
  }

  showBookings(criteria) {
    if (this.bookings.length === 0) {
      throw new Error(`No bookings have been made yet.`);
    }

    if (criteria === "all") {
      const bookingInfo = this.bookings
        .map(
          (booking) =>
            `${booking.passengerName} booked for flight ${booking.flightNumber}.`
        )
        .join("\n");
      return `All bookings(${this.bookingsCount}):\n${bookingInfo}`;
    } else if (criteria === "cheap") {
      const cheapBookings = this.bookings.filter(
        (booking) =>
          this.flights.find(
            (flight) => flight.flightNumber === booking.flightNumber
          ).price <= 100
      );
      if (cheapBookings.length === 0) {
        return "No cheap bookings found.";
      }
      const cheapBookingInfo = cheapBookings
        .map(
          (booking) =>
            `${booking.passengerName} booked for flight ${booking.flightNumber}.`
        )
        .join("\n");
      return `Cheap bookings:\n${cheapBookingInfo}`;
    } else if (criteria === "expensive") {
      const expensiveBookings = this.bookings.filter(
        (booking) =>
          this.flights.find(
            (flight) => flight.flightNumber === booking.flightNumber
          ).price > 100
      );
      if (expensiveBookings.length === 0) {
        return "No expensive bookings found.";
      }
      const expensiveBookingInfo = expensiveBookings
        .map(
          (booking) =>
            `${booking.passengerName} booked for flight ${booking.flightNumber}.`
        )
        .join("\n");
      return `Expensive bookings:\n${expensiveBookingInfo}`;
    }
  }
}

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("all"));
