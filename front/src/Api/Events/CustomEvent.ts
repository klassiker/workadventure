import * as tg from "generic-type-guard";

export const isCustomEvent =
    new tg.IsInterface().withProperties({
        name: tg.isString,
    }).get();

export type CustomEvent = tg.GuardedType<typeof isCustomEvent>;
