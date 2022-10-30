export default {
  name: "pin",
  title: "Pin",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "about", title: "About", type: "string" },
    { name: "destination", title: "Destination", type: "url" },
    { name: "category", title: "Category", type: "url" },
    { name: "image", title: "Image", type: "image", option : { hotspot: true} },
    { name: "postedBy", title: "postedBy", type: "postedBy" },
    { name: "userId", title: "UserId", type: "string" },
    { name: "save", title: "Save", type: "array", of: [{type: "save"}] },
    { name: "comments", title: "Comment", type: "array", of: [{type: "comment"}] },

  ],
};
