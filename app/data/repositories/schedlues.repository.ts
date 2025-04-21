import { ISchedulingRepository } from "@/app/domain/scheduling/scheduling.contracts";
import { TScheduling } from "@/app/domain/scheduling/scheduling.models";
import { IHttpClient } from "@/app/infrastructure/httpClient";

class SchedulesRepository implements ISchedulingRepository {
  constructor(private readonly httpClient: IHttpClient) { }

  async findAll(): Promise<TScheduling[]> {
    const response = await this.httpClient.request("GET", "/schedules");
    return response.data;
  }

  async findById(id: string): Promise<TScheduling | null> {
    const response = await this.httpClient.request("GET", `/schedules/${id}`);
    return response.data;
  }

  async findByDate(date: string): Promise<TScheduling | null> {
    const response = await this.httpClient.request("GET", `/schedules?date=${date}`);
    return response.data;
  }

  async create(scheduling: Omit<TScheduling, "id">): Promise<TScheduling> {
    const response = await this.httpClient.request("POST", "/schedules", scheduling);
    return response.data;
  }
}

export const scheduleRepository = (api: IHttpClient) => new SchedulesRepository(api);