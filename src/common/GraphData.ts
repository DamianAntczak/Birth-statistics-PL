export interface GraphData {
    [key: string]: {
        years: number[];
        statistics: {
            [statKey: string]: (number|null)[];
        };
    };
}
