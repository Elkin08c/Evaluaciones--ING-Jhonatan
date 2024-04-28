export enum resourcetype {
    mineral,
    warer,
    oxygen,
    plant,
}

export class planet{
    constructor(public name: string, public gatherResources: resourcetype, public danger: boolean){};
}

