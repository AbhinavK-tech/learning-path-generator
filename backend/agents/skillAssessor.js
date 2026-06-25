class SkillAssessor {

  assess(goal, level) {

    const g = goal.toLowerCase();

    // AI / ML
    if (g.includes("machine learning") || g.includes("ai")) {
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
          "Machine Learning",
          "Deep Learning"
        ]
      };
    }

    // Data Science
    if (g.includes("data science")) {
      return {
        goal,
        level,
        prerequisites: [
          "Python",
          "Statistics",
          "Pandas"
        ],
        recommendedOrder: [
          "Python",
          "Pandas",
          "NumPy",
          "Statistics",
          "Data Visualization",
          "Machine Learning"
        ]
      };
    }

    // SDE
    if (g.includes("software") || g.includes("sde")) {
      return {
        goal,
        level,
        prerequisites: [
          "Programming Basics",
          "Problem Solving"
        ],
        recommendedOrder: [
          "Programming",
          "Data Structures",
          "Algorithms",
          "OOP",
          "Databases",
          "System Design"
        ]
      };
    }

    // Full Stack
    if (g.includes("full stack")) {
      return {
        goal,
        level,
        prerequisites: [
          "HTML",
          "CSS",
          "JavaScript"
        ],
        recommendedOrder: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Node.js",
          "MongoDB"
        ]
      };
    }

    // DevOps
    if (g.includes("devops")) {
      return {
        goal,
        level,
        prerequisites: [
          "Linux",
          "Networking",
          "Git"
        ],
        recommendedOrder: [
          "Linux",
          "Git",
          "Docker",
          "Kubernetes",
          "AWS",
          "CI/CD"
        ]
      };
    }

    // Cloud
    if (g.includes("cloud")) {
      return {
        goal,
        level,
        prerequisites: [
          "Linux",
          "Networking"
        ],
        recommendedOrder: [
          "Linux",
          "Networking",
          "AWS/GCP/Azure",
          "Docker",
          "Kubernetes"
        ]
      };
    }

    // Cybersecurity
    if (g.includes("cyber") || g.includes("security")) {
      return {
        goal,
        level,
        prerequisites: [
          "Networking",
          "Linux"
        ],
        recommendedOrder: [
          "Networking",
          "Linux",
          "Security Fundamentals",
          "Ethical Hacking",
          "Web Security"
        ]
      };
    }

    // Android
    if (g.includes("android")) {
      return {
        goal,
        level,
        prerequisites: [
          "Java",
          "Programming Basics"
        ],
        recommendedOrder: [
          "Java",
          "Kotlin",
          "Android Studio",
          "Jetpack Compose",
          "Firebase"
        ]
      };
    }

    // Blockchain
    if (g.includes("blockchain")) {
      return {
        goal,
        level,
        prerequisites: [
          "Programming Basics",
          "Cryptography"
        ],
        recommendedOrder: [
          "Blockchain Basics",
          "Cryptography",
          "Solidity",
          "Smart Contracts",
          "DApps"
        ]
      };
    }

    // UI/UX
    if (g.includes("ui") || g.includes("ux")) {
      return {
        goal,
        level,
        prerequisites: [
          "Design Thinking"
        ],
        recommendedOrder: [
          "Design Principles",
          "Figma",
          "Wireframing",
          "Prototyping",
          "Portfolio"
        ]
      };
    }

    // Default
    return {
      goal,
      level,
      prerequisites: [
        "Fundamentals"
      ],
      recommendedOrder: [
        "Fundamentals",
        "Intermediate Topics",
        "Advanced Topics"
      ]
    };
  }
}

module.exports = SkillAssessor;
