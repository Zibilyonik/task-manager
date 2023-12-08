import { Router } from 'express';
import { fileURLToPath } from 'url';
const router = Router();

router.route('/').get((req, res) => {
    res.send('all tasks, you\'re in ' + fileURLToPath(import.meta.url));
});

export default router;