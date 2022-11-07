const express=require("express");
const { registroUsuario, 
    loginUser, 
    logOut, 
    forgotPassword, 
    resetPassword, 
    getUserProfile, 
    updatePassword,
    updateProfile,
    getAllUsers,
    getUserDetails,
    updateUser,
    deleteUser
} = require("../controllers/authController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router= express.Router();


router.route('/usuario/registro').post(registroUsuario)
router.route('/login').get(loginUser)
router.route('/logout').get(isAuthenticatedUser, logOut)
router.route("/forgotPassword").post(forgotPassword)
router.route('/resetPassword/:token').post(resetPassword)
router.route('/logueado').get(isAuthenticatedUser, getUserProfile)
router.route('/logueado/updatePassword').put(isAuthenticatedUser, updatePassword)
router.route('/logueado/updateProfile').put(isAuthenticatedUser, updateProfile)
router.route("/admin/deleteUser/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser)

//rutas admin
router.route('/admin/allUsers').get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers)
router.route('/admin/user/:id').get(isAuthenticatedUser, authorizeRoles("admin"), getUserDetails)
router.route('/admin/updateUser/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateUser)

module.exports= router