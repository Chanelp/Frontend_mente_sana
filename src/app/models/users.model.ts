export interface User {
    last_name:     string;
    password:      string;
    genre:         string;
    rol:           string;
    email:         string;
    id:            number;
    name:          string;
    date_register: Date;
    date_birth:    Date;
}

export interface UserLogin{
    email: string;
    password: string;
}