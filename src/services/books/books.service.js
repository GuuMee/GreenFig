import { books } from "./api/books.api";

export const booksRequest = () => {
  return new Promise((resolve, reject) => {
    if (!books) {
      //add logical OR if user doesn't write the whole string in search input: || !nameFromBookList.includes(nameFromInput
      reject("Not Found!");
    }
    resolve(books);
  });
};

const booksTransform = ({ results }) => {
  let numBooks = Object.keys(books).length;
  const mappedResults = results.map((book) => {
    return 1;
  });
  console.log(mappedResults);
  return results;
};

booksRequest()
  .then(booksTransform)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })
  .catch((err) => {
    console.log("Error");
  });
