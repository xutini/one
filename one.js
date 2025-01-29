
const http = require("http")

// Define the email, GitHub URL, and current datetime in ISO 8601 format
const email = 'htbuildx@gmail.com';  // Replace with your registered email
const githubURL = 'https://github.com/xutini/one';  // Replace with your GitHub project URL

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header to indicate JSON format
  res.setHeader('Content-Type', 'application/json');

  // Prepare the data to send in the JSON response
  const responseData = {
    email: email,
    current_datetime: new Date().toISOString(), // Get the current date in ISO 8601 format
    github_url: githubURL
  };

  // Send the JSON response
  res.end(JSON.stringify(responseData)); // Convert the object to a JSON string
});

// Set the port and start the server
const port = 5000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
