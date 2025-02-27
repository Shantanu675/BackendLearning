import { asyncHandler} from "../utils/asyncHandeler";

const registerUser = asyncHandler( async(req, res) => {
    res.status(200).json({
        message: "ok"
    })
})

export {registerUser} 