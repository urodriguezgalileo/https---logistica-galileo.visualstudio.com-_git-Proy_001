export class Compresor {
    constructor(
        public cycleState?: string,
        public compresionStage?: string,
        public livingTime?: number,
        public nextServiceTime?: number,
        public startCount?: number
    ){}
}
