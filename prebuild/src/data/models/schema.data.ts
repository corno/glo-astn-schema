import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    resolvedSiblingComponent,
    dictionary,
    globalType,
    group, option, prop, r,
    taggedUnion,
    terminal
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d

export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': d({}),
    'labels': {
        'atom types': d({
            "boolean": null,
            "text": null,
        }),
    },
    'global types': d({
        // "_Reference": parametrizedType({
        //     "ReferencedType": {},
        // }, group({
        //     "name": prop(string()),
        //     "referencee": prop(computed(typeParameter("ReferencedType"))),
        // })),


        "Root": globalType({}, group({
            "types": prop(dictionary(resolvedSiblingComponent("types", {}))),
            //"root type": prop(),
            // "root type": prop(parametrizedReference("_Reference", { "ReferencedType": typeReference("types")})),

        })),

        "types": globalType({}, group({
            "value": prop(resolvedSiblingComponent("value", {})),
        })),
        "simple string": globalType({}, group({
            // "default value": prop(string()),
            "quoted": prop(terminal("boolean")),
        })),
        "dictionary": globalType({}, group({
            // "key": prop(string()),
            "value": prop(resolvedSiblingComponent("value", {})),
        })),
        "properties": globalType({}, group({
            "value": prop(resolvedSiblingComponent("value", {})),
        })),
        "group": globalType({}, group({
            "properties": prop(dictionary(resolvedSiblingComponent("properties", {}))),
        })),
        "list": globalType({}, group({
            "value": prop(resolvedSiblingComponent("value", {})),
        })),
        "multiline string": globalType({}, group({
        })),
        "simple string type": globalType({}, group({
            // "default value": prop(string()),
            "quoted": prop(terminal("boolean")),
        })),
        "options": globalType({}, group({
            "value": prop(resolvedSiblingComponent("value", {})),
        })),
        "tagged union": globalType({}, group({
            // "default option": prop(parametrizedReference("_Reference", { "ReferencedType": typeReference("options")})),
            "options": prop(dictionary(resolvedSiblingComponent("options", {}))),
        })),
        "type reference": globalType({}, group({
            // "type": prop(parametrizedReference("_Reference", { "ReferencedType": typeReference("types")})),
        })),
        "type": globalType({}, taggedUnion({
            "dictionary": option(resolvedSiblingComponent("dictionary", {})),
            "group": option(resolvedSiblingComponent("group", {})),
            "list": option(resolvedSiblingComponent("list", {})),
            "multiline string": option(resolvedSiblingComponent("multiline string", {})),
            "simple string": option(resolvedSiblingComponent("simple string type", {})),
            "tagged union": option(resolvedSiblingComponent("tagged union", {})),
            "type reference": option(resolvedSiblingComponent("type reference", {})),
        })),
        "value": globalType({}, group({
            "type": prop(resolvedSiblingComponent("type", {})),
        })),

    }),
}