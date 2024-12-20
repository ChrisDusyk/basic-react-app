# Project Name

A web application with a PostgreSQL database backend, containerized with Docker Compose.

## Prerequisites

- Docker and Docker Compose installed on your system
- Basic understanding of PostgreSQL

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/ChrisDusyk/basic-react-app.git
```

2. Navigate to the project directory:

```bash
cd basic-react-app
```

3. Run the Docker Compose setup:

```bash
docker compose up -d --build
```

4. Set up the database:

```bash
# Connect to the PostgreSQL container
docker compose exec db psql -U postgres

# Inside the PostgreSQL prompt, create the todos table:
CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE
);

# Type \q to exit the PostgreSQL prompt
```

5. Access the application:

Open your web browser and navigate to `http://localhost:3000`.

6. Stop the containers:

```bash
docker compose down
```
