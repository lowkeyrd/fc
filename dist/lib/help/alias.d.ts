export declare const ALIAS: ({
    header: string;
    content: string;
} | {
    header: string;
    content: {
        desc: string;
        example: string;
    }[];
})[];
export declare const ALIAS_GET: ({
    header: string;
    content: string;
    optionList?: undefined;
} | {
    header: string;
    optionList: ({
        name: string;
        description: string;
        defaultOption: boolean;
        type: BooleanConstructor;
    } | {
        name: string;
        description: string;
        type: StringConstructor;
    })[];
    content?: undefined;
} | {
    header: string;
    optionList: ({
        name: string;
        description: string;
        type: StringConstructor;
        alias?: undefined;
    } | {
        name: string;
        description: string;
        alias: string;
        type: BooleanConstructor;
    } | {
        name: string;
        description: string;
        alias: string;
        type: StringConstructor;
    })[];
    content?: undefined;
} | {
    header: string;
    content: {
        desc: string;
    }[];
    optionList?: undefined;
} | {
    header: string;
    content: string[];
    optionList?: undefined;
})[];
export declare const ALIAS_LIST: ({
    header: string;
    content: string;
    optionList?: undefined;
} | {
    header: string;
    optionList: ({
        name: string;
        description: string;
        type: StringConstructor;
    } | {
        name: string;
        description: string;
        type: BooleanConstructor;
    })[];
    content?: undefined;
} | {
    header: string;
    content: {
        desc: string;
    }[];
    optionList?: undefined;
} | {
    header: string;
    content: string[];
    optionList?: undefined;
})[];
export declare const ALIAS_PUBLISH: ({
    header: string;
    content: string;
    optionList?: undefined;
} | {
    header: string;
    optionList: ({
        name: string;
        description: string;
        defaultOption: boolean;
        type: BooleanConstructor;
    } | {
        name: string;
        description: string;
        type: StringConstructor;
    })[];
    content?: undefined;
} | {
    header: string;
    optionList: ({
        name: string;
        description: string;
        type: StringConstructor;
        alias?: undefined;
    } | {
        name: string;
        description: string;
        alias: string;
        type: BooleanConstructor;
    } | {
        name: string;
        description: string;
        alias: string;
        type: StringConstructor;
    })[];
    content?: undefined;
} | {
    header: string;
    content: {
        desc: string;
    }[];
    optionList?: undefined;
} | {
    header: string;
    content: string[];
    optionList?: undefined;
})[];