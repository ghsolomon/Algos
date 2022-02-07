/**
 * Tournament Winner
 *
  There's an algorithms tournament taking place in which teams of programmers
  compete against each other to solve algorithmic problems as fast as possible.
  Teams compete in a round robin, where each team faces off against all other
  teams. Only two teams compete against each other at a time, and for each
  competition, one team is designated the home team, while the other team is the
  away team. In each competition there's always one winner and one loser; there
  are no ties. A team receives 3 points if it wins and 0 points if it loses. The
  winner of the tournament is the team that receives the most amount of points.


  Given an array of pairs representing the teams that have competed against each
  other and an array containing the results of each competition, write a
  function that returns the winner of the tournament. The input arrays are named
  competitions and results respectively. The competitions array has elements in
  the form of [homeTeam, awayTeam], where each team is a string of at most 30
  characters representing the name of the team. The results array
  contains information about the winner of each corresponding competition in the
  competitions array. Specifically, results[i] denotes
  the winner of competitions[i], where a 1 in the
  results array means that the home team in the corresponding
  competition won and a 0 means that the away team won.

  Examples:

  competitions = [
    ['TeamA','TeamB'],
    ['TeamC','TeamD'],
    ['TeamD','TeamA']
  ]

  results=[0,0,1]

  Output = 'TeamD'

  */

const tournamentWinner = (competitions, results) => {
  let bestTeam;
  let highScore = 0;
  const teamWins = {};

  for (let i = 0; i < results.length; i++) {
    const winningTeam = competitions[i][1 - results[i]];
    const numWins = (teamWins[winningTeam] || 0) + 3;
    teamWins[winningTeam] = numWins;
    if (numWins > highScore) {
      highScore = numWins;
      bestTeam = winningTeam;
    }
  }

  return bestTeam;
};
