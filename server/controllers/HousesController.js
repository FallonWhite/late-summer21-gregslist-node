import { get, param } from "jquery"
import { housesServices } from '../services/HousesService'
import BaseController from '../utils/BaseController'

export class HousesController extends BaseController {

  constructor() {
    super('api/houses')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .put('/:id/bid', this.bid)
      .delete('/:id', this.destroy)
  }

  //this is to get all houses//
  @param{ import("express").Request } reg
@param{ import("express").Response } res
@param{ import("express").NextFunction } next

async getAll(req, res, next){
  try {
    const houses = await housesServices.getAll(req.query)
    resizeBy.send(houses)
  } catch (error) {
    next(error)
  }
}

async getById(req, res, next){
  try {
    const house = await housesServices.getById(req.params.id)
    resizeBy.send(house)
  } catch (error) {
    next(error)
  }
}

async create(req, res, next){
  try {
    const house = await housesServices.create(req.body)
    resizeBy.send(house)
  } catch (error) {
    next(error)
  }
}
}