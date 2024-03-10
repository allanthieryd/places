import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Button } from "@/components/Button";

const AddAddress = () => {
  const [selectedType, setSelectedType] = useState(null);

  const initialValues = {
    cuisineType: "",
    starRating: 1,
    priceRange: 1,
    artStyle: "",
    artType: "",
    museumFreeOrPaid: false,
    museumPrice: 1,
    barType: "",
    barPriceRange: 1,
    parkType: "",
    parkPublicOrPrivate: "",
    parkFreeOrPaid: false,
    parkPrice: 1,
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    // Perform form submission logic here
    setSubmitting(false);
  };

  return (
    <div className="flex justify-center mt-24">
      <div className="px-36 bg-gray-200 rounded-lg shadow-lg p-4 dark:bg-gray-800 dark:text-white">
        <h1 className="text-2xl flex justify-center">Veuillez entrer un lieu</h1>
        <br></br>
        <div className="flex space-x-4 justify-center">
          <Button type="Button" onClick={() => handleTypeSelect("restaurant")}>
            Restaurant
          </Button>
          <Button type="Button" onClick={() => handleTypeSelect("museum")}>
            Musée
          </Button>
          <Button type="Button" onClick={() => handleTypeSelect("bar")}>
            Bar
          </Button>
          <Button type="Button" onClick={() => handleTypeSelect("park")}>
            Parc
          </Button>
        </div>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values }) => (
            <Form>
              {selectedType === "restaurant" && (
                <>
                <br></br>
                  <div>
                    <label>Type de cuisine</label>
                    <Field type="text" name="cuisineType" className="dark:bg-gray-700 ml-5 mb-2"/>
                    <ErrorMessage name="cuisineType" component="div" />
                  </div>

                  <div>
                    <label>Nombre d'étoiles (de 1 à 5)</label>
                    <Field type="number" name="starRating" className="dark:bg-gray-700 ml-5 mb-2"/>
                    <ErrorMessage name="starRating" component="div" />
                  </div>

                  <div>
                    <label>Prix moyen (de 1 à 5)</label>
                    <Field type="number" name="priceRange"className="dark:bg-gray-700 ml-5 mb-2"/>
                    <ErrorMessage name="priceRange" component="div" />
                  </div>
                </>
              )}

              {selectedType === "museum" && (
                <>
                <br></br>
                  <div>
                    <label>Courant artistique</label>
                    <Field type="text" name="artStyle" className="dark:bg-gray-700 ml-5 mb-2"/>
                    <ErrorMessage name="artStyle" component="div" />
                  </div>

                  <div>
                    <label>Type d'art (peinture, sculpture, etc... )</label>
                    <Field type="text" name="artType" className="dark:bg-gray-700 ml-5 mb-2"/>
                    <ErrorMessage name="artType" component="div" />
                  </div>

                  <div>
                    <label className="mr-5 mb-2">Payant (ne pas cocher si gratuit)</label>
                    <Field type="checkbox" name="museumFreeOrPaid" class="w-5 h-4"/>
                    <ErrorMessage name="museumFreeOrPaid" component="div" />
                  </div>

                  {values.museumFreeOrPaid && (
                    <div>
                      <label>Prix</label>
                      <Field type="number" name="museumPrice"  className="dark:bg-gray-700"/>
                      <ErrorMessage name="museumPrice" component="div" />
                    </div>
                  )}
                </>
              )}

              {selectedType === "bar" && (
                <>
                <br></br>
                  <div>
                    <label>Type de bar (ex: bar à vin, bar à cocktail, pub, etc... )</label>
                    <Field type="text" name="barType" className="dark:bg-gray-700 ml-5 mb-2" />
                    <ErrorMessage name="barType" component="div" />
                  </div>

                  <div>
                    <label>Prix moyen (de 1 à 5)</label>
                    <Field type="number" name="barPriceRange" className="dark:bg-gray-700 ml-5 mb-2"/>
                    <ErrorMessage name="barPriceRange" component="div" />
                  </div>
                </>
              )}

              {selectedType === "park" && (
                <>
                <br></br>
                  <div>
                    <label>Type de parc (ex: parc floral, parc forestier, ...)</label>
                    <Field type="text" name="parkType" className="dark:bg-gray-700 ml-5 mb-2"/>
                    <ErrorMessage name="parkType" component="div" />
                  </div>

                  <div>
                    <label>Public ou privé</label>
                    <Field type="text" name="parkPublicOrPrivate" className="dark:bg-gray-700 ml-5 mb-2"/>
                    <ErrorMessage name="parkPublicOrPrivate" component="div" />
                  </div>

                  <div>
                    <label className="mr-5 mb-2">Payant (ne pas cocher si gratuit)</label>
                    <Field type="checkbox" name="parkFreeOrPaid" class="w-5 h-4"/>
                    <ErrorMessage name="parkFreeOrPaid" component="div" />
                  </div>

                  {values.parkFreeOrPaid && (
                    <div>
                      <label>Prix</label>
                      <Field type="number" name="parkPrice" className="dark:bg-gray-700 ml-5 mb-2"/>
                      <ErrorMessage name="parkPrice" component="div" />
                    </div>
                  )}
                </>
              )}
              
              <div className="flex justify-center mt-10 px-5 py-5">
              <Button type="submit">Submit</Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddAddress;
