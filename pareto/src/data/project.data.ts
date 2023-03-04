import * as pd from 'pareto-core-data'

import { external, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as glossary } from "./glossary.generated"

export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "the ASTN schema, used to unmarshall a dataset",
    'license': "TBD",

    'dependencies': d({
        "glo-pareto-common": null
    }),
    'type': ['glossary', {
        'root': glossary,
        'imports': d({
            //"common": external("glo-pareto-common"),
        }),
    }],
}