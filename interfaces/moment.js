

declare function add(x: number, y: number): number;

declare class moment$Moment {
    static (
        string?: string,
        format?: string | Array<string>,
        strict?: boolean
    ): moment$Moment,

    format(format?: string): string,
}

declare module "moment" {
    declare module .exports: Class<moment$Moment>;
}