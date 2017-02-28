import {Router} from 'express';
import MyMoviesController from '../controllers/MyMoviesController';

const router = Router();

router.get('/mymovies', MyMoviesController.get);

router.post('/mymovies', MyMoviesController.post);

router.get('/mymovies/:_id', MyMoviesController.idGet);

router.put('/mymovies/:_id', MyMoviesController.update);

router.delete('/mymovies/:_id', MyMoviesController.idDelete);

export default router;
