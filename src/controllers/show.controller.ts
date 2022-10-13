import { NextFunction, Request, Response } from 'express';
import ShowService from '@services/show.service';
import { CreateShowDto } from '@/dtos/show.dto';
import { Show, ShowsTypes } from '@/interfaces/show.interface';
class ShowsController {
  public showsService = new ShowService();

  public createShow = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const showData: CreateShowDto = req.body;
      const createShowData: Show = await this.showsService.createShow(showData);

      res.status(201).json({ data: createShowData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public getShows = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let types: String[] = [];

      if (req.query.types) {
        //@ts-ignore
        types = req.query.types.split(',');
      }
      const findAllShowsData: Show[] = await this.showsService.findAllShow(types);
      res.status(200).json({ data: findAllShowsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getShowById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const showId: string = req.params.id;
      const findOneShowData: Show = await this.showsService.findShowById(showId);

      res.status(200).json({ data: findOneShowData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public updateShow = async (req: Request, res: Response, next: NextFunction) => {

    try {
      const showId: string = req.params.id;
      const showData: CreateShowDto = req.body;
      const updateShowData: Show = await this.showsService.updateShow(showId, showData);

      res.status(200).json({ data: updateShowData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteShow = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const showId: string = req.params.id;
      const deleteShowData: Show = await this.showsService.deleteShow(showId);

      res.status(200).json({ data: deleteShowData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };

}

export default ShowsController;
