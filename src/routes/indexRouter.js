import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.get('/home', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

export default router;
