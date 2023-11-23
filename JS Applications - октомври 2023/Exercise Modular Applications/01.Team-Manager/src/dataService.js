import {api} from "./api.js";

const dataEndPoints = {
    allTeams: "data/teams",
    allMembers:"data/members?where=status%3D%22member%22" 
}

async function getAllTeam() {
   return await api.get(dataEndPoints.allTeams);
}


export const dataService = {
    getAllTeam,
}