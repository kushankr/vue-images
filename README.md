# Project/Installation Instructions

## Task

Given wireframes for an image gallery page.
This page is developed using Vue, Vuex, HTML, CSS, and JavaScript.
API response data has been provided in a static .json file.
- Search: the user has the the ability to enter text into a search field and see images
that match the entered text.
- Image Grid: display a grid of image thumbnails, when clicked, a modal displays
additional details about the thumbnail (see second wireframe).
- Pagination: Users are able to page through the list of images, clicking a double
arrow (<< or >>) takes the user to the first or last page respectively. clicking a single
arrow (< or >) takes the user to the previous or next page respectively.
- Image Modal: after a user has clicked on a thumbnail a modal displays 
additional details about the image. Some fields are editable, some are not. Clicking save
persists the changes, clicking cancel will discard the changes. See the second wireframe
for details.
- **Additional Features**: 
  1. Search by Title/Description.
  2. Handling for edge cases such as no search results.
  3. Show an error message when there is an error loading an image.
  4. Form Validation in Image Modal. ex: Title field should not be empty.
  5. Additional field: Photo Thumbnail in Image modal.
  6. Saving edits in Image Modal updates the Image Grid without refresh.
  

## Project setup

To begin, fork this repo and then clone those contents down! (git clone git@github.com:kushankr/ithaka-images.git)
```
cd ithaka-images
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### App running at

http://localhost:8080/
