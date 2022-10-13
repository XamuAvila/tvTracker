import { CreateShowDto } from "@/dtos/show.dto";
import { HttpException } from "@/exceptions/HttpException";
import { Show, ShowsTypes } from "@/interfaces/show.interface";
import showModel from "@/models/show.model";
import { isEmpty } from "class-validator";

class ShowService {
  public shows = showModel;

  public async createShow(showData: CreateShowDto): Promise<Show> {
    if (isEmpty(showData)) throw new HttpException(400, "userData is empty");

    const findShow: Show = await this.shows.findOne({ name: showData.name });
    if (findShow) throw new HttpException(409, `This name ${showData.name} already exists`);

    const createUserData: Show = await this.shows.create(showData);

    return createUserData;
  }

  public async findShowById(showId: string): Promise<Show> {
    if (isEmpty(showId)) throw new HttpException(400, "ShowId is empty");

    const findShow: Show = await this.shows.findOne({ _id: showId });
    if (!findShow) throw new HttpException(409, "Show doesn't exist");

    return findShow;
  }

  public async findAllShow(types: String[]): Promise<Show[]> {
    let shows: Show[]
    if (types.length) {
      shows = await this.shows.find({ "type": { $in: types } })
    } else {
      shows = await this.shows.find();
    }
    return shows;
  }

  public async updateShow(showId: string, showData: CreateShowDto): Promise<Show> {
    if (isEmpty(showData)) throw new HttpException(400, "userData is empty");

    const findShow: Show = await this.shows.findOne({ _id: showId });
    if (!findShow) throw new HttpException(409, `This show ${showData.name} already exists`);

    const updateUserById: Show = await this.shows.findByIdAndUpdate(showId, { ...showData });
    if (!updateUserById) throw new HttpException(409, "User doesn't exist");

    return updateUserById;
  }

  public async deleteShow(showId: string): Promise<Show> {
    const deleteShowById: Show = await this.shows.findByIdAndDelete(showId);
    if (!deleteShowById) throw new HttpException(409, "Show doesn't exists");

    return deleteShowById;
  }
}

export default ShowService
