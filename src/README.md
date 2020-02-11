### Challenge

1. write and deploy a small JSON-based web service
2. URL to your solution
3. developed and tested production quality code

### Conditions:

1. Return the list of ojects with 3 key values
2. with DRM enabled (drm: true)
3. with at least one episode (episodeCount > 0)

### Return:

1. image - corresponding to image/showImage from the request payload
2. slug
3. title

### Error handling

400 handle all cases

1. check if length of the array greater than 1
2. Check if image is not empty string
3. check if image.showImage is not empty string
4. check if slug is not empty string
5. check if title is not empty string.
6. check if payload is an array.

### Steps of development

1. create simple node-express application
2. add simple post request
3. add body parser to post request and add error handling to it.
4. create filter class and add conditions
5. Form a response data and send.
