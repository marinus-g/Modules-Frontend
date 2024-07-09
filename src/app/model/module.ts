export interface ClassModuleDto {
  class_id: number;
  start_date: string;
  data: ModuleDto;
}

export interface ModuleDto {
  id?: number;
  name: string;
  description: string;
}



