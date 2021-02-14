import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "../App.css";
import { getOneTeamInfo, getOneTeamInfoDateToDate } from "../Redux/teamReducer";
import {getAllTeams} from '../Redux/selectors'

const TeamPage = () => {
  const team = useSelector(getAllTeams);
  const { teamId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneTeamInfo(teamId));
    console.log(team);
  }, [dispatch, getOneTeamInfo]);

  return (
    <div className="about">
      <div className="container">
        <h2>Информация</h2>
        <div className="description">
          <FormTeamPage id={teamId} dispatch={dispatch} />
          <TableTeamPage team={team} />
        </div>
      </div>
    </div>
  );
};


//Можно перенести в отдельную папку компаненты , но решить оставить здесь  

const FormTeamPage = ({ id, dispatch }) => {
  const [inputFrom1, setInputFrom1] = useState("");
  const [inputFrom2, setInputFrom2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let dateFrom = e.target[0].defaultValue;
    let dateTo = e.target[1].defaultValue;
    dispatch(getOneTeamInfoDateToDate(id, dateFrom, dateTo));
  };

  return (
    <div className="desc-left">
      <h3>Rebuilding the society</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="date"
            value={inputFrom1}
            onChange={(e) => setInputFrom1(e.target.value)}
          />
        </label>
        <label>
          <input
            type="date"
            value={inputFrom2}
            onChange={(e) => setInputFrom2(e.target.value)}
          />
        </label>
        <input type="submit" value="Отправить"></input>
      </form>
    </div>
  );
};

const TableTeamPage = ({team}) => {
  return (
    <div className="desc-right">
      <h3>Календарь команды</h3>
      <div className="table-conteiner mtb-3">
        <table className="table">
          <thead>
            <tr>
              <th>Home Team</th>
              <th>Away Team</th>
              <th>Год</th>
              <th>Выйграл</th>
            </tr>
          </thead>
          <tbody>
            {team.map((team) => {
              return (
                <tr key={team.id}>
                  <tr>{team.homeTeam.name}</tr>
                  <td>{team.awayTeam.name}</td>
                  <td>{team.utcDate.slice(0, 10)}</td>
                  <td>
                    {team.score.fullTime.homeTeam} -{" "}
                    {team.score.fullTime.awayTeam}{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamPage;
