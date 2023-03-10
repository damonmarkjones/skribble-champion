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
    played: 6,
    wins: 3,
  },
  {
    name: "Damo",
    played: 9,
    wins: 1,
  },
  {
    name: "Patt",
    played: 5,
    wins: 0,
  },
  {
    name: "Mally",
    played: 8,
    wins: 2,
  },
  {
    name: "Tom",
    played: 2,
    wins: 0,
  },
  {
    name: "Qal",
    played: 10,
    wins: 0,
  },
  {
    name: "Edward",
    played: 9,
    wins: 1,
  },
  {
    name: "Eva",
    played: 7,
    wins: 0,
  },
  {
    name: "Davide",
    played: 8,
    wins: 1,
  },
  {
    name: "Liaaaaaam",
    played: 7,
    wins: 2,
  },
  {
    name: "Beth",
    played: 2,
    wins: 0,
  },
];

export const playerScores = () => {
  const scores = players.sort(
    (a: Player, b: Player) => b.wins - a.wins || a.played - b.played
  );
  return scores;
};
