import React from "react";

const Review = ({ review }) => {
  const { name, img, review: userReview, location } = review;
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        
        <p>{userReview}</p>
      <div className="">
      <div className="avatar flex items-center justify-center">
          <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="avatar" />
          </div>
          <div className="mt-5 mr-20">
            <h5 className="text-lg">
                {name}
            </h5>
            <p>{location}</p>
        </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Review;
