# Getting started

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:
* `node --version`
* `npm -version` 
![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=HealthOS-Node)  

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):
* `npm install`
![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=HealthOS-Node)
![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder. 

Once dependencies are resolved, you will need to move the folder `HealthOS ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.  
Click on `File` and select `Open Folder`
![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.
![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=HealthOS-Node)


### 2. Creating a Test File
Now right click on the folder name and select the `New File` option to create a new test file.    Save it as `index.js` Now import the generated NodeJS library using the following lines of code:
```JavaScript
var lib = require('lib');
```
Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=HealthOS-Node)
![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=HealthOS-Node)

### 3. Running The Test File
To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:  
`node index.js`
![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=HealthOS-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 
###### (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2
###### (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3
###### (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  HealthOSController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TESTTIMEOUT` parameter's value in `Configuration.js`.  
> ***NOTE:*** Changing default timeout is available for only Binary/File type endpoint tests

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=HealthOSController)

## Initialization

### Authentication
In order to setup authentication and initialization of the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| host | TODO: add a description |
| oAuthAccessToken | The OAuth 2.0 access token to be set before API calls |



API client can be initialized as following:

```JavaScript
// Configuration parameters and credentials
$host = "host";
$oAuthAccessToken = "oAuthAccessToken"; // The OAuth 2.0 access token to be set before API calls

var lib = require('lib');
```

## Class Reference

### <a name="list_of_controllers"></a>List of Controllers

* [MedicinesController](#medicines_controller)
* [LabTestsController](#lab_tests_controller)
* [GenericsController](#generics_controller)
* [FoodController](#food_controller)
* [ExercisesController](#exercises_controller)
* [DrugInteractionsController](#drug_interactions_controller)
* [DiseasesController](#diseases_controller)
* [ChatController](#chat_controller)
* [AutocompleteController](#autocomplete_controller)
* [AuthenticationController](#authentication_controller)

### <a name="medicines_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MedicinesController") MedicinesController

#### Get singleton instance

The singleton instance of the ``` MedicinesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MedicinesController;
```

#### <a name="get_manufacturer"></a>![Method: ](https://apidocs.io/img/method.png ".MedicinesController.getManufacturer") getManufacturer

> Get a manufacturer by its id


```javascript
function getManufacturer(manufacturerId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| manufacturerId |  ``` Required ```  | Id of the manufacturer |



#### Example Usage

```javascript

    var manufacturerId = manufacturer_id;

    controller.getManufacturer(manufacturerId, function(error, response, context) {

    
	});
```



#### <a name="search_manufacturers"></a>![Method: ](https://apidocs.io/img/method.png ".MedicinesController.searchManufacturers") searchManufacturers

> Search a manufacturer by its name


```javascript
function searchManufacturers(manufacturerQuery, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| manufacturerQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var manufacturerQuery = manufacturer_query;

    controller.searchManufacturers(manufacturerQuery, function(error, response, context) {

    
	});
```



#### <a name="get_common_side_effects"></a>![Method: ](https://apidocs.io/img/method.png ".MedicinesController.getCommonSideEffects") getCommonSideEffects

> Get common side effects of a medicine


```javascript
function getCommonSideEffects(medicineId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| medicineId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var medicineId = medicine_id;

    controller.getCommonSideEffects(medicineId, function(error, response, context) {

    
	});
```



#### <a name="get_popular_usage"></a>![Method: ](https://apidocs.io/img/method.png ".MedicinesController.getPopularUsage") getPopularUsage

> Get popular usages of a medicine


```javascript
function getPopularUsage(medicineId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| medicineId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var medicineId = medicine_id;

    controller.getPopularUsage(medicineId, function(error, response, context) {

    
	});
```



#### <a name="get_medicines_by_manufacturer"></a>![Method: ](https://apidocs.io/img/method.png ".MedicinesController.getMedicinesByManufacturer") getMedicinesByManufacturer

> Get medicines by a manufacturer


```javascript
function getMedicinesByManufacturer(page, size, manufacturerId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |
| manufacturerId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var page = 178;
    var size = 178;
    var manufacturerId = manufacturer_id;

    controller.getMedicinesByManufacturer(page, size, manufacturerId, function(error, response, context) {

    
	});
```



#### <a name="get_similar_medicines"></a>![Method: ](https://apidocs.io/img/method.png ".MedicinesController.getSimilarMedicines") getSimilarMedicines

> Get similar medicines


```javascript
function getSimilarMedicines(medicineId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| medicineId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var medicineId = medicine_id;

    controller.getSimilarMedicines(medicineId, function(error, response, context) {

    
	});
```



#### <a name="get_medicine"></a>![Method: ](https://apidocs.io/img/method.png ".MedicinesController.getMedicine") getMedicine

> Get a medicine


```javascript
function getMedicine(medicineId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| medicineId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var medicineId = medicine_id;

    controller.getMedicine(medicineId, function(error, response, context) {

    
	});
```



#### <a name="get_all_medicines"></a>![Method: ](https://apidocs.io/img/method.png ".MedicinesController.getAllMedicines") getAllMedicines

> Get all medicines


```javascript
function getAllMedicines(page, size, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var page = 1;
    var size = 10;

    controller.getAllMedicines(page, size, function(error, response, context) {

    
	});
```



#### <a name="search_medicines"></a>![Method: ](https://apidocs.io/img/method.png ".MedicinesController.searchMedicines") searchMedicines

> Search a medicine by name


```javascript
function searchMedicines(medicineQuery, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| medicineQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var medicineQuery = medicine_query;

    controller.searchMedicines(medicineQuery, function(error, response, context) {

    
	});
```



#### <a name="get_all_manufacturers"></a>![Method: ](https://apidocs.io/img/method.png ".MedicinesController.getAllManufacturers") getAllManufacturers

> Get all manufacturers


```javascript
function getAllManufacturers(page, size, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var page = 1;
    var size = 10;

    controller.getAllManufacturers(page, size, function(error, response, context) {

    
	});
```



#### <a name="get_alternative_medicines"></a>![Method: ](https://apidocs.io/img/method.png ".MedicinesController.getAlternativeMedicines") getAlternativeMedicines

> Get substitutes of a medicine


```javascript
function getAlternativeMedicines(page, size, medicineId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |
| medicineId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var page = 227;
    var size = 227;
    var medicineId = medicine_id;

    controller.getAlternativeMedicines(page, size, medicineId, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="lab_tests_controller"></a>![Class: ](https://apidocs.io/img/class.png ".LabTestsController") LabTestsController

#### Get singleton instance

The singleton instance of the ``` LabTestsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.LabTestsController;
```

#### <a name="get_lab_test"></a>![Method: ](https://apidocs.io/img/method.png ".LabTestsController.getLabTest") getLabTest

> Get labtest by id


```javascript
function getLabTest(labTestId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| labTestId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var labTestId = lab_test_id;

    controller.getLabTest(labTestId, function(error, response, context) {

    
	});
```



#### <a name="get_all_lab_tests"></a>![Method: ](https://apidocs.io/img/method.png ".LabTestsController.getAllLabTests") getAllLabTests

> All Lab tests


```javascript
function getAllLabTests(page, size, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var page = 227;
    var size = 227;

    controller.getAllLabTests(page, size, function(error, response, context) {

    
	});
```



#### <a name="search_lab_tests"></a>![Method: ](https://apidocs.io/img/method.png ".LabTestsController.searchLabTests") searchLabTests

> Search a lab test by name


```javascript
function searchLabTests(labTestQuery, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| labTestQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var labTestQuery = lab_test_query;

    controller.searchLabTests(labTestQuery, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="generics_controller"></a>![Class: ](https://apidocs.io/img/class.png ".GenericsController") GenericsController

#### Get singleton instance

The singleton instance of the ``` GenericsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.GenericsController;
```

#### <a name="get_generic"></a>![Method: ](https://apidocs.io/img/method.png ".GenericsController.getGeneric") getGeneric

> Get a generic by id


```javascript
function getGeneric(genericId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| genericId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var genericId = generic_id;

    controller.getGeneric(genericId, function(error, response, context) {

    
	});
```



#### <a name="get_medicines_by_generic"></a>![Method: ](https://apidocs.io/img/method.png ".GenericsController.getMedicinesByGeneric") getMedicinesByGeneric

> Get medicines containing the generic


```javascript
function getMedicinesByGeneric(page, size, exclusive, genericId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |
| exclusive |  ``` Required ```  | TODO: Add a parameter description |
| genericId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var page = 227;
    var size = 227;
    var exclusive = true;
    var genericId = generic_id;

    controller.getMedicinesByGeneric(page, size, exclusive, genericId, function(error, response, context) {

    
	});
```



#### <a name="get_all_generics"></a>![Method: ](https://apidocs.io/img/method.png ".GenericsController.getAllGenerics") getAllGenerics

> All generics


```javascript
function getAllGenerics(page, size, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var page = 227;
    var size = 227;

    controller.getAllGenerics(page, size, function(error, response, context) {

    
	});
```



#### <a name="search_generics"></a>![Method: ](https://apidocs.io/img/method.png ".GenericsController.searchGenerics") searchGenerics

> Search a generic by name


```javascript
function searchGenerics(genericQuery, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| genericQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var genericQuery = generic_query;

    controller.searchGenerics(genericQuery, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="food_controller"></a>![Class: ](https://apidocs.io/img/class.png ".FoodController") FoodController

#### Get singleton instance

The singleton instance of the ``` FoodController ``` class can be accessed from the API Client.

```javascript
var controller = lib.FoodController;
```

#### <a name="search_food_restaurants"></a>![Method: ](https://apidocs.io/img/method.png ".FoodController.searchFoodRestaurants") searchFoodRestaurants

> TODO: Add Description


```javascript
function searchFoodRestaurants(foodRestaurantQuery, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| foodRestaurantQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var foodRestaurantQuery = food_restaurant_query;

    controller.searchFoodRestaurants(foodRestaurantQuery, function(error, response, context) {

    
	});
```



#### <a name="get_all_food_brands"></a>![Method: ](https://apidocs.io/img/method.png ".FoodController.getAllFoodBrands") getAllFoodBrands

> TODO: Add Description


```javascript
function getAllFoodBrands(page, size, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var page = 1;
    var size = 10;

    controller.getAllFoodBrands(page, size, function(error, response, context) {

    
	});
```



#### <a name="get_food_items_by_restaurant"></a>![Method: ](https://apidocs.io/img/method.png ".FoodController.getFoodItemsByRestaurant") getFoodItemsByRestaurant

> TODO: Add Description


```javascript
function getFoodItemsByRestaurant(page, size, foodRestaurantId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |
| foodRestaurantId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var page = 227;
    var size = 227;
    var foodRestaurantId = food_restaurant_id;

    controller.getFoodItemsByRestaurant(page, size, foodRestaurantId, function(error, response, context) {

    
	});
```



#### <a name="search_food_brands"></a>![Method: ](https://apidocs.io/img/method.png ".FoodController.searchFoodBrands") searchFoodBrands

> TODO: Add Description


```javascript
function searchFoodBrands(foodBrandQuery, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| foodBrandQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var foodBrandQuery = food_brand_query;

    controller.searchFoodBrands(foodBrandQuery, function(error, response, context) {

    
	});
```



#### <a name="get_food_item"></a>![Method: ](https://apidocs.io/img/method.png ".FoodController.getFoodItem") getFoodItem

> TODO: Add Description


```javascript
function getFoodItem(foodItemId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| foodItemId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var foodItemId = food_item_id;

    controller.getFoodItem(foodItemId, function(error, response, context) {

    
	});
```



#### <a name="get_all_food_items"></a>![Method: ](https://apidocs.io/img/method.png ".FoodController.getAllFoodItems") getAllFoodItems

> TODO: Add Description


```javascript
function getAllFoodItems(page, size, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var page = 227;
    var size = 227;

    controller.getAllFoodItems(page, size, function(error, response, context) {

    
	});
```



#### <a name="search_food_items"></a>![Method: ](https://apidocs.io/img/method.png ".FoodController.searchFoodItems") searchFoodItems

> TODO: Add Description


```javascript
function searchFoodItems(foodItemQuery, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| foodItemQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var foodItemQuery = food_item_query;

    controller.searchFoodItems(foodItemQuery, function(error, response, context) {

    
	});
```



#### <a name="get_all_food_restaurants"></a>![Method: ](https://apidocs.io/img/method.png ".FoodController.getAllFoodRestaurants") getAllFoodRestaurants

> TODO: Add Description


```javascript
function getAllFoodRestaurants(page, size, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var page = 1;
    var size = 10;

    controller.getAllFoodRestaurants(page, size, function(error, response, context) {

    
	});
```



#### <a name="get_food_items_by_brand"></a>![Method: ](https://apidocs.io/img/method.png ".FoodController.getFoodItemsByBrand") getFoodItemsByBrand

> TODO: Add Description


```javascript
function getFoodItemsByBrand(page, size, foodBrandId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |
| foodBrandId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var page = 227;
    var size = 227;
    var foodBrandId = food_brand_id;

    controller.getFoodItemsByBrand(page, size, foodBrandId, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="exercises_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ExercisesController") ExercisesController

#### Get singleton instance

The singleton instance of the ``` ExercisesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ExercisesController;
```

#### <a name="get_exercise"></a>![Method: ](https://apidocs.io/img/method.png ".ExercisesController.getExercise") getExercise

> TODO: Add Description


```javascript
function getExercise(exerciseId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| exerciseId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var exerciseId = exercise_id;

    controller.getExercise(exerciseId, function(error, response, context) {

    
	});
```



#### <a name="get_all_exercises"></a>![Method: ](https://apidocs.io/img/method.png ".ExercisesController.getAllExercises") getAllExercises

> TODO: Add Description


```javascript
function getAllExercises(page, size, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var page = 1;
    var size = 10;

    controller.getAllExercises(page, size, function(error, response, context) {

    
	});
```



#### <a name="search_exercises"></a>![Method: ](https://apidocs.io/img/method.png ".ExercisesController.searchExercises") searchExercises

> TODO: Add Description


```javascript
function searchExercises(exerciseQuery, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| exerciseQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var exerciseQuery = exercise_query;

    controller.searchExercises(exerciseQuery, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="drug_interactions_controller"></a>![Class: ](https://apidocs.io/img/class.png ".DrugInteractionsController") DrugInteractionsController

#### Get singleton instance

The singleton instance of the ``` DrugInteractionsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.DrugInteractionsController;
```

#### <a name="get_generics_interactions"></a>![Method: ](https://apidocs.io/img/method.png ".DrugInteractionsController.getGenericsInteractions") getGenericsInteractions

> TODO: Add Description


```javascript
function getGenericsInteractions(genericId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| genericId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var genericId = generic_id;

    controller.getGenericsInteractions(genericId, function(error, response, context) {

    
	});
```



#### <a name="get_medicine_interactions"></a>![Method: ](https://apidocs.io/img/method.png ".DrugInteractionsController.getMedicineInteractions") getMedicineInteractions

> TODO: Add Description


```javascript
function getMedicineInteractions(medicineId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| medicineId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var medicineId = medicine_id;

    controller.getMedicineInteractions(medicineId, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="diseases_controller"></a>![Class: ](https://apidocs.io/img/class.png ".DiseasesController") DiseasesController

#### Get singleton instance

The singleton instance of the ``` DiseasesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.DiseasesController;
```

#### <a name="get_disease"></a>![Method: ](https://apidocs.io/img/method.png ".DiseasesController.getDisease") getDisease

> TODO: Add Description


```javascript
function getDisease(diseaseId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| diseaseId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var diseaseId = disease_id;

    controller.getDisease(diseaseId, function(error, response, context) {

    
	});
```



#### <a name="get_all_diseases"></a>![Method: ](https://apidocs.io/img/method.png ".DiseasesController.getAllDiseases") getAllDiseases

> TODO: Add Description


```javascript
function getAllDiseases(page, size, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| size |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var page = 1;
    var size = 10;

    controller.getAllDiseases(page, size, function(error, response, context) {

    
	});
```



#### <a name="search_diseases"></a>![Method: ](https://apidocs.io/img/method.png ".DiseasesController.searchDiseases") searchDiseases

> TODO: Add Description


```javascript
function searchDiseases(diseaseQuery, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| diseaseQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var diseaseQuery = disease_query;

    controller.searchDiseases(diseaseQuery, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="chat_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ChatController") ChatController

#### Get singleton instance

The singleton instance of the ``` ChatController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ChatController;
```

#### <a name="get_excercises_chat"></a>![Method: ](https://apidocs.io/img/method.png ".ChatController.getExcercisesChat") getExcercisesChat

> TODO: Add Description


```javascript
function getExcercisesChat(callback)
```

#### Example Usage

```javascript


    controller.getExcercisesChat(function(error, response, context) {

    
	});
```



#### <a name="get_food_items_chat"></a>![Method: ](https://apidocs.io/img/method.png ".ChatController.getFoodItemsChat") getFoodItemsChat

> TODO: Add Description


```javascript
function getFoodItemsChat(callback)
```

#### Example Usage

```javascript


    controller.getFoodItemsChat(function(error, response, context) {

    
	});
```



#### <a name="get_medicine_chat"></a>![Method: ](https://apidocs.io/img/method.png ".ChatController.getMedicineChat") getMedicineChat

> TODO: Add Description


```javascript
function getMedicineChat(callback)
```

#### Example Usage

```javascript


    controller.getMedicineChat(function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="autocomplete_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AutocompleteController") AutocompleteController

#### Get singleton instance

The singleton instance of the ``` AutocompleteController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AutocompleteController;
```

#### <a name="get_exercises"></a>![Method: ](https://apidocs.io/img/method.png ".AutocompleteController.getExercises") getExercises

> TODO: Add Description


```javascript
function getExercises(exerciseQuery, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| exerciseQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var exerciseQuery = exercise_query;

    controller.getExercises(exerciseQuery, function(error, response, context) {

    
	});
```



#### <a name="get_diseases"></a>![Method: ](https://apidocs.io/img/method.png ".AutocompleteController.getDiseases") getDiseases

> TODO: Add Description


```javascript
function getDiseases(diseaseQuery, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| diseaseQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var diseaseQuery = disease_query;

    controller.getDiseases(diseaseQuery, function(error, response, context) {

    
	});
```



#### <a name="get_lab_tests"></a>![Method: ](https://apidocs.io/img/method.png ".AutocompleteController.getLabTests") getLabTests

> TODO: Add Description


```javascript
function getLabTests(labTestQuery, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| labTestQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var labTestQuery = lab_test_query;

    controller.getLabTests(labTestQuery, function(error, response, context) {

    
	});
```



#### <a name="get_food_items"></a>![Method: ](https://apidocs.io/img/method.png ".AutocompleteController.getFoodItems") getFoodItems

> TODO: Add Description


```javascript
function getFoodItems(foodItemQuery, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| foodItemQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var foodItemQuery = food_item_query;

    controller.getFoodItems(foodItemQuery, function(error, response, context) {

    
	});
```



#### <a name="get_generics"></a>![Method: ](https://apidocs.io/img/method.png ".AutocompleteController.getGenerics") getGenerics

> TODO: Add Description


```javascript
function getGenerics(genericQuery, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| genericQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var genericQuery = generic_query;

    controller.getGenerics(genericQuery, function(error, response, context) {

    
	});
```



#### <a name="get_medicines"></a>![Method: ](https://apidocs.io/img/method.png ".AutocompleteController.getMedicines") getMedicines

> TODO: Add Description


```javascript
function getMedicines(medicineQuery, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| medicineQuery |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var medicineQuery = medicine_query;

    controller.getMedicines(medicineQuery, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

### <a name="authentication_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AuthenticationController") AuthenticationController

#### Get singleton instance

The singleton instance of the ``` AuthenticationController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AuthenticationController;
```

#### <a name="create_request_access_token"></a>![Method: ](https://apidocs.io/img/method.png ".AuthenticationController.createRequestAccessToken") createRequestAccessToken

> *Tags:*  ``` Skips Authentication ``` 

> TODO: Add Description


```javascript
function createRequestAccessToken(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new RequestAccessTokenRequest({
  "grant_type": "client_credentials",
  "client_id": "{{client_id}}",
  "client_secret": "{{client_secret}}",
  "scope": "public read write"
});

    controller.createRequestAccessToken(body, function(error, response, context) {

    
	});
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized |




[Back to List of Controllers](#list_of_controllers)



