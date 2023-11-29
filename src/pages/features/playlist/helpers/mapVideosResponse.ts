const prepareItemsArray = (items) => {
  if (!Array.isArray(items)) {
    return items;
  }

  return items
    .map((video) => (Array.isArray(video.sources) ? video.sources[0] : ""))
    .filter((a) => !!a);
};

const mapVideosResponse = (data) => {
  if (Array.isArray(data?.categories) && data.categories.length > 0) {
    const { videos } = data.categories[0];

    return prepareItemsArray(videos);
  }

  return [];
};

export default mapVideosResponse;
