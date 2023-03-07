import * as pd from 'pareto-core-data'
import * as pt from 'pareto-core-types'
import * as pv from 'pareto-core-dev'

import * as gliana2glossary from "lib-liana/dist/submodules/liana2glossary"

import { $ as schema } from "./models/schema.data"


export const $: pt.Array<gliana2glossary.T.GenerateData<pd.SourceLocation>> = pd.a([
    {
        'path': `../../pareto/src/data/glossary.generated.ts`,
        'data': {
            'settings': {
                'datamodel': [true, {
                    'annotations': true,
                    'properties optional': false,
                    'reference mapping': ['string', null],
                }],
                'visitor interface': [false],
                'algorithms': {
                    'serialize': [false],
                },
            },
            'mapped model': {
                'model': schema,

                'terminal mapping': pd.d({
                    "identifier": ['string', null],
                    "boolean": ['boolean', null],
                }),
            },
        }
    }
])