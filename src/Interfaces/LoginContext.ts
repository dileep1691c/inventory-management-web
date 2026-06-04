export default interface LoginContext {
    User : UserObj;
    AccessToken : string | undefined;
    RefreshToken : string | undefined;
    ExpiresAt : Date | undefined;
}

interface UserObj{
    id : number | null;
    FirstName : string | undefined;
    LastName : string | undefined;
    Email : string | undefined;
    RoleId : number | null;
}
