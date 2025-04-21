import { ICreateScheduleUseCase, ISchedulingRepository } from "@/app/domain/scheduling/scheduling.contracts";
import { TScheduling } from "@/app/domain/scheduling/scheduling.models";

export class CreateScheduleUseCase implements ICreateScheduleUseCase {
  constructor(private readonly scheduleRepository: ISchedulingRepository) { }

  async checkAvailability(date: string): Promise<boolean> {
    try {
      const response = await this.scheduleRepository.findByDate(date);
      return !!response;
    } catch (error: any) {
      console.error('schedule - checkAvailability', error);
      throw Error("Erro ao verificar disponibilidade");
    }
  }

  async execute(scheduling: Omit<TScheduling, "id">): Promise<TScheduling | null> {
    try {
      const available = await this.checkAvailability(scheduling.date);

      if (available) throw new Error("Data já agendada!");

      const response = await this.scheduleRepository.create(scheduling);
      return response;
    } catch (error) {
      console.error('schedule - execute', error);
      return null;
    }
  }
}