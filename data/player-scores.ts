export interface Player {
  name: string;
  played: number;
  wins: number;
}

const players: Player[] = [
  {
    name: "Jen",
    played: 2,
    wins: 1,
  },
  {
    name: "Damo",
    played: 2,
    wins: 1,
  },
  {
    name: "Patt",
    played: 2,
    wins: 0,
  },
  {
    name: "Mally",
    played: 2,
    wins: 0,
  },
  {
    name: "Tom",
    played: 1,
    wins: 0,
  },
  {
    name: "Qal",
    played: 2,
    wins: 0,
  },
  {
    name: "Edward",
    played: 2,
    wins: 0,
  },
  {
    name: "Eva",
    played: 2,
    wins: 0,
  },
  {
    name: "Davide",
    played: 2,
    wins: 0,
  },
];

export const playerScores = () => {
  const scores = players.sort(
    (a: Player, b: Player) => b.wins - a.wins || b.played - a.played
  );
  return scores;
};
