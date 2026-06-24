class SkillAssessor {
  assess(goal, level) {
    return {
      goal,
      level,
      prerequisites: [
        "Python",
        "Statistics",
        "Linear Algebra"
      ],
      recommendedOrder: [
        "Python",
        "Statistics",
        "Linear Algebra",
        "Machine Learning"
      ]
    };
  }
}

module.exports = SkillAssessor;
