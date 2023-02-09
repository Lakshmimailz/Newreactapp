export type BasketballPlayer = {
    playerId:    number
    fname:       string
    lname:       string  
    heightInches:number
    weightLbs:   number
    careerStats: CareerStats
}

export type CareerStats = {
    shotAttempts: number
    madeBaskets:  number
    rebounds:     number
    assists:      number
    blocks:       number
}


export async function getAllPlayersByStats():Promise<BasketballPlayer[]>{

    const query = `query PlayerNames{
        players{
        
          fname
          lname
          
          careerStats{
            assists
            blocks
            madeBaskets
            shotAttempts
            rebounds
          }
        }
        
      }`
    
    const requestbody:string= JSON.stringify({query:query})

    const httpResponse = await fetch("http://127.0.0.1:8000/graphql", {method:"POST", body:requestbody, headers:{"Content-Type":"application/json"}});
    const responseBody = await httpResponse.json();
    const players:BasketballPlayer[] = responseBody.data.players;
    return players
}

export type PlayerInput = {
    playerId:number
    shotAttempts:number
    madeBaskets: number
    rebounds: number
    assists: number
    blocks: number
    
}

export async function addPlayer(newPlayer: PlayerInput):Promise<{playerId:number}>{

    const query = `mutation updateStats($playerInput:StatsInput!) {
      mergeStats(input: $playerInput) {
        ... on BaksetballPlayer {
          playerId
        }
        ... on PlayerDoesNotExist {
          message
          playerId
        }
      }
    }`
    
    const variables = {playerInput:newPlayer};
    const requestBody: string = JSON.stringify({query,variables});
    console.log(requestBody);
    const httpResponse = await fetch("http://127.0.0.1:8000/graphql", {method:"POST", body:requestBody, headers:{'Content-Type':"application/json"}});
    const responseBody = await httpResponse.json();
    console.log(responseBody);
    const playerInfo:{playerId:number} = responseBody.data.addPlayer;
    return playerInfo
}