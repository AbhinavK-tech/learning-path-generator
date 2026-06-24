class ResourceCurator {
  getResources(roadmap) {
    return roadmap.roadmap.map(item => ({
      phase: item.phase,
      title: item.title,
      resources: [
        {
          type: "YouTube",
          query: item.title + " tutorial"
        },
        {
          type: "Documentation",
          query: item.title + " guide"
        }
      ]
    }));
  }
}

module.exports = ResourceCurator;
