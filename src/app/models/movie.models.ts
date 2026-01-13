// Baseado no CategoryRequest.java
export interface CategoryRequest {
  name: string;
}

// Baseado no StreamingRequest.java
export interface StreamingRequest {
  name: string;
}

// Baseado no MovieRequest.java
export interface MovieRequest {
  title: string;
  description: string;

  // O Java espera "dd/MM/yyyy", então aqui é string
  releaseDate: string;

  rating: number; // Double no Java vira number no TS

  // No Request você manda apenas os IDs
  categoriesIds: number[];
  streamingsIds: number[];
}

// Baseado no CategoryResponse.java
export interface CategoryResponse {
  id: number;
  name: string;
}

// Baseado no StreamingResponse.java
export interface StreamingResponse {
  id: number;
  name: string;
}

// Baseado no MovieResponse.java
export interface MovieResponse {
  id: number;
  title: string;
  description: string;
  releaseDate: string; // Vem como string "dd/MM/yyyy" do JSON
  rating: number;

  // No Response vêm os objetos completos
  categories: CategoryResponse[];
  streamings: StreamingResponse[];
}
