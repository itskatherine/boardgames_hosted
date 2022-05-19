const {
  fetchReviewById,
  updateReviewById,
  fetchReviews,
  fetchReviewCommentsFromId,
  updateCommentToReviewFromId,
} = require("../models/reviews.model.js");

const getReviewById = (req, res, next) => {
  const id = req.params.review_id;
  fetchReviewById(id)
    .then((review) => {
      res.status(200).send({ review });
    })
    .catch(next);
};

const patchReviewById = (req, res, next) => {
  const id = req.params.review_id;
  const newVote = req.body.inc_votes || 0;
  updateReviewById(id, newVote)
    .then((updatedReview) => {
      res.status(200).send({ updatedReview });
    })
    .catch(next);
};

const getReviews = (req, res, next) => {
  fetchReviews().then((reviews) => {
    res.status(200).send({ reviews });
  });
};

const getReviewCommentsFromId = (req, res, next) => {
  const id = req.params.review_id;
  fetchReviewCommentsFromId(id)
    .then((comments) => {
      res.status(200).send({ comments });
    })
    .catch(next);
};

const postCommentToReviewFromId = (req, res, next) => {
  const id = req.params.review_id;
  const body = req.body;

  updateCommentToReviewFromId(id, body)
    .then((comment) => {
      res.status(201).send({ comment });
    })
    .catch(next);
};

module.exports = {
  getReviewById,
  patchReviewById,
  getReviews,
  getReviewCommentsFromId,
  postCommentToReviewFromId,
};