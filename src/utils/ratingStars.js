import React from 'react';

const ratingStars = (rating) => {
  let stars = new Array(5).fill(false);
  parseInt(rating)
  let i = 0;
  while (i <= rating - 1) {
    stars[i] = true;
    i++;
  }
  let filledStars = stars.filter((element => element === true));
  let emptyStars = stars.filter((element => element === false));
  filledStars = filledStars.map((value, index) => <i key={index + 1} className="fa fa-star colored" />)
  emptyStars = emptyStars.map((value, index) => <i key={index + 5} className="fa fa-star empty" />)
  return [...filledStars, ...emptyStars]
}

export default ratingStars;