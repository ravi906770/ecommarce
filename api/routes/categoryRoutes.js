import express from "express"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { categoryControlller, createCategoryController, deleteCategoryCOntroller, singleCategoryController, updateCategoryController } from "../controllers/createCategoryController.js";

const router = express.Router();


router.post("/create-category" , requireSignIn , isAdmin , createCategoryController)

//update category
router.put(
    "/update-category/:id",
    requireSignIn,
    isAdmin,
    updateCategoryController
  );
  
  //getALl category
  router.get("/get-category",  categoryControlller);
  
  //single category
  router.get("/single-category/:slug", singleCategoryController);
  
  //delete category
  router.delete(
    "/delete-category/:id",
    requireSignIn,
    isAdmin,
    deleteCategoryCOntroller
  );





export default router