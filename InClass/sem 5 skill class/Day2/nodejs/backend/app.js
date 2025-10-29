const express = require("express");

//Initialize express app
const app = express();

//PORT
const PORT = process.env.PORT || 3000;

//ENDPOINTS
app.get("/message", (req, res) => {
  res.send("Hello from Express.js!");
});


const courses = [
  { id: 1, name: "Bhanu" },
  { id: 2, name: "Bdhanu" },
  { id: 3, name: "Bhfanu" },
];

//COURSES ENDPOINT
app.get("/courses", (req, res) => {
  res.send(courses);
});

//SEND PERTICULER COURSE
app.get("/courses/:id", (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courses.find((c) => c.id === courseId);
  if (!course) {
    return res.status(404).send("COurse not found");
  } else {
    res.send(course);
  }
});



// -------------------- DAY 3 -------------------- 


// -------------------- ADD COURSE (POST Request) --------------------
//
// Purpose:
//   Creates and adds a new course to the list.
//
// Core Concepts:
// 1. Middleware (express.json()):
//    - Parses incoming JSON request bodies.
//    - Required to read `req.body` correctly.
//
// 2. Data Validation (Joi):
//    - Joi defines a schema (rules for input).
//    - Ensures `name` is a string, at least 3 characters long, and required.
//    - If validation fails → respond with HTTP 400 (Bad Request).
//
// 3. Creating Resource:
//    - Builds a new course object with:
//        id → auto-incremented (based on array length)
//        name → from request body
//    - Pushes it into the `courses` array (acts like in-memory database).
//
// 4. Response:
//    - Returns HTTP 201 (Created) with the new course as confirmation.
//
// Notes:
// - POST is used to create new resources.
// - Input validation prevents malformed or missing data.
// - In large projects, separate route handlers and logic into modules
//   for better structure and maintainability.


app.use(express.json()); //middleware to parse JSON bodies
const Joi = require("joi"); //Joi is used for validation of data //schema description language and data validator for JavaScript.

app.post("/addcourses", (req, res) => {
  //post request to add a new course
  const schema = Joi.object({
    //define schema for validation
    name: Joi.string().min(3).required(), //name should be a string with minimum length of 3 and is required
  });

  const { error } = schema.validate(req.body); //validate the request body against the schema

  if (error) {
    return res.status(400).send(error); //if validation fails, send 400 Bad Request with error details
  }
  const newCourse = {
    //create a new course object
    id: courses.length + 1, //assign a new id
    name: req.body.name, //get name from request body
  }; //add the new course to the courses array

  courses.push(newCourse); //send the newly created course as response
  res.status(201).send(newCourse); //201 Created status code
});




// -------------------- UPDATE COURSE (PUT Request) --------------------
//
// Purpose:
//   Updates an existing course by its ID.
//
// Core Concepts:
// 1. Route Parameters:
//    - `:id` is a dynamic part of the URL (e.g. /updatecourse/3).
//    - Retrieved using `req.params.id` and converted to integer.
//
// 2. Data Lookup:
//    - Uses `.find()` to search the `courses` array for a matching ID.
//    - If not found, sends a 404 (Not Found) response.
//
// 3. Input Validation (Joi):
//    - Validates `req.body` before updating data.
//    - Schema ensures `name` is a string with min length 3.
//    - Returns 400 (Bad Request) if validation fails.
//
// 4. Updating Data:
//    - If validation passes, updates the course name in memory.
//
// 5. Response:
//    - Sends back the updated course as confirmation.
//
// Notes:
// - PUT is used for full updates (vs PATCH for partial).
// - Validation protects against invalid or malicious inputs.
// - Always convert URL params to correct data type before use.

app.put('/updatecourse/:id', (req, res) => {
  const courseId = parseInt(req.params.id);
  const courseput = courses.find((c) => c.id === courseId);
  if (!courseput) {
    return res.status(404).send("Course not found");
  }
  const schemaput = Joi.object({
    name: Joi.string().min(3).required(),
  });
  const {error} = schemaput.validate(req.body);
  if(error) {
    return res.status(400).send(error);
  }

  courseput.name = req.body.name;
  res.send(courseput);
});

// -------------------- DELETE COURSE (DELETE Request) --------------------
//
// Purpose:

app.delete('/deletecouse/:id', (req, res) => {
  const courseId = parseInt(req.params.id);
  const coursedelete = courses.find((c) => c.id === courseId);

  if(!coursedelete){
    return res.status(404).send("Course not found");
  }

})


//Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});