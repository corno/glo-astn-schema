import * as pt from 'pareto-core-types'


export namespace N {
    
    export namespace dictionary {
        
        export namespace N {
            
            export namespace G {
                
                export namespace N {
                    
                    export namespace value {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                }
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
    
    export namespace group {
        
        export namespace N {
            
            export namespace G {
                
                export namespace N {
                    
                    export namespace properties {
                        
                        export namespace N {
                            
                            export namespace D {
                                
                                export namespace N {}
                                
                                export namespace T {}
                            }
                        }
                        
                        export namespace T {}
                    }
                }
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
    
    export namespace list {
        
        export namespace N {
            
            export namespace G {
                
                export namespace N {
                    
                    export namespace value {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                }
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
    
    export namespace multiline_$_$string {
        
        export namespace N {
            
            export namespace G {
                
                export namespace N {}
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
    
    export namespace options {
        
        export namespace N {
            
            export namespace G {
                
                export namespace N {
                    
                    export namespace value {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                }
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
    
    export namespace properties {
        
        export namespace N {
            
            export namespace G {
                
                export namespace N {
                    
                    export namespace value {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                }
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
    
    export namespace Root {
        
        export namespace N {
            
            export namespace G {
                
                export namespace N {
                    
                    export namespace types {
                        
                        export namespace N {
                            
                            export namespace D {
                                
                                export namespace N {}
                                
                                export namespace T {}
                            }
                        }
                        
                        export namespace T {}
                    }
                }
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
    
    export namespace simple_$_$string {
        
        export namespace N {
            
            export namespace G {
                
                export namespace N {
                    
                    export namespace quoted {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                }
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
    
    export namespace simple_$_$string_$_$type {
        
        export namespace N {
            
            export namespace G {
                
                export namespace N {
                    
                    export namespace quoted {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                }
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
    
    export namespace tagged_$_$union {
        
        export namespace N {
            
            export namespace G {
                
                export namespace N {
                    
                    export namespace options {
                        
                        export namespace N {
                            
                            export namespace D {
                                
                                export namespace N {}
                                
                                export namespace T {}
                            }
                        }
                        
                        export namespace T {}
                    }
                }
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
    
    export namespace _$ltype {
        
        export namespace N {
            
            export namespace TU {
                
                export namespace N {
                    
                    export namespace dictionary {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                    
                    export namespace group {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                    
                    export namespace list {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                    
                    export namespace multiline_$_$string {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                    
                    export namespace simple_$_$string {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                    
                    export namespace tagged_$_$union {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                    
                    export namespace type_$_$reference {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                }
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
    
    export namespace type_$_$reference {
        
        export namespace N {
            
            export namespace G {
                
                export namespace N {}
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
    
    export namespace types {
        
        export namespace N {
            
            export namespace G {
                
                export namespace N {
                    
                    export namespace value {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                }
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
    
    export namespace value {
        
        export namespace N {
            
            export namespace G {
                
                export namespace N {
                    
                    export namespace _$ltype {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                }
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
}

export namespace T {
    
    export namespace dictionary {
        
        export type value<GAnnotation> = T.value<GAnnotation>
    }
    
    export type dictionary<GAnnotation> = {
        readonly 'value': T.value<GAnnotation>
    }
    
    export namespace group {
        
        export namespace properties {
            
            export type D<GAnnotation> = T.properties<GAnnotation>
        }
        
        export type properties<GAnnotation> = pt.Dictionary<T.properties<GAnnotation>>
    }
    
    export type group<GAnnotation> = {
        readonly 'properties': pt.Dictionary<T.properties<GAnnotation>>
    }
    
    export namespace list {
        
        export type value<GAnnotation> = T.value<GAnnotation>
    }
    
    export type list<GAnnotation> = {
        readonly 'value': T.value<GAnnotation>
    }
    
    export namespace multiline__string {}
    
    export type multiline__string<GAnnotation> = null
    
    export namespace options {
        
        export type value<GAnnotation> = T.value<GAnnotation>
    }
    
    export type options<GAnnotation> = {
        readonly 'value': T.value<GAnnotation>
    }
    
    export namespace properties {
        
        export type value<GAnnotation> = T.value<GAnnotation>
    }
    
    export type properties<GAnnotation> = {
        readonly 'value': T.value<GAnnotation>
    }
    
    export namespace Root {
        
        export namespace types {
            
            export type D<GAnnotation> = T.types<GAnnotation>
        }
        
        export type types<GAnnotation> = pt.Dictionary<T.types<GAnnotation>>
    }
    
    export type Root<GAnnotation> = {
        readonly 'types': pt.Dictionary<T.types<GAnnotation>>
    }
    
    export namespace simple__string {
        
        export type quoted<GAnnotation> = boolean
    }
    
    export type simple__string<GAnnotation> = {
        readonly 'quoted': boolean
    }
    
    export namespace simple__string__type {
        
        export type quoted<GAnnotation> = boolean
    }
    
    export type simple__string__type<GAnnotation> = {
        readonly 'quoted': boolean
    }
    
    export namespace tagged__union {
        
        export namespace options {
            
            export type D<GAnnotation> = T.options<GAnnotation>
        }
        
        export type options<GAnnotation> = pt.Dictionary<T.options<GAnnotation>>
    }
    
    export type tagged__union<GAnnotation> = {
        readonly 'options': pt.Dictionary<T.options<GAnnotation>>
    }
    
    export namespace _ltype {
        
        export type dictionary<GAnnotation> = T.dictionary<GAnnotation>
        
        export type group<GAnnotation> = T.group<GAnnotation>
        
        export type list<GAnnotation> = T.list<GAnnotation>
        
        export type multiline__string<GAnnotation> = T.multiline__string<GAnnotation>
        
        export type simple__string<GAnnotation> = T.simple__string__type<GAnnotation>
        
        export type tagged__union<GAnnotation> = T.tagged__union<GAnnotation>
        
        export type type__reference<GAnnotation> = T.type__reference<GAnnotation>
    }
    
    export type _ltype<GAnnotation> = 
        | ['dictionary', T.dictionary<GAnnotation>]
        | ['group', T.group<GAnnotation>]
        | ['list', T.list<GAnnotation>]
        | ['multiline string', T.multiline__string<GAnnotation>]
        | ['simple string', T.simple__string__type<GAnnotation>]
        | ['tagged union', T.tagged__union<GAnnotation>]
        | ['type reference', T.type__reference<GAnnotation>]
    
    export namespace type__reference {}
    
    export type type__reference<GAnnotation> = null
    
    export namespace types {
        
        export type value<GAnnotation> = T.value<GAnnotation>
    }
    
    export type types<GAnnotation> = {
        readonly 'value': T.value<GAnnotation>
    }
    
    export namespace value {
        
        export type _ltype<GAnnotation> = T._ltype<GAnnotation>
    }
    
    export type value<GAnnotation> = {
        readonly 'type': T._ltype<GAnnotation>
    }
}