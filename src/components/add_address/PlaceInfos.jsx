                
import React from "react"
import { Field, ErrorMessage } from "formik"

const PlaceInfos = () => (
  <main className="text-center mr-4">
    <div>
      <Field
        type="text" name="name"
        className="dark:bg-gray-700 ml-5 mb-2 dark:text-white"
        placeholder="Nom du lieu"        
      />
      <ErrorMessage name="name" component="div" />
    </div>

    <div>
      <Field
        type="text" name="street"
        className="dark:bg-gray-700 ml-5 mb-2 dark:text-white"
        placeholder="Addresse"        
      />
      <ErrorMessage name="street" component="div" />
    </div>

    <div>
      <Field
        type="text" name="city"
        className="dark:bg-gray-700 ml-5 mb-2 dark:text-white"
        placeholder="Ville"        
      />
      <ErrorMessage name="city" component="div" />
    </div>

    <div>
      <Field
        type="text" name="postalCode"
        className="dark:bg-gray-700 ml-5 mb-2 dark:text-white"
        placeholder="Code Postal"
      />
      <ErrorMessage name="postalCode" component="div" />
    </div>

    <div>
      <Field
        type="text" name="country"
        className="dark:bg-gray-700 ml-5 mb-2 dark:text-white"
        placeholder="Pays"
      />
      <ErrorMessage name="country" component="div" />
    </div>
  </main>
)
export default PlaceInfos
