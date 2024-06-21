import { NextResponse ,NextRequest } from 'next/server';
import con from "@/db";


export async function POST(request: Request) {
  let params;

  // Handle JSON parsing errors
  try {
    if (!request.body) {
      return NextResponse.json({ message: "Request body is required." }, { status: 400 });
    }

    params = await request.json();

    // Check if JSON data is missing
    if (!params) {
      return NextResponse.json({ message: "Invalid JSON input." }, { status: 400 });
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return NextResponse.json({ message: "Invalid JSON input." }, { status: 400 });
  }

  const { full_name, email, password, phone_number, country, address } = params;

  if (!full_name) {
    return NextResponse.json({ message: "Full name is required." }, { status: 400 });
  }

  console.log("start query");

  try {
    const result =  await new Promise((resolve,reject)=>{
      con.query(`INSERT INTO users (full_name, email, password, phone_number, country, address) VALUES (?, ?, ?, ?, ?, ?)`,
        [full_name, email, password, phone_number, country, address],(err:any ,result:[])=>{
        if(err){
         reject(err);
        }
        else{
         resolve(result);
         
        }
   });

    }) 
   

    console.log("result", result);
    return NextResponse.json({ message: "User data stored successfully.", result }, { status: 201 });
  } catch (error) {
  
    return NextResponse.json({ message:"Faild to use this data" }, { status: 500 });
  }
}


// export async function GET(req: Request): Promise<NextResponse> {
//   console.log("Start query");

//   try {
//     let query = `SELECT * FROM users`;
    

//     const result = await con.query(query);

//     // Filter response data (optional)
//     // const responseUserData = result.map((user: { id: any; full_name: any; email: any; }) => ({
//     //   id: user.id,
//     //   full_name: user.full_name,
//     //   email: user.email, // Adjust based on what you want to expose
//     // }));

//     return NextResponse.json({ message: "User data retrieved successfully.", data: result }, { status: 200 });
//   } catch (error) {
//     console.error("Error executing query:", error.message);

//     let errorMessage = "Failed to retrieve user data.";

//     // Handle specific errors (optional)
//     if (error.code === 'ER_NO_DATA_FOR_EXECUTED_STATEMENT') {
//       errorMessage = "No user found.";
//     }

//     return NextResponse.json({ message: errorMessage }, { status: 500 });
//   }
// }



export async function GET(request:Request ,context:any) {
  const {params} =context;
  console.log(params);
  try {
    const result= await new Promise((resolve,reject)=>{
      con.query(`SELECT * FROM users where id=?`,[params.id],(err:any ,result:[])=>{
           if(err){
            reject(err);
           }
           else{
            resolve(result);
            
           }
      });
    });
    console.log("result", result);
    return NextResponse.json({
    result
    }, { status: 201 });
  } 
  catch (error) {


     return NextResponse.json(
      { message: error},
    
    
    )
  }
  
  }