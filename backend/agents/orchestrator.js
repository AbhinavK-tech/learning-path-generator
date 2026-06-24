const SkillAssessor = require('./skillAssessor');
const CurriculumDesigner = require('./curriculumDesigner');
const ResourceCurator = require('./resourceCurator');
const ProgressAdvisor = require('./progressAdvisor');

class LearningPathOrchestrator {
  generate(goal, level) {

    const assessor = new SkillAssessor();
    const designer = new CurriculumDesigner();
    const curator = new ResourceCurator();
    const advisor = new ProgressAdvisor();

    const assessment = assessor.assess(goal, level);

    const roadmap =
      designer.generateRoadmap(assessment);

    const resources =
      curator.getResources(roadmap);

    const advice =
      advisor.generateAdvice(goal, level);

    return {
      assessment,
      roadmap,
      resources,
      advice
    };
  }
}

module.exports = LearningPathOrchestrator;
