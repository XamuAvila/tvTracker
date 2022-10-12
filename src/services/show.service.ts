import { CreateShowDto } from "@/dtos/show.dto";
import { HttpException } from "@/exceptions/HttpException";
import { Show } from "@/interfaces/show.interface";
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
}

export default ShowService
