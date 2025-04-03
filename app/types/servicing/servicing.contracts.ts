import { IService } from "./servicing.models"

export type TListServices = () => Promise<IService[]>;

export type TCreateServiceParam = { newService: Omit<IService, 'id'> };
export type TCreateService = (param: TCreateServiceParam) => Promise<IService>;