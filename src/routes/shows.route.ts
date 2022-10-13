import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@/middlewares/auth.middleware';
import ShowsController from '@/controllers/show.controller';
import { CreateShowDto } from '@/dtos/show.dto';
import validationMiddleware from '@/middlewares/validation.middleware';

class ShowsRoute implements Routes {
  public path = '/shows';
  public router = Router();
  public showsController = new ShowsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, validationMiddleware(CreateShowDto, 'body'), authMiddleware, this.showsController.createShow);
    this.router.get(`${this.path}`, authMiddleware, this.showsController.getShows);
    this.router.get(`${this.path}/:id`, authMiddleware, this.showsController.getShowById);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateShowDto, 'body', true), authMiddleware, this.showsController.updateShow);
    this.router.delete(`${this.path}/:id`, authMiddleware, this.showsController.deleteShow);
  }
}

export default ShowsRoute;
