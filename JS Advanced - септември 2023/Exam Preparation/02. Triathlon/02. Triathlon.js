class Triathlon {
    constructor(name) {
      this.name = name;
      this.participants = {};
      this.listOfFinalists = [];
    }
  
    addParticipant(participantName, participantGender) {
      if (!this.participants.hasOwnProperty(participantName)) {
        this.participants[participantName] = participantGender;
  
        return `A new participant has been added - ${participantName}`;
      }
  
      return `${participantName} has already been added to the list`;
    }
  
    completeness(participant, condition) {
      if (!this.participants[participant]) {
        throw new Error(`${participant} is not in the current participants list`);
      }
  
      if (condition < 30) {
        throw new Error(
          `${participant} is not well prepared and cannot finish any discipline`
        );
      }
  
      const finishedDisciplinesCount = Math.floor(condition / 30);
  
      if (finishedDisciplinesCount > 0 && finishedDisciplinesCount < 3) {
        return `${participant} could only complete ${finishedDisciplinesCount} of the disciplines`;
      }
  
      const gender = this.participants[participant];
      this.listOfFinalists.push({
        name: participant,
        gender,
      });
  
      return `Congratulations, ${participant} finished the whole competition`;
    }
  
    rewarding(participant) {
      const hasFinished = this.listOfFinalists.some(
        (finalist) => finalist.name === participant
      );
  
      if (!hasFinished) {
        return `${participant} is not in the current finalists list`;
      }
  
      return `${participant} was rewarded with a trophy for his performance`;
    }
  
    showRecord(criteria) {
      if (this.listOfFinalists.length === 0) {
        return `There are no finalists in this competition`;
      }
  
      if (criteria === "male" || criteria === "female") {
        return `${this.listOfFinalists[0].name} is the first ${criteria} that finished the ${this.name} triathlon`;
      }
  
      if (criteria === "all") {
        let resultMessage = [`List of all ${this.name} finalists:`];
  
        const sortedFinalists = this.listOfFinalists.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
  
        sortedFinalists.forEach((finalist) =>
          resultMessage.push(`${finalist.name}`)
        );
  
        return resultMessage.join("\n");
      }
  
      return `There are no ${criteria}'s that finished the competition`;
    }
  }
  
  const contest = new Triathlon("Dynamos");
  console.log(contest.addParticipant("Peter", "male"));
  console.log(contest.addParticipant("Sasha", "female"));
  console.log(contest.completeness("Peter", 100));
  console.log(contest.completeness("Sasha", 90));
  console.log(contest.rewarding("Peter"));
  console.log(contest.rewarding("Sasha"));
  console.log(contest.showRecord("all"));
  