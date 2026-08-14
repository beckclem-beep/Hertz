import {NextResponse} from 'next/server';
export async function POST(req:Request){
 const {pickup,dropoff,pt,dt,age}=await req.json();
 if(!pickup||!dropoff) return NextResponse.json({title:'Dates manquantes',message:'Sélectionnez les dates de prise en charge et de retour.'},{status:400});
 if(new Date(`${dropoff}T${dt}`)<=new Date(`${pickup}T${pt}`)) return NextResponse.json({title:'Dates invalides',message:'Le retour doit être après la prise en charge.'},{status:400});
 // Hertz does not expose a public pricing API. Keep the official booking path as the live source rather than fabricating prices.
 const params=new URLSearchParams({pickup,dropoff,pt,dt,age:String(age||35)});
 const url=`https://www.hertz.ca/rentacar/reservation/?${params.toString()}`;
 return NextResponse.json({title:'Recherche prête',message:'Hertz ne fournit pas de flux public de tarifs que nous pouvons interroger directement depuis Vercel. Ouvrez la recherche officielle pour voir la disponibilité et les prix réels; aucun prix fictif n’est affiché ici.',url});
}
