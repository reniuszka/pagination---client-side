//here i want to create an arrays of 10 arrays inside, so want to modify the one arrary that getting form data, to have 10 arrays inside of 1, to show pagination
const paginate = (followers) => {
  console.log(followers, ' followers from utils');
  const itemsPerPage = 9;
  //how many pages do we have -total items in data array / items per page if we have 11.11 we want round up to 12
  const pages = Math.ceil(followers.length / itemsPerPage);
  console.log(pages, 'pages');
  //want to create new array with pages number of pages - Array.from we can create from iterables or from objects
  // x - tem, inex is index , at the beginning it is 0, then 1, then 2...9
  const newFollowersArray = Array.from({ length: pages }, (x, index) => {
    console.log(index, 'index');
    const start = index * itemsPerPage;
    console.log(start, 'start');
    //slice - pulling out from the original array and creating a new array, we beed to have a starting point and where we want to finish(it will start at 0 and would finish before 9), we start with 0, finish 0+9, then 9 + 9  18
    return followers.slice(start, start + itemsPerPage);
  });
  console.log(newFollowersArray, 'new array with arrays');
  return newFollowersArray;
};

export default paginate;
