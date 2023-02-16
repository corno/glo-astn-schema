import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pr.wrapRawDictionary

import { $ as glossary } from "./glossary.data"

export const $: mproject.T.Project = {
    'author': "Corno",
    'description': "the ASTN schema, used to unmarshall a dataset",
    'license': "ISC",

    'dependencies': d({
    }),
    'type': ['glossary', {
        'glossary': glossary,
    }],
}