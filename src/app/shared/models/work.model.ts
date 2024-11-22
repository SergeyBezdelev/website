export class Work{
    constructor(
        public authorEmail: string,
        public text:string,
        public date:number,
        public title: string,
        public id?:number
    ){}
}