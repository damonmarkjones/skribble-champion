import { DateTime } from "luxon";

export interface Player {
  name: string;
  played: number;
  wins: number;
  archived?: boolean;
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
    archived: true,
  },
  {
    name: "Damo",
    played: 14,
    wins: 2,
  },
  {
    name: "Patt",
    played: 8,
    wins: 0,
  },
  {
    name: "Mally",
    played: 13,
    wins: 4,
  },
  {
    name: "Tom",
    played: 3,
    wins: 0,
  },
  {
    name: "Qal",
    played: 14,
    wins: 0,
  },
  {
    name: "Edward",
    played: 15,
    wins: 4,
  },
  {
    name: "Eva",
    played: 9,
    wins: 0,
  },
  {
    name: "Davide",
    played: 8,
    wins: 1,
    archived: true,
  },
  {
    name: "Liaaaaaam",
    played: 14,
    wins: 3,
  },
  {
    name: "Beth",
    played: 5,
    wins: 0,
  },
  {
    name: "Biggins",
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
