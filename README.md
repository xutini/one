### Simple Node.js Server (ES6)

This is a simple Node.js server that returns information in `JSON format`. The server provides the following data:

    Your registered email address (used for the HNG12 Slack workspace).
    The current datetime in ISO 8601 format.
    The GitHub URL of the project's codebase.

# Features

    Email: Returns the email address registered for the HNG12 Slack workspace.
    Timestamp: Returns the current date and time in ISO 8601 format.
    GitHub URL: Returns the GitHub URL for the project's codebase.

# Requirements

    Node.js version 12 or later (to support ES6 import/export syntax).
    The project is written in ES6, so it requires either a .mjs file extension or "type": "module" in package.json.

# How to Run

    Clone or download the repository: If you haven’t already, clone or download this repository to your local machine.

    Install Node.js: Make sure you have Node.js installed on your machine. You can download and install it from here.

    Run the server:
        Save the code in a file called server.mjs (or server.js if you have "type": "module" set in package.json).
        Open your terminal or command prompt.
        Navigate to the directory where server.mjs is located.
        Run the following command to start the server:

        node server.mjs

    Access the server:
        The server will run on port 3000 by default. You can access the server by navigating to http://localhost:3000 in your browser, or by using a tool like curl or Postman to make a GET request to the server.

# Example Response

When you access the server, you will receive a JSON response similar to this:

{
  "email": "youremail@example.com",
  "timestamp": "2025-01-26T15:23:45.678Z",
  "githubURL": "https://github.com/yourusername/your-project"
}


# Code Explanation
 
    import http from 'http': We are importing the built-in http module using ES6 syntax.
    new Date().toISOString(): We generate the current timestamp in ISO 8601 format.
    res.setHeader('Content-Type', 'application/json'): We set the response header to application/json, indicating that the response will be in JSON format.
    res.end(JSON.stringify(responseData)): We send the response with the data, which is converted to a JSON string using JSON.stringify().

# License

This project is open source and available under the MIT License.