const router = require('express').Router()
const ctrls = require('../controllers/user')
const {verifyAccessToken, isAdmin} = require('../middlewares/verifyToken')

router.post('/login',ctrls.login)
router.post('/register', ctrls.register)
router.post('/refreshtoken',ctrls.refreshAccessToken)
router.get('/logout',ctrls.logout)
router.get('/current',verifyAccessToken,ctrls.getCurrent)
router.get('/forgotpassword', ctrls.forgotPassword)
router.put('/resetpassword', ctrls.resetPassword)
router.get('/',[ verifyAccessToken, isAdmin ],ctrls.getUsers)
router.delete('/',[ verifyAccessToken, isAdmin ], ctrls.deleteUser)
router.put('/current',verifyAccessToken, ctrls.updateUser)
router.put('/:uid',[ verifyAccessToken, isAdmin ], ctrls.updateUserByAdmin)
module.exports = router

// CRUD | Create - Read - Update - Delete | POST - GET - UPDATE - DELETE