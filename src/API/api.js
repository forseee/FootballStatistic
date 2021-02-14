import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "X-Auth-Token": process.env.REACT_APP_AUTH_TOKEN,
  },
});

// "6047b22b2da048618b4f8b293369e44c"

export const FootballApi = {
  //LEAGUE
  getLeagues() {
    return instance.get(`${process.env.REACT_APP_API_URL}/competitions`).then((response) => {
      return response.data.competitions;
    });
  },

  getCalendarOfLeague(id) {
    debugger
    return instance.get(`${process.env.REACT_APP_API_URL}/competitions/${id}/matches`).then((response) => {
      
      return response.data.matches;
    });
  },

  getCalendarOfLeagueDate(id, dateFrom, dateTo) {
    return instance
      .get(`${process.env.REACT_APP_API_URL}/competitions/${id}/matches/`, {
        params: {
          dateFrom: dateFrom,
          dateTo: dateTo,
        },
      })
      .then((response) => {
        return response.data.matches;
      });
  },

  //TEAM
  getTeams() {
    return instance.get(`${process.env.REACT_APP_API_URL}/teams`).then((response) => {
      return response.data.teams;
    });
  },

  getCalendarOfTeam(id) {
    return instance.get(`${process.env.REACT_APP_API_URL}/teams/${id}/matches`).then((response) => {
      return response.data.matches;
    });
  },

  getCalendarOfTeamDate(id, dateFrom, dateTo) {
    return instance
      .get(`${process.env.REACT_APP_API_URL}/teams/${id}/matches/`, {
        params: {
          dateFrom: dateFrom,
          dateTo: dateTo,
        },
      })
      .then((response) => {
        return response.data.matches;
      });
  },
};
