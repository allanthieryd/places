import React from "react"
import { Field, ErrorMessage } from "formik"
import PlaceInfos from "./PlaceInfos"

const MuseumForm = ({ values }) => (
  <>
    <br />
    <PlaceInfos />
    <div>
      <label>Courant artistique</label>
      <Field
        as="select"
        name="artType"
        className="dark:bg-gray-700 ml-5 mb-2 border dark:border-0"
      >
        <option value="modernArt">Art moderne</option>
        <option value="abstractArt">Art abstrait</option>
      </Field>
    </div>

    <div>
      <label>Type d'art</label>
      <Field
        as="select"
        name="artType"
        className="dark:bg-gray-700 ml-5 mb-2 border dark:border-0"
      >
        <option value="sculpture">Sculpture</option>
        <option value="peinture">Peinture</option>
      </Field>
      <ErrorMessage name="artType" component="div" />
    </div>

    <div>
      <label className="mr-5 mb-2">Payant (ne pas cocher si gratuit)</label>
      <Field type="checkbox" name="museumFreeOrPaid" class="w-5 h-4" />
      <ErrorMessage name="museumFreeOrPaid" component="div" />
    </div>

    {values.museumFreeOrPaid && (
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
