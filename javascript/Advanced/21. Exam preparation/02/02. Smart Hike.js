class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }

  addGoal(peak, altitude) {
    const isGoalNew = `${peak}` in this.goals;
    if (isGoalNew == false) {
      this.goals[`${peak}`] = altitude;
      return `You have successfully added a new goal - ${peak}`;
    } else {
      return `${peak} has already been added to your goals`;
    }
  }

  hike(peak, time, difficultyLevel) {
    const isPeakAvailible = `${peak}` in this.goals;
    const difference = this.resources - time * 10;
    if (isPeakAvailible == false) {
      throw new Error(`${peak} is not in your current goals`);
    }
    if ((this.resources = 0)) {
      throw new Error("You don't have enough resources to start the hike");
    }
    if (difference < 0) {
      return "You don't have enough resources to complete the hike";
    } else {
      this.resources = difference;
      const completedPeak = {
        peak,
        time,
        difficultyLevel,
      };
      this.listOfHikes.push(completedPeak);
      return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }
  }

  rest(time) {
    const restTime = time * 10;
    if ((this.resources += restTime) >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    } else {
      this.resources += restTime;
      return `You have rested for ${time} hours and gained ${restTime}% resources`;
    }
  }

  showRecord(criteria) {
    if (this.listOfHikes.length < 1) {
      return `${this.username} has not done any hiking yet`;
    }
    if (criteria == "all") {
      let arr = [];
      for (let curr of this.listOfHikes) {
        let peak = curr.peak;
        let time = curr.time;
        arr.push(`${this.username} hiked ${peak} for ${time} hours`);
      }
      return [`All hiking records:`, arr.join(``)].join(`\n`);
    } else {
      let currentBest = this.listOfHikes.findIndex(
        (p) => p.criteria == criteria
      );
      for (let curr of this.listOfHikes) {
        if (curr.difficultyLevel == criteria) {
          let peak = curr.peak;
          let time = curr.time;
          let criteriaCurr = curr.difficultyLevel;
          return `${this.username}'s best ${criteriaCurr} hike is ${peak} peak, for ${time} hours`;
        }
      }
      if (currentBest == -1) {
        return `${this.username} has not done any ${criteria} hiking yet`;
      }
    }
  }
}
const user = new SmartHike("Vili");
user.addGoal("Musala", 2925);
user.hike("Musala", 8, "hard");
console.log(user.showRecord("easy"));
user.addGoal("Vihren", 2914);
user.hike("Vihren", 4, "hard");
console.log(user.showRecord("hard"));
user.addGoal("Rui", 1706);
user.hike("Rui", 3, "easy");
console.log(user.showRecord("all"));
