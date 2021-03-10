export type UnArray<T> = T extends Array<infer U> ? U : T

export type Structure = { [index: string]: unknown }