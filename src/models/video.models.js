import mongoose, {Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const VideoSchema = new Schema({
    videoFile : {
        type : String,// cloudinary URL
        required : true
    },
    thumbnail : {
        type : String,// cloudinary URL
        required : true
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    duration : {
        type : Number,// cloudinary URL
        required : true
    },
    views : {
        type : Number,
        default : 0
    },
    isPublished : {
        type : Boolean,
        default : true
    },
    isPublished : {
        type : Boolean,
        default : true
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
},{timestamps : true})

VideoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",VideoSchema)