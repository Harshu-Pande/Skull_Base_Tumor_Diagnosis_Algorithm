export enum NodeType {
  QUESTION = 'QUESTION',
  DIAGNOSIS = 'DIAGNOSIS',
}

export interface Option {
  id: string;
  label: string;
  description?: string;
  nextId: string;
}

export interface Node {
  id: string;
  type: NodeType;
  title: string;
  content?: string; // Clinical context or question detail
  options?: Option[]; // Only for QUESTIONS
  features?: string[]; // Only for DIAGNOSIS
  severity?: 'benign' | 'malignant' | 'intermediate'; // For styling hints
}

export interface AlgorithmData {
  [key: string]: Node;
}