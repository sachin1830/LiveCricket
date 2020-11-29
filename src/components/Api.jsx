
export const getMatches = () => {
    const url = "https://cricapi.com/api/matches?apikey=gH4PUiGwXCNYpRLAC42bJuW7hb43";

    return fetch(url)
        .then((responce) => {
            return responce.json()
        })
        .catch((error) => { console.log("error is " + error) })

}

export const geMatchDetails = (id) => {
    const url = `https://cricapi.com/api/cricketScore?apikey=gH4PUiGwXCNYpRLAC42bJuW7hb43&unique_id=${id}`;
    console.log("id is:"+id);
    return fetch(url)
        .then((responce) => {
            return responce.json()
        })
        .catch((error) => { console.log("error is " + error) })

}






