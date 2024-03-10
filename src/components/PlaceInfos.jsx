                
import React from "react";
import { Field, ErrorMessage } from "formik";

const PlaceInfos = () => {
    return (
        <main  className="text-right mr-24">
            <div>
                <label>Nom du lieu</label>
                <Field type="text" name="placeName" className="dark:bg-gray-700 ml-5 mb-2"/>
                <ErrorMessage name="placeName" component="div" />
            </div>

            <div>
                <label>Adresse</label>
                <Field type="text" name="addressName" className="dark:bg-gray-700 ml-5 mb-2"/>
                <ErrorMessage name="addressName" component="div" />
            </div>

            <div>
                <label>Ville</label>
                <Field type="text" name="cityName" className="dark:bg-gray-700 ml-5 mb-2"/>
                <ErrorMessage name="cityName" component="div" />
            </div>

            <div>
                <label>Code Postal</label>
                <Field type="text" name="postalCode" className="dark:bg-gray-700 ml-5 mb-2"/>
                <ErrorMessage name="postalCode" component="div" />
            </div>

            <div>
                <label>Pays</label>
                <Field type="text" name="countryName" className="dark:bg-gray-700 ml-5 mb-2"/>
                <ErrorMessage name="countryName" component="div" />
            </div>
        </main>
 );
};
export default PlaceInfos;