import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";
import { getAllTeams } from "../Redux/selectors";
import { getTeams } from "../Redux/teamReducer";

const TeamStatistic = () => {
  const teams = useSelector(state => state.teamPage.teams);
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
            <h3>Rebuilding the society</h3>
            <p>
              Burning Man is a network of people inspired by the values
              reflected in the Ten Principles and united in the pursuit of a
              more creative and connected existence in the world. Throughout the
              year we work to build Black Rock City, home of the largest annual
              Burning Man gathering, and nurture the distinctive culture
              emerging from that experience.
            </p>
          </div>
          <div className="desc-right">
            <h3>Статистика команды</h3>
            <div className="table-conteiner mtb-3">
              <table className="table">
                <thead>
                  <tr>
                    <th>Лига</th>
                    <th>Страна</th>
                    <th>Год</th>
                    <th>Выбор</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map((team) => {
                    return (
                      <tr key={team.id}>
                        <td>{team.name}</td>
                        <td>{team.area.name}</td>
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

export default TeamStatistic;
