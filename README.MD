Shortest Url - Robert da Silva Vitoriano

## About the project

This project was built with nodejs typescript, express and sequelize. It's a simple project to create a short url.

## Usage
  # Development
  In order to use this project, you need to install the dependencies. It is recommended to use the  yarn  command to do so. 
  After installing the dependencies, you must create a file in the src/config folder called localVariables.ts and add the code avalable in the file localVariables.example.ts, filling the object with your own data.
  Then, you must run  yarn dev to start the server in the development mode.

  # Production
  For production, you must run yarn start, after making sure your environment variables are set.

  # Testing
  For testing, you must first set your environment variables for a test database, and Run yarn test.
  You can also test the application through insomnia, I included  a Insominia 4 file for that in the root of the project.

  # Enpoints
  The endpoints are:
  - POST /encode, to shorten a url, with the url as a body field
  - GET  /:baseUrl/:urlCode, to get the original url, with the baseUrl and urlCode as parameters

  ### Example

  # Encode
    Given the body as:
    {
      url:"https://stackoverflow.com/questions/71553537/how-to-find-nearest-nearest-place-by-lat-long-quickly"
    }

    It must return something similar to:
    {
    "message": "Url Shortned",
    "shortUrl": "stackoverflow.com/120899"
     } 

  # Decode
    Given the url as: stackoverflow.com/120899

    It must return something similar to:

  {
    "url": "https://stackoverflow.com/questions/71553537/how-to-find-nearest-nearest-place-by-lat-long-quickly"
  }




