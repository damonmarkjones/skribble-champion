import { DateTime } from "luxon";

export interface Player {
  name: string;
  played: number;
  wins: number;
}

export interface HighScore {
  score: number;
  player: string;
  date: DateTime;
}

export const highScore: HighScore = {
  score: 2250,
  player: "Davide",
  date: DateTime.fromFormat("2023-01-20", "yyyy-mm-dd"),
};

const players: Player[] = [
  {
    name: "Jen",
    played: 2,
    wins: 1,
  },
  {
    name: "Damo",
    played: 3,
    wins: 1,
  },
  {
    name: "Patt",
    played: 2,
    wins: 0,
  },
  {
    name: "Mally",
    played: 3,
    wins: 0,
  },
  {
    name: "Tom",
    played: 1,
    wins: 0,
  },
  {
    name: "Qal",
    played: 3,
    wins: 0,
  },
  {
    name: "Edward",
    played: 2,
    wins: 0,
  },
  {
    name: "Eva",
    played: 3,
    wins: 0,
  },
  {
    name: "Davide",
    played: 3,
    wins: 1,
  },
];

export const playerScores = () => {
  const scores = players.sort(
    (a: Player, b: Player) => b.wins - a.wins || b.played - a.played
  );
  return scores;
};
