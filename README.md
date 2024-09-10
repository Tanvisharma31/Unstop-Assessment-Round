# Seat Booking Application

This is a simple Angular application for booking seats in a train coach. The application allows users to reserve seats, ensuring that the seats are booked in one row if possible. If the seats are not available in a single row, the application will book the closest available seats.

## Features

- **Single Coach Layout**: The application assumes a single coach with 80 seats.
- **Row-wise Booking**: Priority is given to booking seats in the same row.
- **Multiple Seat Booking**: Users can book between 1 to 7 seats in a single reservation.
- **Visual Feedback**: Booked seats are visually indicated, allowing users to see which seats are occupied.
- **Dynamic Availability**: The seat availability is updated in real-time as users book seats.

## Technologies Used

- **Angular**: Framework used to build the application.
- **TypeScript**: Superset of JavaScript used for type safety and better tooling support.
- **HTML/CSS**: Used for the structure and styling of the application.

## Project Structure

- **`src/app/seat-booking`**: Contains the core components, services, and styles for the seat booking feature.
  - **`seat-booking.component.ts`**: The main component handling the seat booking logic.
  - **`seat-booking.component.html`**: The template file for rendering the seat layout and controls.
  - **`seat-booking.component.css`**: The stylesheet defining the visual styles for the seat layout.
  - **`seat.service.ts`**: The service managing seat data and booking logic.

## Setup and Installation

### Prerequisites

- Node.js and npm installed on your machine.
- Angular CLI installed globally. If not, you can install it using:

  ```bash
  npm install -g @angular/cli
  ```

### Installation Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/seat-booking-app.git
   cd seat-booking-app
   ```

2. **Install Dependencies**:

   Run the following command to install the necessary packages:

   ```bash
   npm install
   ```

3. **Run the Application**:

   Start the Angular development server:

   ```bash
   ng serve
   ```

   The application will be available at `http://localhost:4200`.

## Usage

1. **Booking Seats**:

   - Use the buttons to book 1 to 7 seats.
   - The application will prioritize booking seats in the same row.
   - If the requested number of seats is not available in one row, the closest available seats will be booked.

2. **View Booked Seats**:
   - Booked seats are highlighted, and a list of booked seat numbers is displayed.

## Deployment

To deploy the application, you can build it using the following command:

```bash
ng build --prod
```

This will create an optimized build of the application in the `dist/` directory, which can be served using any web server.

## Database Structure

The application doesn't require a backend or database for basic functionality, as all seat management is handled on the client side. However, if you plan to extend this application with backend support, you would need to define a database schema for storing seat availability, booking history, etc.

## Assumptions

- The train coach has a total of 80 seats arranged in 11 rows, with 7 seats in the first 10 rows and 3 seats in the last row.
- Users can book up to 7 seats at a time.

## Future Enhancements

- **Login Functionality**: Add user authentication to track individual user bookings.
- **Multiple Coaches**: Extend the application to handle multiple coaches.
- **Seat Selection**: Allow users to manually select their preferred seats.

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
