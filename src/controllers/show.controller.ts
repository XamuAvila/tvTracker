import { NextFunction, Request, Response } from 'express';
import ShowService from '@services/show.service';
import { CreateShowDto } from '@/dtos/show.dto';
import { Show } from '@/interfaces/show.interface';

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

}

export default ShowsController;
