export default function createStarsRating(rating) {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating > i) {
        stars.push(<i key={i}>&#9733;</i>);
      } else {
        stars.push(<i key={i}>&#9734;</i>);
      }
    }
    return stars;
  }