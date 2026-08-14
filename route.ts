import {NextResponse} from 'next/server'

export async function POST(req:Request){
  const body=await req.json()
  if(!body.pickup||!body.dropoff) return NextResponse.json({message:'Dates manquantes.'},{status:400})
  return NextResponse.json({message:'La recherche est prête. La connexion aux disponibilités Hertz doit encore être activée.'})
}
