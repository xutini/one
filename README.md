### Simple Node.js Server (ES6)

This is a simple Node.js server that returns information in `JSON format`. The server provides the following data:

    Your registered email address (used for the HNG12 Slack workspace).
    The current datetime in ISO 8601 format.
    The GitHub URL of the project's codebase.

# Requirements

    Node.js version 12 or later (to support ES6 import/export syntax).
    The project is written in ES6, so it requires either a .mjs file extension or "type": "module" in package.json.

# How to Run

 
        `node server.js`

# Access the server:
        The server will run on port 3000 by default. 

# Example Response

When you access the server, you will receive a JSON response similar to this:

{
  "email": "youremail@example.com",
  "timestamp": "2025-01-26T15:23:45.678Z",
  "githubURL": "https://github.com/yourusername/your-project"
}

# License

This project is open source and available under the MIT License.