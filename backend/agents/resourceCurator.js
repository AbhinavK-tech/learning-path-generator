const { searchYouTube } =
require('../services/youtubeService');

class ResourceCurator {

  async getResources(roadmap) {

    const result = [];

    const topics =
      roadmap.roadmap || roadmap;

    for (const item of topics) {

      const title =
        item.title || item;

      const videos =
        await searchYouTube(
          `${title} tutorial`
        );

      result.push({
        title,
        resources: [
          {
            type: "YouTube",
            videos
          },
          {
            type: "Documentation",
            query: `${title} guide`
          }
        ]
      });
    }

    return result;
  }
}

module.exports = ResourceCurator;
