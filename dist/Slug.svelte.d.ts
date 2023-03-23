import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SlugProps = typeof __propDef.props;
export type SlugEvents = typeof __propDef.events;
export type SlugSlots = typeof __propDef.slots;
export default class Slug extends SvelteComponentTyped<SlugProps, SlugEvents, SlugSlots> {
}
export {};
