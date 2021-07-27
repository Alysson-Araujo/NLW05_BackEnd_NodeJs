import { Request, Response } from "express";
import { SettingsServices } from "../services/SettingsService";

class SettingsController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;

    const settingsService = new SettingsServices();

    try {
      const settings = await settingsService.create({chat,username});
    
      return response.json(settings);
    } catch (Erro) {
        return response.status(400).json({
          mensage: Erro.message
        })
    }
  }
}

export { SettingsController };
