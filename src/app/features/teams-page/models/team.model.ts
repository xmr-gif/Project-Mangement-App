export interface Team{
    id:string;
    name:string;
    memberCount: number;
    members: Member[];
    createdAt: Date;
}

export interface Member{
    id: string;
    name:string;
    avatar:string;
}