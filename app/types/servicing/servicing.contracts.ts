import { TApiResponse } from "../api/api.models";
import { IService } from "./servicing.models";

export type TCreateServiceParams = Omit<IService, 'id'>;
export type TCreateService = (params: TCreateServiceParams) => TApiResponse<IService>;

export type TListServices = () => TApiResponse<IService[]>;