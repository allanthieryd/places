/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Button } from "@/components/Button";
import PlaceInfos from "@/components/PlaceInfos";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Stars from "@/components/Stars";

const AddAddress = () => {
  const [selectedType, setSelectedType] = useState(null);

  const initialValues = {
    cuisineType: "",
    starRating: 1,
    priceRange: useState(50),
    artStyle: "",
    artType: "",
    museumFreeOrPaid: false,
    museumPrice: 1,
    barType: "",
    barPriceRange: 1,
    parkType: "",
    parkPublicOrPrivate: false,
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
    <div className="flex justify-center mt-32">
      <div className="px-36 bg-gray-200 rounded-lg shadow-lg p-4 dark:bg-gray-800 dark:text-white">
        <h1 className="text-2xl flex justify-center">Veuillez entrer un lieu</h1>
        <br></br>
        <div className="flex flex-wrap space-x-4 justify-center">
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
                  <PlaceInfos/>
                  <div>
                    <label>Type de cuisine</label>
                    <Field as="select" name="artType" className="dark:bg-gray-700 ml-5 mb-2 border dark:border-0">
                      <option value="frenchCuisine">Française</option>
                      <option value="italianCuisine">Italienne</option>
                      <option value="italianCuisine">Indienne</option>
                    </Field>
                  </div>

                  <div>
                    <label>Nombre d'étoiles</label>
                    <Stars/>
                  </div>

                  <div>
                  <label>Prix moyen</label>
                  <Field type="range" name="priceRange" min="0" max="100" step="10" className="dark:bg-gray-700 ml-5 mb-2"/>
                  <span> {values.priceRange} euros</span>
                  <ErrorMessage name="priceRange" component="div" />
                  </div>
                </>
              )}

              {selectedType === "museum" && (
                <>
                <br></br>
                  <PlaceInfos/>
                  <div>
                    <label>Courant artistique</label>
                    <Field as="select" name="artType" className="dark:bg-gray-700 ml-5 mb-2 border dark:border-0">
                      <option value="modernArt">Art moderne</option>
                      <option value="abstractArt">Art abstrait</option>
                    </Field>
                  </div>

                  <div>
                    <label>Type d'art</label>
                    <Field as="select" name="artType" className="dark:bg-gray-700 ml-5 mb-2 border dark:border-0">
                      <option value="sculpture">Sculpture</option>
                      <option value="peinture">Peinture</option>
                    </Field>
                    <ErrorMessage name="artType" component="div" />
                  </div>

                  <div>
                    <label className="mr-5 mb-2">Payant (ne pas cocher si gratuit)</label>
                    <Field type="checkbox" name="museumFreeOrPaid" class="w-5 h-4"/>
                    <ErrorMessage name="museumFreeOrPaid" component="div" />
                  </div>

                  {values.museumFreeOrPaid && (
                    <div className="mt-2">
                      <label>Prix</label>
                      <Field type="number" name="museumPrice"  className="dark:bg-gray-700 ml-5 mb-2"/>
                      <ErrorMessage name="museumPrice" component="div" />
                    </div>
                  )}
                </>
              )}

              {selectedType === "bar" && (
                <>
                <br></br>
                  <PlaceInfos/>
                  <div>
                    <label>Type de bar</label>
                    <Field as="select" name="artType" className="dark:bg-gray-700 ml-5 mb-2 border dark:border-0">
                      <option value="sculpture">Bar à vin</option>
                      <option value="peinture">Bar à cocktail</option>
                      <option value="peinture">Pub</option>
                    </Field>
                  </div>

                  <div>
                  <label>Prix moyen</label>
                  <Field type="range" name="priceRange" min="0" max="100" step="10" className="dark:bg-gray-700 ml-5 mb-2"/>
                  <span> {values.priceRange} euros</span>
                  <ErrorMessage name="priceRange" component="div" />
                  </div>
                </>
              )}

              {selectedType === "park" && (
                <>
                <br></br>                  
                  <PlaceInfos/>
                  <div>
                    <label>Type de parc</label>
                    <Field as="select" name="artType" className="dark:bg-gray-700 ml-5 mb-2 border dark:border-0">
                      <option value="sculpture">Parc floral</option>
                      <option value="peinture">Parc forestier</option>
                      <option value="peinture">Parc pour enfants</option>
                    </Field>
                  </div>

                  <div>
                    <label className="mr-5 mb-2">Public</label>
                    <Field type="checkbox" name="parkPublicOrPrivate" class="w-5 h-4"/>
                    <ErrorMessage name="parkPublicOrPrivate" component="div" />
                  </div>

                  
                  <div className="mt-2">
                    <label className="mr-5 mb-2">Payant (ne pas cocher si gratuit)</label>
                    <Field type="checkbox" name="parkFreeOrPaid" class="w-5 h-4"/>
                    <ErrorMessage name="parkFreeOrPaid" component="div" />
                  </div>

                  {values.parkFreeOrPaid && (
                    <div className="mt-2">
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
