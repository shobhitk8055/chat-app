import moment from "moment";

export const getTime = (date: string): string => moment(date).fromNow();
