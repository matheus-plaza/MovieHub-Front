// Baseado no LoginRequest.java
export interface LoginRequest {
  email: string;
  password: string;
}

// Baseado no LoginResponse.java
export interface LoginResponse {
  token: string;
}

// Baseado no UserRequest.java (Para o Cadastro/Sign-up)
export interface UserRequest {
  name: string;
  email: string;
  password: string;
}

export interface UserResponse {
  id: number;
  name: string;
  email: string;
  // Nunca colocamos 'password' na resposta por segurança
}
