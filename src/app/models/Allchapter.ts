import { Versedetails } from "./Versedetails";
import { Versepart } from "./Versepart";

export class Allchapter {
    public id:string;
    public chaptername: string;
    public arabicname: string;
    public total_verses: number;
    public allverse:Versedetails;
}