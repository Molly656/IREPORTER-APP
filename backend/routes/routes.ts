import express from 'express';
import authController from '../Controllers/authController';
import redFlagsController from '../Controllers/redFlagsController';
import interventionsController from '../Controllers/interventionsController';
import auth from '../middleware/auth';
import upload from '../config/multer';
import cors from 'cors';

const router = express.Router();

// Public auth routes
router.post('/auth/signup', authController.signup);
router.post('/auth/login', authController.login);


router .use(cors({
  origin: 'http://localhost:3001', // or whatever port your frontend is running on
  credentials: true, // if you are using cookies or authentication headers
}));

// Protected user routes
router.get('/auth/profile', auth.verifyToken, authController.getProfile);

// Red-flag routes with file upload support
router.get('/red-flags', auth.verifyToken, redFlagsController.getAllRedFlags);
router.get('/red-flags/:id', auth.verifyToken, redFlagsController.getRedFlag);
router.post('/red-flags', auth.verifyToken, upload.array('media', 10), redFlagsController.createRedFlag);
router.patch('/red-flags/:id/location', auth.verifyToken, auth.checkRecordOwnership('red_flags'), redFlagsController.updateLocation);
router.patch('/red-flags/:id/comment', auth.verifyToken, auth.checkRecordOwnership('red_flags'), redFlagsController.updateComment);
router.post('/red-flags/:id/media', auth.verifyToken, auth.checkRecordOwnership('red_flags'), upload.array('media', 10), redFlagsController.addMedia);
router.delete('/red-flags/:id', auth.verifyToken, auth.checkRecordOwnership('red_flags'), redFlagsController.deleteRedFlag);
router.patch('/red-flags/:id/status', auth.verifyToken, auth.isAdmin, redFlagsController.updateStatus);

// Intervention routes with file upload support
router.get('/interventions', auth.verifyToken, interventionsController.getAllInterventions);
router.get('/interventions/:id', auth.verifyToken, interventionsController.getIntervention);
router.post('/interventions', auth.verifyToken, upload.array('media', 10), interventionsController.createIntervention);
router.patch('/interventions/:id/location', auth.verifyToken, auth.checkRecordOwnership('interventions'), interventionsController.updateLocation);
router.patch('/interventions/:id/comment', auth.verifyToken, auth.checkRecordOwnership('interventions'), interventionsController.updateComment);
router.post('/interventions/:id/media', auth.verifyToken, auth.checkRecordOwnership('interventions'), upload.array('media', 10), interventionsController.addMedia);
router.delete('/interventions/:id', auth.verifyToken, auth.checkRecordOwnership('interventions'), interventionsController.deleteIntervention);
router.patch('/interventions/:id/status', auth.verifyToken, auth.isAdmin, interventionsController.updateStatus);

export default router;