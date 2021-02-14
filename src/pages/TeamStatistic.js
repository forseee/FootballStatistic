import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";
import { getAllTeams } from "../Redux/selectors";
import { getTeams, updateTeams } from "../Redux/teamReducer";

const TeamStatistic = () => {
  const teams = useSelector(getAllTeams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeams());
    console.log(teams);
  }, []);

  return (
    <div className="about">
      <div className="container">
        <h2>Информация</h2>
        <div className="description">
          <div className="desc-left">
            <FormDate teams={teams} dispatch={dispatch} />
          </div>
          <div className="desc-right">
            <h3>Статистика команды</h3>
            <div className="table-conteiner mtb-3">
              <table className="table">
                <thead>
                  <tr>
                    <th>Лига</th>
                    <th>Страна</th>
                    <th>Основана</th>
                    <th>Выбор</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map((team) => {
                    return (
                      <tr key={team.id}>
                        <td>{team.name}</td>
                        <td>{team.area.name}</td>
                        <td>{team.founded}</td>
                        <td>
                          <Link to={"/teamPage/" + team.id}>Выбор</Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormDate = ({ teams, dispatch }) => {
  const [inputFrom1, setInputFrom1] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTeams(inputFrom1))
  };



  return (
    <div className="desc-left">
      <h3>Фильтры</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            input
            type="number"
            min="1800"
            max="2021"
            step="1"
            placeholder="2020"
            value={inputFrom1}
            onChange={(e) => setInputFrom1(e.target.value)}
          />
        </label>
        <input type="submit" value="Отправить"></input>
      </form>
    </div>
  );
};

export default TeamStatistic;
