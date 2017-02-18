/**
  * @module HealthOSLib
  *  
  * Welcome to HealthOS API!   HealthOS allows you to create world class healthcare applications, leveraging our data source of medicines (generics and branded), food items (with nutrition value), various excercises and physical activities, lab tests, diseases etc.  The API is organized around REST. All requests should be made over SSL. All request and response bodies, including errors, are encoded in JSON.
  */

var Configuration = require('./configuration');;
var BaseController = require('./Controllers/BaseController');
var MedicinesController = require('./Controllers/MedicinesController');
var LabTestsController = require('./Controllers/LabTestsController');
var GenericsController = require('./Controllers/GenericsController');
var FoodController = require('./Controllers/FoodController');
var ExercisesController = require('./Controllers/ExercisesController');
var DrugInteractionsController = require('./Controllers/DrugInteractionsController');
var DiseasesController = require('./Controllers/DiseasesController');
var ChatController = require('./Controllers/ChatController');
var AutocompleteController = require('./Controllers/AutocompleteController');
var AuthenticationController = require('./Controllers/AuthenticationController');
var RequestAccessTokenRequest = require('./Models/RequestAccessTokenRequest');
var MedicinesResponse = require('./Models/MedicinesResponse');
var Constituent = require('./Models/Constituent');
var Schedule = require('./Models/Schedule');
var GenericsResponse = require('./Models/GenericsResponse');
var FoodItemsResponse = require('./Models/FoodItemsResponse');
var LabTestsResponse = require('./Models/LabTestsResponse');
var LabTestData = require('./Models/LabTestData');
var DiseasesResponse = require('./Models/DiseasesResponse');
var ExercisesResponse = require('./Models/ExercisesResponse');
var SearchDiseasesResponse = require('./Models/SearchDiseasesResponse');
var AllDiseasesResponse = require('./Models/AllDiseasesResponse');
var MedicineInteractionsResponse = require('./Models/MedicineInteractionsResponse');
var Interaction = require('./Models/Interaction');
var Item = require('./Models/Item');
var SearchExercisesResponse = require('./Models/SearchExercisesResponse');
var SearchExercisesResponse16 = require('./Models/SearchExercisesResponse16');
var AllExercisesResponse = require('./Models/AllExercisesResponse');
var AllExercisesResponse18 = require('./Models/AllExercisesResponse18');
var SearchFoodItemsResponse = require('./Models/SearchFoodItemsResponse');
var AllFoodItemsResponse = require('./Models/AllFoodItemsResponse');
var SearchFoodBrandsResponse = require('./Models/SearchFoodBrandsResponse');
var AllFoodBrandsResponse = require('./Models/AllFoodBrandsResponse');
var FoodItemsByBrandResponse = require('./Models/FoodItemsByBrandResponse');
var SearchFoodRestaurantsResponse = require('./Models/SearchFoodRestaurantsResponse');
var AllFoodRestaurantsResponse = require('./Models/AllFoodRestaurantsResponse');
var FoodItemsByRestaurantResponse = require('./Models/FoodItemsByRestaurantResponse');
var AllGenericsResponse = require('./Models/AllGenericsResponse');
var MedicinesByGenericResponse = require('./Models/MedicinesByGenericResponse');
var SearchLabTestsResponse = require('./Models/SearchLabTestsResponse');
var AllLabTestsResponse = require('./Models/AllLabTestsResponse');
var LabTestData34 = require('./Models/LabTestData34');
var SearchMedicinesResponse = require('./Models/SearchMedicinesResponse');
var AllMedicinesResponse = require('./Models/AllMedicinesResponse');
var AlternativeMedicinesResponse = require('./Models/AlternativeMedicinesResponse');
var SimilarMedicinesResponse = require('./Models/SimilarMedicinesResponse');
var PopularUsageResponse = require('./Models/PopularUsageResponse');
var Usage = require('./Models/Usage');
var CommonSideEffectsResponse = require('./Models/CommonSideEffectsResponse');
var SideEffect = require('./Models/SideEffect');
var SearchManufacturersResponse = require('./Models/SearchManufacturersResponse');
var AllManufacturersResponse = require('./Models/AllManufacturersResponse');
var MedicinesByManufacturerResponse = require('./Models/MedicinesByManufacturerResponse');
var APIException = require('./Exceptions/APIException');


function initializer () { }

//Main functional components of HealthOSLib
initializer.Configuration = Configuration;
initializer.BaseController = BaseController;
initializer.MedicinesController = MedicinesController;
initializer.LabTestsController = LabTestsController;
initializer.GenericsController = GenericsController;
initializer.FoodController = FoodController;
initializer.ExercisesController = ExercisesController;
initializer.DrugInteractionsController = DrugInteractionsController;
initializer.DiseasesController = DiseasesController;
initializer.ChatController = ChatController;
initializer.AutocompleteController = AutocompleteController;
initializer.AuthenticationController = AuthenticationController;

//Main Models of HealthOSLib
initializer.RequestAccessTokenRequest = RequestAccessTokenRequest;
initializer.MedicinesResponse = MedicinesResponse;
initializer.Constituent = Constituent;
initializer.Schedule = Schedule;
initializer.GenericsResponse = GenericsResponse;
initializer.FoodItemsResponse = FoodItemsResponse;
initializer.LabTestsResponse = LabTestsResponse;
initializer.LabTestData = LabTestData;
initializer.DiseasesResponse = DiseasesResponse;
initializer.ExercisesResponse = ExercisesResponse;
initializer.SearchDiseasesResponse = SearchDiseasesResponse;
initializer.AllDiseasesResponse = AllDiseasesResponse;
initializer.MedicineInteractionsResponse = MedicineInteractionsResponse;
initializer.Interaction = Interaction;
initializer.Item = Item;
initializer.SearchExercisesResponse = SearchExercisesResponse;
initializer.SearchExercisesResponse16 = SearchExercisesResponse16;
initializer.AllExercisesResponse = AllExercisesResponse;
initializer.AllExercisesResponse18 = AllExercisesResponse18;
initializer.SearchFoodItemsResponse = SearchFoodItemsResponse;
initializer.AllFoodItemsResponse = AllFoodItemsResponse;
initializer.SearchFoodBrandsResponse = SearchFoodBrandsResponse;
initializer.AllFoodBrandsResponse = AllFoodBrandsResponse;
initializer.FoodItemsByBrandResponse = FoodItemsByBrandResponse;
initializer.SearchFoodRestaurantsResponse = SearchFoodRestaurantsResponse;
initializer.AllFoodRestaurantsResponse = AllFoodRestaurantsResponse;
initializer.FoodItemsByRestaurantResponse = FoodItemsByRestaurantResponse;
initializer.AllGenericsResponse = AllGenericsResponse;
initializer.MedicinesByGenericResponse = MedicinesByGenericResponse;
initializer.SearchLabTestsResponse = SearchLabTestsResponse;
initializer.AllLabTestsResponse = AllLabTestsResponse;
initializer.LabTestData34 = LabTestData34;
initializer.SearchMedicinesResponse = SearchMedicinesResponse;
initializer.AllMedicinesResponse = AllMedicinesResponse;
initializer.AlternativeMedicinesResponse = AlternativeMedicinesResponse;
initializer.SimilarMedicinesResponse = SimilarMedicinesResponse;
initializer.PopularUsageResponse = PopularUsageResponse;
initializer.Usage = Usage;
initializer.CommonSideEffectsResponse = CommonSideEffectsResponse;
initializer.SideEffect = SideEffect;
initializer.SearchManufacturersResponse = SearchManufacturersResponse;
initializer.AllManufacturersResponse = AllManufacturersResponse;
initializer.MedicinesByManufacturerResponse = MedicinesByManufacturerResponse;

//Main Exceptions of HealthOSLib
initializer.APIException = APIException;

module.exports = initializer;
