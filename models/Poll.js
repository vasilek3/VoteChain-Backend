import mongoose from 'mongoose';

const pollSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 80,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 300,
  },
  options: [{
    optionText: {
      type: String,
      required: true,
      maxlength: 100,
    },
    optionId: {  // додатковий унікальний ID для кожної опції
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    voteCount: {
      type: Number,
      default: 0,
      required: true,
    },
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  endTime: {
    type: Date,
    required: true,
  },
  isClosed: {
    type: Boolean,
    default: false,
    required: true,
  },
  contractAddress: {
    type: String,
    required: true,
    unique: true,
  },
  views: {
    type: Number,
    default: 0, 
  },
  complains:{
    type: Number,
    default: 0,
  },
  winner: {  
    type: String,
    default: null,  
  },

});

const Poll = mongoose.model('Poll', pollSchema);

export default Poll;
