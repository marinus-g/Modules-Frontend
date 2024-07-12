export interface Exam {
  id: number;
  module_id: number,
  class_id: number,
  date: string,
  max_score: number,
  exam_results: ExamResult[]
}

export interface ExamResult {
  score: number,
  grade: number,
  user_id: number,
  first_name: string,
  last_name: string;
  state: State;
}

export enum State {
  SUBMITTED= "SUBMITTED",
  NOT_SUBMITTED = "NOT_SUBMITTED",
}
