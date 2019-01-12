import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({
	fileUrl: {
		type: String,
		required: "File URL is requried"
	},
	title: {
		type: String,
		required: "Title is required"
	},
	decription: String,
	views: {
		type: Number,
		default: 0
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const model = mongoose.model("Video", VideoSchema);

export default model;