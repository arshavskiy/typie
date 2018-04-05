
export default class SearchPayload
{
    public type: string;
    public value: string;
    public orderBy: string;
    public direction: string;
    public packageName: string;
    public db: string;
    constructor() {
        this.type = 'fuzzy';   // can be 'fuzzy' | '' |
        this.value = '';  // the actual search valu
        this.orderBy = 'score'; // the name of the field to be ordered by
        this.direction = 'desc';
        this.packageName = '';
        this.db = '';
    }
}