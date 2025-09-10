require("dotenv").config();
const jwt = require("jsonwebtoken");


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzU3MzI0MjM5LCJleHAiOjE3NTczMjc4Mzl9.BnACtZGpDdRUeVDo7KjQyO55kKLgbUL58vSRTrCCv3M";

try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log("Token valid:", decoded);
} catch (err) {
  console.error(" Verify error:", err.message);
}
