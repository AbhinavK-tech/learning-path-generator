const { askGemini } = require("../services/geminiService");

class CurriculumDesigner {

  async generateRoadmap(assessment) {

    const prompt = `
You are an expert career mentor.

Create a COMPLETE learning roadmap.

Career Goal:
${assessment.goal}

Current Level:
${assessment.level}

Return ONLY valid JSON in this format:

{
  "goal":"",
  "estimatedDuration":"",
  "phases":[
    {
      "phase":1,
      "title":"",
      "duration":"",
      "topics":[],
      "skills":[],
      "project":""
    }
  ]
}
`;

    try {

      const response = await askGemini(prompt);

      return JSON.parse(response);

    } catch (err) {

      console.log("Gemini unavailable. Using fallback roadmap.");

      return {
        source: "Fallback",
        goal: assessment.goal,
        phases: assessment.recommendedOrder.map((topic, index) => ({
          phase: index + 1,
          title: topic,
          duration: "1 Week",
          topics: [topic],
          skills: [topic],
          project: `Mini Project on ${topic}`
        }))
      };

    }

  }

}

module.exports = CurriculumDesigner;
