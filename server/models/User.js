//kenan
const { Schema, model } = require('mongoose')
const bcrypt = require ('bcrypt')

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
          password: {
            type: String,
            required: true,
            minlength: 5
          },
          characters: [{
            type: Schema.ObjectId,
            ref: "Character"
          }],
    },
    {
    toJSON: {
      virtuals: true
    }
  }
);

UserSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.virtual('characterCount').get(function() {
  return this.friends.length;
});

let User = model("User", UserSchema)
module.exports = User