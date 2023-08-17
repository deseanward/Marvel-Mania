export const fetchData = async (req) => {
    try {
        const res = await fetch(req);
        const data = await res.json();

        console.log(data.results)
    } catch (error) {
        
    }
}