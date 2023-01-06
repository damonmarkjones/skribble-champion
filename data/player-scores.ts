export interface Player {
  name: string;
  played: number;
  wins: number;
}

const players: Player[] = [
  {
    name: "Jen",
    played: 1,
    wins: 1,
  },
  {
    name: "Damo",
    played: 1,
    wins: 0,
  },
  {
    name: "Patt",
    played: 1,
    wins: 0,
  },
  {
    name: "Mally",
    played: 1,
    wins: 0,
  },
  {
    name: "Tom",
    played: 0,
    wins: 0,
  },
  {
    name: "Qal",
    played: 1,
    wins: 0,
  },
  {
    name: "Edward",
    played: 1,
    wins: 0,
  },
  {
    name: "Eva",
    played: 1,
    wins: 0,
  },
  {
    name: "Davide",
    played: 1,
    wins: 0,
  },
];

export const playerScores = () => {
  const scores = players.sort(
    (a: Player, b: Player) => b.wins - a.wins || b.played - a.played
  );
  return scores;
};
