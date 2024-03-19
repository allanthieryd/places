import React from "react"
import { Field, ErrorMessage } from "formik"
import PlaceInfos from "./PlaceInfos"

const ParkForm = ({ values }) => (
  <>
    <br />
    <PlaceInfos />
    <div>
      <label>Type de parc</label>
      <Field
        as="select"
        name="parkType"
        className="dark:bg-gray-700 ml-5 mb-2 border dark:border-0"
      >
        <option value="floralPark">Parc floral</option>
        <option value="forestPark">Parc forestier</option>
        <option value="childrenPark">Parc pour enfants</option>
      </Field>
    </div>

    <div>
      <label className="mr-5 mb-2">Public</label>
      <Field type="checkbox" name="parkPublicOrPrivate" class="w-5 h-4" />
      <ErrorMessage name="parkPublicOrPrivate" component="div" />
    </div>

    <div className="mt-2">
      <label className="mr-5 mb-2">Payant (ne pas cocher si gratuit)</label>
      <Field type="checkbox" name="parkFreeOrPaid" class="w-5 h-4" />
      <ErrorMessage name="parkFreeOrPaid" component="div" />
    </div>

    {values.parkFreeOrPaid && (
      <div className="mt-2">
        <label>Prix</label>
        <Field
          type="number"
          name="parkPrice"
          className="dark:bg-gray-700 ml-5 mb-2"
        />
        <ErrorMessage name="parkPrice" component="div" />
      </div>
    )}
  </>
)

export default ParkForm
