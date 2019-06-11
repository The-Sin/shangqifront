export interface UserModel {
    username: string;
    password ?: string;
    email ?: string;
    fullname: string;
    roles: string[];
}
