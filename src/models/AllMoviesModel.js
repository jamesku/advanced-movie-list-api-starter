/*
* NOT NECESSARY FOR THE CP
*/

import mongoose from 'mongoose';

const movieDBSchema = new mongoose.Schema({
  _id: {
    required: true,
    type: Number
  },
  movieTitle: {
    required: true,
    type: String
  },
  moviePosterPath: {
    required: true,
    type: String
  },
  movieDescription: {
    required: true,
    type: String
  }

});

export default mongoose.model('Allmovie', movieDBSchema);
