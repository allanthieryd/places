                
import React from "react"
import { Field, ErrorMessage } from "formik"

const PlaceInfos = () => (
        <main  className="text-right mr-24">
            
            <div>
                <label>Nom du lieu</label>
                <Field type="text" name="name" className="dark:bg-gray-700 ml-5 mb-2"/>
                <ErrorMessage name="name" component="div" />
            </div>

            <div>
                <label>Adresse</label>
                <Field type="text" name="street" className="dark:bg-gray-700 ml-5 mb-2"/>
                <ErrorMessage name="street" component="div" />
            </div>

            <div>
                <label>Ville</label>
                <Field type="text" name="city" className="dark:bg-gray-700 ml-5 mb-2"/>
                <ErrorMessage name="city" component="div" />
            </div>

            <div>
                <label>Code Postal</label>
                <Field type="text" name="postalCode" className="dark:bg-gray-700 ml-5 mb-2"/>
                <ErrorMessage name="postalCode" component="div" />
            </div>

            <div>
                <label>Pays</label>
                <Field type="text" name="country" className="dark:bg-gray-700 ml-5 mb-2"/>
                <ErrorMessage name="country" component="div" />
            </div>
        </main>
 )
export default PlaceInfos
