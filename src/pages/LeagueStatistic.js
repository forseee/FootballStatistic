import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";
import { getAllLeagues } from "../Redux/selectors";
import { getLeagues } from "../Redux/leagueReducer";
import Preloader from "../component/Preloader";

const LeagueStatistic = () => {
  const leagues = useSelector((state) => state.leaguePage.leagues);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLeagues());
  }, [dispatch, getLeagues]);

  console.log(leagues);
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
            <h3>Статистика лиги</h3>
            <div className="table-conteiner mtb-3">
              <table className="table">
                <thead>
                  <tr>
                    <th>Лига</th>
                    <th>Страна</th>
                    <th>Выбор</th>
                  </tr>
                </thead>
                <tbody>
                  {leagues.map((league) => {
                    return (
                      <tr key={league.id}>
                        <td>{league.name}</td>
                        <td>{league.area.name}</td>
                        <td>
                          <Link to={"/leaguePage/" + league.id}>Выбор</Link>
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

export default LeagueStatistic;
