export interface RegisterUser {
    email: string;
    password: string | number;
    name: string; 
}

export interface LoginUser {
    email: string;
    password: string | number;
}