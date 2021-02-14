import { FootballApi } from "../API/api";

const SET_TEAMS_STATISTIC = "SET_TEAMS_STATISTIC";
const FILTER_DATE_TEAM_STATISTIC = "FILTER_DATE_TEAM_STATISTIC";
const SET_ONE_TEAM_STATISTIC = "SET_ONE_TEAM_STATISTIC";
const UPDATE_TEAMS = "UPDATE_TEAMS";

let initialState = {
  teams: [],
  oneTeam: [],
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEAMS_STATISTIC:
      return {
        ...state,
        teams: [...action.teams],
      };

    case SET_ONE_TEAM_STATISTIC:
      return {
        ...state,
        oneTeam: [...action.teamInfo],
      };

    case FILTER_DATE_TEAM_STATISTIC:
      return {
        ...state,
        oneTeam: [...action.teamInfoDatetoDate],
      };
    case UPDATE_TEAMS:
      return {
        ...state,
        teams: [
          ...state.teams.filter((team) => {
            if (team.founded === Number(action.date)) {
              return true;
            } else {
              return false;
            }
          }),
        ],
      };

    default:
      return state;
  }
};

export const setTeams = (teams) => ({ type: SET_TEAMS_STATISTIC, teams });

export const setOneTeam = (teamInfo) => ({
  type: SET_ONE_TEAM_STATISTIC,
  teamInfo,
});

export const setOneTeamDatetoDate = (teamInfoDatetoDate) => ({
  type: FILTER_DATE_TEAM_STATISTIC,
  teamInfoDatetoDate,
});

export const updateTeams = (date) => ({ type: UPDATE_TEAMS, date });

export const getTeams = () => {
  return (dispatch) => {
    FootballApi.getTeams().then((teams) => {
      dispatch(setTeams(teams));
    });
  };
};

export const getOneTeamInfo = (id) => {
  return (dispatch) => {
    FootballApi.getCalendarOfTeam(id).then((team) => {
      dispatch(setOneTeam(team));
    });
  };
};

export const getOneTeamInfoDateToDate = (id, dateFrom, dateTo) => {
  return (dispatch) => {
    FootballApi.getCalendarOfTeamDate(id, dateFrom, dateTo).then((team) => {
      dispatch(setOneTeamDatetoDate(team));
    });
  };
};

export default teamReducer;
