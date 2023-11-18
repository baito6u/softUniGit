class footballTeam {
    constructor(clubName, country) {
      this.clubName = clubName;
      this.country = country;
      this.invitedPlayers = [];
    }
  
    newAdditions(footballPlayers) {
      let invitedNames = new Set();
      footballPlayers.forEach(playerInfo => {
        const [name, age, playerValue] = playerInfo.split('/');
        const existingPlayer = this.invitedPlayers.find(player => player.name === name);
  
        if (existingPlayer) {
          if (parseFloat(existingPlayer.playerValue) < parseFloat(playerValue)) {
            existingPlayer.playerValue = parseFloat(playerValue).toFixed(2);
          }
        } else {
          this.invitedPlayers.push({ name, age, playerValue: parseFloat(playerValue).toFixed(2) });
          invitedNames.add(name);
        }
      });
  
      const invitedNamesString = Array.from(invitedNames).join(', ');
      return `You successfully invite ${invitedNamesString}.`;
    }
  
    signContract(selectedPlayer) {
      const [name, playerOffer] = selectedPlayer.split('/');
      const player = this.invitedPlayers.find(player => player.name === name);
  
      if (!player) {
        throw `${name} is not invited to the selection list!`;
      }
  
      const playerValue = parseFloat(player.playerValue);
      const offer = parseFloat(playerOffer);
  
      if (offer < playerValue) {
        const priceDifference = (playerValue - offer).toFixed(2);
        throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
      }
  
      player.playerValue = "Bought";
      return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
    }
  
    ageLimit(name, age) {
      const player = this.invitedPlayers.find(player => player.name === name);
  
      if (!player) {
        throw `${name} is not invited to the selection list!`;
      }

      if(player.age >= age) {
        return `${name} is above age limit!`
      }
  
      const ageDifference = age - player.age;
      if (ageDifference <= 5) {
        return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
      } else {
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
      }
    }
  
    transferWindowResult() {
      const sortedPlayers = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
      const playerList = sortedPlayers.map(player => `Player ${player.name}-${player.playerValue}`).join('\n');
      return `Players list:\n${playerList}`;
    }
  }

  let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Lionel Messi/60"));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.signContract("Barbukov/10"));