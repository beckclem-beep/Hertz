import { NextResponse } from 'next/server';
export async function POST(req:Request){
  const body=await req.json();
  const {pickupDate,returnDate,pickupTime,returnTime,vehicle}=body;
  if(!pickupDate||!returnDate) return NextResponse.json({error:'Sélectionne les dates de prise en charge et de retour.'},{status:400});
  if(new Date(`${returnDate}T${returnTime||'10:00'}`)<=new Date(`${pickupDate}T${pickupTime||'10:00'}`)) return NextResponse.json({error:'Le retour doit être après la prise en charge.'},{status:400});
  // Démo locale: l'intégration Hertz réelle doit être branchée ici via une source autorisée/API.
  return NextResponse.json({location:'Hertz Brossard — boul. Taschereau',vehicle:vehicle||'Tesla',searchedAt:new Date().toISOString(),live:false,results:[],message:'Aucune connexion Hertz en direct n’est configurée. La recherche est prête à recevoir une API/source de disponibilité.'});
}
