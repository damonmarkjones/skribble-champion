import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Player, playerScores, highScore } from "../data/player-scores";
import { DateTime } from "luxon";
import { faMedal, faSkull } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const scores = playerScores();

  const paintMedals = (index: number) => {
    const colourMap = new Map([
      [1, styles.gold],
      [2, styles.silver],
      [3, styles.bronze],
    ]);

    const colourClass = colourMap.get(index + 1);

    return colourClass ? (
      <FontAwesomeIcon className={colourClass} icon={faMedal}></FontAwesomeIcon>
    ) : null;
  };

  return (
    <>
      <Head>
        <title>Skribble Champion</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Who's going to be the 2023 Skribble Champion?</h1>
        </div>

        <div className={styles.center}>
          <table className={styles.playerScoresTable}>
            <thead>
              <tr>
                <th></th>
                <th>#</th>
                <th className={styles.left}>Player</th>
                <th>Played</th>
                <th>Wins</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((player: Player, index) => (
                <tr key={player.name}>
                  <th>{paintMedals(index)}</th>
                  <td>{index + 1}</td>
                  <td>
                    {player.name}{" "}
                    {player.archived && (
                      <FontAwesomeIcon icon={faSkull}></FontAwesomeIcon>
                    )}
                  </td>
                  <td className={styles.textCenter}>{player.played}</td>
                  <td className={styles.textCenter}>{player.wins}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.info}>
          <p className={styles.highscore}>
            {highScore.player} has the highest score of {highScore.score}{" "}
            achieved on{" "}
            {highScore.date.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}
          </p>
          <p className={styles.disclaimer}>
            * High score tracking started on the 20th Jan
          </p>
        </div>
      </main>
    </>
  );
}
