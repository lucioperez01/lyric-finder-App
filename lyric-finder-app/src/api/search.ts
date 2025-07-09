export async function searchDeezer() {
    const response = await fetch('https://api.deezer.com/search?q=your_query');
    const data = await response.json();
    return data;
}

console.log(searchDeezer());