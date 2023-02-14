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
  score: 5615,
  player: "Liam",
  date: DateTime.fromFormat("2023-01-27", "yyyy-mm-dd"),
};

const players: Player[] = [
  {
    name: "Jen",
    played: 5,
    wins: 3,
  },
  {
    name: "Damo",
    played: 5,
    wins: 1,
  },
  {
    name: "Patt",
    played: 3,
    wins: 0,
  },
  {
    name: "Mally",
    played: 5,
    wins: 0,
  },
  {
    name: "Tom",
    played: 2,
    wins: 0,
  },
  {
    name: "Qal",
    played: 6,
    wins: 0,
  },
  {
    name: "Edward",
    played: 5,
    wins: 0,
  },
  {
    name: "Eva (aka Soviet Union)",
    played: 5,
    wins: 0,
  },
  {
    name: "Davide",
    played: 6,
    wins: 1,
  },
  {
    name: "Liaaaaaam",
    played: 3,
    wins: 1,
  },
];

export const playerScores = () => {
  const scores = players.sort(
    (a: Player, b: Player) => b.wins - a.wins || a.played - b.played
  );
  return scores;
};
