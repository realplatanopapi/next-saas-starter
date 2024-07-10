'use client'

import { FormikConfig, useFormik } from 'formik'
import { useMemo } from 'react'
import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'

interface UseFormParams<TSchema extends z.ZodTypeAny> {
  schema: TSchema
  initialValues: z.input<TSchema>
  onSubmit: FormikConfig<z.output<TSchema>>['onSubmit']
}

export const useForm = <TSchema extends z.ZodTypeAny>({
  initialValues,
  onSubmit,
  schema,
}: UseFormParams<TSchema>) => {
  type FieldName = keyof z.output<TSchema>

  const validationSchema = useMemo(
    () => toFormikValidationSchema(schema),
    [schema],
  )

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
  })

  const shouldShowErrors = formik.submitCount > 0

  const form = {
    ...formik,
    getFieldProps: (fieldName: FieldName) => ({
      ...formik.getFieldProps(fieldName as string),
    }),
    getFormControlProps: (fieldName: FieldName) => ({
      isInvalid: shouldShowErrors && Boolean(formik.errors[fieldName]),
    }),
    getFormErrorMessageProps: (fieldName: FieldName) => ({
      children: formik.errors[fieldName]?.toString(),
    }),
    onSubmit: (event?: React.FormEvent<HTMLElement>) => {
      event?.preventDefault()
      formik.handleSubmit()
    },
  }

  return form
}
