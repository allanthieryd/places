import React from "react"
import { Field, ErrorMessage } from "formik"

const MuseumForm = ({ freeOrPaid, onFreeOrPaidChange }) => (
  <>
    <br />
    <div>
      <label>Courant artistique</label>
      <Field
        as="select"
        name="artMovement"
        className="dark:bg-gray-700 ml-5 mb-2 border dark:border-0">
        <option value="Art moderne">Art moderne</option>
        <option value="Art abstrait">Art abstrait</option>
      </Field>
      <ErrorMessage name="artMovement" component="div" />
    </div>
    <div>
      <label>Type d'art</label>
      <Field
        as="select"
        name="artType"
        className="dark:bg-gray-700 ml-5 mb-2 border dark:border-0">
        <option value="sculpture">Sculpture</option>
        <option value="peinture">Peinture</option>
      </Field>
      <ErrorMessage name="artType" component="div"  />
    </div>

    <div>
      <label className="mr-5 mb-2">
        Payant (ne pas cocher si gratuit)
        <input
          type="checkbox"
          checked={freeOrPaid !== "Free" && freeOrPaid}
          onChange={onFreeOrPaidChange}
          className="w-5 h-4" name="museumFreeOrPaid"
        />
      </label>
      <ErrorMessage name="museumFreeOrPaid" component="div"  />
    </div>

    {freeOrPaid && freeOrPaid !== "Free" && (
      <div className="mt-2">
        <label>Prix</label>
        <Field
          type="number"
          name="museumPrice"
          className="dark:bg-gray-700 ml-5 mb-2"
        />
        <ErrorMessage name="museumPrice" component="div" />
      </div>
    )}
  </>
)

export default MuseumForm
