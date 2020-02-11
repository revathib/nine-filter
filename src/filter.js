class FilterData {
  static checkRightValuesAndSendArray(data) {
    let response = [];
    data.forEach(function(value) {
      if (FilterData.checkIfDrmValue(value) && FilterData.checkIfEpisodeCount(value)) {
        if (FilterData.checkValues(value)) {
          response.push({ image: value.image.showImage, slug: value.slug, title: value.title });
        }
      }
    });
    return response;
  }
  static checkIfPayload(data) {
    return data.payload && data.payload.length > 0;
  }

  static checkIfDrmValue(data) {
    return data.drm;
  }
  static checkIfEpisodeCount(data) {
    return data.episodeCount && data.episodeCount >= 1;
  }

  static checkValues(data) {
    return data.image && data.image.showImage && data.slug && data.title;
  }
}

module.exports = FilterData;
