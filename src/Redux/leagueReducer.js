import { FootballApi } from "../API/api";

const SET_LEAGUE_STATISTIC = "SET_LEAGUE_STATISTIC";
const SET_ONE_LEAGUE_STATISTIC = "SET_ONE_LEAGUE_STATISTIC";
const FILTER_DATE_LEAGUE_STATISTIC = "FILTER_DATE_LEAGUE_STATISTIC";

let initialState = {
  leagues: [],
  oneLeague: [],
};

const leagueReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LEAGUE_STATISTIC:
      return {
        ...state,
        leagues: [...action.leagues],
      };

    case SET_ONE_LEAGUE_STATISTIC:
      return {
        ...state,
        oneLeague: [...action.leagueInfo],
      };

    case FILTER_DATE_LEAGUE_STATISTIC:
      return {
        ...state,
        oneLeague: [...action.leagueInfoDatetoDate],
      };

    default:
      return state;
  }
};

export const setLeagues = (leagues) => ({
  type: SET_LEAGUE_STATISTIC,
  leagues,
});

export const setOneLeague = (leagueInfo) => ({
  type: SET_ONE_LEAGUE_STATISTIC,
  leagueInfo,
});

export const setOneLeagueDatetoDate = (leagueInfoDatetoDate) => ({
  type: FILTER_DATE_LEAGUE_STATISTIC,
  leagueInfoDatetoDate,
});

export const getLeagues = () => {
  return (dispatch) => {
    FootballApi.getLeagues().then((leagues) => {
      dispatch(setLeagues(leagues));
    });
  };
};

export const getOneLeagueInfo = (id) => {
    return (dispatch) => {
      FootballApi.getCalendarOfLeague(id).then((league) => {
        dispatch(setOneLeague(league));
      });
    };
  };

  export const getOneLeagueInfoDateToDate = (id, dateFrom, dateTo) => {
    return (dispatch) => {
      FootballApi.getCalendarOfLeagueDate(id, dateFrom, dateTo).then((league) => {
        dispatch(setOneLeagueDatetoDate (league));
      });
    };
  };

export default leagueReducer;
