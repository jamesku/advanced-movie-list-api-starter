import mongoose from 'mongoose';

const myMovieSchema = new mongoose.Schema({
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
  }
});

export default mongoose.model('Mymovie', myMovieSchema);
