import React from "react"
import { Field, ErrorMessage } from "formik"

const ParkForm = ({ values }) => (
  <>
    <br />
    <div>
      <label>Type de parc</label>
      <Field
        as="select"
        name="parcType"
        className="dark:bg-gray-700 ml-5 mb-2 border dark:border-0"
      >
        <option value="Parc floral">Parc floral</option>
        <option value="Parc forestier">Parc forestier</option>
        <option value="Parc pour enfants">Parc pour enfants</option>
      </Field>
      <ErrorMessage name="parcType" component="div" />
    </div>

    <div>
      <label className="mr-5 mb-2">Public</label>
      <Field type="checkbox" name="publicOrPrivate" class="w-5 h-4" />
      <ErrorMessage name="publicOrPrivate" component="div" />
    </div>

    <div className="mt-2">
      <label className="mr-5 mb-2">Payant (ne pas cocher si gratuit)</label>
      <Field type="checkbox" name="freeOrPaid" class="w-5 h-4" />
      <ErrorMessage name="freeOrPaid" component="div" />
    </div>

    {values.freeOrPaid && (
      <div className="mt-2">
        <label>Prix</label>
        <Field
          type="number"
          name="price"
          className="dark:bg-gray-700 ml-5 mb-2"
        />
        <ErrorMessage name="price" component="div" />
      </div>
    )}
  </>
)

export default ParkForm
