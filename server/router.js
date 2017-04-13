import express from 'express';
import googleFinance from 'google-finance';

const router = express.Router();
router.get('/api', (req, res) => {
  const { symbols, to, from } = req.query;
  const symbolArray = symbols.split(',');
  googleFinance.historical({
    symbols: symbolArray,
    from,
    to
  }).then((data)=> {
    res.send(data);
  });
});

export default router;
