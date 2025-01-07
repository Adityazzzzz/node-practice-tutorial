const PRODUCT = require('../models/product')


const getallproductstatic= async(req,res)=>{
    const products= await PRODUCT.find({price:{$gt:30}})
        .sort()
        .select('name price')

    res.status(200).json({products})  
}




const getallproducts = async (req, res) => {
    const {featured,company,name,sort,fields,numericFilters} =req.query;
    
    let queryobj ={};

    if (featured)   queryobj.featured = featured === 'true'? true: false;
    if(company)  queryobj.company= company
    if(name)  queryobj.name={ $regex:name, $options: 'i'}
    if(numericFilters) {
        const operatorMap={
          '>': '$gt',
          '>=': '$gte',
          '=': '$eq',
          '<': '$lt',
          '<=': '$lte',
        };
        const regEx = /\b(<|>|>=|=|<|<=)\b/g;
        let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-` );

        const options = ['price', 'rating'];
        filters = filters.split(',').forEach((item) => {
          const [field, operator, value] = item.split('-');
          if (options.includes(field)) {
            queryobj[field] = { [operator]: Number(value) };
          }
        });
    }

    let result = await PRODUCT.find(queryobj);
    if(sort){
        const shortlist= sort.split(',').join(' ');
        result=result.sort(shortlist);
    }
    else  result=result.sort('createdAt');
    
    if(fields){
        const fieldslist= fields.split(',').join(' ');
        result=result.select(fieldslist);
    }
    const page =Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip= (page-1)*limit;

    result=result.skip(skip).limit(limit)
    const products=result;
    res.status(200).json({ products });
};


module.exports={getallproductstatic,getallproducts}


