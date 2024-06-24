import { NextResponse ,NextRequest } from 'next/server';
import con from "@/db";

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