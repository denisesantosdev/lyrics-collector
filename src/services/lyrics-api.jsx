export async function fetchLyrics(songTitle, artistName) {
    /* fetch(`https://lyrist.vercel.app/api/${songTitle}/${artistName}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    }); */
    const res = await fetch(`https://lyrist.vercel.app/api/${songTitle}/${artistName}`)
    
   
     const data = await res.json()

    return data 
}