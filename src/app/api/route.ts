// Use standard Node.js syntax (no need for "use server")
import { NextResponse } from "next/dist/server/web/spec-extension/response.js";
import pool from "../../db.js"; // Assuming this imports the pg pool connection

export async function POST(request: Request) {
  let params;

  // Handle JSON parsing errors
  try {
    // Check if request body is empty
    if (!request.body) {
      return NextResponse.json({ message: "Request body is required." });
    }

    params = await request.json();
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return NextResponse.json({ message: "Invalid JSON input." });
  }

  console.log("UserData", params);

  // Destructuring assignment for cleaner code
  const { full_name, email, password, phone_number, address, country } = params;

  if (!full_name) {
    return NextResponse.json({ message: "Full name is required." });
  }

  try {
    // Use prepared statement and parameter values for security
    const result = await pool.query(
      "INSERT INTO users (full_name, email, password, phone_number, country, address) VALUES ($1, $2, $3, $4, $5, $6)",
      [full_name, email, password, phone_number, country, address]
    );

    console.log("result", result);
    return NextResponse.json({ message: "User data stored successfully." });
  } catch (error) {
    console.error("Error executing query", error);
    return NextResponse.json({ message: "Failed to store user data." });
  }
}
// export async function GET() {
//   return NextResponse.json({ hallo: "hallo world" });
// }
