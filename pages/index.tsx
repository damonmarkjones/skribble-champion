import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Player, playerScores } from "../data/player-scores";
import { useEffect } from "react";

export default function Home() {
  const scores = playerScores();

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
                <th>#</th>
                <th>Player</th>
                <th>Played</th>
                <th>Wins</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((player: Player, index) => (
                <tr key={player.name}>
                  <td>{index + 1}</td>
                  <td>{player.name}</td>
                  <td className={styles.textCenter}>{player.played}</td>
                  <td className={styles.textCenter}>{player.wins}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
