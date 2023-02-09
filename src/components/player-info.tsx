import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { BasketballPlayer, getAllPlayersByStats} from "../api/player-requests"



export function Playerinfo(){



    const {isLoading, isError, data =[]} = useQuery("playercache",getAllPlayersByStats );

    if(isLoading){
        return <h1>LOADING</h1>
    }  

    if(isError) {
        return <h1>Error</h1>
    }

  

    return <>
        <h2>Player Name and  Stats</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th> <th>ShotAttempts</th> <th>Assists</th><th>MadeBaskets</th><th>Blocks</th><th>Rebounds</th>
                </tr>
            </thead>
            <tbody>
                {data.map(p => <tr><td>{p.fname} {p.lname}</td><td>{p.careerStats.shotAttempts}</td><td>{p.careerStats.assists}</td><td>{p.careerStats.madeBaskets}</td><td>{p.careerStats.blocks}</td><td>{p.careerStats.rebounds}</td></tr>)}
            </tbody>
        </table>
        
       
       
    </>
}