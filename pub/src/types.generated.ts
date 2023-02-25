import * as pt from 'pareto-core-types'


export namespace T {
    
    export namespace dictionary {
        
        export type value<GPAnnotation> = T.value<GPAnnotation>
    }
    
    export type dictionary<GPAnnotation> = {
        readonly 'value': T.value<GPAnnotation>
    }
    
    export namespace group {
        
        export namespace properties {
            
            export type D<GPAnnotation> = T.properties<GPAnnotation>
        }
        
        export type properties<GPAnnotation> = pt.Dictionary<T.properties<GPAnnotation>>
    }
    
    export type group<GPAnnotation> = {
        readonly 'properties': pt.Dictionary<T.properties<GPAnnotation>>
    }
    
    export namespace list {
        
        export type value<GPAnnotation> = T.value<GPAnnotation>
    }
    
    export type list<GPAnnotation> = {
        readonly 'value': T.value<GPAnnotation>
    }
    
    export namespace multiline__string {}
    
    export type multiline__string<GPAnnotation> = {}
    
    export namespace options {
        
        export type value<GPAnnotation> = T.value<GPAnnotation>
    }
    
    export type options<GPAnnotation> = {
        readonly 'value': T.value<GPAnnotation>
    }
    
    export namespace properties {
        
        export type value<GPAnnotation> = T.value<GPAnnotation>
    }
    
    export type properties<GPAnnotation> = {
        readonly 'value': T.value<GPAnnotation>
    }
    
    export namespace Root {
        
        export namespace types {
            
            export type D<GPAnnotation> = T.types<GPAnnotation>
        }
        
        export type types<GPAnnotation> = pt.Dictionary<T.types<GPAnnotation>>
    }
    
    export type Root<GPAnnotation> = {
        readonly 'types': pt.Dictionary<T.types<GPAnnotation>>
    }
    
    export namespace simple__string {
        
        export type quoted<GPAnnotation> = boolean
    }
    
    export type simple__string<GPAnnotation> = {
        readonly 'quoted': boolean
    }
    
    export namespace simple__string__type {
        
        export type quoted<GPAnnotation> = boolean
    }
    
    export type simple__string__type<GPAnnotation> = {
        readonly 'quoted': boolean
    }
    
    export namespace tagged__union {
        
        export namespace options {
            
            export type D<GPAnnotation> = T.options<GPAnnotation>
        }
        
        export type options<GPAnnotation> = pt.Dictionary<T.options<GPAnnotation>>
    }
    
    export type tagged__union<GPAnnotation> = {
        readonly 'options': pt.Dictionary<T.options<GPAnnotation>>
    }
    
    export namespace _ltype {
        
        export type dictionary<GPAnnotation> = T.dictionary<GPAnnotation>
        
        export type group<GPAnnotation> = T.group<GPAnnotation>
        
        export type list<GPAnnotation> = T.list<GPAnnotation>
        
        export type multiline__string<GPAnnotation> = T.multiline__string<GPAnnotation>
        
        export type simple__string<GPAnnotation> = T.simple__string__type<GPAnnotation>
        
        export type tagged__union<GPAnnotation> = T.tagged__union<GPAnnotation>
        
        export type type__reference<GPAnnotation> = T.type__reference<GPAnnotation>
    }
    
    export type _ltype<GPAnnotation> = 
        | ['dictionary', T.dictionary<GPAnnotation>]
        | ['group', T.group<GPAnnotation>]
        | ['list', T.list<GPAnnotation>]
        | ['multiline string', T.multiline__string<GPAnnotation>]
        | ['simple string', T.simple__string__type<GPAnnotation>]
        | ['tagged union', T.tagged__union<GPAnnotation>]
        | ['type reference', T.type__reference<GPAnnotation>]
    
    export namespace type__reference {}
    
    export type type__reference<GPAnnotation> = {}
    
    export namespace types {
        
        export type value<GPAnnotation> = T.value<GPAnnotation>
    }
    
    export type types<GPAnnotation> = {
        readonly 'value': T.value<GPAnnotation>
    }
    
    export namespace value {
        
        export type _ltype<GPAnnotation> = T._ltype<GPAnnotation>
    }
    
    export type value<GPAnnotation> = {
        readonly 'type': T._ltype<GPAnnotation>
    }
}