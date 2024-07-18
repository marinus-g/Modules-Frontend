export interface ClassModuleDto {
  id: number;
  class_id: string;
  start_date: string;
  data: ModuleDto;
  exam_id?: number | null;
  project_id?: number | undefined;
}

export interface ModuleDto {
  id?: number;
  name: string;
  description: string;
}



