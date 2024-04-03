import React from "react"
import { Field, ErrorMessage } from "formik"

// eslint-disable-next-line max-lines-per-function
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
      <Field type="checkbox" name="publicOrPrivate" className="w-5 h-4" />
      <ErrorMessage name="publicOrPrivate" component="div" />
    </div>

    <div className="mt-2">
      <label className="mr-5 mb-2">Payant (ne pas cocher si gratuit)</label>
      <Field type="checkbox" name="freeOrPaid" className="w-5 h-4" />
      <ErrorMessage name="freeOrPaid" component="div" />
    </div>

    {values.freeOrPaid && values.freeOrPaid !== "Free" && (
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
    {values.freeOrPaid && values.freeOrPaid !== "Free" && (
      <div className="mb-2">
        <span>Echelle de prix</span>
        <input
          type="range"
          name="freeOrPaidScale"
          min="1"
          max="5"
          value={parseInt(values.freeOrPaid, 10)}
          step="1"
          className="dark:bg-gray-700 ml-5 mb-2"
          disabled={!values.freeOrPaid || values.freeOrPaid === "Free"}
        />
        <br></br>
        <span className="ml-32">
          {Array.from(
            { length: parseInt(values.freeOrPaid, 10) },
            (_) => "💵",
          ).join("")}
        </span>
      </div>
    )}
  </>
)

export default ParkForm
