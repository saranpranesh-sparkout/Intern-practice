class ValidationError extends Error {
constructor(msg) {
super(msg);
this.name = "ValidationError";
}
}

class JSONError extends Error {
constructor(msg) {
super(msg);
this.name = "JSONError";
}
}

const parseJSON = (data) => {
try {
return JSON.parse(data);
} catch {
throw new JSONError("Invalid JSON!");
}
};

const validateUser = (user) => {
if (!user.name || typeof user.name !== "string")
throw new ValidationError("Name must be a string!");
if (!user.age || typeof user.age !== "number")
throw new ValidationError("Age must be a number!");
return true;
};


const apiData = '{"name":"Saran","age":22}';

try {
const user = parseJSON(apiData); // Parse JSON
validateUser(user);               // Validate data
console.log("User is valid:", user);
} catch (err) {
console.error(`${err.name}: ${err.message}`);
}

