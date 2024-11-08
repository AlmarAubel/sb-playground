/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import type { PetCallingCode } from './petCallingCode'
import type { PetCountry } from './petCountry'

export interface Pet {
  /**
   * @minimum 0
   * @maximum 30
   * @exclusiveMinimum
   * @exclusiveMaximum
   */
  age?: number
  callingCode?: PetCallingCode
  country?: PetCountry
  email?: string
  id: number
  /**
   * Name of pet
   * @minLength 40
   * @maxLength 0
   */
  name: string
  /**
   * @nullable
   * @pattern ^\\d{3}-\\d{2}-\\d{4}$
   */
  tag?: string | null
}