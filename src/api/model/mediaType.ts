/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 */
import type { SpecificationExtensions } from './specificationExtensions'
import type { Examples } from './examples'
import type { MediaTypeEncoding } from './mediaTypeEncoding'

export type MediaType = SpecificationExtensions &
  Examples & {
    encoding?: MediaTypeEncoding
    schema?: unknown
  }