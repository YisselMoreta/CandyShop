const router = require( 'express' ).Router();
const productoModel = require( '../models/producto' );
const upload=require('../config/multer');
/* GET users listing. */
router.get( '/', ( req, res, next ) => {
    productoModel.find( {} )
        .then( productos => res.send( productos) )
        .catch( error => res.status( 500 ).send( error ) )
} );
router.get( '/:id', ( req, res, next ) => {
    productoModel.findOne( { _id: req.params.id } )
        .then( producto => res.send( producto ) )
        .catch( error => res.status( 500 ).send( error ) )
} );
router.post( '/',upload.single('image'), ( req, res ) => {
    new productoModel( {...req.body,imagenPath:req.file.filename} ).save()
        .then( producto => res.status( 201 ).send( producto ) )
        .catch( error => res.status( 500 ).send( error ) )
} )
router.patch( '/:id', ( req, res ) => {
    productoModel.findByIdAndUpdate( req.params.id, req.body, { new: true } )
        .then( producto => res.send( producto ) )
        .catch( error => res.status( 500 ).send( error ) )
} )
router.delete( '/:id', ( req, res ) => {
    productoModel.findByIdAndDelete(  req.params.id )
        .then( producto => res.send( producto ) )
        .catch( error => res.status( 500 ).send( error ) )
} )
module.exports = router;

