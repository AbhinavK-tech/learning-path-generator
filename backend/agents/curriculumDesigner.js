class CurriculumDesigner {
  generateRoadmap(assessment) {
    return {
      goal: assessment.goal,
      roadmap: [
        {
          phase: 1,
          title: "Python Fundamentals",
          duration: "2 weeks"
        },
        {
          phase: 2,
          title: "Statistics for Machine Learning",
          duration: "2 weeks"
        },
        {
          phase: 3,
          title: "Linear Algebra",
          duration: "2 weeks"
        },
        {
          phase: 4,
          title: "Machine Learning Fundamentals",
          duration: "4 weeks"
        },
        {
          phase: 5,
          title: "Projects & Deployment",
          duration: "2 weeks"
        }
      ]
    };
  }
}

module.exports = CurriculumDesigner;
