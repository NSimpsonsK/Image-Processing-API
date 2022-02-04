import express from 'express';
import validateurl from './../../utilities/validurl';
import imageutil from './../../utilities/imageutil';
const images = express.Router();

images.get('/', (req, res) => {
    console.log(req.query);
    try {
        const test = validateurl.validate(req.query.path,req.query.width,req.query.height);
        console.log(test);
        console.log(imageutil.filePresent(test[0]));
        res.send("All Parameters Valid");
    } catch (error) {
        const result = (error as Error).message;
        res.send(result);
    }
});

export default images;
