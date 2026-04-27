export const metadata = {
  title: 'JSON Validation Best Practices in Your Applications',
  slug: 'json-validation-best-practices',
  date: 'March 12, 2025',
  category: 'Best Practices',
  readTime: 9,
};

export default function BlogPost() {
  return (
    <>
      <p>
        JSON validation is critical for building robust applications that handle external data reliably. Whether you're consuming APIs, processing user uploads, or accepting form submissions, proper JSON validation can prevent bugs, security vulnerabilities, and data corruption. This guide covers everything you need to know about validating JSON effectively.
      </p>

      <h2>Why JSON Validation Matters</h2>

      <p>
        JSON validation serves multiple important purposes:
      </p>

      <ul>
        <li>
          <strong>Data Integrity:</strong> Ensure data conforms to expected structure and types
        </li>
        <li>
          <strong>Security:</strong> Prevent injection attacks and unexpected data manipulation
        </li>
        <li>
          <strong>Error Handling:</strong> Identify and report invalid data before processing
        </li>
        <li>
          <strong>API Contracts:</strong> Enforce API schemas and prevent breaking changes
        </li>
        <li>
          <strong>User Experience:</strong> Provide clear error messages for debugging
        </li>
      </ul>

      <h2>Levels of Validation</h2>

      <h3>1. Syntax Validation</h3>

      <p>
        First, ensure the JSON is valid syntax. Invalid JSON should be rejected immediately:
      </p>

      <pre>
        <code>{`// Valid JSON
{"name": "John", "age": 30}

// Invalid: Trailing comma
{"name": "John", "age": 30,}

// Invalid: Single quotes
{'name': 'John'}

// Invalid: Unquoted keys
{name: "John"}`}</code>
      </pre>

      <h3>2. Schema Validation</h3>

      <p>
        Verify JSON conforms to an expected schema (structure, types, required fields):
      </p>

      <pre>
        <code>{`// Expected schema
{
  "type": "object",
  "properties": {
    "name": {"type": "string"},
    "age": {"type": "number"},
    "email": {"type": "string", "format": "email"}
  },
  "required": ["name", "age"]
}

// Valid JSON
{"name": "John", "age": 30, "email": "john@example.com"}

// Invalid: Missing required field
{"name": "John"}

// Invalid: Wrong type
{"name": "John", "age": "thirty"}`}</code>
      </pre>

      <h3>3. Semantic Validation</h3>

      <p>
        Beyond structure, validate business logic and constraints:
      </p>

      <ul>
        <li>Age should be reasonable (18-120)</li>
        <li>Email should be a valid format</li>
        <li>Dates should be in the future for appointments</li>
        <li>IDs should exist in the database</li>
      </ul>

      <h2>Validation Strategies</h2>

      <h3>Client-Side Validation</h3>

      <p>
        Validate in the browser before sending data:
      </p>

      <pre>
        <code>{`// JavaScript
function validateUser(data) {
  if (!data.name || typeof data.name !== 'string') {
    throw new Error('Name is required and must be a string');
  }
  if (typeof data.age !== 'number' || data.age < 0 || data.age > 150) {
    throw new Error('Age must be a number between 0 and 150');
  }
  return true;
}

// Usage
try {
  validateUser({name: 'John', age: 30});
  console.log('Valid!');
} catch (error) {
  console.error(error.message);
}`}</code>
      </pre>

      <h3>Server-Side Validation (Essential)</h3>

      <p>
        Always validate on the server, even if client-side validation is present:
      </p>

      <pre>
        <code>{`// Python with FastAPI
from pydantic import BaseModel, validator

class User(BaseModel):
    name: str
    age: int
    email: str
    
    @validator('age')
    def age_must_be_positive(cls, v):
        if v < 0 or v > 150:
            raise ValueError('Age must be between 0 and 150')
        return v
    
    @validator('email')
    def email_must_be_valid(cls, v):
        if '@' not in v:
            raise ValueError('Invalid email format')
        return v`}</code>
      </pre>

      <h2>JSON Schema</h2>

      <p>
        JSON Schema is a standardized format for describing JSON structure:
      </p>

      <pre>
        <code>{`{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "User",
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "Unique user ID"
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 100
    },
    "email": {
      "type": "string",
      "format": "email"
    },
    "age": {
      "type": "integer",
      "minimum": 0,
      "maximum": 150
    },
    "tags": {
      "type": "array",
      "items": {"type": "string"},
      "minItems": 0,
      "maxItems": 10
    }
  },
  "required": ["id", "name", "email"],
  "additionalProperties": false
}`}</code>
      </pre>

      <h2>Validation Libraries</h2>

      <h3>JavaScript</h3>

      <ul>
        <li>
          <strong>Zod:</strong> TypeScript-first schema validation with excellent error messages
        </li>
        <li>
          <strong>Joi:</strong> Powerful and expressive schema description language
        </li>
        <li>
          <strong>JSON Schema Validator:</strong> Validate against JSON Schema
        </li>
      </ul>

      <h3>Python</h3>

      <ul>
        <li>
          <strong>Pydantic:</strong> Data validation using Python type annotations
        </li>
        <li>
          <strong>Marshmallow:</strong> ORM/framework-agnostic serialization
        </li>
        <li>
          <strong>jsonschema:</strong> JSON Schema validation
        </li>
      </ul>

      <h3>PHP</h3>

      <ul>
        <li>
          <strong>Laravel Validation:</strong> Built-in validation with elegant syntax
        </li>
        <li>
          <strong>Respect/Validation:</strong> Fluent, composable validation library
        </li>
      </ul>

      <h2>Common Validation Mistakes</h2>

      <h3>Only Validating on the Client</h3>

      <pre>
        <code>{`// WRONG: Only client-side validation
if (clientValidation(data)) {
  await sendToServer(data);
}

// CORRECT: Always validate server-side
if (clientValidation(data)) {
  try {
    const response = await sendToServer(data);
    // Server performs validation too!
  } catch (error) {
    // Handle server validation errors
  }
}`}</code>
      </pre>

      <h3>Trusting User Input Types</h3>

      <pre>
        <code>{`// WRONG: Assuming correct types
const age = data.age; // Could be string "30" instead of number

// CORRECT: Validate and coerce types
const age = parseInt(data.age);
if (isNaN(age) || age < 0 || age > 150) {
  throw new Error('Invalid age');
}`}</code>
      </pre>

      <h3>Ignoring Unexpected Fields</h3>

      <pre>
        <code>{`// Problem: Accidental inclusion of admin flag
{
  "name": "John",
  "email": "john@example.com",
  "isAdmin": true  // User-supplied!
}

// Solution: Use whitelist approach
const allowedFields = ['name', 'email', 'age'];
const validData = Object.keys(data)
  .filter(key => allowedFields.includes(key))
  .reduce((obj, key) => { obj[key] = data[key]; return obj; }, {});`}</code>
      </pre>

      <h2>Security Best Practices</h2>

      <ul>
        <li>
          <strong>Size Limits:</strong> Reject JSON documents exceeding expected size to prevent DoS attacks
        </li>
        <li>
          <strong>Depth Limits:</strong> Limit nesting depth to prevent stack overflow from deeply nested objects
        </li>
        <li>
          <strong>Whitelist Approach:</strong> Only allow expected fields, reject unknown fields
        </li>
        <li>
          <strong>Type Checking:</strong> Validate that types match schema, don't trust implicit conversions
        </li>
        <li>
          <strong>Format Validation:</strong> For emails, URLs, dates, validate format rigorously
        </li>
        <li>
          <strong>Rate Limiting:</strong> Prevent validation attacks through rate limiting on API endpoints
        </li>
      </ul>

      <h2>Error Handling</h2>

      <p>
        Provide clear, actionable error messages:
      </p>

      <pre>
        <code>{`// Good error response
{
  "error": "Validation failed",
  "details": [
    {
      "field": "email",
      "message": "Invalid email format",
      "value": "john@invalid"
    },
    {
      "field": "age",
      "message": "Age must be a number",
      "value": "thirty"
    }
  ]
}

// Bad error response
{
  "error": "Invalid input"
}`}</code>
      </pre>

      <h2>Testing Validation</h2>

      <p>
        Thoroughly test your validation logic:
      </p>

      <ul>
        <li>Valid data should pass</li>
        <li>Missing required fields should fail</li>
        <li>Wrong types should fail</li>
        <li>Out-of-range values should fail</li>
        <li>Invalid formats should fail</li>
        <li>Unknown fields should be rejected or ignored</li>
      </ul>

      <h2>Conclusion</h2>

      <p>
        Robust JSON validation is not optional — it's essential for building secure, reliable applications. Combine client-side validation for user experience with comprehensive server-side validation for security. Use established libraries and schemas rather than writing custom validation logic. When in doubt, validate, and always assume user input is potentially malicious.
      </p>
    </>
  );
}
