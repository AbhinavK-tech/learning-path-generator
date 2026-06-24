const axios = require('axios');

async function searchYouTube(query) {
  const apiKey = process.env.YOUTUBE_API_KEY;

  const url =
    `https://www.googleapis.com/youtube/v3/search` +
    `?part=snippet&type=video&maxResults=3&q=${encodeURIComponent(query)}` +
    `&key=${apiKey}`;

  const response = await axios.get(url);

  return response.data.items.map(item => ({
    title: item.snippet.title,
    videoId: item.id.videoId,
    channel: item.snippet.channelTitle
  }));
}

module.exports = { searchYouTube };
