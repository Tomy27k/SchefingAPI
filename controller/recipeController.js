const Recipe= require('../Models/Recipes')


const recipeShow=(req,res)=>{
    const recipes = Recipe.find('', (err,data)=>{
        console.log(data)

    })
}
const recipeCreate=(req,res)=>{
    const create = new Recipe(req.body)
    create.save((err,data)=>{
        console.log(err + 'recipeCreate')
        res.json(data)
    })
}
const recipeUpdate=(req,res)=>{
    Recipe.find('',(err,data)=>{
        console.log(err+'recipeUpdate')
        res.json(data)

    })
}
const recipeDelete=(req,res)=>{
    Recipe.find(`${req.query.id}`)
}

















module.exports = {
    recipeShow,
    recipeCreate,
    recipeUpdate,
    recipeDelete
}
