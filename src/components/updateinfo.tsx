import { useState } from "react"
import { useMutation, useQueryClient } from "react-query";
import { addPlayer, PlayerInput } from "../api/player-requests";

type PlayerForm = {
    playerId:number,
    shotAttempts:number,
    madeBaskets: number,
    rebounds: number,
    assists: number,
    blocks: number   

}


export function PlayerUpdateForm(){

    const [form,setForm] = useState<PlayerForm>({playerId:1,
    shotAttempts:0, madeBaskets:0,rebounds:0, assists:0, blocks:0})
    const [isVisible,setVisible] = useState<boolean>(false);

    const queryClient = useQueryClient();

    
    const createPlayerMutation = useMutation(addPlayer, {
        onSuccess: () =>{setVisible(true);
             queryClient.invalidateQueries("playercache") 
        }

    });

    function submitPlayer(){
        const playerInput: PlayerInput ={
             playerId:form.playerId,
            shotAttempts:form.shotAttempts,
            madeBaskets:form.madeBaskets,
            rebounds:form.rebounds,
            assists:form.assists,
            blocks:form.blocks
            }               
                
        createPlayerMutation.mutate(playerInput);
    }


    return <>

        
        <fieldset>
        <legend>Career Stats</legend>
              <label htmlFor="playerId">PLAYER ID</label>
              <input id="playerId"type="number" placeholder="1" onChange={e=>setForm({...form, playerId:Number(e.target.value)})}/>
              
            <label htmlFor="assists">ASSISTS</label>
            <input id="assists"type="number" placeholder="24" onChange={e=>setForm({...form, assists:Number(e.target.value)})}/>
            <label htmlFor="blocks">BLOCKS</label>
            <input id="blocks"type="number" placeholder="25" onChange={e=>setForm({...form, blocks:Number(e.target.value)})}/>
            <label htmlFor="madeBaskets">MADEBASKETS</label>
            <input id="madeBaskets"type="number" placeholder="12" onChange={e=>setForm({...form, madeBaskets:Number(e.target.value)})}/>
             <label htmlFor="shotAttempts">SHOTATTEMPTS</label>
             <input id="shotAttempts"type="number" placeholder="67" onChange={e=>setForm({...form, shotAttempts:Number(e.target.value)})}/>
             <label htmlFor="rebounds">REBOUNDS</label>
             <input id="rebounds"type="number" placeholder="54" onChange={e=>setForm({...form, rebounds:Number(e.target.value)})}/>
        </fieldset>

       <button onClick={submitPlayer} >Add Player</button>

       
       {isVisible ? <h5>Player Created</h5> : <> </> }
    
    
    </>

}