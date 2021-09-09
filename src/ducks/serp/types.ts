export type ISerpItem = {
    id: number;
    name: string;
    speciality: string;
    experience: number;
    gender: string;
    reviewsCount: number;
    acceptNew: boolean;
    address: string;
    insurances: string;
    telehealth: boolean;
    telehealth_available: string;
    offline_available: string;
    price: number;
};

export enum Availability {
    TODAY = 'Today',
    NEXT_3_DAYS = 'Next 3 days',
    NEXT_2_WEEKS = 'Next 2 weeks',
    TELEHEALTH = 'Telehealth',
    ACCEPT_NEW_PATIENTS = 'Accept new patients',
    SCHEDULES_ONLINE = 'Schedules online',
    TREATS_CHILDREN = 'Treats children',
}

export type IFilterOption = {
    option: string;
    count: number;
};

export type IFilterOptions = IFilterOption[];

export enum SerpSort {
    NEXT_AVAILABLE,
    MOST_EXPIRIENCED,
}

// Should be object for redux-logic
export type ISerpDataPayload = {
    items: ISerpItem[];
};

export type ISerpFilters = {
    availability: Availability[];
    availabilityOptions: IFilterOptions;
    speciality: string[];
    specialityOptions: IFilterOptions;
    insurance: string[];
    insuranceOptions: IFilterOptions;
    sort: SerpSort;
};

export type ISerpState = {
    data?: ISerpItem[];
    filters: ISerpFilters;
};
