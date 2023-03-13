import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    array,
    component,
    dictionary,
    globalType,
    group,
    r,
    reference,
    //string,
    taggedUnion,
    terminal,
    prop,
    option,
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d

export const $: g_liana.T.Model<pd.SourceLocation> = {
    'type library': {
        'imports': d({}),
        'terminal types': d({
            "boolean": null,
            "text": null,
        }),
        'global types': d({
            // "_Reference": parametrizedType({
            //     "ReferencedType": {},
            // }, group({
            //     "name": prop(string()),
            //     "referencee": prop(computed(typeParameter("ReferencedType"))),
            // })),


            "Root": globalType({}, group({
                "types": prop(dictionary(component("types", {}))),
                //"root type": prop(),
                // "root type": prop(parametrizedReference("_Reference", { "ReferencedType": typeReference("types")})),

            })),

            "types": globalType({}, group({
                "value": prop(component("value", {})),
            })),
            "simple string": globalType({}, group({
                // "default value": prop(string()),
                "quoted": prop(terminal("boolean")),
            })),
            "dictionary": globalType({}, group({
                // "key": prop(string()),
                "value": prop(component("value", {})),
            })),
            "properties": globalType({}, group({
                "value": prop(component("value", {})),
            })),
            "group": globalType({}, group({
                "properties": prop(dictionary(component("properties", {}))),
            })),
            "list": globalType({}, group({
                "value": prop(component("value", {})),
            })),
            "multiline string": globalType({}, group({
            })),
            "simple string type": globalType({}, group({
                // "default value": prop(string()),
                "quoted": prop(terminal("boolean")),
            })),
            "options": globalType({}, group({
                "value": prop(component("value", {})),
            })),
            "tagged union": globalType({}, group({
                // "default option": prop(parametrizedReference("_Reference", { "ReferencedType": typeReference("options")})),
                "options": prop(dictionary(component("options", {}))),
            })),
            "type reference": globalType({}, group({
                // "type": prop(parametrizedReference("_Reference", { "ReferencedType": typeReference("types")})),
            })),
            "type": globalType({}, taggedUnion({
                "dictionary": option(component("dictionary", {})),
                "group": option(component("group", {})),
                "list": option(component("list", {})),
                "multiline string": option(component("multiline string", {})),
                "simple string": option(component("simple string type", {})),
                "tagged union": option(component("tagged union", {})),
                "type reference": option(component("type reference", {})),
            })),
            "value": globalType({}, group({
                "type": prop(component("type", {})),
            })),

        }),
    },
    'root': r("Root"),
}