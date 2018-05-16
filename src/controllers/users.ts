'use strict';

import {
  create,
  getMany,
  getOne,
  update,
  deleteOne
} from '../db/dbOps';



export async function createUser(req, res, next): Promise<void> {
  
  try {

    console.log('body =', req.swagger.params.value);
    const r = await create('users', req.swagger.params.value);
    res
      .status(200)
      .type('application/json')
      .json(r.ops)
      .end()

  } catch(e) {

    // logger
    res
      .status(404)
      .type('application/json')
      .json(e)
      .end()

  }

}


export async function listAllUsers (req, res, next): Promise<void> {

  try {

    const docs: any[] = await getMany('users', {}, {}, {})
//    const body: any = [ {_id: 'asd', username: 'a', first_name: 'b', last_name: 'c' } ];
    res
      .status(200)
      .type('application/json')
      .json(docs)
      .end();

  } catch(e) {

    //logger
    res
      .status(404)
      .type('application/json')
      .json(e)
      .end();

  }

  next();
}