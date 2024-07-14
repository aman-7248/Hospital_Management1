import express from "express";
import {
  addNewAdmin,
    login,
  patientRegister,
  getAllDoctors,
  getUserDetails,
  logoutPatient,
  logoutAdmin
} from "../controller/userController.js";
import { isAdminAuthenticated ,isPatientAuthenticated} from "../middlewares/auth.js";


const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addnew", isAdminAuthenticated,addNewAdmin);
router.get("/doctors", getAllDoctors);
router.get("/patient/me", isPatientAuthenticated, getUserDetails);
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);
export default router;

