export const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.autorization;
    if(!authHeader){
        res.status(401).json({message: 'Unauthorized'})
    }
    next();
};
//Проверка, авторизован ли пользователь