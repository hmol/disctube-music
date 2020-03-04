import { Response, Request } from 'express';
const request = require('request');


class discogsController {

    getDiscogsUser = async (req: Request, res: Response) => {
        let discogsUrl: string = 'https://api.discogs.com/users/' + req.params.username + '/collection/folders/0/releases';
        const options = {
            url: discogsUrl,
            json: true,
            headers: {
              'User-Agent': 'FooBarApp/3.0'
            }
          };

        request(options, (discogsErr, discogsRes, discogsBody) => {
            if (discogsErr) { res.status(400).json(res); }
            res.status(200).json(discogsRes);
        });
    }
}


export default new discogsController();