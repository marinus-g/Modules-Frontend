export interface ClassModuleDto {
  id: number;
  class_id: string;
  start_date: string;
  data: ModuleDto;
  exam_id?: number | null;
}

export interface ModuleDto {
  id?: number;
  name: string;
  description: string;
}



