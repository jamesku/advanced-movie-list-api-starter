import MyMoviesModel from '../models/MyMoviesModel';


const MyMoviesController = {};

MyMoviesController.get = (request, response) => {
  MyMoviesModel.find({}).exec()
  .then((data) => {
    return response.json(data);
  })
  .catch(error => {
    console.log('there is an error: ' + error);
  });
};

MyMoviesController.post = (request,response,next) => {

  const movie = new MyMoviesModel({
    _id: request.body._id,
    movieTitle: request.body.movieTitle,
    moviePosterPath: request.body.moviePosterPath,
  });

  // Save the new contact
  movie.save()
    // When the save completes, return the newly created contact
    .then(data => {
      return response.json(data);
    })
    .catch(err => {
      next(err);
    });
};

MyMoviesController.idGet = (request, response, next) => {
  MyMoviesModel.findById(request.params._id).exec()
  .then((data) => {
    return response.json(data);
  })
  .catch(error => {
    next(error);
  });
};

MyMoviesController.idDelete = (request, response, next) => {
  MyMoviesModel.findByIdAndRemove(request.params._id).exec()
  .then((data) => {
    return response.json(data);
  })
  .catch(error => {
    next(error);
  });
};


MyMoviesController.put = (request, response, next) => {
  MyMoviesModel.findById(request.params._id)
    .then(movie => {
      movie.name = request.body.name || movie.name;
      movie.occupation = request.body.occupation || movie.occupation;
      movie.avatar = request.body.avatar || movie.avatar;

      return movie.save();
    })
    .then(contact => {
      return response.json(contact);
    })
    .catch(error => {
      next(error);
    });
};

MyMoviesController.update = (request, response, next) => {
  MyMoviesModel.findByIdAndUpdate(request.params._id, { $set:
  {
    _id: request.body._id,
    movieTitle: request.body.movieTitle,
    moviePosterPath: request.body.moviePosterPath,
  }
  })
  .exec()
  .then((data) => {
    return response.json(data);
  })
  .catch(error => {
    next(error);
  });
};



export default MyMoviesController;
