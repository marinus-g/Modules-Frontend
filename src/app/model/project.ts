export default interface Project {
  id: number;
  name: string;
  description: string;
  class_id: string; // UUIDs are represented as strings in TypeScript
  module_id: number;
}
