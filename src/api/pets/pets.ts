/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { useMutation, useQuery } from '@tanstack/vue-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationReturnType,
  UseQueryOptions,
  UseQueryReturnType,
} from '@tanstack/vue-query'
import * as axios from 'axios'
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { computed, unref } from 'vue'
import type { MaybeRef } from 'vue'
import type {
  CreatePetsBody,
  Error,
  ListPetsNestedArrayParams,
  ListPetsParams,
  Pet,
  PetsArray,
  PetsNestedArray,
} from '.././model'

/**
 * @summary List all pets
 */
export const listPets = (
  params?: MaybeRef<ListPetsParams>,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<PetsArray>> => {
  params = unref(params)
  return axios.default.get(`/pets`, {
    ...options,
    params: { ...unref(params), ...options?.params },
  })
}

export const getListPetsQueryKey = (params?: MaybeRef<ListPetsParams>) => {
  return ['pets', ...(params ? [params] : [])] as const
}

export const getListPetsQueryOptions = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = AxiosError<Error>,
>(
  params?: MaybeRef<ListPetsParams>,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    >
    axios?: AxiosRequestConfig
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {}

  const queryKey = getListPetsQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof listPets>>> = ({
    signal,
  }) => listPets(params, { signal, ...axiosOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof listPets>>,
    TError,
    TData
  >
}

export type ListPetsQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>
export type ListPetsQueryError = AxiosError<Error>

/**
 * @summary List all pets
 */

export function useListPets<
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = AxiosError<Error>,
>(
  params?: MaybeRef<ListPetsParams>,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    >
    axios?: AxiosRequestConfig
  },
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getListPetsQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

/**
 * @summary Create a pet
 */
export const createPets = (
  createPetsBody: MaybeRef<CreatePetsBody>,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<void>> => {
  createPetsBody = unref(createPetsBody)
  return axios.default.post(`/pets`, createPetsBody, options)
}

export const getCreatePetsMutationOptions = <
  TError = AxiosError<Error>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBody },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationOptions<
  Awaited<ReturnType<typeof createPets>>,
  TError,
  { data: CreatePetsBody },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createPets>>,
    { data: CreatePetsBody }
  > = props => {
    const { data } = props ?? {}

    return createPets(data, axiosOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type CreatePetsMutationResult = NonNullable<
  Awaited<ReturnType<typeof createPets>>
>
export type CreatePetsMutationBody = CreatePetsBody
export type CreatePetsMutationError = AxiosError<Error>

/**
 * @summary Create a pet
 */
export const useCreatePets = <
  TError = AxiosError<Error>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBody },
    TContext
  >
  axios?: AxiosRequestConfig
}): UseMutationReturnType<
  Awaited<ReturnType<typeof createPets>>,
  TError,
  { data: CreatePetsBody },
  TContext
> => {
  const mutationOptions = getCreatePetsMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * @summary List all pets as nested array
 */
export const listPetsNestedArray = (
  params?: MaybeRef<ListPetsNestedArrayParams>,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<PetsNestedArray>> => {
  params = unref(params)
  return axios.default.get(`/pets-nested-array`, {
    ...options,
    params: { ...unref(params), ...options?.params },
  })
}

export const getListPetsNestedArrayQueryKey = (
  params?: MaybeRef<ListPetsNestedArrayParams>,
) => {
  return ['pets-nested-array', ...(params ? [params] : [])] as const
}

export const getListPetsNestedArrayQueryOptions = <
  TData = Awaited<ReturnType<typeof listPetsNestedArray>>,
  TError = AxiosError<Error>,
>(
  params?: MaybeRef<ListPetsNestedArrayParams>,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof listPetsNestedArray>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {}

  const queryKey = getListPetsNestedArrayQueryKey(params)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof listPetsNestedArray>>
  > = ({ signal }) => listPetsNestedArray(params, { signal, ...axiosOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof listPetsNestedArray>>,
    TError,
    TData
  >
}

export type ListPetsNestedArrayQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPetsNestedArray>>
>
export type ListPetsNestedArrayQueryError = AxiosError<Error>

/**
 * @summary List all pets as nested array
 */

export function useListPetsNestedArray<
  TData = Awaited<ReturnType<typeof listPetsNestedArray>>,
  TError = AxiosError<Error>,
>(
  params?: MaybeRef<ListPetsNestedArrayParams>,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof listPetsNestedArray>>,
        TError,
        TData
      >
    >
    axios?: AxiosRequestConfig
  },
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getListPetsNestedArrayQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}

/**
 * @summary Info for a specific pet
 */
export const showPetById = (
  petId: MaybeRef<string>,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<Pet>> => {
  petId = unref(petId)
  return axios.default.get(`/pets/${petId}`, options)
}

export const getShowPetByIdQueryKey = (petId: MaybeRef<string>) => {
  return ['pets', petId] as const
}

export const getShowPetByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = AxiosError<Error>,
>(
  petId: MaybeRef<string>,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    >
    axios?: AxiosRequestConfig
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {}

  const queryKey = getShowPetByIdQueryKey(petId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof showPetById>>> = ({
    signal,
  }) => showPetById(petId, { signal, ...axiosOptions })

  return {
    queryKey,
    queryFn,
    enabled: computed(() => !!unref(petId)),
    ...queryOptions,
  } as UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
}

export type ShowPetByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof showPetById>>
>
export type ShowPetByIdQueryError = AxiosError<Error>

/**
 * @summary Info for a specific pet
 */

export function useShowPetById<
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = AxiosError<Error>,
>(
  petId: MaybeRef<string>,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    >
    axios?: AxiosRequestConfig
  },
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getShowPetByIdQueryOptions(petId, options)

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = unref(queryOptions).queryKey as QueryKey

  return query
}