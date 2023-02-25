import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as module } from "./schema/module.generated"

export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "the ASTN schema, used to unmarshall a dataset",
    'license': "ISC",

    'dependencies': d({
    }),
    'type': ['glossary', {
        'glossary': module.definition.glossary,//FIX this 
    }],
}