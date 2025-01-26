import Results from "@/components/Results";
import SearchArea from "@/components/SearchArea";

const API_KEY = process.env.API_KEY;

 export default async function Home() {

  const res  = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`)
  const data  = await res.json();
  if(!res.ok){
    throw new ("Failed to fetech data");
  }
  const result = data.results;
  return (
    <>
    
      <Results results={result} />
    
    </>

   
  )
}


