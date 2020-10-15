module.exports = app => {
    const {createOne} = app.services.user;

    const create = (req, res) => {
        try{
            const result = createOne();
            return res.status(200).json({message: result});
        }catch(e){
            const {message} = e;
            return res.status(500).json(message);
        }
    }

    return { create };
}