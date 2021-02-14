import React from 'react'


export const getOneLeague = (state) => {
    return state.leaguePage.oneLeague
} 

export const getOneTeam = (state) => {
    return state.teamPage.oneTeam
} 

export const getAllLeagues = (state) => {
    return state.leaguePage.leagues
}

export const getAllTeams = (state) => {
    return state.teamPage.teams
}

