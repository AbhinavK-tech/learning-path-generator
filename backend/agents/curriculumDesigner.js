const { askGemini } = require('../services/geminiService');

class CurriculumDesigner {

  async generateRoadmap(assessment) {

    const prompt = `
Generate a detailed learning roadmap.

Goal: ${assessment.goal}
Level: ${assessment.level}

Return:
- Phases
- Topics
- Duration
- Learning sequence
- Recommended Projects
`;

    try {

      const roadmap = await askGemini(prompt);

      return {
        source: "Gemini",
        roadmap
      };

    } catch (err) {

      console.log("Gemini unavailable. Using fallback roadmap.");

      const goal = assessment.goal.toLowerCase();

      // AI / ML
      if (goal.includes("machine learning") || goal.includes("ai")) {
        return {
          source: "Fallback",
          roadmap: [
            "Python",
            "Statistics",
            "Linear Algebra",
            "Machine Learning",
            "Deep Learning",
            "MLOps",
            "Projects"
          ]
        };
      }

      // Data Science
      if (goal.includes("data science")) {
        return {
          source: "Fallback",
          roadmap: [
            "Python",
            "Pandas",
            "NumPy",
            "Statistics",
            "Data Visualization",
            "Machine Learning",
            "Projects"
          ]
        };
      }

      // Software Engineer / SDE
      if (
        goal.includes("software") ||
        goal.includes("sde")
      ) {
        return {
          source: "Fallback",
          roadmap: [
            "Programming Fundamentals",
            "Data Structures",
            "Algorithms",
            "OOP",
            "Database Systems",
            "System Design",
            "Projects",
            "Interview Preparation"
          ]
        };
      }

      // Full Stack
      if (goal.includes("full stack")) {
        return {
          source: "Fallback",
          roadmap: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "MongoDB",
            "Projects"
          ]
        };
      }

      // DevOps
      if (goal.includes("devops")) {
        return {
          source: "Fallback",
          roadmap: [
            "Linux",
            "Git",
            "Docker",
            "Kubernetes",
            "AWS",
            "CI/CD",
            "Projects"
          ]
        };
      }

      // Cloud
      if (goal.includes("cloud")) {
        return {
          source: "Fallback",
          roadmap: [
            "Linux",
            "Networking",
            "AWS/GCP/Azure",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Projects"
          ]
        };
      }

      // Cybersecurity
      if (
        goal.includes("cyber") ||
        goal.includes("security")
      ) {
        return {
          source: "Fallback",
          roadmap: [
            "Networking",
            "Linux",
            "Security Fundamentals",
            "Ethical Hacking",
            "Web Security",
            "CTFs",
            "Projects"
          ]
        };
      }

      // Android
      if (goal.includes("android")) {
        return {
          source: "Fallback",
          roadmap: [
            "Java/Kotlin",
            "Android Studio",
            "UI Design",
            "Jetpack Compose",
            "Firebase",
            "Publishing Apps"
          ]
        };
      }

      // Web Development
      if (goal.includes("web")) {
        return {
          source: "Fallback",
          roadmap: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Backend Development",
            "Databases",
            "Projects"
          ]
        };
      }

      // Blockchain
      if (goal.includes("blockchain")) {
        return {
          source: "Fallback",
          roadmap: [
            "Blockchain Basics",
            "Cryptography",
            "Solidity",
            "Smart Contracts",
            "DApps",
            "Projects"
          ]
        };
      }

      // UI/UX
      if (
        goal.includes("ui") ||
        goal.includes("ux")
      ) {
        return {
          source: "Fallback",
          roadmap: [
            "Design Principles",
            "Figma",
            "Wireframing",
            "Prototyping",
            "User Research",
            "Portfolio"
          ]
        };
      }

      // Default
      return {
        source: "Fallback",
        roadmap: [
          "Fundamentals",
          "Core Concepts",
          "Intermediate Topics",
          "Advanced Topics",
          "Projects",
          "Portfolio"
        ]
      };
    }
  }
}

module.exports = CurriculumDesigner;
