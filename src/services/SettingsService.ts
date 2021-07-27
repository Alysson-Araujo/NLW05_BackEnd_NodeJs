import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";

import { SettingsRepository} from "../repositories/SettingsRepository"

interface ISettingsCreate{
    chat:boolean;
    username:String;
}

 
class SettingsServices {
  private settingsRepository: Repository<Setting>

  constructor(){
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }
  async create({chat,username} : ISettingsCreate ) {
    

    //SELECT * FROM settings WHERE username = "username" limit 1;
    const userAlreadyExists = await this.settingsRepository.findOne({
        username
    });
    /** só colocamos o chat e o username pq os outros atributos são gerados automaticamente, logo o
     * que será enviado do lado do usurário será apenas isso
     */

    if(userAlreadyExists){
        throw new Error("User already exists!");
    }
    

    const settings = this.settingsRepository.create({
      chat,
      username,
    });

    await  this.settingsRepository.save(settings);
    return settings;
  }
}

export { SettingsServices };
