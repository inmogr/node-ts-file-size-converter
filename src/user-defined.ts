import { UNIT_BASE } from "./common";

export const convertFileSizeWithUnits = (units: string[], size: number, currentUnit: string, toUnit: string) => {
    // to prevent getting `0`
    units = ["", ...units];

    const currentUnitIndex = units.findIndex((item) => item === currentUnit);
    const toUnitIndex = units.findIndex((item) => item === toUnit);

    let diff: number;
    if (currentUnitIndex < toUnitIndex) {
        diff = toUnitIndex - currentUnitIndex;

        return size / Math.pow(UNIT_BASE, diff);
    } else {
        diff = currentUnitIndex - toUnitIndex;

        return size * Math.pow(UNIT_BASE, diff);
    }
};
