// src/app/models/task.model.ts
export interface Task {
    id: string;
    name: string;
    status: string;
    description?: string;  // Propriété optionnelle
    createdAt?: string;    // Propriété optionnelle
    updatedAt?: string;    // Propriété optionnelle
  }
  