import { convertFileSizeWithUnits } from "./user-defined";

export type FileSizeType = "Bytes" | "KB" | "MB" | "GB" | "TB" | "PB" | "EB" | "ZB" | "YB";
const SIZE_UNITS: FileSizeType[] = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

export const convertFileSize = (size: number, currentUnit: FileSizeType, toUnit: FileSizeType) => {
    return convertFileSizeWithUnits(SIZE_UNITS, size, currentUnit, toUnit);
};
