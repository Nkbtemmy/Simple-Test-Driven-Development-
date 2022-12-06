import express from 'express';
import BookRouters from './bookRouter';

let router = express();

router.use(BookRouters)
      .use('*', (req, res) => {
        return res.status(404).json({
            status:404,
            message:"we don't have endpoint look like this in our system"
        })
    });

export default router;